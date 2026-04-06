import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer } from "lucide-react";

const PromotionalBanner = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  // Data final: 15/04/2026 às 23:59:59 (Brasília UTC-3)
  const TARGET_DATE = new Date("2026-04-15T23:59:59-03:00");
  const START_DATE = new Date("2026-04-06T00:00:00-03:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Verifica se está no período da promoção
      if (now >= START_DATE && now <= TARGET_DATE) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        return;
      }

      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsVisible(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible || !timeLeft) return null;

  return (
    <div className="sticky top-0 z-[60] bg-destructive text-destructive-foreground shadow-lg overflow-hidden">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="container py-2 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8"
      >
        <div className="flex items-center gap-2">
          <span className="bg-white text-destructive text-[10px] md:text-xs font-black px-2 py-0.5 rounded-full animate-pulse uppercase tracking-wider">
            Mega Promoção
          </span>
          <p className="text-sm md:text-base font-bold text-center">
            Aproveite: Planos a partir de <span className="underline decoration-2 underline-offset-2">R$ 9,90</span>!
          </p>
        </div>

        <div className="flex items-center gap-4 bg-black/10 px-4 py-1 rounded-full border border-white/20">
          <div className="flex items-center gap-1.5 text-xs md:text-sm font-mono font-bold tracking-tighter">
            <Timer size={14} className="text-white/80" />
            <div className="flex gap-2">
              <span className="flex flex-col items-center">
                <span>{String(timeLeft.days).padStart(2, "0")}d</span>
              </span>
              <span className="opacity-50">:</span>
              <span className="flex flex-col items-center">
                <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
              </span>
              <span className="opacity-50">:</span>
              <span className="flex flex-col items-center">
                <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
              </span>
              <span className="opacity-50">:</span>
              <span className="flex flex-col items-center text-primary-foreground">
                <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PromotionalBanner;
