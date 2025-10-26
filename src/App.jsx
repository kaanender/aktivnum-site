// AKTIVNUM — Landing complète (React + Tailwind)
// Style : Blanc pro, focus B2C + B2B, Île-de-France + dépannage à distance
import React from "react";
import { Phone, Calendar, Wrench, Shield, Laptop, MapPin, Clock, Mail, Cpu, Wifi, Server, HardDrive } from "lucide-react";

export default function AktivnumSite() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-300"> 
  <div className="max-w-7xl mx-auto h-14 px-6 flex items-center justify-between relative"> 
    {/* LOGO GAUCHE */}
    <img src="/ACTIVNUM.png" alt="Aktivnum Logo" className="h-14 w-auto object-contain -mt-1"/>

    {/* NAV CENTRÉ */}
    <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-sm text-neutral-900"> 
      <a href="#services" className="hover:text-neutral-900">Services</a>
      <a href="#zones" className="hover:text-neutral-900">Zones</a>
      <a href="#avis" className="hover:text-neutral-900">Avis</a>
      <a href="#pack-anti-arnaque" className="hover:text-neutral-900">Pack anti-arnaque</a>
      <a href="#contact" className="hover:text-neutral-900">Contact</a>
    </nav>

    {/* SPACER DROITE */}
    <div className="w-10"></div>
  </div>
