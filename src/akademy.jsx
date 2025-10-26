// src/pages/Akademy.jsx
import React from "react";
import { Calendar, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PackCard = ({ title, oldPrice, price, bullets }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <div className="mb-4">
      <div className="text-sm text-neutral-500 line-through">€{oldPrice}</div>
      <div className="text-2xl font-bold text-[#ff914d]">€{price}</div>
      <div className="text-xs text-neutral-500">Prix promo limité</div>
    </div>

    <ul className="mb-6 text-sm space-y-2">
      {bullets.map((b, i) => (
        <li key={i} className="list-disc list-inside">{b}</li>
      ))}
    </ul>

    <a
      href="https://wa.me/33783484835?text=Je+veux+m'inscrire+au+pack+%20"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:opacity-90 transition"
    >
      <Calendar className="w-4 h-4" /> Je m'inscris
    </a>
  </div>
);

export default function Akademy() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* HERO */}
      <header className="bg-white border-b border-neutral-200">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* LOGO + TITRE */}
    <div className="flex items-center gap-3">
      <img src="/ACTIVNUM.png" alt="Aktivnum" className="h-10 object-contain" />
      <h1 className="text-lg font-semibold">AKTIVNUM Academy</h1>
    </div>

    {/* NAV BAR DROITE */}
    <nav className="flex items-center gap-6 text-sm">
      <Link to="/" className="hover:text-neutral-900">
        ← Retour au site
      </Link>
      <a href="#packs" className="hover:text-neutral-900">
        Packs
      </a>
      <a href="#faq" className="hover:text-neutral-900">
        FAQ
      </a>
      <a href="https://wa.me/33783484835" target="_blank" className="hover:text-neutral-900">
        Contact
      </a>
    </nav>

  </div>
</header>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff4ed] text-[#ff914d] text-sm font-medium mb-4">
              <Shield className="w-4 h-4" /> Nouveau — Offre de lancement
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">AKTIVNUM Academy — Formations Cybersécurité</h2>
            <p className="mt-4 text-neutral-700 max-w-xl">
              Une école pratique pensée pour débuter ou monter en compétences en cybersécurité.
              Cours pas-à-pas, exercices guidés, études de cas et support. Pack promo pour le lancement.
            </p>

            <div className="mt-6 space-y-3 text-sm text-neutral-600">
              <p><strong>Format :</strong> Vidéos, PDF, exercices & sessions Q&A</p>
              <p><strong>Public :</strong> Débutants, techniciens, administrateurs, passionnés</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#packs" className="px-5 py-3 rounded-xl bg-[#ff914d] text-white hover:opacity-90 transition">Voir les packs</a>
              <a href="https://wa.me/33783484835" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-neutral-300">Contact WhatsApp</a>
            </div>
          </div>

          {/* Illustration / personnage hacker */}
          <div className="rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 p-8 flex items-center justify-center">
            <div className="max-w-xs text-center">
              {/* simple illustration SVG / emoji pour immersion */}
              <div className="text-6xl mb-4">🧑‍💻</div>
              <h4 className="font-semibold text-lg">Plonge dans l'univers du hacker éthique</h4>
              <p className="text-sm text-neutral-600 mt-2">
                Persona : Alex — ancien admin réseau devenu pentester. Il t'accompagne pas à pas.
              </p>
            </div>
          </div>
        </section>

        {/* PACKS */}
        <section id="packs" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Nos packs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <PackCard
              title="Débutant"
              oldPrice="50"
              price="30"
              bullets={[
                "Bases réseau & sécurité",
                "Phishing & protection",
                "Hygiène numérique & sauvegarde",
                "1 vidéo + PDF + checklist"
              ]}
            />
            <PackCard
              title="Medium"
              oldPrice="80"
              price="50"
              bullets={[
                "Linux & commandes utiles",
                "Wireshark : analyser son trafic",
                "Pentest intro (Kali basics)",
                "Exercices guidés"
              ]}
            />
            <PackCard
              title="Pro"
              oldPrice="100"
              price="80"
              bullets={[
                "Audit & méthodologie",
                "OSINT & reconnaissance",
                "Red teaming intro",
                "Rapport & remédiation"
              ]}
            />
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="mt-12">
          <h4 className="text-xl font-semibold">Ce que vous recevrez</h4>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div className="rounded-lg bg-white p-4 border">
              <h5 className="font-medium">Cours vidéo</h5>
              <p className="text-sm text-neutral-600 mt-2">Vidéos courtes et exercices pratiques.</p>
            </div>
            <div className="rounded-lg bg-white p-4 border">
              <h5 className="font-medium">Supports</h5>
              <p className="text-sm text-neutral-600 mt-2">PDF, checklists & modèles de rapport.</p>
            </div>
            <div className="rounded-lg bg-white p-4 border">
              <h5 className="font-medium">Accès</h5>
              <p className="text-sm text-neutral-600 mt-2">Accès à vie + mises à jour</p>
            </div>
          </div>
        </section>

        {/* Témoignages élèves */}
        <section className="mt-12">
          <h4 className="text-xl font-semibold mb-4">Ils ont suivi la formation</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Karim M.", photo: "https://i.pravatar.cc/100?img=12", text: "Formation claire, j'ai pris confiance pour faire mes premiers tests." },
              { name: "Sophie D.", photo: "https://i.pravatar.cc/100?img=32", text: "Très pédagogique — bonnes pratiques immédiatement applicables." },
              { name: "Lucas P.", photo: "https://i.pravatar.cc/100?img=45", text: "Le pack Pro m'a aidé à structurer mes audits." },
            ].map((t) => (
              <div key={t.name} className="rounded-xl bg-white p-6 border">
                <div className="flex items-center gap-4 mb-3">
                  <img src={t.photo} className="h-12 w-12 rounded-full object-cover" alt={t.name} />
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-neutral-500">Étudiant</div>
                  </div>
                </div>
                <p className="text-sm text-neutral-700">“{t.text}”</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ rapide */}
        <section className="mt-12 mb-20">
          <h4 className="text-xl font-semibold mb-4">Questions fréquentes</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-4 border">
              <strong>Format des cours ?</strong>
              <p className="text-sm text-neutral-600 mt-2">Vidéos + PDF + exercices pratiques + sessions Q&A (live occasionnel).</p>
            </div>
            <div className="rounded-lg bg-white p-4 border">
              <strong>Paiement ?</strong>
              <p className="text-sm text-neutral-600 mt-2">Paiement via WhatsApp pour le moment. Stripe sera ajouté bientôt.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
