"use client";
import React, { useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import { MENU, findByCategory, type MenuCategory as Cat, type MenuItem } from "@/data/menus";
import { bestHit, scoreFilterSort } from "@/data/score";
import { useSectionObserver } from "@/components/menus/useSectionObserver";
import { useSearchParams, useRouter } from "next/navigation";
import RailCarousel from "@/components/RailCarousel";

function useQuerySync(key = "search") {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get(key) ?? "";
  const [q, setQ] = React.useState(initial);

  React.useEffect(() => {
    const p = new URLSearchParams(Array.from(params.entries()));
    if (q) p.set(key, q);
    else p.delete(key);
    router.replace(`?${p.toString()}`, { scroll: false });
  }, [q]); // eslint-disable-line react-hooks/exhaustive-deps

  return { q, setQ };
}

export default function MenusSections({ scrollRootRef }: { scrollRootRef?: React.RefObject<HTMLDivElement> }) {
  const { q, setQ } = useQuerySync("search");

  // compute visible sections (drop empties)
  const sections = useMemo(() => {
    return MENU.categories
      .map(c => {
        const raw = findByCategory(c.category);
        const filtered = scoreFilterSort(raw, q);
        return { ...c, filtered };
      })
      .filter(s => s.filtered.length > 0);
  }, [q]);

  const { active, register, scrollTo } = useSectionObserver(sections, scrollRootRef?.current ?? undefined);

  // auto jump to most-confident match
  useEffect(() => {
    if (!q) return;
    const hit = bestHit(MENU.items, q);
    if (hit && hit.__score >= 0.9) scrollTo(hit.category);
  }, [q, scrollTo]);

  return (
    <div className={styles.shell}>
      {/* Desktop: left vertical panel */}
      <aside className={styles.sidePanel}>
          <div className={styles.searchWrap}>
            <input
              className="input"
              type="search"
              placeholder="Rechercher un plat ou un tag..."
              value={q}
              onChange={e => setQ(e.target.value)}
              aria-label="Rechercher"
            />
          </div>

          <nav className={styles.vertTabs} aria-label="Catégories">
            <ul className={styles.vertList}>
              {sections.map(s => (
                <li key={s.category}>
                  <button
                    className={`${styles.vertTab} ${active === s.category ? styles.vertTabActive : ""}`}
                    onClick={() => scrollTo(s.category)}
                  >
                    <span className={styles.vertTabTitle}>{s.title}</span>
                    <span className={styles.vertTabCount}>{s.filtered.length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
      </aside>

      <div className={styles.contentCol}>
        {/* Mobile: top sticky tabs bar with carousel */}
        <div className={`${styles.tabsBarMobile} navbar`}>
          <div className={`container ${styles.tabsInner}`}>
            <div className={styles.mobileSearch}>
              <input
                className="input"
                type="search"
                placeholder="Rechercher un plat ou un tag..."
                value={q}
                onChange={e => setQ(e.target.value)}
                aria-label="Rechercher"
              />
            </div>
            <RailCarousel
              maxVisible={0}
              minItemWidth={120}
              gap={12}
            >
              {sections.map(s => (
                <div key={s.category} className={styles.tabItem}>
                  <button
                    className={`${styles.tab} ${active === s.category ? styles.tabActive : ""}`}
                    onClick={() => scrollTo(s.category)}
                  >
                    {s.title}
                  </button>
                </div>
              ))}
            </RailCarousel>
          </div>
        </div>

        {/* Sections */}
        <main className={styles.sectionsCol}>
          {sections.map(s => (
            <section
              key={s.category}
              ref={register(s.category)}
              data-cat-id={s.category}
              className={styles.section}
            >
              <div className="container">
                <h2 className="emph-serif">{s.title}</h2>
                <ul className={styles.grid}>
                  {s.filtered.map((item: MenuItem) => (
                    <li key={item.id} className={styles.card}>
                      <div className={styles.cardTop}>
                        {item.imageSrc ? <img src={item.imageSrc} alt={item.title} /> : <div className={styles.ph} />}
                      </div>
                      <div className={styles.cardBody}>
                        <h3>{item.title}</h3>
                        {item.desc ? <p className="text-muted">{item.desc}</p> : null}
                        <div className={styles.row}>
                          <span className={styles.price}>{item.price.toFixed(2)} €</span>
                          <button className="button s tonal">Ajouter</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
