import { motion } from "framer-motion";
import { TIPOS } from "../data";

export default function Componentes() {
  return (
    <section id="componentes" className="py-20 md:py-24">
      <div className="max-w-[1180px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-12"
        >
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent font-medium">
            Linha de componentes
          </span>
          <h2 className="font-display font-semibold text-[28px] md:text-4xl tracking-tight my-3.5">
            Os cinco tipos
          </h2>
          <p className="text-ink-2 text-[17px]">
            O medidor ao lado de cada peça mostra a altura em que a haste sai do componente.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-4.5">
          {TIPOS.map((t, i) => (
            <motion.article
              key={t.key}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border border-line rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(17,28,46,0.04),0_8px_30px_rgba(17,28,46,0.06)] transition-all"
            >
              <div className="relative bg-gradient-to-br from-[#F7F9FC] to-[#EAEFF6] flex gap-2 p-4 min-h-[190px]">
                {/* medidor de altura da haste */}
                <div className="w-6 flex-none flex flex-col items-center py-1.5">
                  <div className="relative flex-1 w-[3px] rounded bg-line-2">
                    {t.gauge !== null && (
                      <span
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-white"
                        style={{ top: `${t.gauge}%`, boxShadow: "0 0 0 1px #D2DAE6" }}
                      />
                    )}
                  </div>
                  <span className="font-mono text-[8px] md:text-[9px] text-ink-3 mt-1.5 leading-tight text-center">
                    {t.legenda}
                  </span>
                </div>
                <div className="flex-1 grid place-items-center">
                  <img
                    src={t.imagem}
                    alt={`Componente ${t.nome} em níquel cromo`}
                    className="max-h-[140px] rounded-lg object-cover"
                    style={{ filter: "drop-shadow(0 10px 14px rgba(17,28,46,0.16))" }}
                  />
                </div>
              </div>
              <div className="border-t border-line px-3 py-4 text-center">
                <h3 className="font-display font-semibold text-base md:text-lg">{t.nome}</h3>
                <div className="font-mono text-[10px] md:text-[11px] text-ink-3 mt-1 tracking-wide">
                  NÍQUEL CROMO
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-xs text-ink-3 mt-6">
          Fotos ilustrativas — troque pelas fotos reais dos seus componentes (ver <code>src/data.ts</code>).
        </p>
      </div>
    </section>
  );
}
