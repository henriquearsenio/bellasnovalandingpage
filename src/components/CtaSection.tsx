import { motion } from "framer-motion";

const CtaSection = () => {
  const REGISTER_URL = "https://app.bellas.ia.br/register";

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Fique livre para atender. A gente agenda para você.
          </h2>
          <p className="text-primary-foreground/80 text-lg font-body mb-8">
            Comece agora e veja seu studio se transformar com a inteligência artificial.
          </p>
          <a
            href={REGISTER_URL}
            className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity"
          >
            QUERO COMEÇAR AGORA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;