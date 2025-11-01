"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.css";

export function AppPromoSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* Text Side */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>
            📱 Soyez informé de{" "}
            <span className="text-accent">Nos Promos</span>
            <br />
            et passez votre commande directement avec votre{" "}
            <span className="text-accent">Smartphone</span>
          </h2>

          <p className="lead">
            Téléchargez notre application et commandez vos plats préférés en quelques clics !
          </p>

          <div className={`cluster ${styles.buttons}`}>
            <a href="#" className={styles.storeBadge} aria-label="Téléchargez sur l’App Store">
                <img src="/svg/apple-logo.svg" alt="" className={styles.storeIcon} />
                <span className={styles.storeText}>
                <span className={styles.storeTop}>Téléchargez sur</span>
                <span className={styles.storeBottom}>l’App Store</span>
                </span>
            </a>

            <a href="#" className={`${styles.storeBadge} ${styles.google}`} aria-label="Téléchargez sur Google Play">
                <img src="/svg/play-store-logo.svg" alt="" className={styles.storeIcon} />
                <span className={styles.storeText}>
                <span className={styles.storeTop}>Téléchargez sur</span>
                <span className={styles.storeBottom}>Google Play</span>
                </span>
            </a>
        </div>

        </motion.div>

        {/* Image Side */}
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className={styles.phoneWrapper}>
            <Image
              src="/images/app-promo-section/mobile.png"
              alt="Aperçu de l’application mobile"
              width={360}
              height={720}
              priority
              className={styles.phoneImg}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
