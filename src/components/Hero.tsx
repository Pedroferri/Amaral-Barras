import { motion } from "framer-motion";
import { Globe, CheckCircle2, Truck } from "lucide-react";
import { TIPOS } from "../data";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 460px at 88% -8%, #EAF0FA 0%, transparent 60%), linear-gradient(180deg,#FBFCFE 0%,#FFFFFF 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(#E1E7F0 1px, transparent 1px), linear-gradient(90deg, #E1E7F0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage: "radial-gradient(700px 420px at 82% 6%, #000 0%, transparent 70%)",
          maskImage: "radial-gradient(700px 420px at 82% 6%, #000 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-5 grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent font-medium">
            Para protéticos e laboratórios de prótese
          </span>
          <h1 className="font-display font-semibold text-[34px] leading-[1.12] md:text-[52px] tracking-tight my-4">
            Componentes de níquel cromo para carga imediata.
          </h1>
          <p className="text-ink-2 text-lg max-w-[500px]">
            Peças usinadas de precisão para montar e soldar a barra do protocolo. Parafuso incluso em
            cada componente, pedido mínimo de 50 unidades e envio para todo o Brasil.
          </p>

          <div className="flex flex-wrap gap-3.5 mt-8 mb-7">
            <a
              href="#pedido"
              className="inline-flex items-center gap-2.5 bg-wa hover:bg-wa-dark text-[#0B2016] font-semibold px-6 py-3.5 rounded-lg shadow-[0_6px_18px_rgba(37,211,102,0.28)] transition-transform hover:-translate-y-0.5"
            >
              Fazer pedido
            </a>
            <a
              href="#componentes"
              className="inline-flex items-center gap-2.5 border border-line-2 hover:border-ink font-semibold px-6 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5"
            >
              Ver componentes
            </a>
          </div>

          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-2 text-sm text-ink-2 font-medium">
              <Globe size={18} className="text-accent" /> Todo o Brasil
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-2 font-medium">
              <CheckCircle2 size={18} className="text-accent" /> Parafuso incluso
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-2 font-medium">
              <Truck size={18} className="text-accent" /> Envio nacional
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative max-w-[420px] mx-auto md:mx-0 w-full"
        >
          <div className="relative rounded-[20px] p-9 bg-gradient-to-br from-steel-1 to-steel-2 border border-line-2 shadow-[0_20px_60px_rgba(17,28,46,0.14)] grid place-items-center min-h-[340px]">
            <span className="absolute top-4 left-4 font-mono text-[11px] tracking-wide text-ink-2 bg-white/80 border border-line-2 px-2.5 py-1.5 rounded-md">
              NÍQUEL CROMO · USINADO
            </span>
            <img
              src={TIPOS[0].imagem}
              alt="Componente usinado em níquel cromo para carga imediata"
              className="max-h-[280px] rounded-xl object-cover"
              style={{ filter: "drop-shadow(0 24px 30px rgba(17,28,46,0.22))" }}
            />
          </div>
          <div className="absolute -bottom-5 -right-3 bg-white border border-line rounded-2xl px-5 py-3.5 shadow-[0_1px_2px_rgba(17,28,46,0.04),0_8px_30px_rgba(17,28,46,0.06)] flex items-center gap-3">
            <span className="font-display text-2xl font-bold">50</span>
            <span className="text-xs text-ink-3 font-mono leading-tight">
              unidades
              <br />
              pedido mínimo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
