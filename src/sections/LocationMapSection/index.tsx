"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import styles from "./styles.module.css";

// Dynamic map to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/MapInner"), { ssr: false });

export function LocationMapSection() {
  // centralize contact info here if you want it reusable
  const info = useMemo(() => ({
    name: "Délice du Capitole",
    address: "12 Rue du Capitole, 31000 Toulouse",
    phone: "+33 5 61 00 00 00",
    hours: "Tous les jours: 11:00 – 23:00",
    lat: 43.6045, lng: 1.4440
  }), []);

  return (
    <section>
      <div className={`container ${styles.grid}`}>
        <div className={styles.card}>
          <h2>Où nous trouver</h2>
          <p className="lead">Passez nous voir au cœur de Toulouse.</p>

          <div className={styles.details}>
            <div>
              <strong>Adresse</strong><br />
              {info.address}
            </div>
            <div>
              <strong>Téléphone</strong><br />
              <a href={`tel:${info.phone.replace(/\s+/g,"")}`}>{info.phone}</a>
            </div>
            <div>
              <strong>Horaires</strong><br />
              {info.hours}
            </div>
          </div>

          <div className="cluster">
            <a
              className="button outline m"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.name + " " + info.address)}`}
              target="_blank" rel="noopener noreferrer"
            >
              Itinéraire Google Maps
            </a>
            <a className="button ghost m" href="#contact">Nous contacter</a>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <LeafletMap lat={info.lat} lng={info.lng} label={info.name} />
        </div>
      </div>
    </section>
  );
}
