// Número de WhatsApp da Amaral Barras (com código do país)
export const WHATSAPP = "5511941938044";

// Ordem correta: Alta -> Média -> Baixa -> Baixíssima -> Barra Única
// gauge = posição da haste no componente (0 = topo, 100 = base); null = sem haste (Barra Única)
export interface TipoBarra {
  key: string;
  nome: string;
  gauge: number | null;
  legenda: string;
  // Foto real do produto. Troque pela URL da sua própria foto com fundo removido
  // (ex.: hospede em https://res.cloudinary.com ou no seu próprio domínio).
  imagem: string;
}

export const TIPOS: TipoBarra[] = [
  {
    key: "alta",
    nome: "Alta",
    gauge: 16,
    legenda: "HASTE ALTA",
    imagem: "/imagens/barra-alta.jpg.png",
  },
  {
    key: "media",
    nome: "Média",
    gauge: 50,
    legenda: "HASTE AO MEIO",
    imagem: "/imagens/barra-media.jpg.png",
  },
  {
    key: "baixa",
    nome: "Baixa",
    gauge: 80,
    legenda: "HASTE BAIXA",
    imagem: "/imagens/barra-baixa.jpg.png",
  },
  {
    key: "baixissima",
    nome: "Baixíssima",
    gauge: 94,
    legenda: "HASTE NA BASE",
    imagem: "/imagens/barra-baixissima.jpg.png",
  },
  {
    key: "unica",
    nome: "Barra Única",
    gauge: null,
    legenda: "SEM HASTE",
    imagem: "/imagens/barra-unica.jpg.png",
  },
];
