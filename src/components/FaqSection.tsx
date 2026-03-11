import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso saber mexer em tecnologia?",
    a: "Não! O bellas! foi feito para ser simples. Você cria sua conta, cadastra seus serviços e vincula o WhatsApp lendo um QR Code. Em menos de 2 minutos está tudo funcionando.",
  },
  {
    q: "A Bella realmente responde como uma pessoa?",
    a: "Sim! A Bella usa inteligência artificial avançada para conversar de forma natural, educada e personalizada com o tom do seu studio. Suas clientes vão amar o atendimento.",
  },
  {
    q: "E se minha cliente quiser falar comigo pessoalmente?",
    a: "Sem problema! A Bella identifica quando a conversa precisa de atendimento humano e direciona a cliente para você. Você sempre tem o controle.",
  },
  {
    q: "Funciona para studio com mais de um profissional?",
    a: "Claro! Com o plano Studio, você cadastra toda sua equipe. A Bella mostra os horários de cada profissional e a cliente escolhe com quem quer agendar.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim, sem multa e sem burocracia. Você pode cancelar diretamente pelo painel administrativo quando quiser.",
  },
  {
    q: "Os 15 dias grátis precisam de cartão de crédito?",
    a: "Não! Você começa a usar sem precisar informar dados de pagamento. Só paga depois de comprovar que o bellas! funciona para o seu studio.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary italic">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
