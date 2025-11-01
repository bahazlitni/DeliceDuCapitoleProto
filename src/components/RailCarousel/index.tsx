"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  PanInfo,
} from "framer-motion";
import styles from "./styles.module.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type RailCarouselProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  gap?: number;
  peekPx?: number;
  maxVisible?: number;
  minItemWidth?: number;
  overdrag?: number;
  height?: number;
};

function clamp(min: number, x: number, max: number) {
  return Math.max(min, Math.min(max, x));
}

export default function RailCarousel({
  children,
  className,
  ariaLabel = "Carrousel horizontal",
  gap = 24,
  peekPx = 64,
  maxVisible = 3,
  minItemWidth = 220,
  overdrag = 0.18,
  height=280,
}: RailCarouselProps) {

  const items = useMemo(() => React.Children.toArray(children), [children]);
  const count = items.length;

  const viewportRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLUListElement>(null);

  // Motion value for x position
  const x = useMotionValue(0);

  // Drag edges
  const [bounds, setBounds] = useState({ left: 0, right: 0 });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Drag click suppression
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const suppressClicksUntilRef = useRef(0);

  // Fixed vs auto
  const isAuto = maxVisible === 0;
  const [itemW, setItemW] = useState(minItemWidth);

  // Step distance
  const stepPx = useMemo(() => {
    if (count === 0) return 0;
    if (isAuto) {
      const rail = railRef.current;
      const vp = viewportRef.current;
      if (!rail || !vp) return 300;
      const scrollW = rail.scrollWidth - 2 * peekPx;
      const avg = scrollW / Math.max(count, 1);
      return Math.max(160, Math.floor(avg + gap));
    }
    return Math.floor(itemW + gap);
  }, [count, isAuto, itemW, gap, peekPx]);

  // Recompute bounds using real sizes
  const recompute = useCallback(() => {
    const vp = viewportRef.current;
    const rail = railRef.current;
    if (!vp || !rail) return;

    if (!isAuto) {
      const V = Math.max(1, Number(maxVisible || 1));
      const W = vp.clientWidth;
      const inner = Math.max(0, W - gap * (V - 1) - 2 * peekPx);
      const basis = Math.floor(inner / V);
      const finalW = Math.max(minItemWidth, basis);
      
      setItemW(prev => {
        if (Math.abs(prev - finalW) > 1) {
          return finalW;
        }
        return prev;
      });
    }

    requestAnimationFrame(() => {
      const viewportWidth = vp.clientWidth;
      const contentWidth = rail.scrollWidth;
      const left = Math.min(0, viewportWidth - contentWidth);
      const right = 0;

      setBounds(prev => {
        if (prev.left !== left || prev.right !== right) {
          return { left, right };
        }
        return prev;
      });

      // Clamp current position
      const currentX = x.get();
      const clamped = clamp(left, currentX, right);
      if (currentX !== clamped) {
        x.set(clamped);
      }
    });
  }, [gap, isAuto, maxVisible, minItemWidth, peekPx, x]);

  // Initial + window resize
  useLayoutEffect(() => {
    recompute();
    const onResize = () => recompute();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [recompute]);

  // Observe rail and viewport
  useLayoutEffect(() => {
    const vp = viewportRef.current;
    const rail = railRef.current;
    if (!vp || !rail) return;

    const ro = new ResizeObserver(() => recompute());
    ro.observe(vp);
    ro.observe(rail);

    return () => ro.disconnect();
  }, [recompute]);

  // Image loading
  useLayoutEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const imgs = Array.from(rail.querySelectorAll("img"));
    const handleLoad = () => recompute();
    
    imgs.forEach(img => {
      if (!img.complete) {
        img.addEventListener("load", handleLoad, { once: true });
        img.addEventListener("error", handleLoad, { once: true });
      }
    });

    if (imgs.every(img => img.complete)) {
      recompute();
    }

    return () => {
      imgs.forEach(img => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
  }, [items, recompute]);

  // Animate to position
  const animateToX = useCallback(
    (targetX: number) => {
      const clamped = clamp(bounds.left, targetX, bounds.right);
      const current = x.get();
      const distance = Math.abs(clamped - current);
      
      // Use framer-motion's animate function
      const duration = Math.min(0.8, Math.max(0.3, distance / 1000));
      
      x.stop();
      
      // Animate the motion value directly
      const animation = {
        type: "spring" as const,
        stiffness: 520,
        damping: 42,
        restDelta: 0.01,
      };
      
      x.set(current);
      
      // Use the motion value's built-in animation
      railRef.current?.style.setProperty('transform', `translateX(${current}px)`);
      
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Spring interpolation
        const springProgress = 1 - Math.pow(1 - progress, 3);
        const newX = current + (clamped - current) * springProgress;
        
        x.set(newX);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    },
    [bounds, x]
  );

  const next = useCallback(() => {
    animateToX(x.get() - stepPx);
  }, [x, animateToX, stepPx]);

  const prev = useCallback(() => {
    animateToX(x.get() + stepPx);
  }, [x, animateToX, stepPx]);

  // Edge flags
  useEffect(() => {
    const EPS = 1;
    const cur = x.get();
    setAtStart(cur >= bounds.right - EPS);
    setAtEnd(cur <= bounds.left + EPS);
  }, [bounds, x]);

  useMotionValueEvent(x, "change", cur => {
    const EPS = 1;
    setAtStart(cur >= bounds.right - EPS);
    setAtEnd(cur <= bounds.left + EPS);
  });

  // Drag lifecycle
  const onDragStart = () => {
    draggingRef.current = true;
    movedRef.current = false;
    railRef.current?.classList.add(styles.dragging);
  };
  
  const onDrag = (_: any, info: PanInfo) => {
    if (!movedRef.current && Math.abs(info.offset.x) >= 4) {
      movedRef.current = true;
    }
  };
  
  const onDragEnd = () => {
    draggingRef.current = false;
    railRef.current?.classList.remove(styles.dragging);
    if (movedRef.current) {
      suppressClicksUntilRef.current = performance.now() + 180;
      movedRef.current = false;
    }
  };
  
  useEffect(() => {
    const handler = () => {
      if (draggingRef.current) {
        onDragEnd();
      }
    };
    window.addEventListener("pointerup", handler);
    window.addEventListener("pointercancel", handler);
    return () => {
      window.removeEventListener("pointerup", handler);
      window.removeEventListener("pointercancel", handler);
    };
  }, []);
  
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onClickCapture = (e: MouseEvent) => {
      const now = performance.now();
      if (draggingRef.current || now < suppressClicksUntilRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    el.addEventListener("click", onClickCapture, true);
    return () => el.removeEventListener("click", onClickCapture, true);
  }, []);

  if (count === 0) return null;

  return (
    <div className={`${styles.viewport} ${className ?? ""}`} ref={viewportRef} aria-label={ariaLabel}>
      {!atStart && (
        <button className={`${styles.nav} ${styles.left} button m circle`} onClick={prev} aria-label="Précédent">
          <FaChevronLeft />
        </button>
      )}

      <motion.ul
        ref={railRef}
        className={styles.rail}
        style={{
          x,
          "--item-width": `${itemW}px`,
          "--min-item-width": `${minItemWidth}px`,
          "--height": `${height}px`,
          "--gap": `${gap}px`,
          "--peek": `${peekPx}px`,
          "--itemW": `${isAuto ? 0 : itemW}px`,
        } as React.CSSProperties}
        drag="x"
        dragConstraints={bounds}
        dragElastic={overdrag}
        dragMomentum={true}
        dragTransition={{
          power: 0.75,
          timeConstant: 420,
          bounceStiffness: 680,
          bounceDamping: 48,
        }}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      >
        {items.map((child, i) => (
          <li key={i} className={styles.item}>
            {child}
          </li>
        ))}
      </motion.ul>

      {!atEnd && (
        <button className={`${styles.nav} ${styles.right} button m circle`} onClick={next} aria-label="Suivant">
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}