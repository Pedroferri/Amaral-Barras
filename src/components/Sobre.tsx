import { motion } from "framer-motion";

const NUMEROS = [
  { valor: "7 anos", legenda: "de experiência prática em prótese de carga imediata" },
  { valor: "50", legenda: "unidades — pedido mínimo, sem enrolação" },
  { valor: "100%", legenda: "níquel cromo, sem substituição de material" },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-24 bg-steel-1/60 border-y border-line">
      <div className="max-w-[1180px] mx-auto px-5 grid md:grid-cols-[1fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent font-medium">
            Quem está por trás
          </span>
          <h2 className="font-display font-semibold text-[28px] md:text-4xl tracking-tight my-3.5">
            Feito por quem já esteve do seu lado da bancada
          </h2>
          <p className="text-ink-2 text-[17px]">
            Antes de vender componente, eu montava carga imediata todo mês, comprando dos mesmos
            laboratórios que fornecem hoje. Sei exatamente o que trava um pedido — e é isso que o site
            resolve.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {NUMEROS.map((n, i) => (
            <motion.div
              key={n.valor}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-line rounded-2xl p-5 text-center"
            >
              <div className="font-display font-bold text-2xl md:text-3xl">{n.valor}</div>
              <div className="text-xs text-ink-3 mt-2 leading-snug">{n.legenda}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
