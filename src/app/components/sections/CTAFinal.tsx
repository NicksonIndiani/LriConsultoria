import { motion } from "motion/react";
import { Button } from "../common/Button";
import { MessageCircle, Calendar } from "lucide-react";

export function CTAFinal() {
  return (
    <section id="cta-final" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C5A253] via-transparent to-[#D9C2A3] opacity-10" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-[1000px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl border-2 border-[#D8C3A5] p-8 md:p-12 lg:p-16 text-center shadow-2xl"
        >
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
            className="text-lg md:text-xl text-[#403837] mb-10 max-w-2xl mx-auto"
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
              href="[LINK_AGENDAR]"
            >
              <Calendar className="w-5 h-5" />
              Agendar conversa
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open("https://wa.me/[NUMERO]", "_blank")}
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
            className="text-sm text-[#403837] opacity-70 mt-8"
          >
            Primeira conversa sem compromisso • 100% online
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
