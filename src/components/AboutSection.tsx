import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import yardImg from "@/assets/containers-yard.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
                alt="Pátio de containers da Stock Storage Corp"
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
              Sobre nós
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Referência global em trading de containers marítimos
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Stock Storage Corp.</strong> é uma empresa
                especializada na compra e venda de containers marítimos, atuando em mais de 50
                países com uma rede logística robusta e eficiente.
              </p>
              <p>
                Com mais de 15 anos de experiência no mercado, oferecemos containers novos e
                usados de alta qualidade, sempre seguindo rigorosos padrões internacionais de
                inspeção e certificação.
              </p>
              <p>
                Nossa missão é fornecer soluções ágeis e confiáveis para empresas de todos os
                portes, garantindo o melhor custo-benefício em cada negociação.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
