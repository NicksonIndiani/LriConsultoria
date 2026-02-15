import { motion } from "motion/react";
import { Button } from "../common/Button";
import { MessageCircle, Calendar } from "lucide-react";

export function CTAFinal() {
  return (
    <section id="cta-final" className="py-20 lg:py-28 relative overflow-hidden bg-[#D9C2A3]">
      {/* Gradiente de transição do FAQ */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#F5EDE3]/99 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1000px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl border border-[#D8C3A5]/60 p-8 md:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A47552] via-[#C5A253] to-[#A47552]" />

          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-[#C5A253] mx-auto mb-8 rounded-full"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl text-[#74685A] mb-6"
          >
            Pronto(a) para construir sua próxima fase com direção?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#403837]/80 mb-10 max-w-2xl mx-auto"
          >
            Uma conversa pode organizar o que hoje parece confuso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => window.open("https://calendly.com/contato-lriconsultoria/30min", "_blank")}
            >
              <Calendar className="w-5 h-5" />
              Agendar conversa
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const msg = encodeURIComponent("Olá, Letícia! 👋\nVim pelo site da LRI Consultoria e gostaria de saber mais sobre a mentoria de carreira.\nPodemos conversar?");
                window.open(`https://wa.me/5512991406108?text=${msg}`, "_blank");
              }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-[#403837]/50 mt-8"
          >
            Primeira conversa sem compromisso • 100% online
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
