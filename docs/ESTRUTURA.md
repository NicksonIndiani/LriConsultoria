# 📐 Estrutura Técnica do Projeto

## 🗂️ Arquitetura de Componentes

```
/src/app/
├── App.tsx                          # Componente principal que orquestra todas as seções
├── components/
│   ├── Header.tsx                   # Header sticky com navegação e CTAs
│   ├── Hero.tsx                     # Seção hero com headline, imagem e CTAs
│   ├── ParaQuemE.tsx               # Grid de problemas que a consultoria resolve
│   ├── Servicos.tsx                # Cards dos 3 pacotes de serviço
│   ├── ComoFunciona.tsx            # Stepper com 3 etapas do processo
│   ├── Beneficios.tsx              # Lista de benefícios + card de plano 30 dias
│   ├── Depoimentos.tsx             # Slider de depoimentos (react-slick)
│   ├── Conteudos.tsx               # Slider de artigos/conteúdos (react-slick)
│   ├── Sobre.tsx                   # Bio da consultora com foto e credenciais
│   ├── FAQ.tsx                     # Perguntas frequentes com accordion
│   ├── CTAFinal.tsx                # CTA forte de conversão final
│   ├── Footer.tsx                  # Rodapé com links e redes sociais
│   ├── FloatingWhatsApp.tsx        # Botão flutuante de WhatsApp (mobile)
│   │
│   ├── Button.tsx                  # Botão reutilizável (primary, secondary, ghost)
│   ├── Chip.tsx                    # Tags/chips para categorias e badges
│   ├── Badge.tsx                   # Badge "Mais escolhido" com animação
│   ├── ServiceCard.tsx             # Card de serviço com hover e animação
│   ├── TestimonialCard.tsx         # Card de depoimento para slider
│   ├── ContentCard.tsx             # Card de artigo/conteúdo para slider
│   ├── ProblemCard.tsx             # Card de problema/situação
│   └── AccordionFAQ.tsx            # Accordion animado para FAQ
│
/src/styles/
├── index.css                        # Importa todos os estilos + customizações
├── theme.css                        # Tokens de design system (cores, espaçamentos)
├── tailwind.css                     # Configuração do Tailwind v4
└── fonts.css                        # Imports de fontes (se houver)
```

## 🎨 Design System

### Cores (Paleta Premium)

```css
/* Principais */
--background: #D9C2A3          /* Fundo claro e quente */
--text-primary: #403837        /* Texto principal */
--text-heading: #74685A        /* Títulos e estrutura */

/* CTAs */
--cta-primary: #A47552         /* Botão primário */
--cta-primary-hover: #B47449   /* Hover do primário */
--cta-secondary: #A47552       /* Outline do secundário */

/* Destaques */
--accent-gold: #C5A253         /* Dourado (badges, progresso) */
--muted: #D8C3A5              /* Bordas e chips */
--attention: #7A3E3E          /* Acentos de atenção */
--olive: #8A785D              /* Detalhes discretos */
```

### Tipografia

```css
/* Sistema de fontes padrão (ajustar conforme necessário) */
font-family: system-ui, -apple-system, sans-serif;

/* Hierarquia */
h1: text-4xl md:text-5xl lg:text-6xl      /* Hero headline */
h2: text-3xl md:text-4xl lg:text-5xl      /* Section titles */
h3: text-2xl                               /* Subsections */
h4: text-lg                                /* Card titles */
body: text-base (16px)                     /* Texto padrão */
```

### Espaçamentos

```css
/* Seções */
section padding: py-20 lg:py-28

/* Cards */
card padding: p-6 ou p-8
card radius: rounded-2xl (16px)
card gap: gap-6 ou gap-8

/* Container */
max-width: 1440px
padding: px-4 lg:px-8
```

## ⚡ Animações (Motion/Framer Motion)

### Padrões de Animação

