import { useState, useMemo } from "react";
import { Menu, X } from "lucide-react";
import logoMenor from "@/assets/logo-menor.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lógica de Promoção: 06/04/2026 a 15/04/2026
  const isPromoActive = useMemo(() => {
    const now = new Date();
    const START_DATE = new Date("2026-04-06T00:00:00-03:00");
    const TARGET_DATE = new Date("2026-04-15T23:59:59-03:00");
    return now >= START_DATE && now <= TARGET_DATE;
  }, []);

  const links = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ];

  const LOGIN_URL = "https://app.bellas.ia.br/login";
  const REGISTER_URL = "https://app.bellas.ia.br/register";

  return (
    <nav className="relative z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src={logoMenor} alt="bellas!" className="h-8 md:h-10 w-auto object-contain" />
        </a>

        {/* Desktop only: full nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={REGISTER_URL}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all uppercase tracking-wide shadow-sm ${
              isPromoActive 
                ? "bg-destructive text-white animate-pulse shadow-destructive/20" 
                : "bg-primary text-primary-foreground"
            }`}
          >
            {isPromoActive ? "GARANTIR DESCONTO" : "TESTE GRÁTIS"}
          </a>
          <a
            href={LOGIN_URL}
            className="border border-primary text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors"
          >
            Entrar
          </a>
        </div>

        {/* Mobile & Tablet: buttons + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={REGISTER_URL}
            className={`px-3 py-2 rounded-lg text-[10px] sm:text-xs font-bold hover:opacity-90 transition-all uppercase tracking-wide ${
              isPromoActive 
                ? "bg-destructive text-white shadow-lg" 
                : "bg-primary text-primary-foreground"
            }`}
          >
            {isPromoActive ? "APROVEITAR" : "TESTE GRÁTIS"}
          </a>
          <a
            href={LOGIN_URL}
            className="border border-primary text-primary px-3 py-2 rounded-lg text-[10px] sm:text-xs font-semibold hover:bg-primary/5 transition-colors"
          >
            Entrar
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground ml-1 p-1"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet menu — only nav links */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;