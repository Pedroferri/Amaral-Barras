import { motion } from "framer-motion";

const DEPOIMENTOS = [
  {
    texto: "Fundição por indução é outro nível. O metal vem maciço, zero bolhas. Na hora de dar o acabamento e aplicar a resina acrílica, você percebe a densidade e a qualidade do material. Não troco mais.",
    nome: "Eduardo Rossi",
    local: "",
    cor: "#2E5AAC",
  },
  {
    texto: "Peguei um lote de barras com a conexão UCLA e a adaptação nos implantes ficou precisa demais. O custo-benefício compensa muito comparado a ter que fazer todo o processo de fundição do zero no laboratório.",
    nome: "Carlos Eduardo",
    local: "",
    cor: "#1EB255",
  },
  {
    texto: "Antes a gente perdia quase um dia inteiro modelando em cera e fundindo barras no maçarico. Hoje peço direto com a Amaral Barras. Aumentei minha produção de protocolos no mês sem perder qualidade.",
    nome: "Juliano Mendes",
    local: "",
    cor: "#16233B",
  },
  {
    texto: "O dentista me ligou só pra elogiar o encaixe no paciente. Disse que deu torque perfeito nos parafusos sem gerar nenhuma tensão na estrutura. Quando o cliente final elogia, o laboratório ganha moral.",
    nome: "Fernanda Lima",
    local: "FL Prótese Oral · Campinas/SP",
    cor: "#2E5AAC",
  },
  {
    texto: "Tinha dúvida sobre qual retenção escolher pra um caso com alavanca maior e o suporte da Amaral me orientou certinho sobre o modelo ideal. O suporte técnico deles entende a rotina da bancada.",
    nome: "Aline Guimarães",
    local: "",
    cor: "#1EB255",
  },
  {
    texto: "O tempo que economizo não tendo que incluir e fundir metal no laboratório paga a barra duas vezes. O catálogo de pronta entrega da Amaral simplificou demais meu fluxo de trabalho.",
    nome: "Gerson Silveira",
    local: "",
    cor: "#16233B",
  },
  {
    texto: "Mesmo enviando pro interior, o pedido chegou super rápido e muito bem embalado. A precisão de assentamento nos análogos surpreendeu bastante. Viramos clientes fiéis.",
    nome: "Lucas Barreto",
    local: "Barreto Prótese · Feira de Santana/BA",
    cor: "#2E5AAC",
  },
  {
    texto: "Encaixe passivo limpo, sem sobressaltos e com excelente retenção mecânica. Qualidade indiscutível.",
    nome: "André Martins",
    local: "Martins Laboratório Protético · Londrina/PR",
    cor: "#1EB255",
  },
  {
    texto: "Trabalho com prótese sobre implante há mais de 15 anos e posso afirmar: a padronização das barras por indução da Amaral eleva o nível de qualquer laboratório. Produto de excelência.",
    nome: "Valdir Nogueira",
    local: "",
    cor: "#16233B",
  },
];

function initiais(nome: string) {
  return nome
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

const DOBRADO = [...DEPOIMENTOS, ...DEPOIMENTOS];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px]"
        >
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent font-medium">
            Quem já usa
          </span>
          <h2 className="font-display font-semibold text-[28px] md:text-4xl tracking-tight my-3.5">
            O que dizem os laboratórios
          </h2>
          <p className="text-ink-2 text-[17px]">
            Protéticos e laboratórios de todo o Brasil que já trabalham com a Amaral Barras.
          </p>
        </motion.div>
      </div>

      {/* Carrossel infinito — pausa ao passar o mouse */}
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-5 w-max">
          {DOBRADO.map((d, i) => (
            <div
              key={i}
              className="w-[320px] flex-none border border-line rounded-2xl p-6 bg-white flex flex-col"
            >
              <p className="text-[15px] text-ink leading-relaxed flex-1 mb-5">"{d.texto}"</p>
              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full grid place-items-center text-white font-display font-semibold text-sm flex-none"
                  style={{ background: d.cor }}
                >
                  {initiais(d.nome)}
                </span>
                <div>
                  <div className="font-semibold text-sm text-ink">{d.nome}</div>
                  {d.local && (
                    <div className="text-[11px] text-ink-3 mt-0.5">{d.local}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
