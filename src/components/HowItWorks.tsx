import { motion } from "framer-motion";
import { UserPlus, ListChecks, Smartphone } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "Crie sua conta grátis",
    description:
      "Crie sua conta em menos de 2 minutos e comece a agendar com o bellas!. Sem complicação.",

  },
  {
    icon: ListChecks,
    number: "2",
    title: "Cadastre seus serviços",
    description:
      "Defina seus procedimentos, profissionais e horários disponíveis na agenda.",
  },
  {
    icon: Smartphone,
    number: "3",
    title: "Vincule seu WhatsApp",
    description:
      "Leia o QR Code com o WhatsApp do seu Studio e deixe a IA cuidar dos agendamentos!",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comece em <span className="text-primary italic">3 passos simples</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Configure o bellas! no seu studio em minutos, não em dias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto">
                  <step.icon size={32} className="text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
