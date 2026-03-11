import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import logoMenor from "@/assets/logo-menor.png";

const miniChat = [
  { from: "client" as const, text: "Olá, gostaria de agendar um horário", time: "12:15" },
  {
    from: "bella" as const,
    text: "Olá! 😊 Eu sou a Bella, assistente virtual do seu Studio. Claro! Temos horários disponíveis amanhã às 14h e 16h. Qual prefere? 💗",
    time: "12:15",
  },
  { from: "client" as const, text: "14h por favor!", time: "12:16" },
  {
    from: "bella" as const,
    text: "Perfeito! ✨ Agendado para amanhã às 14h. Vou te enviar um lembrete antes. Até lá! 🌸",
    time: "12:16",
  },
];

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background decorations - Soft Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bellas-lavender via-background to-bellas-pink-light/30" />
      
      {/* Animated Blobs for "Soft Gradient" look */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-bellas-pink-light/40 rounded-full blur-3xl" 
      />

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <img src={logoMenor} alt="b!" className="h-12 w-12 object-contain" />
              <span className="font-display font-bold text-4xl text-primary">bellas!</span>
            </div>

            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 font-medium text-sm px-4 py-1.5">
              Secretária IA para salões de beleza
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-5">
              Sua secretária com{" "}
              <span className="text-primary">IA</span> que atende no{" "}
              <span className="text-bellas-green">WhatsApp</span>{" "}
              <span className="text-accent">24h por dia</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0 font-body">
              Pare de perder agendamentos respondendo mensagens. A Bella cuida de
              tudo: agenda, confirma e lembra suas clientes — automaticamente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#planos"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity uppercase tracking-wide text-center"
              >
                TESTE GRÁTIS POR 15 DIAS
              </a>
              <a
                href="#como-funciona"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/5 transition-colors text-center"
              >
                Como funciona
              </a>
            </div>
          </motion.div>

          {/* Right column — phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full border-2 border-primary/10 animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="relative w-[300px] rounded-[2.5rem] border-[6px] border-foreground/15 bg-[#ECE5DD] shadow-2xl shadow-primary/20 overflow-hidden animate-float">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/15 rounded-b-2xl z-10" />
                <div className="bg-[#075E54] text-primary-foreground px-4 py-3 pt-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-bold">B</div>
                  <div>
                    <div className="font-semibold text-sm">Seu Studio</div>
                    <div className="text-[10px] opacity-80">online</div>
                  </div>
                </div>
                <div className="p-3 space-y-2 pb-6">
                  {miniChat.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-xl px-3 py-2 text-[12px] leading-relaxed ${msg.from === "client" ? "bg-[#DCF8C6] rounded-tr-none" : "bg-card rounded-tl-none"}`}>
                        <p className="text-foreground whitespace-pre-line">{msg.text}</p>
                        <div className="flex items-center justify-end gap-1 mt-0.5">
                          <span className="text-[9px] text-muted-foreground">{msg.time}</span>
                          {msg.from === "client" && <CheckCheck size={12} className="text-blue-500" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;