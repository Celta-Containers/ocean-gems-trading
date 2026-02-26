import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/contexts/I18nContext";
import yardImg from "@/assets/containers-yard.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section id="about" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={yardImg}
                alt="Stock Storage Corp container yard"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              {t.about.tag}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<strong class="text-foreground">') }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
