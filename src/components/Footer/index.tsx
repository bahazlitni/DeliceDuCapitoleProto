"use client";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.wrap}`}>
        {/* Link groups */}
        <nav aria-label="Liens de bas de page" className={styles.links}>
          <ul className={styles.list}>
            <li><a href="#">À Emporter</a></li>
            <li><a href="#">Charte Qualité</a></li>
            <li><a href="#">Recrutement</a></li>
            <li><a href="#">Votre Appréciation</a></li>
            <li><a href="#">Programme De Fidélité</a></li>
          </ul>

          <ul className={styles.list}>
            <li><a href="#">Mentions Légales</a></li>
            <li><a href="#">C.G.V</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Allergènes</a></li>
            <li><a href="#">Commander en ligne</a></li>
          </ul>
        </nav>

        {/* Divider */}
        <hr className={styles.hr} />

        {/* Bottom line */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2019 – Delice du Capitole – Création site web par Baha ZLITNI
          </p>
        </div>
      </div>
    </footer>
  );
}
