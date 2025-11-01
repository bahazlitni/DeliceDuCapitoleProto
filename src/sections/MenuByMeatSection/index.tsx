"use client";
import { useRouter } from "next/navigation";
import RailCarousel from "@/components/RailCarousel";
import styles from "./styles.module.css";
import SimpleCard from "@/components/ui/SimpleCard";

const MEATS = [
  { id: "kefta",       label: "KEFTA" },
  { id: "falafel",     label: "FALAFEL" },
  { id: "chicken",     label: "CHICKEN" },
  { id: "steak-hache", label: "STEAK HACHÉ" },
  { id: "kebab",       label: "KEBAB" },
  { id: "cordon-bleu", label: "CORDON BLEU" },
];

export function MenuByMeatSection() {
  const router = useRouter();
  return (
    <section>
      <div className={`container ${styles.wrap}`}>
        <header className="stack">
          <h2>Vos envies!</h2>
          <p className="lead">Choisissez votre préférence et explorez les menus associés.</p>
        </header>

        <RailCarousel height={280} maxVisible={3} minItemWidth={0} gap={24}>
          {MEATS.map(m => (
            <SimpleCard imageSrc={`/images/menu-by-meat/${m.id}.png`} title={m.label} size="auto"/>
          ))}
        </RailCarousel>
      </div>
    </section>
  );
}
