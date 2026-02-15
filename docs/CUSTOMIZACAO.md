# Landing Page - Consultoria de Carreira

Uma landing page premium e completa para consultoria de carreira, com design sofisticado, animações sutis e totalmente responsiva (Desktop 1440px + Mobile 390px).

## 🎨 Características

- ✅ Design premium com paleta de cores sofisticada e fundo claro
- ✅ Animações sutis e elegantes com Motion (Framer Motion)
- ✅ Sliders interativos para depoimentos e conteúdos
- ✅ Totalmente responsivo (Desktop 1440px e Mobile 390px)
- ✅ Header sticky com menu hambúrguer no mobile
- ✅ Botão flutuante de WhatsApp no mobile
- ✅ FAQ com acordeão animado
- ✅ CTAs claros e estratégicos
- ✅ Suporte a "prefers-reduced-motion" para acessibilidade

## 📝 Como Personalizar os Placeholders

### 1. Informações da Marca (buscar e substituir)

Use o "Find & Replace" do seu editor para substituir:

- `LRI Consultoria de Carreiras` → Nome da sua consultoria (ex: "LRI Consultoria de Carreira")
- `[NOME DA CONSULTORA]` → Seu nome completo
- `[LINK_AGENDAR]` → URL do seu calendário (Calendly, Google Calendar, etc.)
- `[NUMERO]` → Número do WhatsApp com código do país (ex: 5511999999999)
- `[LINK_LINKEDIN]` → URL do seu perfil no LinkedIn
- `[LINK_INSTAGRAM]` → URL do seu perfil no Instagram
- `[EMAIL]` → Seu e-mail de contato

### 2. Componentes Principais

#### Header (`/src/app/components/Header.tsx`)
- Linha 40: Nome da consultoria
- Linhas 56 e 63: Links de WhatsApp e agendamento

#### Hero (`/src/app/components/Hero.tsx`)
- Linhas 36-40: Headline e subheadline
- Linha 69: Alt da imagem com nome da consultora
- Linha 68: URL da foto (usar Unsplash ou sua própria foto)

#### Sobre (`/src/app/components/Sobre.tsx`)
- Linha 35: Título com nome da consultora
- Linhas 49-70: Bio e descrição profissional
- Linhas 56-58: Credenciais (anos de experiência, certificações, etc.)
- Linha 51: URL da foto

#### Footer (`/src/app/components/Footer.tsx`)
- Linha 9: Links sociais (LinkedIn, Instagram, Email, WhatsApp)
- Linha 25: Nome da consultoria
- Linha 82: Copyright com nome da consultoria

### 3. Conteúdo Editável

#### Serviços (`/src/app/components/Servicos.tsx`)
Edite as linhas 5-39 para ajustar:
- Títulos dos pacotes
- Subtítulos (duração/formato)
- Features/benefícios de cada serviço
- Textos dos botões

#### Depoimentos (`/src/app/components/Depoimentos.tsx`)
Edite as linhas 12-48 para adicionar depoimentos reais:
- Nome do cliente (pode usar iniciais)
- Cargo/função
- Texto do depoimento
- Tag (Transição, Promoção, etc.)

#### Conteúdos/Blog (`/src/app/components/Conteudos.tsx`)
Edite as linhas 12-56 para adicionar seus artigos:
- Título do artigo
- Resumo
- Tag/categoria

#### FAQ (`/src/app/components/FAQ.tsx`)
Edite as linhas 6-32 para ajustar perguntas e respostas

### 4. Fotos/Imagens

As imagens atualmente usam placeholders do Unsplash. Para usar suas próprias fotos:

**Hero (linha 68 de Hero.tsx):**
```tsx
src="https://images.unsplash.com/photo-..." 
// Substituir por URL da sua foto
```

**Sobre (linha 51 de Sobre.tsx):**
```tsx
src="https://images.unsplash.com/photo-..."
// Substituir por URL da sua foto
```

Dica: Use o componente `ImageWithFallback` que já está importado para garantir que a imagem carregue corretamente.

## 🎨 Paleta de Cores

A paleta está configurada e não precisa ser alterada, mas está aqui para referência:

- **Background principal:** `#D9C2A3` (off-white quente)
- **Texto principal:** `#403837`
- **Títulos:** `#74685A`
- **CTA primário:** `#A47552` (hover: `#B47449`)
- **Dourado destaque:** `#C5A253` (badges, ícones)
- **Bordas/muted:** `#D8C3A5`
- **Acento atenção:** `#7A3E3E`

## 🚀 Próximos Passos Sugeridos

1. **Integração real de agendamento:** Conectar o botão "Agendar conversa" ao Calendly, Google Calendar, ou sistema de agendamento
2. **Formulário de contato:** Adicionar um formulário além do WhatsApp
3. **Analytics:** Adicionar Google Analytics ou Plausible
4. **SEO:** Adicionar meta tags, Open Graph, e Schema.org
5. **Blog real:** Conectar a seção de conteúdos a um CMS (Notion, Contentful, etc.)

## 📱 Responsividade

- **Desktop:** Otimizado para 1440px
- **Tablet:** Ajustes automáticos para 768px-1024px
- **Mobile:** Otimizado para 390px (iPhone padrão)

## ♿ Acessibilidade

- Suporte a `prefers-reduced-motion`
- Navegação por teclado funcional
- Aria labels em botões de ação
- Contraste adequado de cores
- Textos alternativos em imagens

## 📦 Tecnologias

- React 18
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- React Slick (carousels)
- Lucide React (ícones)

---

**Criado com Figma Make** 🎨