```tsx
// Scroll Reveal (usado em quase todos os componentes)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.5, delay: 0.1 }}

// Hover em Cards
whileHover={{ 
  scale: 1.02, 
  borderColor: "#C5A253",
  boxShadow: "0 10px 30px rgba(164, 117, 82, 0.1)" 
}}

// Buttons
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Prefers Reduced Motion

Todos os usuários com `prefers-reduced-motion: reduce` têm animações desabilitadas automaticamente (configurado em `/src/styles/index.css`).

## 📱 Breakpoints de Responsividade

```css
/* Mobile First */
Base:        < 640px    (390px otimizado)
sm:          640px+
md:          768px+
lg:          1024px+    (Desktop navigation ativa)
xl:          1280px+
2xl:         1440px     (Container max-width)
```

### Mudanças Principais por Breakpoint

**Mobile (< 1024px):**
- Header: Menu hambúrguer
- Hero: Layout empilhado (texto + foto)
- Grids: 1 ou 2 colunas
- Sliders: 1 item por vez com swipe
- FloatingWhatsApp: Visível
- Espaçamentos reduzidos

**Desktop (≥ 1024px):**
- Header: Navegação horizontal completa
- Hero: Layout 2 colunas lado a lado
- Grids: 3 colunas
- Sliders: 3-4 itens visíveis
- FloatingWhatsApp: Oculto
- Espaçamentos amplos

## 🔧 Dependências Principais

```json
{
  "motion": "12.23.24",              // Animações
  "lucide-react": "0.487.0",         // Ícones
  "react-slick": "0.31.0",           // Carousels
  "slick-carousel": "^1.8.1",        // Estilos do carousel
  "tailwindcss": "4.1.12",           // CSS Framework
  "@radix-ui/*": "latest"            // Primitivos de UI (para futuros componentes)
}
```

## 🎯 Otimizações de Performance

### Implementadas:

1. **Lazy Loading de Animações**
   - `viewport={{ once: true }}` em todas as animações
   - Animações só executam quando elemento entra na viewport
   
2. **Scroll Behavior Smooth**
   - Navegação suave entre seções
   - CSS: `scroll-behavior: smooth`

3. **Image Optimization**
   - Uso de ImageWithFallback para todas as imagens
   - Lazy loading nativo do navegador

4. **CSS-in-JS Mínimo**
   - Preferência por Tailwind CSS
   - Menor bundle size de JavaScript

### Próximas Otimizações (Recomendadas):

1. **Code Splitting**
   ```tsx
   const Depoimentos = lazy(() => import('./components/Depoimentos'));
   ```

2. **Image CDN**
   - Usar Cloudinary ou imgix
   - Servir imagens em WebP/AVIF

3. **Font Optimization**
   - Usar `font-display: swap`
   - Subset de fontes

4. **Analytics Lazy Load**
   - Carregar scripts de analytics após interação

## 🧪 Testing Checklist

### Visual Testing:
- [ ] Chrome Desktop
- [ ] Firefox Desktop
- [ ] Safari Desktop
- [ ] Safari iOS (iPhone 12+)
- [ ] Chrome Android

### Functional Testing:
- [ ] Todos os links de navegação
- [ ] Scroll suave para âncoras
- [ ] Sliders (setas, dots, swipe)
- [ ] Accordion abre/fecha
- [ ] Botões hover/active states
- [ ] Menu mobile abre/fecha
- [ ] FloatingWhatsApp aparece no scroll

### Performance Testing:
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Cumulative Layout Shift < 0.1

## 📋 Componentes Reutilizáveis

### Button
```tsx
<Button variant="primary" size="lg" href="/link">
  Texto
</Button>

// Variants: primary | secondary | ghost
// Sizes: sm | md | lg
```

### ServiceCard
```tsx
<ServiceCard
  title="Título"
  subtitle="Subtítulo"
  features={["Feature 1", "Feature 2"]}
  ctaText="CTA"
  featured={true}
/>
```

### Accordion
```tsx
<Accordion items={[
  { question: "Pergunta?", answer: "Resposta." }
]} />
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção

# Preview
npm run preview      # Preview do build localmente
```

## 📝 Convenções de Código

1. **Nomes de Componentes:** PascalCase (ex: `ServiceCard.tsx`)
2. **Props Interface:** `ComponentNameProps`
3. **Funções auxiliares:** camelCase
4. **CSS Classes:** Tailwind utilities inline
5. **Comentários:** Apenas quando necessário para clareza

## 🔗 Links Úteis

- [Motion Docs](https://motion.dev/docs/react-quick-start)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React Slick](https://react-slick.neostack.com/)
- [Lucide Icons](https://lucide.dev/icons/)

---

**Documentação gerada para: Landing Page - Consultoria de Carreira** 📚
