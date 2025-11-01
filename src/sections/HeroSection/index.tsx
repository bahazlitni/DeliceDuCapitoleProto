"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Transition, useReducedMotion } from "framer-motion";
import styles from "./styles.module.css";

/** Minimal serializable shape for background images */
type HeroImage = { src: string; alt?: string };

export default function HeroSection() {
  const [baseIndex, setBaseIndex] = useState(0);          // always visible
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null); // fades in
  const isTransitioning = useRef(false);
  const timerRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const images: HeroImage[] = [
    { src: "/images/main-carousel/hamburger-add.png", alt: "Nos Burgers" },
    { src: "/images/main-carousel/tacos-add.png", alt: "Nos Tacos" },
  ];

  const size = images.length;
  const interval = 8000;
  const title = "Au Délice du Capitole";
  const subtitle = "Votre restaurant préféré au coeur de Toulouse!";

  const queueNext = () => {
    if (size <= 1 || isTransitioning.current) return;
    isTransitioning.current = true;
    setOverlayIndex((baseIndex + 1) % size);
  };

  // autoplay
  useEffect(() => {
    if (size <= 1) return;
    timerRef.current = window.setInterval(queueNext, interval);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [size, interval, baseIndex]);

  if (!size) return null;

  const baseImg = images[baseIndex];
  const overlayImg = overlayIndex !== null ? images[overlayIndex] : null;

    const EASE_IN_OUT: NonNullable<Transition["ease"]> = [0.4, 0, 0.2, 1];

  const fadeIn: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.9, ease: EASE_IN_OUT };

  return (
    <section className={styles.hero} aria-roledescription="hero">
      <div className={styles.stage} aria-hidden="true">
        {/* Base image (always visible) */}
        <img
          src={baseImg.src}
          alt={baseImg.alt ?? ""}
          className={styles.cover}
          loading="eager"
          decoding="async"
          draggable={false}
        />

        {/* Overlay image (fades on top, then promotes to base) */}
        {overlayImg && (
          <motion.img
            key={overlayImg.src}
            src={overlayImg.src}
            alt={overlayImg.alt ?? ""}
            className={styles.cover}
            loading="eager"
            decoding="async"
            draggable={false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={fadeIn}
            onAnimationComplete={() => {
              if(overlayIndex) setBaseIndex(overlayIndex);
              setOverlayIndex(null);
              isTransitioning.current = false;
            }}
          />
        )}

        {/* Contrast overlay above both images */}
        <div className={styles.scrim} />
      </div>

      <div className={styles.content}>
        {(title || subtitle) && (
          <header className={styles.text}>
            {title ? <h1 className={styles.title}>{title}</h1> : null}
            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
          </header>
        )}

        <div className={styles.buttons}>
          <a href="/order" className="pill xl button primary">Se connecter</a>
          <a href="/menus" className="pill xl button secondary">Voir nos menus</a>
        </div>
      </div>
    </section>
  );
}
