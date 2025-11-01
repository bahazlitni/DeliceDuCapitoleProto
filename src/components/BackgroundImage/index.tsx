import styles from "./styles.module.css";
import { memo, useMemo } from "react";

export interface BackgroundImageProps {
  src: string;
  alt?: string;
  /** fixed aspect ratio (e.g. "16 / 9" or 1.5). omit to fill parent height */
  ratio?: number | string;
  /** "cover" (default) or "contain" */
  fit?: "cover" | "contain";
  className?: string;
  /** set true for above-the-fold image */
  priority?: boolean;
}

function BackgroundImage({
  src,
  alt = "",
  ratio,
  fit = "cover",
  className,
  priority = false,
}: BackgroundImageProps) {
  const style = useMemo<React.CSSProperties>(() => {
    if (ratio == null) return {};
    const ar = typeof ratio === "number" ? String(ratio) : ratio;
    return { aspectRatio: ar, height: "auto" };
  }, [ratio]);

  return (
    <figure className={[styles.bg, className].filter(Boolean).join(" ")} style={style}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className={fit === "cover" ? styles.cover : styles.contain}
      />
    </figure>
  );
}

export default memo(BackgroundImage);
