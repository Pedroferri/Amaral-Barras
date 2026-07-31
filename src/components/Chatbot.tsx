import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { WHATSAPP } from "../data";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const SAUDACAO: Msg = {
  role: "assistant",
  content:
    "Olá! Sou o atendente virtual da Amaral Barras. Posso te ajudar com dúvidas sobre os componentes, tipos disponíveis, pedido mínimo e envio. Como posso ajudar?",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([SAUDACAO]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function enviar() {
    const texto = input.trim();
    if (!texto || loading) return;
    const novaHistoria: Msg[] = [...messages, { role: "user", content: texto }];
    setMessages(novaHistoria);
    setInput("");
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: novaHistoria }),
      });
      if (!res.ok) throw new Error("Falha na resposta");
      const data = await res.json();
      setMessages([...novaHistoria, { role: "assistant", content: data.reply }]);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-ink text-white grid place-items-center shadow-[0_12px_30px_rgba(17,28,46,0.35)] hover:scale-105 transition-transform"
        aria-label={open ? "Fechar atendimento" : "Abrir atendimento"}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-[360px] h-[70vh] max-h-[520px] bg-white border border-line rounded-2xl shadow-[0_24px_60px_rgba(17,28,46,0.25)] flex flex-col overflow-hidden"
          >
            <div className="bg-ink text-white px-4 py-3.5">
              <div className="font-display font-semibold text-[15px]">Amaral Barras</div>
              <div className="text-xs text-[#AEBBD0]">Atendimento virtual</div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] text-[14px] leading-snug px-3.5 py-2.5 rounded-2xl ${
                    m.role === "user"
                      ? "bg-accent text-white self-end rounded-br-sm"
                      : "bg-steel-1 text-ink self-start rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="bg-steel-1 text-ink-3 self-start rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-[13px] font-mono">
                  digitando...
                </div>
              )}
              {error && (
                <div className="bg-[#FBEAE8] text-[#8B2E22] self-start rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-[13px]">
                  Estamos com instabilidade no momento. Chame direto no WhatsApp:{" "}
                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="underline font-semibold">
                    (11) 94193-8044
                  </a>
                </div>
              )}
            </div>

            <div className="border-t border-line p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && enviar()}
                placeholder="Digite sua pergunta..."
                className="flex-1 text-[14px] px-3.5 py-2.5 border border-line-2 rounded-lg focus:outline-none focus:border-accent"
              />
              <button
                onClick={enviar}
                disabled={loading}
                className="w-10 h-10 flex-none rounded-lg bg-ink text-white grid place-items-center disabled:opacity-50"
                aria-label="Enviar"
              >
                <Send size={17} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
