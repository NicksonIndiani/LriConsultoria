# 🚀 Deploy e Checklist Final

## ✅ Checklist Pré-Deploy

### 1. Personalizações Obrigatórias

- [ ] Substituir `[NOME DA CONSULTORIA]` em todos os arquivos
- [ ] Substituir `[NOME DA CONSULTORA]` em todos os arquivos
- [ ] Adicionar link real de agendamento `[LINK_AGENDAR]`
- [ ] Adicionar número de WhatsApp `[NUMERO]` (formato: 5511999999999)
- [ ] Adicionar links de redes sociais (LinkedIn, Instagram)
- [ ] Adicionar e-mail de contato `[EMAIL]`
- [ ] Substituir fotos do Unsplash por fotos reais da consultora
- [ ] Personalizar credenciais na seção Sobre
- [ ] Adicionar depoimentos reais (ou manter placeholders profissionais)
- [ ] Revisar todos os textos e ajustar para seu tom de voz

### 2. Conteúdo

- [ ] Revisar e ajustar serviços oferecidos (títulos, preços, features)
- [ ] Personalizar FAQ com perguntas reais dos seus clientes
- [ ] Adicionar artigos/conteúdos reais ou remover seção temporariamente
- [ ] Verificar todos os CTAs e links funcionais

### 3. SEO & Meta Tags

Adicione no `<head>` do seu index.html:

```html
<title>Consultoria de Carreira | [NOME DA CONSULTORIA]</title>
<meta name="description" content="Clareza, posicionamento e plano de ação para sua próxima fase profissional. Mentoria de carreira com estratégia e pé no chão." />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://seusite.com/" />
<meta property="og:title" content="[NOME DA CONSULTORIA] - Consultoria de Carreira" />
<meta property="og:description" content="Carreira não é acaso. É construção consciente." />
<meta property="og:image" content="https://seusite.com/og-image.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://seusite.com/" />
<meta property="twitter:title" content="[NOME DA CONSULTORIA] - Consultoria de Carreira" />
<meta property="twitter:description" content="Carreira não é acaso. É construção consciente." />
<meta property="twitter:image" content="https://seusite.com/og-image.jpg" />
```

### 4. Analytics & Tracking

Adicione no `<head>` (opcional mas recomendado):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Meta Pixel (Facebook) -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### 5. Integrações Recomendadas

#### Calendly (Agendamento)
```tsx
// No botão "Agendar conversa", use:
href="https://calendly.com/seu-usuario/30min"
```

#### WhatsApp Business API
- Configure respostas automáticas
- Crie um link personalizado: wa.me/5511999999999?text=Olá,%20vim%20pelo%20site

#### Formulário de Contato (Opcional)
Considere adicionar Formspree, Netlify Forms, ou Google Forms como alternativa

## 🌐 Opções de Deploy

### Opção 1: Vercel (Recomendado)
1. Criar conta em vercel.com
2. Conectar repositório GitHub
3. Deploy automático
4. Domínio custom gratuito

```bash
npm install -g vercel
vercel login
vercel
```

### Opção 2: Netlify
1. Criar conta em netlify.com
2. Arraste a pasta build ou conecte ao GitHub
3. Configure build command: `npm run build`
4. Publish directory: `dist`

### Opção 3: GitHub Pages
```bash
npm run build
# Fazer upload da pasta dist para gh-pages branch
```

## 🔒 Privacidade & Legal

### Páginas Obrigatórias (criar):

1. **Política de Privacidade**
   - Como você coleta dados
   - Como usa os dados
   - Cookies (se usar analytics)
   - LGPD compliance

2. **Termos de Uso**
   - Condições de contratação
   - Política de cancelamento
   - Direitos autorais

Ferramentas para gerar:
- termsfeed.com
- freeprivacypolicy.com
- iubenda.com (pago mas completo)

## 📊 Métricas para Acompanhar

1. **Taxa de Conversão**
   - Visitantes → Cliques no CTA
   - Cliques → Agendamentos efetivos

2. **Tempo na Página**
   - Ideal: 2-5 minutos (indica engajamento)

3. **Taxa de Rejeição**
   - Ideal: < 60%

4. **Seções Mais Visitadas**
   - Use Hotjar ou Microsoft Clarity (grátis)

## 🔧 Manutenção Contínua

### Mensal:
- [ ] Atualizar depoimentos
- [ ] Adicionar novos artigos/conteúdos
- [ ] Revisar e atualizar fotos
- [ ] Verificar links quebrados

### Trimestral:
- [ ] Revisar copy e textos
- [ ] Atualizar credenciais/números
- [ ] A/B test de headlines e CTAs

### Anual:
- [ ] Redesign se necessário
- [ ] Atualizar fotos profissionais
- [ ] Revisar estratégia de SEO

## 🎯 Testes Antes do Launch

- [ ] Testar em Chrome, Firefox, Safari
- [ ] Testar em iPhone (Safari Mobile)
- [ ] Testar em Android (Chrome Mobile)
- [ ] Verificar velocidade (pagespeed.web.dev)
- [ ] Testar todos os links e botões
- [ ] Verificar formulários e integrações
- [ ] Testar em modo escuro (se aplicável)
- [ ] Verificar acessibilidade (wave.webaim.org)

## 📱 QR Code para Eventos

Gere um QR code apontando para seu site:
- qr-code-generator.com
- Use em cartões de visita
- Use em apresentações
- Use em eventos/workshops

## 💡 Dica Final

**Soft Launch:** 
1. Lance para um grupo pequeno primeiro (10-20 pessoas conhecidas)
2. Colete feedback
3. Faça ajustes
4. Lance oficialmente

**Anúncio:**
- Post no LinkedIn (pessoal e profissional)
- Stories no Instagram por 3 dias
- E-mail para contatos próximos
- Mensagem no WhatsApp Status

---

**Boa sorte com seu lançamento! 🚀**
