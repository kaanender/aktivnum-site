// AKTIVNUM — Page Maintenance uniquement
import React from "react";

export default function AktivnumSite() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center text-center px-6">
      <div className="space-y-5">
        <img src="/ACTIVNUM.png" alt="Aktivnum Logo" className="h-16 mx-auto" />
        <h1 className="text-xl font-semibold">Site en construction — ouverture bientôt.</h1>
        <a
          href="https://wa.me/33783484835"
          target="_blank"
          className="inline-block px-5 py-3 rounded-xl bg-neutral-900 text-white hover:opacity-90 transition"
        >
          Contact WhatsApp
        </a>
      </div>
    </div>
  );
}
