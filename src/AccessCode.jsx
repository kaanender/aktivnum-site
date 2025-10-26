// src/AccessCode.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON
);

export default function AccessCode() {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inferLevelFromCode = (c) => {
    const up = c.toUpperCase();
    if (up.startsWith("DEB")) return "deb";
    if (up.startsWith("MED")) return "med";
    if (up.startsWith("PRO")) return "pro";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    const c = code.trim().toUpperCase();
    if (!c) return setErr("Entrez votre code.");

    setLoading(true);
    try {
      // 1) Récupérer le code en DB
      const { data, error } = await supabase
        .from("codes_acces")
        .select("id, code, used, niveau")
        .eq("code", c)
        .maybeSingle();

      if (error) {
        console.error(error);
        throw new Error("Erreur serveur. Réessayez.");
      }

      if (!data) {
        setErr("Code invalide.");
        return;
      }
      if (data.used) {
        setErr("Ce code a déjà été utilisé.");
        return;
      }

      // 2) Déterminer le niveau (DB > préfixe)
      const level = data.niveau ?? inferLevelFromCode(c);
      if (!level) {
        setErr("Code reconnu mais niveau introuvable. Contactez le support.");
        return;
      }

      // 3) Marquer comme utilisé
      const { error: updErr } = await supabase
        .from("codes_acces")
        .update({ used: true, used_at: new Date().toISOString() })
        .eq("id", data.id);

      if (updErr) {
        console.error(updErr);
        throw new Error("Impossible de valider le code. Réessayez.");
      }

      // 4) Rediriger vers le bon cours
      navigate(`/cours/${level}`);
    } catch (e) {
      setErr(e.message || "Erreur inattendue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl border border-neutral-200 bg-neutral-50 p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold">Accès aux cours</h1>
        <p className="text-sm text-neutral-600">
          Saisissez le code reçu après votre achat (ex. <code>DEB1234</code>,{" "}
          <code>MED5678</code>, <code>PRO9999</code>).
        </p>

        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Votre code"
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white"
        />

        {err && <p className="text-sm text-red-600">{err}</p>}

        <button
          disabled={loading}
          className="w-full px-4 py-3 rounded-xl bg-neutral-900 text-white hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Vérification..." : "Déverrouiller l’accès"}
        </button>

        <p className="text-xs text-neutral-500">
          Besoin d’aide ? <a className="underline" href="https://wa.me/33783484835" target="_blank">WhatsApp</a>
        </p>
      </form>
    </div>
  );
}
