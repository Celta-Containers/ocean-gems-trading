import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/contexts/I18nContext";

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  const stats = [
    { value: "15+", label: t.stats.years },
    { value: "50+", label: t.stats.countries },
    { value: "10K+", label: t.stats.containers },
    { value: "500+", label: t.stats.clients },
  ];

  return (
    <section ref={ref} className="py-16 bg-steel-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
