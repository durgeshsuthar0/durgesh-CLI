import { FaReact, FaRocket, FaCode, FaBolt } from "react-icons/fa";

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* React Logo */}
        <div className="mb-6 animate-spin-slow">
          <FaReact className="text-sky-400 text-8xl drop-shadow-[0_0_25px_rgba(56,189,248,0.8)]" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Welcome to <br />
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Durgesh React CLI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
          Build blazing fast modern web apps with{" "}
          <span className="text-sky-400 font-semibold">React</span>,{" "}
          <span className="text-pink-400 font-semibold">Vite</span>,{" "}
          <span className="text-cyan-400 font-semibold">Tailwind CSS</span>{" "}
          and everything already configured for you.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 transition-all duration-300 font-semibold shadow-lg shadow-sky-500/30 hover:scale-105">
            Get Started
          </button>

          <button className="px-8 py-3 rounded-xl border border-slate-600 hover:border-sky-400 hover:bg-slate-800 transition-all duration-300 font-semibold hover:scale-105">
            Documentation
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-6xl w-full">
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 shadow-xl">
            <FaBolt className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Lightning Fast</h3>
            <p className="mt-3 text-slate-300">
              Powered by Vite for super fast development and build speed.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 shadow-xl">
            <FaCode className="text-pink-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Clean Structure</h3>
            <p className="mt-3 text-slate-300">
              Organized folder architecture ready for scalable projects.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 shadow-xl">
            <FaRocket className="text-cyan-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Production Ready</h3>
            <p className="mt-3 text-slate-300">
              Tailwind, Router, Axios and modern tooling already configured.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;