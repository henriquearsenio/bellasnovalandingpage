import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  Bell,
  LayoutDashboard,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Atendimento com IA",
    description:
      "A Bella responde suas clientes no WhatsApp com naturalidade, apresenta serviços, preços e horários disponíveis.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento automático",
    description:
      "Suas clientes escolhem profissional, serviço e horário direto na conversa. Tudo confirmado na hora.",
  },
  {
    icon: Bell,
    title: "Lembretes automáticos",
    description:
      "Acabe com as faltas. A Bella envia lembretes e confirma presença, reagendando automaticamente se necessário.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel administrativo",
    description:
      "Controle total: veja agendamentos, faturamento, serviços e profissionais em um painel simples e completo.",
  },
  {
    icon: Users,
    title: "Gestão de profissionais",
    description:
      "Cadastre sua equipe, defina horários de cada profissional e deixe a IA distribuir os agendamentos.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e metas",
    description:
      "Acompanhe o faturamento, defina metas mensais e tenha visão clara do crescimento do seu studio.",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que seu studio precisa,{" "}
            <span className="text-primary italic">em um só lugar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            O bellas! combina inteligência artificial com gestão profissional para
            transformar seu atendimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <feature.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
