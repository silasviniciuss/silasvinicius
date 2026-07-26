import { Project, Service, Skill, Testimonial, FAQItem, Metric, TimelineItem } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Campanha de Lançamento Tech Keynote 2025',
    category: 'Motion Design',
    shortDescription: 'Teaser em 3D e motion graphics de alto impacto para evento de tecnologia internacional com mais de 2.5M de visualizações.',
    fullDescription: 'Desenvolvimento completo da identidade em movimento, animação 3D de produtos, sincronização rítmica sonora e pacote de transmissão ao vivo para lançamento de produtos globais.',
    client: 'Apex Global Tech',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      after: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      beforeLabel: '3D Wireframe / Draft',
      afterLabel: 'Render Final + Color FX'
    },
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    tools: ['After Effects', 'Blender', 'Cinema 4D', 'Premiere Pro'],
    objectives: [
      'Aumentar o engajamento do público pré-evento em 400%',
      'Criar um padrão visual futurista e minimalista',
      'Fornecer 15 variações de cortes para redes sociais'
    ],
    results: [
      '2.8 milhões de visualizações orgânicas nas primeiras 48h',
      '+42% na retenção média dos teasers comparado ao ano anterior',
      'Aprovação imediata de 100% da diretoria criativa'
    ],
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Edição Dinâmica para Criador de Conteúdo no YouTube',
    category: 'Edição de Vídeo',
    shortDescription: 'Corte ritmado, sound design imersivo e efeitos visuais customizados para vídeo principal com +1.2M views.',
    fullDescription: 'Edição de alta retenção voltada para engajamento e conversão. Inclui mapas de foco, zooms estratégicos, gráficos pop-up personalizados, correção de cor cinematográfica e restauração sonora.',
    client: 'Lucas Viana Channel',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=80',
      after: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
      beforeLabel: 'Arquivo Bruto (Log / Flat Color)',
      afterLabel: 'Grading S-Curve + Sound Design'
    },
    gallery: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80'
    ],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Audition'],
    objectives: [
      'Manter retenção de vídeo acima de 65% após os primeiros 2 minutos',
      'Integrar animações de texto no estilo MrBeast e Ali Abdaal',
      'Otimizar tempo de entrega para lançamentos semanais'
    ],
    results: [
      'Retenção média final atingiu 71.4%',
      '+85,000 novos inscritos gerados a partir do vídeo',
      'Tempo de produção reduzido de 4 dias para 24 horas'
    ],
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Redesign e Identidade Visual Premium - Lumina Real Estate',
    category: 'Branding',
    shortDescription: 'Branding completo para construtora de alto padrão, incluindo manual de marca, tipografia e diretrizes digitais.',
    fullDescription: 'Criação do ecossistema de marca do zero para mercado imobiliário de luxo. Desenvolvimento do logotipo vetorizado, paleta cromática sofisticada, aplicações físicas e padrões para mídias sociais.',
    client: 'Lumina Empreendimentos',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    objectives: [
      'Posicionar a empresa no segmento A/B com elegância e modernidade',
      'Desenvolver o guia de marca interativo com +40 páginas',
      'Criar templates modulares para feed e stories do Instagram'
    ],
    results: [
      'Aumento de 300% em leads qualificados no primeiro trimestre',
      'Premiação interna de excelência em design corporativo'
    ],
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Pack de Social Media & Reels de Alta Retenção para Finanças',
    category: 'Social Media',
    shortDescription: 'Design estratégico e animações curtas de 30s otimizadas para conversão no Instagram e TikTok.',
    fullDescription: 'Conjunto de artes estáticas e reels animados voltados para autoridade em finanças. Inclui motion typography, infográficos visuais deslumbrantes e thumbnails magnéticas.',
    client: 'InvestCapital',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
      after: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
      beforeLabel: 'Design Genérico Anterior',
      afterLabel: 'Novo Layout de Alta Conversão'
    },
    gallery: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ],
    tools: ['Photoshop', 'CapCut Pro', 'After Effects'],
    objectives: [
      'Padronizar a presença digital em múltiplos canais',
      'Gerar alcance viral continuo através de vídeos de 30 segundos'
    ],
    results: [
      '+5.4M de impressões em 30 dias',
      'Taxa de engajamento subiu de 1.2% para 6.8%'
    ],
    featured: false
  },
  {
    id: 'proj-5',
    title: 'Documentário Curto & Correção de Cor Cinematográfica',
    category: 'Edição de Vídeo',
    shortDescription: 'Edição narrativa de documentário institucional com graduação de cor em DaVinci Resolve e mixagem 5.1.',
    fullDescription: 'Trabalho minucioso de ritmo, escolha de trilhas sonoras autorais, manipulação de iluminação digital e finalização em 4K HDR para exibição em cinema e web.',
    client: 'Fundação EcoVida',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
      after: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80',
      beforeLabel: 'Perfil Rec.709 Sem Tratamento',
      afterLabel: 'Teal & Orange Grade Pro'
    },
    gallery: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80'
    ],
    tools: ['DaVinci Resolve', 'Premiere Pro', 'iZotope RX'],
    objectives: [
      'Criar um clima emotivo e envolvente para captação de doações',
      'Garantir padronização de cor em filmagens feitas com 3 câmeras distintas'
    ],
    results: [
      'Seleção oficial em 2 festivais internacionais de curtas',
      'Meta de doações atingida em apenas 12 dias'
    ],
    featured: true
  },
  {
    id: 'proj-6',
    title: 'Key Visual & Poster Art para Evento Político & Eleitoral',
    category: 'Design Gráfico',
    shortDescription: 'Design gráfico de alta visibilidade, cartazes urbanos, outdoors e peças digitais coordenadas para campanha eleitoral.',
    fullDescription: 'Composição gráfica impactante com manipulação fotográfica avançada no Photoshop, tratamento de pele profissional, corte e vetorização de precisão para outdoors digitais e impressos de grande formato.',
    client: 'Partido Mobilização',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80'
    ],
    tools: ['Photoshop', 'Illustrator'],
    objectives: [
      'Transmitir liderança, confiança e clareza de mensagem',
      'Garantir legibilidade perfeita em qualquer dimensão (do celular aos outdoors)'
    ],
    results: [
      'Campanha eleita com 58% dos votos válidos',
      'Zero distorções ou erros de impressão em mais de 50.000 cópias produzidas'
    ],
    featured: false
  }
];

