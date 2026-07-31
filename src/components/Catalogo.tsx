import { motion } from "framer-motion";
import { WHATSAPP } from "../data";

const PRODUTOS = [
  {
    key: "alta",
    nome: "Barra Alta",
    preco: "R$ 48,00",
    imagem: "/imagens/barra-alta.jpg.png",
    alt: "Barra para haltere modelo Alta em níquel cromo",
  },
  {
    key: "media",
    nome: "Barra Média",
    preco: "R$ 46,00",
    imagem: "/imagens/barra-media.jpg.png",
    alt: "Barra para haltere modelo Média em níquel cromo",
  },
  {
    key: "baixa",
    nome: "Barra Baixa",
    preco: "R$ 44,00",
    imagem: "/imagens/barra-baixa.jpg.png",
    alt: "Barra para haltere modelo Baixa em níquel cromo",
  },
  {
    key: "baixissima",
    nome: "Barra Baixíssima",
    preco: "R$ 42,00",
    imagem: "/imagens/barra-baixissima.jpg.png",
    alt: "Barra para haltere modelo Baixíssima em níquel cromo",
  },
  {
    key: "unica",
    nome: "Barra Única",
    preco: "R$ 38,00",
    imagem: "/imagens/barra-unica.jpg.png",
    alt: "Barra para haltere modelo Única em níquel cromo",
  },
  {
    key: "parafuso",
    nome: "Parafuso de Fixação",
    preco: "R$ 12,00",
    imagem: "/imagens/parafuso.jpg.png",
    alt: "Parafuso de fixação para montagem de haltere",
  },
];

export default function Catalogo() {
  return (
    <section id="catalogo" className="py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-12"
        >
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent font-medium">
            Catálogo de Produtos
          </span>
          <h2 className="font-display font-semibold text-[28px] md:text-4xl tracking-tight my-3.5 text-ink">
            Linha completa de barras
          </h2>
          <p className="text-ink-2 text-[17px]">
            Peças em níquel cromo de alta durabilidade, com pedido mínimo de 50 unidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUTOS.map((p, i) => (
            <motion.article
              key={p.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex flex-col bg-white border border-[#e5e5e5] transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              {/* Imagem quadrada — lazy loading para não travar a página */}
              <div className="aspect-square bg-[#f8f9fa] flex items-center justify-center overflow-hidden">
                <img
                  src={p.imagem}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Corpo */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-display font-semibold text-[20px] text-[#18181b] mb-3 leading-tight">
                  {p.nome}
                </h3>

                <p className="font-display font-bold text-[18px] text-accent mb-4">
                  {p.preco}
                  <span className="text-ink-3 font-normal text-[13px] ml-1.5">/ unid.</span>
                </p>

                <div className="flex justify-end mt-auto">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre a ${p.nome}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent text-white font-mono font-semibold uppercase text-[11px] px-4 py-2 rounded-[2px] no-underline transition-colors duration-150 hover:bg-ink"
                    style={{ letterSpacing: "1px" }}
                  >
                    VER DETALHES →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
