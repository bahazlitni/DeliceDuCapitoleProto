'use client'
import { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/ui/button.css";
import styles from "./styles.module.css";

import { CarouselImage } from "@/types";

export interface CarouselProps {
  images: CarouselImage[];
  /** auto-advance slides */
  autoplay?: boolean;
  /** ms between slides when autoplay is on */
  interval?: number;
  /** loop around when reaching ends */
  loop?: boolean;
  /** show dot indicators */
  indicators?: boolean;
  /** show prev/next arrows */
  arrows?: boolean;
  /** contain vs cover behavior */
  objectFit?: "cover" | "contain";
  /** rounded corners (falls back to theme radius) */
  radius?: "s" | "m" | "l" | "xl" | "none";
  /** alt text fallback if image.alt missing */
  altFallback?: string;
  ratio?: string | number;
}

export default function Carousel({
  images,
  autoplay = true,
  interval = 4500,
  loop = true,
  indicators = true,
  arrows = true,
  objectFit = "cover",
  radius = "l",
  altFallback = "Carousel image",
  ratio,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const size = images.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<number | null>(null);
  const pointer = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const go = (next: number) => {
    if (!loop) {
      const clamped = Math.max(0, Math.min(size - 1, next));
      setIndex(clamped);
    } else {
      // wrap
      const wrapped = (next + size) % size;
      setIndex(wrapped);
    }
  };

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // Autoplay (respect reduced motion)
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const enabled = autoplay && !media.matches && size > 1;

    if (!enabled) return;
    autoRef.current = window.setInterval(next, interval);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
      autoRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, interval, size, index]);

  // Pause autoplay on hover/focus
  const pause = () => {
    if (autoRef.current) {
      window.clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };
  const resume = () => {
    // restart only if autoplay intended
    if (!autoplay) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches && size > 1 && autoRef.current === null) {
      autoRef.current = window.setInterval(next, interval);
    }
  };

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  // Touch/Pointer swipe
  const onPointerDown = (e: React.PointerEvent) => {
    pointer.current = { x: e.clientX, y: e.clientY, active: true };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    pause();
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointer.current.active || !trackRef.current) return;
    const dx = e.clientX - pointer.current.x;
    trackRef.current.style.setProperty("--drag-x", `${dx}px`);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!trackRef.current) return;
    const dx = e.clientX - pointer.current.x;
    pointer.current.active = false;
    trackRef.current.style.removeProperty("--drag-x");
    const threshold = Math.min(180, Math.max(60, trackRef.current.clientWidth * 0.12));
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    resume();
  };

  const radiusClass = useMemo(() => {
    switch (radius) {
      case "s":
        return styles.roundS;
      case "m":
        return styles.roundM;
      case "l":
        return styles.roundL;
      case "xl":
        return styles.roundXL;
      case "none":
        return styles.roundNone;
      default:
        return styles.roundL;
    }
  }, [radius]);

  const containerStyle = useMemo<React.CSSProperties>(() => {
    if (ratio == null) return {};
    const ar = typeof ratio === "number" ? String(ratio) : ratio; // css accepts number or "w / h"
    return {
      aspectRatio: ar,
      height: "auto", // override module's height rule
    };
  }, [ratio]);

  return (
    <section
      className={`${styles.carousel} ${radiusClass}`}
      aria-roledescription="carousel"
      aria-label="Image carousel"
      onKeyDown={onKeyDown}
      onMouseEnter={pause}
      onMouseLeave={resume}
      style={containerStyle} // <= NEW
    >
      <div className={styles.viewport} role="group" aria-live="polite" aria-atomic="true">
        <div
          ref={trackRef}
          className={`${styles.track} ${styles[objectFit]}`}
          style={{ transform: `translateX(calc(${index * -100}% + var(--drag-x, 0px)))` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {images.map((img, i) => (
            <figure key={img.src + i} className={styles.slide} aria-hidden={i !== index}>
              <img
                src={img.src}
                alt={img.alt || `${altFallback} ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
              {(img.title || img.caption) && (
                <figcaption className={styles.caption}>
                  {img.title && <strong className={styles.captionTitle}>{img.title}</strong>}
                  {img.caption && <span className={styles.captionText}>{img.caption}</span>}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {arrows && images.length > 1 && (
          <>
            <button
              className={`button circle secondary ${styles.arrow} ${styles.prev}`}
              aria-label="Previous slide"
              onClick={prev}
              type="button"
            >
              ‹
            </button>
            <button
              className={`button circle secondary ${styles.arrow} ${styles.next}`}
              aria-label="Next slide"
              onClick={next}
              type="button"
            >
              ›
            </button>
          </>
        )}

        {indicators && images.length > 1 && (
          <div className={styles.dots} role="tablist" aria-label="Carousel pagination">
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => go(i)}
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
