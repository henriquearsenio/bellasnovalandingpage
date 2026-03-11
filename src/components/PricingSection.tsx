import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Individual",
      popular: false,
      monthly: { price: "39,90", full: "69,90" },
      yearly: { price: "478,80", full: "838,80" },
      features: [
        "Agendamento automático via WhatsApp",
        "Painel administrativo com faturamento",
        "Relatórios básicos de agendamentos",
        "Ideal para profissionais independentes",
      ],
      cta: "Trabalho sozinha",
    },
    {
      name: "Studio",
      popular: true,
      monthly: { price: "69,90", full: "99,90" },
      yearly: { price: "838,80", full: "1.198,80" },
      features: [
        "Tudo do plano Individual",
        "Gestão de vários profissionais",
        "Relatórios avançados por equipe",
        "Suporte prioritário",
        "Ideal para Studios com mais de um profissional",
      ],
      cta: "Para equipe",
    },
  ];

  return (
    <section id="planos" className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos que cabem no seu{" "}
            <span className="text-primary italic">bolso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body mb-8">
            Comece com 15 dias grátis. Sem cartão de crédito.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-muted rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                annual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Anual
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 border-2 bg-background ${
                plan.popular
                  ? "border-primary"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    Mais popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>

              <div className="mb-1">
                <span className="text-4xl font-bold text-foreground">
                  R${annual ? plan.yearly.price : plan.monthly.price}
                </span>
                <span className="text-muted-foreground font-body">
                  /{annual ? "ano" : "mês"}
                </span>
              </div>

              <p className="text-sm text-muted-foreground font-body mb-6">
                {annual ? (
                  <>
                    de <span className="line-through">R${plan.yearly.full}</span>
                  </>
                ) : (
                  <>
                    (nos 3 primeiros meses, depois R${plan.monthly.full})
                  </>
                )}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm font-body">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm font-body font-semibold">
                  <Check size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">Comece com 15 dias grátis</span>
                </li>
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border-2 border-primary text-primary hover:bg-primary/5"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
