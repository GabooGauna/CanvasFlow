function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <section className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <p className="mb-2 text-sm font-medium text-cyan-400">CanvasFlow</p>

        <h1 className="text-3xl font-bold tracking-tight text-white">
          Base visual configurada
        </h1>

        <p className="mt-4 leading-7 text-slate-300">
          React, TypeScript, Vite, Tauri y Tailwind CSS ya trabajan juntos.
        </p>

        <button
          type="button"
          className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          Continuar con CanvasFlow
        </button>
      </section>
    </main>
  );
}

export default App;
