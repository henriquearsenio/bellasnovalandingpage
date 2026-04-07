import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Flame } from "lucide-react";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const REGISTER_URL = "https://app.bellas.ia.br/register";

  // Lógica de Promoção: 06/04/2026 a 15/04/2026
  const isPromoActive = useMemo(() => {
    const now = new Date();
    const START_DATE = new Date("2026-04-06T00:00:00-03:00");
    const TARGET_DATE = new Date("2026-04-15T23:59:59-03:00");
    return now >= START_DATE && now <= TARGET_DATE;
  }, []);

  const PROMO_MONTHLY = "9,90";
  const PROMO_YEARLY = "99,90";

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
    <section id="planos" className="py-20 md:py-28 bg-card relative overflow-hidden scroll-mt-32 md:scroll-mt-44">


      {isPromoActive && (
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Flame size={400} className="text-destructive rotate-12" />
        </div>
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {isPromoActive && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-1.5 rounded-full mb-6 border border-destructive/20"
            >
              <Flame size={16} className="fill-current" />
              <span className="text-sm font-black uppercase tracking-tighter">Mega Promoção Ativa</span>
            </motion.div>
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos que cabem no seu{" "}
            <span className="text-primary italic">bolso</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body mb-8 italic">
            Não é necessário cartão de crédito.
          </p>

          {/* Lightning Promo Card */}
          {isPromoActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mb-16 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white border border-primary/20 rounded-[1.8rem] p-6 md:p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                
                <div className="flex flex-col items-center relative z-10 text-center">
                  <div className="flex items-center gap-2 mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <Flame size={24} className="text-primary fill-primary/20" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">
                      Promoção Relâmpago termina em:
                    </h3>
                  </div>

                  <div className="flex items-center justify-center gap-3 md:gap-6 mb-8">
                    {[
                      { label: "Dias", val: Math.floor((new Date("2026-04-15T23:59:59-03:00").getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) },
                      { label: "Horas", val: Math.floor(((new Date("2026-04-15T23:59:59-03:00").getTime() - new Date().getTime()) / (1000 * 60 * 60)) % 24) },
                      { label: "Min", val: Math.floor(((new Date("2026-04-15T23:59:59-03:00").getTime() - new Date().getTime()) / 1000 / 60) % 60) },
                      { label: "Seg", val: Math.floor(((new Date("2026-04-15T23:59:59-03:00").getTime() - new Date().getTime()) / 1000) % 60) },
                    ].map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 md:gap-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-primary/10 border border-primary/20 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl shadow-inner">
                            <span className="text-2xl md:text-4xl font-black text-primary tracking-tighter">
                              {String(Math.max(0, t.val)).padStart(2, '0')}
                            </span>
                          </div>
                          <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase mt-2 tracking-widest">{t.label}</span>
                        </div>
                        {idx < 3 && (
                          <span className="text-2xl md:text-4xl font-black text-primary/30 mt-[-20px] md:mt-[-28px]">:</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs md:text-sm font-medium text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full flex items-center gap-2 border border-border">
                    Promoção válida de 06/04/2026 até 15/04/2026. Aproveite agora antes que acabe! 
                    <span className="text-amber-500">⚠️</span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Toggle */}
          <div className="inline-flex items-center bg-muted rounded-full p-1 shadow-inner border border-border/50">
            <button
              onClick={() => setAnnual(false)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${!annual
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${annual
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
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
              className={`relative rounded-3xl p-8 border-2 bg-background transition-all duration-500 hover:shadow-2xl group ${plan.popular
                  ? "border-primary shadow-xl scale-105 z-10"
                  : "border-border shadow-md"
                } ${isPromoActive ? "hover:border-destructive/50" : ""}`}
            >
              {plan.popular && !isPromoActive && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-black px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                    Mais popular
                  </span>
                </div>
              )}

              {isPromoActive && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full flex justify-center">
                  <span className="bg-destructive text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider animate-pulse flex items-center gap-1">
                    <Flame size={12} className="fill-current" />
                    Mega Promoção
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{plan.name}</h3>

              <div className="mb-2">
                <div className="flex flex-col">
                  {isPromoActive && (
                    <span className="text-sm text-destructive font-bold line-through opacity-60 mb-1">
                      R$ {annual ? plan.yearly.price : plan.monthly.price}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-black tracking-tighter ${isPromoActive ? "text-destructive" : "text-foreground"}`}>
                      R$ {isPromoActive ? (annual ? PROMO_YEARLY : PROMO_MONTHLY) : (annual ? plan.yearly.price : plan.monthly.price)}
                    </span>
                    <span className="text-muted-foreground font-bold text-sm">
                      /{annual ? "ano" : "mês"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-12 flex items-center mb-6">
                <div className="text-xs md:text-sm text-muted-foreground font-body leading-relaxed">
                  {isPromoActive ? (
                    <span className="bg-destructive/5 text-destructive font-black px-2 py-1 rounded inline-block">
                      Válido por 12 meses, depois R$ {annual 
                        ? (plan.name === "Individual" ? "478,80" : "838,80") 
                        : (plan.name === "Individual" ? "69,90" : "99,90")}
                    </span>
                  ) : (
                    annual ? (
                      <>
                        economize <span className="font-bold text-primary">R$ {(parseFloat(plan.yearly.full.replace('.', '').replace(',', '.')) - parseFloat(plan.yearly.price.replace('.', '').replace(',', '.'))).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> por ano
                      </>
                    ) : (
                      <>
                        (nos 3 primeiros meses, depois R$ {plan.monthly.full})
                      </>
                    )
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-body group/item">
                    <div className={`mt-0.5 rounded-full p-0.5 transition-colors ${plan.popular ? "bg-primary/20" : "bg-muted"}`}>
                      <Check size={14} className={`${plan.popular ? "text-primary" : "text-muted-foreground"} shrink-0`} />
                    </div>
                    <span className="text-foreground/90 group-hover/item:text-foreground transition-colors leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={REGISTER_URL}
                className={`group relative overflow-hidden block w-full py-4 rounded-2xl font-black text-sm text-center transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg ${plan.popular || isPromoActive
                    ? "bg-primary text-primary-foreground hover:shadow-primary/25"
                    : "border-2 border-primary text-primary h-auto hover:bg-primary/5"
                  } ${isPromoActive && plan.popular ? "bg-destructive text-white hover:bg-destructive/90 shadow-destructive/20" : ""}`}
              >
                <span className="relative z-10 uppercase tracking-widest">{plan.cta}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;