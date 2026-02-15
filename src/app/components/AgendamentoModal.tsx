import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "./Button";

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgendamentoModal({ isOpen, onClose }: AgendamentoModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você pode integrar com seu sistema de agendamento
    // Por exemplo: enviar para Calendly, Google Calendar, ou seu backend
    
    console.log("Dados do formulário:", formData);
    
    // Redirecionar para Calendly ou outro sistema
    window.open("[LINK_AGENDAR]", "_blank");
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9C2A3] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#D9C2A3] border-b border-[#D8C3A5] px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-semibold text-[#74685A]">
                    Agendar conversa
                  </h2>
                  <p className="text-sm text-[#403837] opacity-70 mt-1">
                    Primeira conversa sem compromisso • 100% online
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#D8C3A5] rounded-full transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-6 h-6 text-[#74685A]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="flex items-center gap-2 text-[#403837] mb-2">
                      <User className="w-4 h-4 text-[#A47552]" />
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C3A5] bg-white bg-opacity-70 text-[#403837] focus:border-[#A47552] focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-[#403837] mb-2">
                      <Mail className="w-4 h-4 text-[#A47552]" />
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C3A5] bg-white bg-opacity-70 text-[#403837] focus:border-[#A47552] focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="telefone" className="flex items-center gap-2 text-[#403837] mb-2">
                      <MessageSquare className="w-4 h-4 text-[#A47552]" />
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C3A5] bg-white bg-opacity-70 text-[#403837] focus:border-[#A47552] focus:outline-none transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  {/* Serviço de Interesse */}
                  <div>
                    <label htmlFor="servico" className="flex items-center gap-2 text-[#403837] mb-2">
                      <Calendar className="w-4 h-4 text-[#A47552]" />
                      Serviço de interesse
                    </label>
                    <select
                      id="servico"
                      name="servico"
                      value={formData.servico}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C3A5] bg-white bg-opacity-70 text-[#403837] focus:border-[#A47552] focus:outline-none transition-colors"
                    >
                      <option value="">Selecione...</option>
                      <option value="diagnostico">Diagnóstico de Carreira</option>
                      <option value="mentoria">Mentoria de Carreira</option>
                      <option value="acompanhamento">Acompanhamento</option>
                      <option value="ainda-nao-sei">Ainda não sei</option>
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="mensagem" className="flex items-center gap-2 text-[#403837] mb-2">
                      <MessageSquare className="w-4 h-4 text-[#A47552]" />
                      Como posso te ajudar? (opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C3A5] bg-white bg-opacity-70 text-[#403837] focus:border-[#A47552] focus:outline-none transition-colors resize-none"
                      placeholder="Conte um pouco sobre o momento que você está vivendo na carreira..."
                    />
                  </div>

                  {/* Info Box */}
                  <div className="bg-[#C5A253] bg-opacity-10 border border-[#C5A253] rounded-xl p-4">
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-[#A47552] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-[#403837]">
                        <p className="font-medium mb-1">Próximos passos:</p>
                        <ul className="space-y-1 opacity-80">
                          <li>• Você será redirecionado para escolher data e horário</li>
                          <li>• Receberá confirmação por e-mail</li>
                          <li>• Link da videochamada chegará antes da sessão</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button type="submit" className="flex-1">
                      <Calendar className="w-5 h-5" />
                      Escolher data e horário
                    </Button>
                    <Button 
                      type="button" 
                      variant="secondary" 
                      onClick={onClose}
                      className="flex-1 sm:flex-initial"
                    >
                      Cancelar
                    </Button>
                  </div>

                  <p className="text-xs text-center text-[#403837] opacity-60 pt-2">
                    Ao continuar, você concorda com nossa Política de Privacidade
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
