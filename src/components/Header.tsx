import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP } from "../data";

const LINKS = [
  { href: "#componentes", label: "Componentes" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#pedido", label: "Fazer pedido" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-[0_4px_24px_rgba(17,28,46,0.06)] border-b border-line" : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-5 flex items-center justify-between h-[70px]">
        <a href="#" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight">
          <span className="w-8 h-8 rounded-[9px] bg-gradient-to-br from-[#243651] to-ink flex items-center justify-center">
            <span className="w-[5px] h-4 rounded-sm bg-gradient-to-b from-[#E8EEF6] to-[#9FB2CC]" />
          </span>
          <span>
            Amaral <span className="text-accent">Barras</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-ink-2 font-medium hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-wa hover:bg-wa-dark text-[#0B2016] font-semibold text-sm px-5 py-3 rounded-lg shadow-[0_6px_18px_rgba(37,211,102,0.28)] transition-transform hover:-translate-y-0.5"
        >
          Fazer pedido
        </a>

        <button className="md:hidden p-2 text-ink" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-line overflow-hidden"
          >
            <div className="px-5 pb-4 flex flex-col">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-line text-ink-2 font-medium"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
