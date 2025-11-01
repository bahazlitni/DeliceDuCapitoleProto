'use client'
import "@/styles/ui/button.css"
import styles from "./styles.module.css"
import { usePathname } from "next/navigation"

export default function Navbar(){

    const path = usePathname()

    return <nav className={styles.nav}>
        <div className={styles.container}>
            <ul className={styles.leftList}>
                {path.startsWith('/menus')  
                    ? <a href="/" className="m secondary button">Accueil</a>
                    : <a href="/menus" className="m secondary button">Nos menus</a>
                }
                <button className="m button">A propos de nous</button>
                <button className="m button">Contacter nous</button>
                <button className="m button">Besoin d'aide?</button>
            </ul>

            <div className={styles.logoContainer}>
                <img src="/logo.png" className={styles.logo}/>
            </div>

            <ul className={styles.rightList}>
                <button className="m primary button">Se connecter</button>
                <button className="m secondary button">Créer un compte</button>
            </ul>
        </div>
    </nav>
}