"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { MENU } from "@/data/menus";
import "@/styles/ui/cards.css";
import { MenuQr } from "@/components/MenuQr";
import styles from "./styles.module.css"


export function MenuCategoriesSection() {
  return (
    <section>
      <div className="container stack">
        <header className={styles.header}>
          <MenuQr />
          <div className="stack">
            <h2>Nos Menus</h2>
            <p className="lead">Découvrez nos catégories et trouvez votre bonheur.</p>
          </div>
        </header>

        <div className="menu-grid big">
          {MENU.categories.map((cat, idx) => {
            const controls = useAnimation();
            return (
              <motion.div
                key={cat.category}
                className="menu-cat-card card hoverable"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                onHoverStart={() => controls.start("hover")}
                onHoverEnd={() => controls.start("rest")}
              >
                <Link href={`/menus#${cat.category}`} className="menu-cat-link">
                  <motion.div
                    className="menu-cat-inner"
                    initial="rest"
                    animate={controls}
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.02 },
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  >
                    <div className="menu-cat-thumb">

                      <img
                        src={cat.imageSrc} 
                        alt={cat.title}
                        className="menu-cat-img"
                        loading="lazy"
                      />
                    </div>

                    <motion.div
                      className="menu-cat-body"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -4 },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <h3 className="emph-serif">{cat.title}</h3>

                      {/* Shared text container */}
                      <div className="menu-cat-text-wrapper">
                        <motion.p
                          className="menu-cat-desc"
                          variants={{
                            rest: { opacity: 1, y: 0 },
                            hover: { opacity: 0, y: -6 },
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          X menus disponibles
                        </motion.p>

                        <motion.p
                          className="menu-cat-hover-desc"
                          variants={{
                            rest: { opacity: 0, y: 6 },
                            hover: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          {cat.markettingSubtitle}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
