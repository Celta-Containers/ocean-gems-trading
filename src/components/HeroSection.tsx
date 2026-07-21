import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import heroImg from "@/assets/hero-ship.jpg";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Container ship carrying maritime shipping containers at sea"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-steel-light font-medium tracking-widest uppercase text-sm mb-4"
          >
            {t.hero.tag}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight mb-6"
          >
            <span className="sr-only">Stock Storage Corp — Global Maritime Container Trading. </span>
            {t.hero.title1}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>{" "}
            {t.hero.title2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-hero-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                {t.hero.cta} <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#services">{t.hero.ctaSecondary}</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
