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

  const TARGET_DATE = new Date("2026-04-15T23:59:59-03:00");
  const START_DATE = new Date("2026-04-06T00:00:00-03:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
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
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white shadow-xl py-2 px-4 relative overflow-hidden group">
      {/* Detalhe decorativo animado */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10 pointer-events-none"></div>
      
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8"
      >
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-white animate-ping"></span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">OFERTA LIMITADA</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <p className="text-sm md:text-base font-extrabold tracking-tight text-center">
              MEGA PROMOÇÃO: Planos a partir de <span className="bg-white text-red-600 px-2 py-0.5 rounded italic ml-1">R$ 9,90/mês</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 md:gap-10">
          {/* Timer Premium */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex gap-2 font-mono text-center">
              {[
                { val: timeLeft.days, unit: 'd' },
                { val: timeLeft.hours, unit: 'h' },
                { val: timeLeft.minutes, unit: 'm' },
                { val: timeLeft.seconds, unit: 's', color: 'text-orange-200' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`bg-black/20 backdrop-blur-md w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 shadow-lg ${item.color || ''}`}>
                    <span className="text-sm font-black">{String(item.val).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[8px] uppercase font-bold mt-1 opacity-70 tracking-widest">{item.unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botão CTA */}
          <a 
            href="#planos" 
            className="group/btn relative inline-flex items-center gap-2 bg-white text-red-700 px-6 py-2.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] transition-all hover:scale-105 active:scale-95 hover:bg-orange-50"
          >
            Aproveite Agora
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Timer size={16} />
            </motion.span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};


export default PromotionalBanner;
