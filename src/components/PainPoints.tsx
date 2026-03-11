import { motion } from "framer-motion";
import { AlertCircle, Clock, CalendarX, Users } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Tempo perdido no WhatsApp",
    description:
      "Horas do seu dia gastas respondendo as mesmas perguntas sobre horários, preços e disponibilidade.",
  },
  {
    icon: CalendarX,
    title: "Agendamentos perdidos",
    description:
      "Clientes desistem quando não recebem resposta rápida. Cada mensagem sem resposta é dinheiro perdido.",
  },
  {
    icon: AlertCircle,
    title: "Faltas e buracos na agenda",
    description:
      "Sem lembrete automático, clientes esquecem do horário. Resultado: cadeira vazia e faturamento menor.",
  },
  {
    icon: Users,
    title: "Agenda desorganizada",
    description:
      "Anotações em papel, horários conflitantes, profissionais sem visibilidade da agenda do dia.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cansada de perder tempo e{" "}
            <span className="text-primary italic">agendamentos</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Se você se identifica com algum desses problemas, o bellas! foi feito para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-border bg-background hover:border-bellas-pink/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <pain.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{pain.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
