import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Headset } from "lucide-react";

type Item = {
  icon?: React.ElementType;
  color?: string;
  imagem?: string;
  titulo: string;
  texto: string;
};

const ITENS: Item[] = [
  {
    icon: ShieldCheck,
    color: "text-accent bg-steel-1",
    titulo: "Qualidade comprovada",
    texto: "Componentes testados na rotina de quem faz carga imediata, com adaptação consistente peça a peça.",
  },
  {
    icon: Wrench,
    color: "text-wa-dark bg-[#25D3661F]",
    titulo: "Parafusos inclusos",
    texto: "Cada componente já vai com o parafuso. Sem custo extra e sem peça faltando na hora da montagem.",
  },
  {
    imagem: "/imagens/entrega.jpg.png",
    titulo: "Envio nacional",
    texto: "Envio para todo o Brasil. De qualquer estado, o pedido chega no seu laboratório.",
  },
  {
    icon: Headset,
    color: "text-accent bg-steel-1",
    titulo: "Atendimento especializado",
    texto: "Você fala com quem entende a rotina do laboratório e a nomenclatura de carga imediata.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 md:py-24">
      <div className="max-w-[1180px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-12"
        >
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent font-medium">
            Por que comprar aqui
          </span>
          <h2 className="font-display font-semibold text-[28px] md:text-4xl tracking-tight my-3.5">
            Feito por quem conhece a bancada
          </h2>
          <p className="text-ink-2 text-[17px]">
            Sem promessa vazia. O que o laboratório precisa para fechar uma carga imediata com segurança.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITENS.map((it, i) => (
            <motion.div
              key={it.titulo}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border border-line rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(17,28,46,0.04),0_8px_30px_rgba(17,28,46,0.06)] transition-all"
            >
              {it.imagem ? (
                <div className="w-full h-[110px] rounded-xl overflow-hidden mb-4">
                  <img
                    src={it.imagem}
                    alt={it.titulo}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className={`w-[46px] h-[46px] rounded-xl grid place-items-center mb-4 ${it.color}`}>
                  {it.icon && <it.icon size={23} />}
                </div>
              )}
              <h3 className="font-display font-semibold text-lg mb-2">{it.titulo}</h3>
              <p className="text-[14.5px] text-ink-2">{it.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
