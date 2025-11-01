// src/app/menus/useSectionObserver.ts
import { useCallback, useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/data/menus";

export function useSectionObserver(
  categories: { category: MenuCategory["category"] }[],
  rootEl?: HTMLElement | null
) {
  const [active, setActive] = useState<string>(categories[0]?.category ?? "");
  const nodes = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const register = useCallback(
    (id: string) =>
      (el: HTMLElement | null) => {
        nodes.current[id] = el;
        const obs = observerRef.current;
        if (obs && el) obs.observe(el);
      },
    []
  );

  useEffect(() => {
    const center = () =>
      (rootEl?.clientHeight ?? window.innerHeight) / 2;

    const obs = new IntersectionObserver(
      entries => {
        const mid = center();
        let best = active;
        let bestDist = Number.POSITIVE_INFINITY;

        for (const e of entries) {
          const el = e.target as HTMLElement;
          const id = el.dataset.catId || "";
          if (!id) continue;
          const rect = el.getBoundingClientRect();
          // translate to root-relative if custom root
          const rootTop = rootEl ? rootEl.getBoundingClientRect().top : 0;
          const dist = Math.abs((rect.top - rootTop) + rect.height / 2 - mid);
          if (e.isIntersecting && dist < bestDist) {
            bestDist = dist;
            best = id;
          }
        }
        if (best && best !== active) setActive(best);
      },
      {
        root: rootEl ?? null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    observerRef.current = obs;
    Object.values(nodes.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootEl]);

  const scrollTo = (catId: string) => {
    const el = nodes.current[catId];
    if (!el) return;
    if (rootEl) {
      const rootRect = rootEl.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const target =
        rootEl.scrollTop + (elRect.top - rootRect.top) - rootEl.clientHeight / 2 + el.clientHeight / 2;
      rootEl.scrollTo({ top: target, behavior: "smooth" });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return { active, register, scrollTo };
}
