const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white font-bold text-xs">b!</div>
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