</header>

      {/* HERO */}
      <section className="pt-24 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.2fr_0.9fr] gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Réparation & Maintenance Informatique
            </h1>
            <p className="mt-6 text-neutral-700 max-w-2xl">
              Entreprise individuelle — SIREN <span className="font-medium text-neutral-900">990 678 773</span> — NAF 95.11Z. 
              Dépannage <span className="font-medium text-neutral-900">à distance (en ligne)</span> et sur site en <span className="font-medium text-neutral-900">Île‑de‑France</span>.
              Intervention particuliers <span className="whitespace-nowrap">&</span> entreprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#rdv" className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors text-neutral-900 inline-flex items-center gap-2"><Calendar className="w-4 h-4"/> Prendre rendez‑vous</a>
              <a href="#services" className="px-5 py-3 rounded-xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors inline-flex items-center gap-2"><Wrench className="w-4 h-4"/> Voir les services</a>
            </div>
            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-2 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors"><Shield className="w-4 h-4"/> Devis clair avant intervention</span>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors"><Clock className="w-4 h-4"/> Réponse sous 2h ouvrées</span>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors"><Laptop className="w-4 h-4"/> Téléassistance sécurisée</span>
            </div>
          </div>

          {/* Card droite */}
          <aside className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors p-7 shadow-sm">
            <div className="space-y-3 text-sm text-neutral-900">
              <div className="flex items-center gap-3"><Cpu className="w-4 h-4"/> Diagnostic PC/Mac — lents, virus, SSD, RAM</div>
              <div className="flex items-center gap-3"><Wifi className="w-4 h-4"/> Réseau & Wi‑Fi — box, routeurs, répéteurs</div>
              <div className="flex items-center gap-3"><Server className="w-4 h-4"/> PME — sauvegardes, NAS, Microsoft 365</div>
              <div className="flex items-center gap-3"><HardDrive className="w-4 h-4"/> Récupération de données (selon cas)</div>
            </div>
            <a href="#rdv" className="mt-6 w-full inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors text-neutral-900"><Calendar className="w-4 h-4"/> Réserver un créneau</a>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 border border-neutral-200 hover:border-[#ff914d] transition-colors-t bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
          <p className="text-neutral-700 mt-2">Particuliers & Entreprises — sur site Île‑de‑France et à distance partout en France.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors p-6 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors">
              <h3 className="text-lg font-semibold">Dépannage à distance</h3>
              <ul className="mt-3 text-sm text-neutral-900 space-y-2 list-disc list-inside">
                <li>Prise en main sécurisée (consentement requis)</li>
                <li>Virus/malwares, lenteurs, nettoyage système</li>
                <li>Installation logiciels, imprimantes, messagerie</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors p-6 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors">
              <h3 className="text-lg font-semibold">Interventions sur site</h3>
              <ul className="mt-3 text-sm text-neutral-900 space-y-2 list-disc list-inside">
                <li>Remplacement SSD/RAM, réinstallation</li>
                <li>Réseau & Wi‑Fi (box, routeur, AP, câblage)</li>
                <li>Postes & périphériques (écran, imprimante)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors p-6 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors">
              <h3 className="text-lg font-semibold">PME / Pros</h3>
              <ul className="mt-3 text-sm text-neutral-900 space-y-2 list-disc list-inside">
                <li>Audit & contrat de maintenance</li>
                <li>NAS/Sauvegardes, Microsoft 365/Google Workspace</li>
                <li>Sécurité, bonnes pratiques & sensibilisation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* PACK ANTI‑ARNAQUE */}
      <section id="pack-anti-arnaque" className="py-16 bg-neutral-50 border border-neutral-200 hover:border-[#ff914d] transition-colors-t">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Pack — Reconnaître une arnaque / attaque</h2>
          <p className="text-neutral-700 mt-2">Un pack clair pour apprendre à repérer les arnaques en ligne, protéger vos appareils et réagir rapidement en cas d’incident.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors p-6 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors">
              <h3 className="text-lg font-semibold">Ce que contient le pack</h3>
              <ul className="mt-3 text-sm text-neutral-900 space-y-2 list-disc list-inside">
                <li>Guide PDF : 15 pages — signes d’une arnaque, procédures pas‑à‑pas</li>
                <li>Vidéo courte : 10 min — comment reconnaître un faux technicien</li>
                <li>Checklist imprimable pour audit rapide</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors p-6 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors">
              <h3 className="text-lg font-semibold">Pourquoi c’est utile</h3>
              <p className="text-sm text-neutral-900 mt-2">Prévenir une perte de données, éviter un paiement frauduleux ou l’installation de logiciels malveillants. Convient aux particuliers et aux petites structures.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors p-6 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors">
              <h3 className="text-lg font-semibold">Accès & prix</h3>
              <p className="text-sm text-neutral-900 mt-2">Pack disponible en téléchargement (PDF gratuit) ou en version complète (PDF + vidéo + checklist) à prix accessible.</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#e57d3c] hover:bg-[#e57d3c] text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors text-neutral-100">Télécharger le guide</a>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="py-16 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2"><MapPin className="w-4 h-4"/> Île‑de‑France</h3>
            <p className="text-sm text-neutral-900 mt-2">Paris (75) et départements limitrophes. Déplacement selon devis.</p>
            <div className="mt-4 text-xs text-neutral-700">Contexte marché : ~10 000 sociétés en France sur l’activité 95.11Z ; ~900 dans le 75.</div>
          </div>
          <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2"><Wifi className="w-4 h-4"/> Dépannage à distance</h3>
            <p className="text-sm text-neutral-900 mt-2">France entière. Idéal pour diagnostics rapides, réglages logiciels et maintenance préventive.</p>
          </div>
        </div>
      </section>

      {/* RDV */}
      <section id="rdv" className="py-16 border border-neutral-200 hover:border-[#ff914d] transition-colors-t bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Prendre rendez‑vous</h2>
          <p className="text-neutral-700 mt-2">Choisissez un créneau en ligne — confirmation instantanée. (Intégration Calendly/Cal.com)</p>

          {/* Bloc CTA RDV */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors p-6">
              <h3 className="text-lg font-semibold">Réservation en ligne</h3>
              <p className="text-sm text-neutral-900 mt-2">Cliquez pour ouvrir le module de réservation sécurisé.</p>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors text-neutral-900"
              >
                <Calendar className="w-4 h-4"/> Ouvrir la page de réservation
              </a>
              <p className="text-xs text-neutral-700 mt-3">Astuce : remplacez le href par votre lien Calendly (ex : https://cal.com/votrecompte/diagnostic)</p>
            </div>

            <form className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors p-6 grid grid-cols-1 gap-3">
              <h3 className="text-lg font-semibold">Demande de contact rapide</h3>
              <input className="px-4 py-3 rounded-xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors" placeholder="Nom & Prénom" required />
              <input type="email" className="px-4 py-3 rounded-xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors" placeholder="Email" required />
              <input className="px-4 py-3 rounded-xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors" placeholder="Téléphone (WhatsApp)" />
              <select className="px-4 py-3 rounded-xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors">
                <option>Dépannage à distance</option>
                <option>Intervention sur site</option>
                <option>Contrat PME</option>
              </select>
              <textarea className="px-4 py-3 rounded-xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors min-h-[120px]" placeholder="Décrivez le problème (PC lent, Wi‑Fi, sauvegardes…)"></textarea>
              <button type="button" onClick={() => alert('Merci ! Nous revenons vers vous rapidement.')} className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors text-neutral-900">Envoyer</button>
            </form>
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
<section id="avis" className="py-16 bg-white border-t border-neutral-700">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">Avis clients</h2>
    <p className="text-neutral-700 mt-2">Retours réels de clients après intervention à distance ou sur site.</p>
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      {[
  { name:"Karim M.", photo:"https://i.pravatar.cc/100?img=12", review:"Intervention à distance efficace, PC redevenu fluide en moins d'une heure.", stars:5 },
  { name:"Sophie D.", photo:"https://i.pravatar.cc/100?img=32", review:"Changement SSD + optimisation, très professionnel et pédagogue.", stars:5 },
  { name:"Entreprise Luma", photo:"https://i.pravatar.cc/100?img=44", review:"Audit poste + réseau pour PME, rapport clair et actions concrètes.", stars:5 },
  { name:"Rachid B.", photo:"https://i.pravatar.cc/100?img=22", review:"Victime d'une arnaque Microsoft, ils m'ont guidé et tout sécurisé.", stars:5 }
].map((c)=>(
  <div key={c.name} className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-white p-6 text-neutral-900 space-y-3">
    <div className="flex gap-3 items-center">
      <img src={c.photo} className="h-10 w-10 rounded-full object-cover"/>
      <div className="flex gap-1 text-[#ff914d]">{'★'.repeat(c.stars)}</div>
    </div>
    <p className="text-sm">{c.review}</p>
    <p className="text-xs text-neutral-700">— {c.name}</p>
  </div>
))}

    </div>
  </div>
</section>

{/* CONTACT */}
      <section id="contact" className="py-16 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors hover:bg-[#e57d3c] transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors p-6">
            <h3 className="text-lg font-semibold">Coordonnées</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-900">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5"/> <span>Tél : à compléter</span></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5"/> <a className="underline" href="mailto:contact@aktivnum.fr">contact@aktivnum.fr</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5"/> Île‑de‑France — interventions sur site</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 hover:border-[#ff914d] transition-colors bg-neutral-50 hover:border-[#ff914d] transition-colors p-6">
            <h3 className="text-lg font-semibold">Direction</h3>
            <p className="text-sm text-neutral-900 mt-2">AKTIVNUM est une entreprise individuelle créée en 2025 (SIREN 990 678 773). Effectif : 0 salarié déclaré en 2025.</p>
            <p className="text-xs text-neutral-700 mt-3">En France, ~10 000 sociétés exercent la réparation d'ordinateurs (NAF 95.11Z). Environ 900 entreprises sont actives dans le même secteur à Paris (75).</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border border-neutral-200 hover:border-[#ff914d] transition-colors-t bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 text-sm text-neutral-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AKTIVNUM — EI — SIREN 990 678 773 — NAF 95.11Z</p>
          <div className="flex gap-6">
            <a href="#rdv" className="hover:text-neutral-900">Prendre rendez‑vous</a>
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-4 text-xs text-neutral-700">
          <p>Mentions légales : AKTIVNUM — Entrepreneur individuel — inscrit au RCS. Données fournies par le client, à valider avant publication.</p>
        </div>
      </footer>
    </div>
  );
}
