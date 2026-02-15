# 🚀 Guia Rápido de Uso

## ✨ O que você recebeu

Uma **landing page premium completa** para consultoria de carreira, com:

- ✅ Design sofisticado e profissional
- ✅ 100% responsiva (Desktop 1440px + Mobile 390px)
- ✅ Animações sutis e elegantes
- ✅ Sliders interativos
- ✅ FAQ com accordion animado
- ✅ Botão flutuante de WhatsApp
- ✅ Header sticky com navegação suave
- ✅ 12 seções completas de conversão

## 🎯 5 Passos para Publicar

### 1. Personalize os Placeholders (30 min)

Abra o projeto no seu editor de código e use **Find & Replace** (Ctrl+F ou Cmd+F):

```
Buscar: LRI Consultoria de Carreiras
Substituir por: Sua Consultoria Ltda

Buscar: [NOME DA CONSULTORA]
Substituir por: Maria Silva

Buscar: [LINK_AGENDAR]
Substituir por: https://calendly.com/maria/30min

Buscar: [NUMERO]
Substituir por: 5511999998888

Buscar: [LINK_LINKEDIN]
Substituir por: https://linkedin.com/in/mariasilva

Buscar: [LINK_INSTAGRAM]
Substituir por: https://instagram.com/maria.consultoria

Buscar: [EMAIL]
Substituir por: maria@consultoria.com
```

### 2. Troque as Fotos (15 min)

**Arquivos a editar:**
- `/src/app/components/Hero.tsx` (linha ~68)
- `/src/app/components/Sobre.tsx` (linha ~51)

```tsx
// ANTES:
src="https://images.unsplash.com/photo-..."

// DEPOIS (use sua URL ou upload para Cloudinary/Imgur):
src="https://sua-url-de-foto.jpg"
```

### 3. Personalize Serviços e FAQ (20 min)

**Editar serviços:**
`/src/app/components/Servicos.tsx` (linhas 5-39)

**Editar FAQ:**
`/src/app/components/FAQ.tsx` (linhas 6-32)

**Editar depoimentos:**
`/src/app/components/Depoimentos.tsx` (linhas 12-48)

### 4. Teste Localmente (5 min)

```bash
# Instalar dependências (só na primeira vez)
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Abrir no navegador
http://localhost:5173
```

### 5. Publicar Online (10 min)

**Opção A: Vercel (Recomendado - Grátis)**
1. Criar conta em [vercel.com](https://vercel.com)
2. Clicar em "New Project"
3. Importar este projeto
4. Deploy automático!

**Opção B: Netlify (Grátis)**
1. Criar conta em [netlify.com](https://netlify.com)
2. Arrastar pasta do projeto
3. Pronto!

---

## 📱 Testando Responsividade

### No Chrome DevTools:
1. Abrir DevTools (F12)
2. Clicar no ícone de celular (ou Ctrl+Shift+M)
3. Testar em:
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1440px)

---

## 🎨 Personalizações Comuns

### Mudar cor do CTA primário

**Arquivo:** `/src/app/components/Button.tsx`

```tsx
// Linha 14, trocar:
primary: "bg-[#A47552] text-white hover:bg-[#B47449]"

// Por sua cor (exemplo):
primary: "bg-[#FF6B6B] text-white hover:bg-[#FF5252]"
```

### Adicionar WhatsApp Link Real

**Formato do número:**
```
5511999998888
│││└┴┴┴┴┴┴┴┴─ Número (9 dígitos)
││└──────────── DDD (2 dígitos)
│└───────────── 55 (código Brasil)
└────────────── Sem + ou espaços
```

**Exemplo real:**
```
País: Brasil (55)
DDD: São Paulo (11)
Número: 98765-4321

Resultado: 5511987654321
```

### Adicionar mais depoimentos

**Arquivo:** `/src/app/components/Depoimentos.tsx`

```tsx
// Adicione no array testimonials (linha 12):
{
  name: "J., Coordenador",
  role: "Coordenador de Vendas",
  text: "Seu depoimento aqui com resultado claro.",
  tag: "Promoção"
}
```

### Mudar textos do Hero

**Arquivo:** `/src/app/components/Hero.tsx`

```tsx
// Linha 36 - Headline
<h1>
  Sua nova headline aqui
</h1>

// Linha 44 - Subheadline
<p>
  Seu subtítulo expandido aqui
</p>
```

---

## 🔗 Links Importantes

### Integrações Recomendadas:

**Agendamento:**
- [Calendly](https://calendly.com) - Grátis para começar
- [Cal.com](https://cal.com) - Open source

**Analytics:**
- [Google Analytics](https://analytics.google.com)
- [Plausible](https://plausible.io) - Privacy-first

**Forms:**
- [Formspree](https://formspree.io) - Grátis até 50/mês
- [Netlify Forms](https://www.netlify.com/products/forms/)

**Email Marketing:**
- [Mailchimp](https://mailchimp.com) - Grátis até 500 contatos
- [ConvertKit](https://convertkit.com) - Para creators

---

## ⚡ Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Iniciar servidor local

# Build
npm run build           # Criar versão de produção
npm run preview         # Testar build localmente

# Instalar nova dependência
npm install nome-pacote
```

---

## 🆘 Problemas Comuns

### ❌ "Module not found"
**Solução:** Rodar `npm install`

### ❌ Animações não funcionam
**Solução:** Verificar se pacote `motion` está instalado

### ❌ Slider não aparece
**Solução:** Importar CSS do slick no componente:
```tsx
import "slick-carousel/slick/slick.css";
```

### ❌ WhatsApp não abre
**Solução:** Verificar formato do número (sem + ou espaços)

### ❌ Foto não carrega
**Solução:** Verificar URL ou usar ImageWithFallback

---

## 📚 Documentação Completa

Criamos 4 guias completos para você:

1. **CUSTOMIZACAO.md** - Como personalizar tudo
2. **EXEMPLO.md** - Exemplos reais de personalização
3. **DEPLOY.md** - Checklist completo pré-launch
4. **ESTRUTURA.md** - Arquitetura técnica detalhada
5. **COPYWRITING.md** - Dicas de copy e conversão

---

## 💬 Suporte

Se precisar de ajuda:

1. **Leia os guias** (90% das dúvidas estão lá)
2. **Verifique o console** do navegador (F12)
3. **Teste em modo incógnito** (às vezes é cache)

---

## ✅ Checklist Final Antes de Publicar

- [ ] Todos os placeholders substituídos
- [ ] Fotos reais adicionadas
- [ ] Links de WhatsApp e agendamento funcionando
- [ ] Testado no celular (Chrome DevTools)
- [ ] FAQ personalizado
- [ ] Depoimentos reais (ou profissionais)
- [ ] Meta tags de SEO adicionadas
- [ ] Analytics configurado
- [ ] Política de privacidade criada
- [ ] Testado em Chrome, Firefox e Safari

---

**Pronto! Agora é só publicar e começar a converter visitantes em clientes! 🚀**

**Dúvidas? Releia os guias - está tudo documentado! 📖**
