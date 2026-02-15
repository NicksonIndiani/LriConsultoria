# Exemplo de Personalização

Este arquivo mostra um exemplo de como os placeholders podem ser preenchidos. 

## Exemplo Fictício: LRI Consultoria de Carreira

### Substituições (Find & Replace):

```
[NOME DA CONSULTORIA]     → LRI Consultoria de Carreira
[NOME DA CONSULTORA]      → Luciana Rodrigues
[LINK_AGENDAR]            → https://calendly.com/luciana-consultoria/30min
[NUMERO]                  → 5511987654321
[LINK_LINKEDIN]           → https://linkedin.com/in/lucianacarreira
[LINK_INSTAGRAM]          → https://instagram.com/lri.carreira
[EMAIL]                   → contato@lriconsultoria.com
```

### Resultado em Componentes:

#### Header:
```tsx
<a href="#hero" className="text-xl font-semibold text-[#74685A]">
  LRI Consultoria de Carreira
</a>
```

#### Hero:
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Carreira não é acaso. É construção consciente.
</h1>
<Button href="https://calendly.com/luciana-consultoria/30min">
  Agendar conversa
</Button>
<Button onClick={() => window.open("https://wa.me/5511987654321")}>
  Falar no WhatsApp
</Button>
```

#### Sobre:
```tsx
<h2>Sobre Luciana Rodrigues</h2>
<p>
  Apoio pessoas a tomarem decisões profissionais com clareza, 
  estratégia e execução.
</p>
<ul>
  <li>• 12 anos em RH e desenvolvimento de carreira</li>
  <li>• Certificação Internacional em Career Coaching (ICF)</li>
  <li>• MBA em Gestão de Pessoas pela FGV</li>
  <li>• 400+ profissionais acompanhados</li>
</ul>
```

#### Footer:
```tsx
<h3>LRI Consultoria de Carreira</h3>
<a href="https://linkedin.com/in/lucianacarreira">LinkedIn</a>
<a href="https://instagram.com/lri.carreira">Instagram</a>
<a href="mailto:contato@lriconsultoria.com">E-mail</a>
<a href="https://wa.me/5511987654321">WhatsApp</a>

<p>© 2026 LRI Consultoria de Carreira. Todos os direitos reservados.</p>
```

## Personalizando Serviços

### Exemplo Real (Servicos.tsx):

```tsx
const services = [
  {
    title: "Diagnóstico Estratégico",
    subtitle: "1 sessão de 90 minutos",
    features: [
      "Análise profunda do cenário atual",
      "Mapeamento de competências e gaps",
      "Plano de ação imediato e priorizado",
      "Material de apoio em PDF"
    ],
    ctaText: "Quero começar agora",
    featured: false
  },
  {
    title: "Mentoria Completa",
    subtitle: "6 sessões ao longo de 8 semanas",
    features: [
      "Posicionamento profissional único",
      "Reescrita completa do LinkedIn",
      "Currículo ATS-friendly + executivo",
      "Simulação de entrevistas",
      "Plano de execução de 60 dias",
      "Suporte por WhatsApp entre sessões"
    ],
    ctaText: "Ver investimento",
    featured: true
  },
  {
    title: "Acompanhamento Premium",
    subtitle: "Mensal com renovação flexível",
    features: [
      "1 sessão semanal de 60 minutos",
      "Suporte ilimitado por WhatsApp",
      "Revisão contínua de materiais",
      "Preparação para cada entrevista",
      "Apoio em negociações salariais"
    ],
    ctaText: "Quero saber mais",
    featured: false
  }
];
```

## Personalizando Depoimentos

### Exemplos Reais (Depoimentos.tsx):

```tsx
const testimonials = [
  {
    name: "Marina S.",
    role: "Gerente de Marketing",
    text: "Estava há 2 anos no mesmo cargo e sem perspectiva. Depois da mentoria, recebi 3 propostas em 6 semanas. Aceitei uma com 40% de aumento.",
    tag: "Promoção"
  },
  {
    name: "Ricardo P.",
    role: "Analista de Dados",
    text: "Queria migrar para Product Manager mas não sabia como. A Luciana me ajudou a construir uma narrativa clara e em 3 meses estava na nova função.",
    tag: "Transição"
  },
  {
    name: "Ana Carolina M.",
    role: "Consultora de RH",
    text: "Meu LinkedIn era invisível. Após as mudanças sugeridas, comecei a receber 4-5 abordagens de recrutadores por semana. Game changer!",
    tag: "Reposicionamento"
  }
];
```

## Personalizando FAQ

### Exemplo com Informações Reais:

```tsx
const faqItems = [
  {
    question: "Serve se eu estiver empregado(a)?",
    answer: "Com certeza! 85% dos meus clientes estão empregados e buscam o próximo passo. Trabalhar no seu desenvolvimento enquanto está empregado é estratégia inteligente, não deslealdade."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Aceito PIX, transferência bancária e cartão de crédito (com parcelamento em até 3x sem juros para a Mentoria Completa). Após nossa primeira conversa gratuita, você recebe a proposta comercial detalhada."
  },
  {
    question: "Quanto tempo até ver resultados?",
    answer: "Clareza você ganha já na primeira sessão. Resultados tangíveis (entrevistas, propostas, promoção) variam de 3 a 12 semanas, dependendo do mercado, sua senioridade e dedicação ao plano de ação."
  }
];
```

## Dica: Dados de Conversão

Adicione provas sociais reais nos componentes:

```tsx
// No Hero ou ParaQuemE, adicione:
<div className="flex gap-8 justify-center">
  <div className="text-center">
    <div className="text-3xl font-bold text-[#A47552]">400+</div>
    <div className="text-sm text-[#403837]">Profissionais atendidos</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-[#A47552]">92%</div>
    <div className="text-sm text-[#403837]">Taxa de satisfação</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-[#A47552]">6 sem</div>
    <div className="text-sm text-[#403837]">Tempo médio de resultado</div>
  </div>
</div>
```

---

**Use esses exemplos como guia para personalizar sua landing page!** 🚀
