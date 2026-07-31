import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Minus, Plus } from "lucide-react";
import { TIPOS, WHATSAPP } from "../data";

const MINIMO = 50;

function maskPhone(v: string) {
  v = v.replace(/\D/g, "").slice(0, 11);
  if (v.length > 10) return v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
  if (v.length > 6) return v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
  if (v.length > 2) return v.replace(/(\d{2})(\d{0,5})/, "($1) $2").trim();
  return v.replace(/(\d{0,2})/, "($1").trim();
}

function maskCnpj(v: string) {
  v = v.replace(/\D/g, "").slice(0, 14);
  return v
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

export default function Pedido() {
  const [qty, setQty] = useState<Record<string, number>>(
    Object.fromEntries(TIPOS.map((t) => [t.key, 0]))
  );
  const [lab, setLab] = useState("");
  const [resp, setResp] = useState("");
  const [wpp, setWpp] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");

  const total = useMemo(() => Object.values(qty).reduce((a, b) => a + b, 0), [qty]);

  const holdTimer = useRef<number | null>(null);
  const repTimer = useRef<number | null>(null);

  function setOne(key: string, value: number) {
    setQty((prev) => ({ ...prev, [key]: Math.max(0, Math.min(9999, value)) }));
  }
  function add(key: string, delta: number) {
    setQty((prev) => ({ ...prev, [key]: Math.max(0, Math.min(9999, prev[key] + delta)) }));
  }
  function startHold(key: string, dir: 1 | -1) {
    stopHold();
    holdTimer.current = window.setTimeout(() => {
      repTimer.current = window.setInterval(() => add(key, dir), 300);
    }, 800);
  }
  function stopHold() {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    if (repTimer.current) clearInterval(repTimer.current);
    holdTimer.current = repTimer.current = null;
  }

  function enviarPedido() {
    if (total < MINIMO) return;
    const linhaComponentes = TIPOS.map((t) => `${t.nome}: ${qty[t.key]}`).join(" | ");
    const msg =
      `Olá, gostaria de fazer um pedido.\n` +
      `Laboratório: ${lab || "-"}\n` +
      `Responsável: ${resp || "-"}\n` +
      `WhatsApp: ${wpp || "-"}\n` +
      `E-mail: ${email || "-"}\n` +
      `CNPJ: ${cnpj || "-"}\n` +
      `Endereço: ${endereco || "-"}\n` +
      `${linhaComponentes}\n` +
      `Total: ${total} unidades`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <section id="pedido" className="py-20 md:py-24 bg-steel-1/60 border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="lg:order-first order-first"
        >
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent font-medium block mb-3">
            Faça seu pedido
          </span>
          <h2 className="font-display font-semibold text-[26px] md:text-[34px] tracking-tight mb-3.5">
            Monte e envie em minutos
          </h2>
          <p className="text-ink-2 text-base mb-6">
            Preencha os dados do laboratório e as quantidades. O botão abre o WhatsApp com o pedido
            pronto — sem formulário longo, sem burocracia.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Pedido mínimo de 50 unidades",
              "Parafuso incluso em cada componente",
              "Envio para todo o Brasil",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-[15px]">
                <CheckCircle2 size={20} className="text-wa-dark flex-none mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-line rounded-2xl p-7 shadow-[0_1px_2px_rgba(17,28,46,0.04),0_8px_30px_rgba(17,28,46,0.06)]"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Dados do laboratório</h3>
          <p className="text-[13.5px] text-ink-3 mb-5">Usamos esses dados para emitir e enviar o pedido.</p>

          <Field label="Nome do laboratório" value={lab} onChange={setLab} placeholder="Ex.: Laboratório Amaral" />
          <div className="grid sm:grid-cols-2 gap-3.5">
            <Field label="Responsável" value={resp} onChange={setResp} placeholder="Seu nome" />
            <Field label="WhatsApp" value={wpp} onChange={(v) => setWpp(maskPhone(v))} placeholder="(11) 90000-0000" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3.5">
            <Field label="E-mail" value={email} onChange={setEmail} placeholder="nome@laboratorio.com" type="email" />
            <Field label="CNPJ" value={cnpj} onChange={(v) => setCnpj(maskCnpj(v))} placeholder="00.000.000/0000-00" />
          </div>
          <Field label="Endereço para envio" value={endereco} onChange={setEndereco} placeholder="Rua, nº, bairro, cidade/UF, CEP" />

          <h3 className="font-display font-semibold text-lg mt-6 mb-1">Componentes</h3>
          <p className="text-[13.5px] text-ink-3 mb-4">Escolha as quantidades por tipo.</p>

          <div className="flex flex-col gap-3 mb-5">
            {TIPOS.map((t) => (
              <div key={t.key} className="flex items-center gap-3.5 p-3 border border-line rounded-xl flex-wrap">
                <div className="w-[52px] h-[52px] rounded-lg bg-steel-1 flex-none grid place-items-center overflow-hidden">
                  <img src={t.imagem} alt="" loading="lazy" decoding="async" className="max-h-11 object-cover rounded" />
                </div>
                <div className="flex-1 min-w-[110px]">
                  <div className="font-semibold text-[15px]">{t.nome}</div>
                  <div className="flex gap-1.5 mt-1 flex-wrap">
                    {[5, 10, 20].map((n) => (
                      <button
                        key={n}
                        onClick={() => add(t.key, n)}
                        className="font-mono text-[11px] text-accent border border-line-2 rounded-md px-2 py-0.5 hover:bg-accent hover:text-white hover:border-accent transition-colors"
                      >
                        +{n}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-none ml-auto">
                  <button
                    className="w-11 h-11 rounded-lg border border-line-2 grid place-items-center hover:border-ink"
                    onPointerDown={() => startHold(t.key, -1)}
                    onPointerUp={stopHold}
                    onPointerLeave={stopHold}
                    onClick={() => add(t.key, -1)}
                    aria-label={`Diminuir ${t.nome}`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-11 text-center font-display font-semibold text-lg">{qty[t.key]}</span>
                  <button
                    className="w-11 h-11 rounded-lg border border-line-2 grid place-items-center hover:border-ink"
                    onPointerDown={() => startHold(t.key, 1)}
                    onPointerUp={stopHold}
                    onPointerLeave={stopHold}
                    onClick={() => add(t.key, 1)}
                    aria-label={`Aumentar ${t.nome}`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-4.5 py-4 rounded-xl bg-steel-1 border border-line-2 mb-3">
            <span className="text-sm text-ink-2 font-medium">Total do pedido</span>
            <span className="font-display font-bold text-2xl">
              {total} <span className="text-sm text-ink-3 font-normal font-body">unidades</span>
            </span>
          </div>

          <p className={`font-mono text-[13px] mb-4 ${total < MINIMO ? "text-[#C0392B]" : "text-ink-3"}`}>
            {total < MINIMO
              ? `Faltam ${MINIMO - total} unidade${MINIMO - total === 1 ? "" : "s"} para atingir o mínimo de 50.`
              : "Mínimo atingido. Pode enviar o pedido."}
          </p>

          <button
            onClick={enviarPedido}
            disabled={total < MINIMO}
            className="w-full flex items-center justify-center gap-2.5 bg-wa hover:bg-wa-dark disabled:opacity-50 disabled:cursor-not-allowed text-[#0B2016] font-semibold text-base px-6 py-4 rounded-lg shadow-[0_6px_18px_rgba(37,211,102,0.28)] disabled:shadow-none transition-all"
          >
            <MessageCircle size={20} />
            Enviar pedido pelo WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-[13px] font-semibold text-ink-2 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-[15px] px-3.5 py-3 border border-line-2 rounded-lg focus:outline-none focus:border-accent focus:ring-[3px] focus:ring-accent/15 transition-shadow"
      />
    </div>
  );
}
