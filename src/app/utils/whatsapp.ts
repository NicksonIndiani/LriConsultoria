const PHONE = "5512991696375";

const messages = {
  hero: "Olá, Letícia! 👋\nVim pelo site da LRI Consultoria e quero entender como a consultoria de carreira pode me ajudar.\nPodemos conversar?",
  header: "Olá, Letícia! 👋\nVim pelo site da LRI Consultoria e gostaria de conversar sobre minha carreira.\nPode me ajudar?",
  ctaFinal: "Olá, Letícia! 👋\nEstou pronto(a) para dar o próximo passo na minha carreira!\nVi as opções no site da LRI e quero saber qual faz mais sentido pra mim.",
  depoimentos: "Olá, Letícia! 👋\nVi os depoimentos no site da LRI e me identifiquei muito.\nQuero saber como você pode me ajudar também!",
  comoFunciona: "Olá, Letícia! 👋\nEntendi o processo da consultoria no site da LRI e faz muito sentido pra mim.\nQuero agendar uma conversa!",
  sobre: "Olá, Letícia! 👋\nLi sobre sua trajetória no site da LRI e gostei muito da sua abordagem.\nGostaria de saber como podemos trabalhar juntas.",
  floating: "Olá, Letícia! 👋\nVim pelo site da LRI Consultoria e gostaria de tirar algumas dúvidas.\nPodemos conversar?",
  footer: "Olá, Letícia! 👋\nVim pelo site da LRI Consultoria e gostaria de mais informações.\nPodemos conversar?",
  servico: (nome: string) => `Olá, Letícia! 👋\nVim pelo site da LRI Consultoria e tenho interesse no serviço: *${nome}*.\nPodemos conversar sobre como funciona?`,
} as const;

export type WhatsAppContext = keyof typeof messages;

export function openWhatsApp(context: Exclude<WhatsAppContext, "servico">) {
  const msg = encodeURIComponent(messages[context]);
  window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
}

export function openWhatsAppServico(servico: string) {
  const msg = encodeURIComponent(messages.servico(servico));
  window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
}

export function getWhatsAppUrl(context: Exclude<WhatsAppContext, "servico">) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(messages[context])}`;
}
