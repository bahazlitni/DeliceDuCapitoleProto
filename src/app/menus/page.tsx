
// src/app/menus/page.tsx
"use client";
import React, { Suspense, useRef } from "react";
import styles from "./styles.module.css";
import MenusSections from "@/components/menus/MenusSections";

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Suspense>
      {/* Anything above the scroll area (eg. local navbar) can live here */}

      <div className={styles.scrollArea} ref={scrollRef}>
        <MenusSections />
      </div>
    </Suspense>
  );
}
