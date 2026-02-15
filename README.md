# 🎨 Landing Page Premium - Consultoria de Carreira

> Uma landing page completa, sofisticada e de alta conversão para consultorias de carreira, construída com React, Tailwind CSS e Motion.

![Status](https://img.shields.io/badge/status-ready%20to%20deploy-success)
![Responsive](https://img.shields.io/badge/responsive-desktop%20%26%20mobile-blue)
![Animations](https://img.shields.io/badge/animations-motion%20(framer%20motion)-purple)

---

## ✨ Características Principais

### 🎯 Design & UX
- **Paleta Premium:** Fundo claro e sofisticado (#D9C2A3) com acentos dourados
- **Animações Sutis:** Scroll reveal, hover effects e transições suaves
- **100% Responsivo:** Otimizado para Desktop (1440px) e Mobile (390px)
- **Header Sticky:** Navegação sempre acessível com scroll suave
- **Sliders Elegantes:** Depoimentos e conteúdos com react-slick

### 📱 Componentes
- ✅ Hero com headline impactante e foto profissional
- ✅ Seção "Para Quem É" com 6 situações comuns
- ✅ 3 Pacotes de Serviços com destaque visual
- ✅ Processo em 3 Etapas (stepper animado)
- ✅ Lista de Benefícios + Plano de 30 Dias
- ✅ Slider de Depoimentos (6 cards)
- ✅ Slider de Conteúdos (8 artigos)
- ✅ Seção Sobre com bio e credenciais
- ✅ FAQ com accordion animado
- ✅ CTA Final de alta conversão
- ✅ Footer completo com redes sociais
- ✅ Botão flutuante de WhatsApp (mobile)

### 🚀 Performance & Acessibilidade
- ✅ Animações respeitam `prefers-reduced-motion`
- ✅ Lazy loading de imagens
- ✅ Scroll behavior suave
- ✅ Aria labels em elementos interativos
- ✅ Contraste adequado de cores (WCAG AA)

---

## 📁 Estrutura do Projeto

```
📦 landing-page-consultoria/
├── 📄 INICIO-RAPIDO.md          # ⭐ COMECE AQUI
├── 📄 CUSTOMIZACAO.md           # Como personalizar
├── 📄 EXEMPLO.md                # Exemplos reais
├── 📄 DEPLOY.md                 # Checklist pré-launch
├── 📄 ESTRUTURA.md              # Arquitetura técnica
├── 📄 COPYWRITING.md            # Dicas de copy e conversão
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── App.tsx              # Componente principal
│   │   └── 📂 components/
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── ParaQuemE.tsx
│   │       ├── Servicos.tsx
│   │       ├── ComoFunciona.tsx
│   │       ├── Beneficios.tsx
│   │       ├── Depoimentos.tsx
│   │       ├── Conteudos.tsx
│   │       ├── Sobre.tsx
│   │       ├── FAQ.tsx
│   │       ├── CTAFinal.tsx
│   │       ├── Footer.tsx
│   │       ├── FloatingWhatsApp.tsx
│   │       ├── AgendamentoModal.tsx (opcional)
│   │       └── 📂 componentes reutilizáveis/
│   │           ├── Button.tsx
│   │           ├── Chip.tsx
│   │           ├── Badge.tsx
│   │           ├── ServiceCard.tsx
│   │           ├── TestimonialCard.tsx
│   │           ├── ContentCard.tsx
│   │           ├── ProblemCard.tsx
│   │           └── AccordionFAQ.tsx
│   │
│   └── 📂 styles/
│       ├── index.css            # Estilos globais + slick
│       ├── theme.css            # Design tokens
│       └── tailwind.css         # Configuração Tailwind
│
├── 📄 package.json
└── 📄 vite.config.ts
```

---

## 🚀 Quick Start

### 1. Instalar Dependências
```bash
npm install
```

### 2. Rodar Localmente
```bash
npm run dev
```

Abrir: `http://localhost:5173`

### 3. Personalizar (5 passos)
```bash
# Abrir INICIO-RAPIDO.md e seguir o guia
```

### 4. Build para Produção
```bash
npm run build
```

---

## 🎨 Paleta de Cores

```css
/* Fundo e Estrutura */
--background:       #D9C2A3  /* Off-white quente */
--muted:            #D8C3A5  /* Bordas e chips */

/* Texto */
--text-primary:     #403837  /* Texto principal */
--text-heading:     #74685A  /* Títulos */

/* CTAs */
--cta-primary:      #A47552  /* Botão primário */
--cta-hover:        #B47449  /* Hover */

/* Destaques */
--accent-gold:      #C5A253  /* Dourado (badges, ícones) */
--attention:        #7A3E3E  /* Acento vermelho suave */
--olive:            #8A785D  /* Detalhes discretos */
```

---

## 📦 Tecnologias

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| React | 18.3.1 | Framework UI |
| TypeScript | Latest | Type safety |
| Tailwind CSS | 4.1.12 | Styling |
| Motion | 12.23.24 | Animações |
| React Slick | 0.31.0 | Carousels |
| Lucide React | 0.487.0 | Ícones |
| Vite | 6.3.5 | Build tool |

---

## 📝 Personalização Rápida

### Substituir Placeholders
```bash
# Use Find & Replace no seu editor:

LRI Consultoria de Carreiras  → Sua Consultoria
[NOME DA CONSULTORA]   → Seu Nome
[LINK_AGENDAR]         → https://calendly.com/...
[NUMERO]               → 5511999998888
[LINK_LINKEDIN]        → https://linkedin.com/...
[LINK_INSTAGRAM]       → https://instagram.com/...
[EMAIL]                → seu@email.com
```

### Trocar Fotos
```tsx
// Hero.tsx e Sobre.tsx
src="https://images.unsplash.com/..."
// Substituir pela URL da sua foto
```

### Editar Serviços
```tsx
// Servicos.tsx (linha 5)
const services = [
  {
    title: "Seu Serviço",
    subtitle: "Descrição curta",
    features: ["Feature 1", "Feature 2"],
    ctaText: "CTA",
    featured: false
  }
];
```

---

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
1. Arraste a pasta `dist` após build
2. Ou conecte ao GitHub para deploy automático

### GitHub Pages
```bash
npm run build
# Upload da pasta dist
```

---

## 📊 Estrutura de Conversão

```
Visitante → Hero (Captura atenção)
         ↓
    Para Quem É (Identificação)
         ↓
    Serviços (Ofertas claras)
         ↓
    Como Funciona (Reduz ansiedade)
         ↓
    Benefícios (Prova de valor)
         ↓
    Depoimentos (Prova social)
         ↓
    Conteúdos (Autoridade)
         ↓
    Sobre (Conexão pessoal)
         ↓
    FAQ (Remove objeções)
         ↓
    CTA Final (Conversão) → Cliente
```

---

## 🎯 Métricas Esperadas

Com copy otimizado e tráfego qualificado:

- **Taxa de Scroll:** 60-70% chegam em Serviços
- **Engagement:** 2-4 minutos tempo médio
- **Conversão:** 2-5% clicam em CTA (depende do tráfego)
- **Mobile:** 55-65% dos visitantes

---

## ✅ Checklist Pré-Launch

- [ ] Todos os placeholders substituídos
- [ ] Fotos profissionais adicionadas
- [ ] Links de agendamento funcionando
- [ ] WhatsApp configurado
- [ ] Testado em Chrome, Firefox, Safari
- [ ] Testado em mobile (real ou DevTools)
- [ ] Analytics instalado (Google Analytics, Plausible)
- [ ] SEO: Meta tags, Open Graph
- [ ] Política de privacidade criada
- [ ] Testado em amigos/conhecidos (feedback)

---

## 📚 Documentação

| Arquivo | Descrição |
|---------|-----------|
| **INICIO-RAPIDO.md** | ⭐ Guia de 5 passos para publicar |
| **CUSTOMIZACAO.md** | Como personalizar todos os elementos |
| **EXEMPLO.md** | Exemplos reais de personalização |
| **DEPLOY.md** | Checklist completo + integrações |
| **ESTRUTURA.md** | Arquitetura técnica detalhada |
| **COPYWRITING.md** | Dicas de copy e otimização de conversão |

---

## 💡 Próximos Passos Sugeridos

### Semana 1: Launch
1. Personalizar conteúdo
2. Trocar fotos
3. Publicar versão beta
4. Coletar feedback

### Semana 2-4: Otimização
1. Adicionar Analytics
2. Testar diferentes headlines (A/B)
3. Adicionar depoimentos reais
4. Otimizar SEO

### Mês 2+: Crescimento
1. Blog/conteúdos semanais
2. Integrar com CRM
3. Automações de e-mail
4. Campanhas de tráfego pago

---

## 🆘 Suporte

**Problemas comuns:**
- Animações não funcionam → Rodar `npm install`
- Slider quebrado → Verificar importação do CSS slick
- WhatsApp não abre → Verificar formato do número (sem + ou espaços)

**Dúvidas:**
1. Consulte os arquivos de documentação
2. Verifique o console do navegador (F12)
3. Teste em modo incógnito (limpa cache)

---

## 📄 Licença

Este projeto foi criado como template para uso comercial.
Você é livre para:
- ✅ Usar para seus projetos
- ✅ Modificar conforme necessário
- ✅ Vender serviços baseados nele

---

## 🎉 Créditos

**Criado com:**
- ❤️ Muita atenção aos detalhes
- ⚡ Figma Make
- 🎨 Princípios de UX/UI
- 📈 Foco em conversão

---

## 🚀 Comece Agora!

```bash
# 1. Instalar
npm install

# 2. Rodar
npm run dev

# 3. Personalizar
# Abrir INICIO-RAPIDO.md

# 4. Publicar
npm run build
vercel
```

**Boa sorte com seu lançamento! 🎯**

---

<div align="center">

**[📖 Ler Documentação Completa](./INICIO-RAPIDO.md)** • **[🎨 Ver Exemplos](./EXEMPLO.md)** • **[🚀 Deploy Guide](./DEPLOY.md)**

Feito com ❤️ usando **Figma Make**

</div>
