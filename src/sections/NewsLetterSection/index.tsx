"use client";
import { useState } from "react";
import styles from "./styles.module.css";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [status, setStatus] = useState<"idle"|"loading"|"done"|"error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ok || !email) return;
    setStatus("loading");
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(r.ok ? "done" : "error");
      if (r.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section>
      <div className={`container ${styles.wrap}`}>
        <header className="stack">
          <h2>Restez informé</h2>
          <p className="lead">Recevez nos promos et nouveautés directement par email.</p>
        </header>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <label htmlFor="nl-email" className="sr-only">Adresse email</label>
          <input
            id="nl-email"
            type="email"
            required
            placeholder="votre@email.com"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            className="input"
            aria-invalid={status==="error"}
          />
          <div className={styles.row}>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={ok}
                onChange={e=>setOk(e.target.checked)}
              />
              <span>J’accepte de recevoir les emails.</span>
            </label>

            <button
              type="submit"
              className={`button primary m ${styles.submit}`}
              disabled={!ok || !email || status==="loading"}
            >
              {status==="loading" ? "Envoi..." : "S’abonner"}
            </button>
          </div>

          {status==="done" && <p className="alert alert--success mt-1">Merci, c’est noté.</p>}
          {status==="error" && <p className="alert alert--danger mt-1">Erreur d’abonnement. Réessayez.</p>}
        </form>
      </div>
    </section>
  );
}
