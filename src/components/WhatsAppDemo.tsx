import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";

interface ChatMessage {
  from: "client" | "bella";
  text: string;
  time: string;
}

const conversation: ChatMessage[] = [
  { from: "client", text: "bom dia tudo bem?", time: "11:04" },
  {
    from: "bella",
    text: "Olá! 😊 Eu sou a Bella, assistente virtual do Studio Marinalva. Prazer em falar com você!\n\nAntes de tudo, preciso do seu nome para te cadastrar aqui no nosso sistema, tudo bem? 🌟",
    time: "11:05",
  },
  { from: "client", text: "Mariana Magalhães", time: "11:05" },
  {
    from: "bella",
    text: "Olá, Mariana! ✨ Que bom te receber aqui! Como posso te ajudar hoje? 😊",
    time: "11:06",
  },
  { from: "client", text: "Quero fazer unha", time: "11:06" },
  {
    from: "bella",
    text: "Perfeito, Mariana! Temos várias opções para deixar suas unhas ainda mais lindas! Olha só os procedimentos que posso agendar para você:\n\n• Manicure Simples – R$ 40,00\n• Manicure + Pedicure – R$ 65,00\n• Alongamento Fibra de Vidro – R$ 200,00\n• Manutenção de Alongamento – R$ 120,00\n• Esmaltação em Gel – R$ 50,00\n• Blindagem de Unhas – R$ 80,00\n• Pedicure Simples – R$ 35,00\n\nQual desses cuidados você quer fazer hoje? Me conta para eu separar um horário especial pra você! ✨🎉",
    time: "11:07",
  },
  { from: "client", text: "esmaltacao em gel", time: "11:07" },
  {
    from: "bella",
    text: "Amei sua escolha, Mariana! ✨ A Esmaltação em Gel garante unhas lindas, com brilho intenso e super durabilidade!\n\nTemos várias profissionais incríveis aqui no Studio Marinalva: Marinalva, Solange Costa, Bia Oliveira e Luana Silva.\n\nVocê tem preferência por alguma delas? Se quiser, já posso te mostrar horários disponíveis para a sua Esmaltação em Gel! Quem cuida de você nesse momento especial?",
    time: "11:08",
  },
  { from: "client", text: "horários", time: "11:08" },
  {
    from: "bella",
    text: "Separei horários lindos para sua Esmaltação em Gel hoje, Mariana! Dá uma olhada nas opções para cada profissional – assim você escolhe com quem quer brilhar! ✨\n\nCom Marinalva:\n🕐 13:00\n🕐 15:00\n🕐 16:00\n\nCom Solange Costa:\n🕐 13:00\n🕐 14:00\n🕐 16:00\n\nCom Bia Oliveira:\n🕐 11:40\n🕐 13:10\n🕐 16:00\n\nCom Luana Silva:\n🕐 13:00\n🕐 14:00\n🕐 16:00\n\nSe quiser ver outros horários ou ficou com dúvida sobre alguma profissional, é só falar! Qual dessas opções combina mais com sua rotina hoje?",
    time: "11:09",
  },
  { from: "client", text: "luana as 13", time: "11:09" },
  {
    from: "bella",
    text: "Mariana, olha só o resumo do seu momento de beleza:\n\n💅 Serviço: Esmaltação em Gel\n👩 Com: Luana Silva\n📅 Data: Sexta-feira, 16 de janeiro às 13:00\n💰 Valor: R$ 50,00\n\nPosso confirmar para você? Assim seu horário já fica garantido! ✨",
    time: "11:10",
  },
  { from: "client", text: "sim", time: "11:10" },
  {
    from: "bella",
    text: "Prontinho, Mariana! Sua sessão ficou assim:\n\n💅 Serviço: Esmaltação em Gel\n👩 Com: Luana Silva\n📅 Data: Sexta-feira, 16 de janeiro às 13:00\n💰 Valor: R$ 50,00\n\nSeu horário está garantido, viu? Qualquer dúvida, pedido especial ou se quiser adicionar outro cuidado, é só me chamar! Já estou ansiosa por esse momento lindo com você! ✨🌸",
    time: "11:10",
  },
  { from: "client", text: "ok", time: "11:11" },
  {
    from: "bella",
    text: "Arrasou, Mariana! ✨ Ficou tudo certinho – seu horário está reservado. Nos vemos sexta-feira, às 13h, para deixar suas unhas maravilhosas com a Luana Silva! Qualquer coisa, pode contar comigo. 😘💖\n\nStudio Marinalva\nAvenida da Liberdade, 475 - Jardim Botânico, Jundiaí/SP\n\nUm abraço e até logo!",
    time: "11:11",
  },
];

const WhatsAppDemo = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja a <span className="text-primary italic">Bella</span> em ação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Uma conversa real no WhatsApp. Sua cliente é atendida em segundos, sem
            você precisar tocar no celular.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          {/* Phone mockup */}
          <div className="rounded-3xl border-4 border-foreground/10 bg-[#ECE5DD] overflow-hidden">
            {/* Header */}
            <div className="bg-[#075E54] text-primary-foreground px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold">
                B
              </div>
              <div>
                <div className="font-semibold text-sm">Seu Studio</div>
                <div className="text-xs opacity-80">online</div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-3 space-y-2 max-h-[480px] overflow-y-auto">
              {conversation.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                      msg.from === "client"
                        ? "bg-[#DCF8C6] rounded-tr-none"
                        : "bg-card rounded-tl-none"
                    }`}
                  >
                    {msg.from === "bella" && (
                      <div className="text-xs font-semibold text-primary mb-1 italic">
                        Bella (Secretária):
                      </div>
                    )}
                    <p className="text-foreground whitespace-pre-line text-[13px] leading-relaxed">
                      {msg.text}
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-muted-foreground">
                        {msg.time}
                      </span>
                      {msg.from === "client" && (
                        <CheckCheck size={14} className="text-blue-500" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;
