import { motion } from "framer-motion";
import { ClipboardList, MessageCircle, PackageCheck } from "lucide-react";

const PASSOS = [
  {
    n: "01",
    icon: ClipboardList,
    iconColor: "text-[#CFE0FA] bg-white/[0.07]",
    titulo: "Monte seu pedido",
    texto: "Escolha os tipos e as quantidades no formulário. O mínimo é de 50 unidades no total.",
  },
  {
    n: "02",
    icon: MessageCircle,
    iconColor: "text-wa bg-white/[0.07]",
    titulo: "Confirme no WhatsApp",
    texto: "O site abre a conversa com o pedido já escrito. Você confere e envia — pronto.",
  },
  {
    n: "03",
    icon: PackageCheck,
    iconColor: "text-[#CFE0FA] bg-white/[0.07]",
    titulo: "Receba no laboratório",
    texto: "Enviamos para todo o Brasil, com parafuso incluso em cada componente.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 md:py-24 bg-deep text-[#EAF0F8]">
      <div className="max-w-[1180px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-12"
        >
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-[#8FB0E6] font-medium">
            Simples e direto
          </span>
          <h2 className="font-display font-semibold text-[28px] md:text-4xl tracking-tight my-3.5 text-white">
            Como fazer seu pedido
          </h2>
          <p className="text-[#AEBBD0] text-[17px]">Três passos. Sem cadastro complicado, sem espera.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {PASSOS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-7"
            >
              <span className="font-mono text-[13px] text-[#8FB0E6] tracking-[0.1em]">{p.n}</span>
              <div className={`w-11 h-11 rounded-xl grid place-items-center my-4 ${p.iconColor}`}>
                <p.icon size={22} />
              </div>
              <h3 className="font-display font-semibold text-[19px] text-white mb-2">{p.titulo}</h3>
              <p className="text-[14.5px] text-[#AEBBD0]">{p.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
