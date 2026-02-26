import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ship, Package, Globe, ShieldCheck, Truck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Venda de Containers",
    description: "Containers novos e usados de diversos tamanhos e especificações para atender sua demanda.",
  },
  {
    icon: Package,
    title: "Compra de Containers",
    description: "Compramos seu container usado com avaliação justa e processo rápido em qualquer localidade.",
  },
  {
    icon: Globe,
    title: "Operação Global",
    description: "Presença em mais de 50 países com rede logística integrada para entregas ágeis.",
  },
  {
    icon: ShieldCheck,
    title: "Inspeção e Qualidade",
    description: "Todos os containers passam por inspeção rigorosa seguindo padrões internacionais.",
  },
  {
    icon: Truck,
    title: "Logística Integrada",
    description: "Transporte e entrega do container até o destino final com rastreamento completo.",
  },
  {
    icon: BarChart3,
    title: "Consultoria Especializada",
    description: "Orientação técnica para escolher o container ideal para cada necessidade do seu negócio.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            O que fazemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para compra, venda e logística de containers marítimos
            com alcance mundial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
