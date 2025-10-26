export default function App() {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-md flex items-center justify-center text-center p-6">
      <div className="bg-white/90 px-6 py-5 rounded-xl shadow space-y-3 max-w-sm">
        <img src="/ACTIVNUM.png" className="h-14 mx-auto" />
        <h1 className="text-xl font-semibold">Maintenance en cours</h1>
        <p className="text-sm text-neutral-700">Le site AKTIVNUM est en préparation.</p>
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
