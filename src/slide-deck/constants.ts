import { SlideData } from './types';
import karinaPortrait from '@/assets/karina-portrait.jpg';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    layout: 'cover',
    title: "CAPACITAÇÃO",
    subtitle: "Processo Legislativo Municipal + Tramitação Eletrônica",
    highlight: ""
  },
{
    id: 2,
    layout: 'list',
    title: "Por que este treinamento",
    content: [
      "O processo legislativo “tradicional” já é complexo",
      "A implantação do eletrônico aumenta a exigência de padronização",
      "O objetivo é transformar a rotina em “trilha clara + prova documental”",
      "Resultado esperado: mais segurança e menos retrabalho"
    ]
  },
  {
    id: 3,
    layout: 'cards',
    title: "Objetivos Principais",
    subtitle: "O que vamos dominar hoje",
    cards: [
      { title: "Objetivo 1", text: "Entender o processo legislativo municipal (termos e lógica), de forma didática." },
      { title: "Objetivo 2", text: "Dominar a tramitação eletrônica e usar recursos do sistema para qualidade e transparência." }
    ]
  },
  {
    id: 4,
    layout: 'cards',
    title: "Trilha de Validade",
    subtitle: "6 pontos que evitam retrabalho e risco",
    cards: [
      { title: "Competência", text: "O Município pode tratar do tema?" },
      { title: "Iniciativa", text: "Quem propõe tem legitimidade?" },
      { title: "Rito", text: "As etapas foram cumpridas?" },
      { title: "Quórum", text: "Votação e presença corretas?" },
      { title: "Publicidade", text: "Há prova documental?" },
      { title: "Texto", text: "Técnica e coerência do conteúdo final" }
    ]
  },
  {
    id: 5,
    layout: 'timeline',
    title: "Mapa do Fluxo",
    subtitle: "Linha do tempo do Processo Legislativo",
    content: [
      "Protocolo / Autuação",
      "Despacho",
      "Comissões",
      "Pauta",
      "Discussão",
      "Votação",
      "Redação Final",
      "Autógrafo",
      "Sanção / Veto",
      "Promulgação",
      "Arquivo"
    ],
    highlight: "Onde mais falha: Instrução incompleta, controle fraco de versões, falta de prova de quórum."
  },
  {
    id: 6,
    layout: 'list',
    title: "Espécies Normativas",
    subtitle: "A escolha do “tipo certo”",
    content: [
      "Emenda à Lei Orgânica (rito agravado)",
      "Lei ordinária / Lei complementar municipal",
      "Decreto legislativo (efeitos externos sem sanção)",
      "Resolução (matéria interna)"
    ],
    footerNote: ""
  },
  {
    id: 7,
    layout: 'section',
    title: "Triagem Inicial",
    subtitle: "Competência + Admissibilidade",
    content: [
      "É assunto de interesse local?",
      "Invade competência de outro ente?",
      "Contraria norma geral/estadual?",
      "Depende de execução administrativa?",
      "Texto íntegro e justificado?",
      "Anexos essenciais presentes?"
    ],
    highlight: "O despacho inicial registrado é o marco zero da segurança."
  },
  {
    id: 8,
    layout: 'split',
    title: "Iniciativa Legislativa",
    subtitle: "Zona de Risco: Quem pode deflagrar?",
    content: [
      "Iniciativa define a legitimidade",
      "Vício de iniciativa = Anulação frequente",
      "Risco: Organização do Executivo e RH",
      "Risco: Imposições administrativas",
      "Risco: Orçamento e planejamento",
      "Prevenção: Nunca tramitar no automático"
    ]
  },
  {
    id: 9,
    layout: 'list',
    title: "Tramitação",
    subtitle: "Checklist do caminho até o plenário",
    content: [
      "Protocolo: abrir processo + conferir requisitos + versionar",
      "Despacho: comissões competentes + regime + comunicação",
      "Pré-Pauta: pareceres + emendas organizadas + texto-base"
    ]
  },
  {
    id: 10,
    layout: 'cards',
    title: "Comissões",
    subtitle: "Parecer + Ata + Prova",
    cards: [
      { title: "Função", text: "Filtrar juridicidade, mérito e finanças." },
      { title: "Parecer", text: "Relatório + Fundamentação + Voto." },
      { title: "Registro", text: "Convocação, quórum e juntada imediata." }
    ]
  },
  {
    id: 11,
    layout: 'list',
    title: "Emendas e Substitutivos",
    subtitle: "Controle de Versão é vital",
    content: [
      "Tipos: aditiva, modificativa, supressiva, substitutiva",
      "Prática: numeração padronizada, vínculo ao dispositivo",
      "Integridade: Nunca sobrescrever, sempre gerar nova versão",
      "Cuidado: Pertinência temática e coerência com a espécie"
    ]
  },
  {
    id: 12,
    layout: 'split',
    title: "Pauta, Discussão e Votação",
    subtitle: "O Plenário é soberano, mas precisa de registro",
    content: [
      "Processo deve estar íntegro na pauta",
      "Texto-base e emendas identificados",
      "Registrar quórum de instalação",
      "Forma de votação clara (simb/nom)",
      "Resultado rastreável no sistema",
      "Ata deve espelhar a realidade"
    ],
    highlight: "Regra de ouro: Reconstituir o que foi votado, como e por quem."
  },
  {
    id: 13,
    layout: 'timeline',
    title: "Fase Final",
    subtitle: "Do plenário à vigência",
    content: [
      "Redação Final",
      "Autógrafo",
      "Sanção / Veto",
      "Publicação Oficial"
    ],
    highlight: "Redação final ajusta forma sem alterar mérito. Autógrafo formaliza envio ao Executivo."
  },
  {
    id: 14,
    layout: 'section',
    title: "Técnica Legislativa",
    subtitle: "Para sair “publicável”",
    content: [
      "Clareza e comandos verificáveis",
      "Artigos curtos e objetivos",
      "Ementa fiel ao conteúdo",
      "Vigência e revogação explícitas",
      "Sem contradições internas"
    ]
  },
  {
    id: 15,
    layout: 'list',
    title: "Governança Documental",
    subtitle: "O que não pode faltar no processo",
    content: [
      "Versões do texto (original → emendas → redação final)",
      "Pareceres, atas e registros de votação",
      "Remessas, recebimentos e comprovação de publicação",
      "Trilha de auditoria: quem juntou e quando"
    ]
  },
  {
    id: 16,
    layout: 'split',
    title: "Eletrônico: O que muda",
    subtitle: "Não muda a essência, organiza o rito.",
    content: [
        "Registro: ato/decisão vira peça + movimentação",
        "Integridade: nunca substituir; sempre nova versão",
        "Publicidade: portal espelha a linha do tempo"
    ],
    highlight: "O sistema espelha a linha do tempo real.",
    imagePlaceholder: true
  },
  {
    id: 17,
    layout: 'cards',
    title: "Papéis e Responsabilidades",
    cards: [
      { title: "Autor", text: "Propõe e assina" },
      { title: "Protocolo", text: "Confere, autua, classifica" },
      { title: "Mesa", text: "Despacha, pauta" },
      { title: "Comissões", text: "Relatoria, parecer, ata" },
      { title: "Plenário", text: "Discussão, votação" },
      { title: "TI/Comunicação", text: "Logs, backup, portal" }
    ]
  },
  {
    id: 18,
    layout: 'list',
    title: "Fluxo Padrão no Sistema",
    content: [
      "Recebimento → Cadastro e Conferência",
      "Autuação → Número, capa, anexos",
      "Instrução → Notas, pareceres, diligências",
      "Sessão → Discussão, votação, resultado",
      "Fase Externa → Autógrafo, sanção, publicação"
    ]
  },
  {
    id: 19,
    layout: 'split',
    title: "Segurança",
    subtitle: "Acessos, Assinaturas e Integridade",
    content: [
      "Perfis de acesso definidos (quem pode o quê)",
      "Assinatura eletrônica (validade jurídica)",
      "Integridade: minuta x versão publicada",
      "Logs e rastreio como proteção institucional"
    ],
    imagePlaceholder: true
  },
  {
    id: 20,
    layout: 'split',
    title: "Transparência",
    subtitle: "Comunicação com o Cidadão",
    content: [
      "Publicação no diário eletrônico",
      "Portal: íntegra, tramitação, pareceres e votos",
      "Informações padrão: status, autor, datas",
      "Linguagem simples e padronização"
    ],
    imagePlaceholder: true
  },
  {
    id: 21,
    layout: 'cards',
    title: "Perguntas que resolvem 80%",
    subtitle: "O checklist mental",
    cards: [
      { text: "Qual o tipo e objeto?" },
      { text: "Está completa?" },
      { text: "Qual a fase atual?" },
      { text: "Há prazo correndo?" },
      { text: "Quem é o responsável?" },
      { text: "Está publicado correto?" }
    ]
  },
  {
    id: 22,
    layout: 'cards',
    title: "Materiais de Apoio",
    subtitle: "Para padronizar o trabalho e ganhar tempo",
    cards: [
      { title: "Checklists Operacionais", text: "Triagem, Comissão, Plenário, Pós-aprovação" },
      { title: "Quadro de Parametrização", text: "Quórums, turnos, prazos, urgência (RI/LOM)" },
      { title: "Glossário Essencial", text: "Termos-chave do sistema eletrônico" }
    ]
  },
  {
    id: 23,
    layout: 'closing',
    tag: "TREINAMENTO",
    tagSub: "Processo Legislativo",
    title: "Encerramento",
    subtitle: "Modernização com rastreabilidade e confiança",
    highlight: "O segredo de um grande sucesso está no trabalho de uma grande equipe.",
    authorName: "KARINA BOTTI",
    authorRole: "Assessora Jurídica",
    authorOAB: "OAB/MG 111.637",
    authorImage: karinaPortrait,
    imagePlaceholder: true
  }
];


