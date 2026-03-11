import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">b!</div>
          <span className="font-display font-bold text-xl text-primary">bellas!</span>
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
            href="#"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity uppercase tracking-wide"
          >
            TESTE GRÁTIS
          </a>
          <a
            href="#"
            className="border border-primary text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors"
          >
            Entrar
          </a>
        </div>

        {/* Mobile & Tablet: buttons + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#"
            className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity uppercase tracking-wide"
          >
            TESTE GRÁTIS
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground ml-1"
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
          <a
            href="#"
            className="block text-sm font-semibold text-primary"
          >
            Entrar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;