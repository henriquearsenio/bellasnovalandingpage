import logoMenor from "@/assets/logo-menor.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logoMenor} alt="b!" className="h-6 w-6 object-contain" />
            <span className="font-display font-bold text-lg text-primary">bellas!</span>
          </div>
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} bellas! — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;