export const SERVICES: Service[] = [
  {
    id: 'serv-1',
    title: 'Edição de Vídeo Premium',
    category: 'Edição de Vídeo',
    description: 'Cortes estratégicos de alta retenção, ritmo preciso, sound design profissional, efeitos visuais, legendas dinâmicas e color grading.',
    iconName: 'Video',
    deliverables: [
      'Vídeos curtos (Reels/TikTok/Shorts)',
      'Vídeos longos para YouTube',
      'Comerciais e VSLs de alta conversão',
      'Tratamento de áudio & iZotope RX',
      'Exportação otimizada em 4K 60FPS'
    ],
    popularTag: 'Mais Solicitado',
    deliveryTime: '24h - 72h'
  },
  {
    id: 'serv-2',
    title: 'Motion Design & 3D',
    category: 'Motion Design',
    description: 'Animações fluidas para aberturas, vinhetas, logotipos 3D, infográficos animados, elementos flutuantes e vinhetas publicitárias.',
    iconName: 'Sparkles',
    deliverables: [
      'Intro & Outro animada',
      'Explicativos em Motion 2D/3D',
      'Animação de Logotipo em vetor',
      'Pacote gráfico para Live Stream/Podcasts',
      'Overlay transparente (ProRes 4444)'
    ],
    popularTag: 'Tendência',
    deliveryTime: '3 - 7 dias'
  },
  {
    id: 'serv-3',
    title: 'Design Gráfico & Key Visual',
    category: 'Design Gráfico',
    description: 'Manipulação de imagem de nível avançado, cartazes, artes para eventos, thumbnails magnéticas e materiais de publicidade.',
    iconName: 'Palette',
    deliverables: [
      'Thumbnails magnéticas para YouTube',
      'Banners & Outdoor de alta resolução',
      'Tratamento fotográfico & Retoque Pro',
      'Posters e flyers promocionais'
    ],
    deliveryTime: '24h - 48h'
  },
  {
    id: 'serv-4',
    title: 'Identidade Visual & Branding',
    category: 'Branding',
    description: 'Criação completa de marcas memoráveis, logotipos vetorizados, tipografia exclusiva, paleta de cores e guia de marca digital.',
    iconName: 'Shapes',
    deliverables: [
      'Logotipo exclusivo + variações',
      'Manual de uso da marca em PDF',
      'Mockups realistas 3D',
      'Kit de papéis timbrados e cartões'
    ],
    deliveryTime: '7 - 14 dias'
  },
  {
    id: 'serv-5',
    title: 'Social Media Kit Completo',
    category: 'Social Media',
    description: 'Feed harmônico, templates editáveis no Figma/Photoshop, carrosséis infinitos e estratégia visual de engajamento.',
    iconName: 'Share2',
    deliverables: [
      'Grade de posts (Artes + Reels)',
      'Carrosséis educativos interativos',
      'Capas de destaques e foto de perfil',
      'Templates totalmente editáveis'
    ],
    deliveryTime: '3 - 5 dias'
  },
  {
    id: 'serv-6',
    title: 'Landing Pages & Portfólios Web',
    category: 'Web Design',
    description: 'Design e desenvolvimento de landing pages focadas em conversão com animações suaves, alta velocidade e total responsividade.',
    iconName: 'Layout',
    deliverables: [
      'Design no Figma + Protótipo',
      'Desenvolvimento React / Tailwind',
      'Otimização SEO & Performance 95+',
      'Integração com WhatsApp e Analytics'
    ],
    deliveryTime: '5 - 10 dias'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Adobe Premiere Pro', level: 98, category: 'Vídeo', icon: 'Film', experienceYears: '6 anos' },
  { name: 'Adobe After Effects', level: 95, category: 'Motion', icon: 'Sparkles', experienceYears: '5 anos' },
  { name: 'DaVinci Resolve', level: 92, category: 'Vídeo', icon: 'Clapperboard', experienceYears: '4 anos' },
  { name: 'Adobe Photoshop', level: 96, category: 'Design', icon: 'Image', experienceYears: '6 anos' },
  { name: 'Adobe Illustrator', level: 90, category: 'Design', icon: 'PenTool', experienceYears: '5 anos' },
  { name: 'Blender 3D', level: 82, category: 'Motion', icon: 'Box', experienceYears: '3 anos' },
  { name: 'Figma', level: 94, category: 'Design', icon: 'Figma', experienceYears: '4 anos' },
  { name: 'CapCut Pro', level: 95, category: 'Vídeo', icon: 'Smartphone', experienceYears: '3 anos' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carlos Eduardo',
    role: 'Diretor de Marketing',
    company: 'Apex Global Tech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'A velocidade de entrega aliada a um senso estético refinado nos impressionou. O vídeo de lançamento gerou recorde de visualizações para nossa empresa!',
    projectTitle: 'Campanha Tech Keynote'
  },
  {
    id: 'test-2',
    name: 'Mariana Costa',
    role: 'Criadora de Conteúdo (+800k)',
    company: 'YouTube / Instagram',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'A retenção do meu canal subiu drasticamente depois que começamos a trabalhar juntos. O sound design e o ritmo de corte são simplesmente perfeitos.',
    projectTitle: 'Edição de Vídeos para YouTube'
  },
  {
    id: 'test-3',
    name: 'Roberto Andrade',
    role: 'CEO',
    company: 'Lumina Imóveis de Luxo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Transformou nossa marca do zero com um nível de sofisticação que nossos clientes do mercado imobiliário exigem. Recomendação de olhos fechados!',
    projectTitle: 'Rebranding Corporativo'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Geral',
    question: 'Como funciona o processo de orçamento e início do projeto?',
    answer: 'Você entra em contato pelo formulário ou WhatsApp. Analisamos seu briefing, definimos o prazo, escopo de entregáveis e orçamento. Após a aprovação e sinal, iniciamos a produção imediatamente com acompanhamento constante.'
  },
  {
    id: 'faq-2',
    category: 'Entregas',
    question: 'Quais são os prazos médios de entrega?',
    answer: 'Vídeos curtos para redes sociais (Reels/Shorts) costumam ser entregues entre 24h e 48h. Projetos mais complexos de motion design 3D ou branding levam de 3 a 10 dias úteis, respeitando sempre a data estipulada.'
  },
  {
    id: 'faq-3',
    category: 'Aprovações',
    question: 'Quantas rodadas de alterações estão inclusas?',
    answer: 'Todos os projetos incluem até 2 rodadas de ajustes finos inclusas no valor inicial. Garantimos que você fique 100% satisfeito com o resultado final do seu projeto.'
  },
  {
    id: 'faq-4',
    category: 'Arquivos',
    question: 'Em quais formatos receberei os arquivos finais?',
    answer: 'Para vídeos: MP4 4K H.264/H.265 e ProRes 422/4444 para transmissões. Para design: arquivos editáveis (PSD, AI, FIG) além dos formatos exportados em altíssima qualidade (PNG, SVG, PDF impresso).'
  },
  {
    id: 'faq-5',
    category: 'Pagamento',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX, transferência bancária, cartão de crédito em até 12x e pagamento via Invoice internacional para clientes no exterior.'
  }
];

export const METRICS: Metric[] = [
  { id: 'm1', label: 'Projetos Concluídos', value: 350, suffix: '+', description: 'Trabalhos entregues com pontualidade' },
  { id: 'm2', label: 'Visualizações Geradas', value: 15, suffix: 'M+', description: 'Total acumulado em vídeos editados' },
  { id: 'm3', label: 'Clientes Satisfeitos', value: 120, suffix: '+', description: 'Empresas, agências e criadores' },
  { id: 'm4', label: 'Anos de Experiência', value: 6, suffix: '+', description: 'Atuando no mercado audiovisual' },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2023 - Presente',
    role: 'Lead Motion Designer & Senior Video Editor',
    company: 'Estúdio Freelance & Agências Parceiras',
    description: 'Direção de arte, edição de vídeos comerciais de alta conversão, tratamento de cor em DaVinci Resolve e motion graphics 3D para marcas internacionais.',
    highlight: true
  },
  {
    year: '2021 - 2023',
    role: 'Video Editor & Graphic Designer',
    company: 'Agência Digital Impulso',
    description: 'Criação de identidades visuais, anúncios em vídeo para tráfego pago com mais de R$ 5M investidos e vídeos de alta retenção para YouTube.',
    highlight: false
  },
  {
    year: '2019 - 2021',
    role: 'Motion Graphics Artist Jr.',
    company: 'Produtora Audiovisual Pixel',
    description: 'Animação de logotipos, introduções de programas, vinhetas para TV local e retoques fotográficos no Photoshop.',
    highlight: false
  }
];
