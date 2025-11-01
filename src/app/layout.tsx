import "./globals.css"
import { ReactNode } from "react"

import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Délice du Capitole",
  description: "Délice du Capitole (Site officiel) - Restauration Rapide | Commander Maintenant !",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
