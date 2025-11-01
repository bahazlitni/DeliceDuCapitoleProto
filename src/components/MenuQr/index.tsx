"use client";
import Image from "next/image";
import styles from "./styles.module.css";

export function MenuQr({withDownloadButton}: {withDownloadButton?: boolean}) {
  return (
      <div className={styles.inner}>
          <div className={styles.qrWrap}>
            <Image
              src="/images/menu-qr.png"
              alt="QR Code du menu"
              width={120}
              height={120}
              className={styles.qr}
            />
          </div>

          {withDownloadButton && <a
            href="/images/carte.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button m"
          >
            Télécharger la carte
          </a>}
    </div>
  );
}
