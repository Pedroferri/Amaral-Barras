import { WHATSAPP } from "../data";

// Ícones de redes sociais como SVG inline (lucide-react não tem ícones sociais)
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-deep text-[#AEBBD0] pt-14 pb-8">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="flex flex-wrap justify-between gap-8 pb-8 border-b border-white/10">
          <div className="max-w-[340px]">
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-white mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2A3E5C] to-ink grid place-items-center">
                <span className="w-1 h-4 rounded-sm bg-gradient-to-b from-[#E8EEF6] to-[#9FB2CC]" />
              </span>
              Amaral Barras
            </div>
            <p className="text-sm leading-relaxed">
              Componentes de níquel cromo para carga imediata. Peças usinadas de precisão, parafuso
              incluso e atendimento nacional.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] grid place-items-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] grid place-items-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <a href="#componentes" className="text-sm hover:text-white transition-colors">Componentes</a>
            <a href="#diferenciais" className="text-sm hover:text-white transition-colors">Diferenciais</a>
            <a href="#como-funciona" className="text-sm hover:text-white transition-colors">Como funciona</a>
            <a href="#pedido" className="text-sm text-white font-semibold">Fazer pedido</a>
          </div>

          <div className="flex flex-col gap-2.5 text-sm">
            <span className="text-white font-semibold mb-1">Contato</span>
            <span>WhatsApp: (11) 94193-8044</span>
            <span>ABC Paulista, SP</span>
          </div>
        </div>

        <div className="pt-5 text-[13px] text-[#7A8AA3] flex flex-wrap justify-between gap-2.5">
          <span>© 2026 Amaral Barras — Atendimento nacional</span>
          <span className="font-mono">Barras para prótese de carga imediata</span>
        </div>
      </div>
    </footer>
  );
}
