import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "pt" | "en" | "es";

type Translations = {
  nav: { home: string; services: string; about: string; contact: string; cta: string };
  hero: { tag: string; title1: string; titleHighlight: string; title2: string; subtitle: string; cta: string; ctaSecondary: string };
  stats: { years: string; countries: string; containers: string; clients: string };
  services: {
    tag: string; title: string; subtitle: string;
    items: { title: string; description: string }[];
  };
  about: {
    tag: string; title: string;
    paragraphs: string[];
  };
  contact: {
    tag: string; title: string; subtitle: string;
    email: string; phone: string; hq: string;
    namePh: string; emailPh: string; companyPh: string; messagePh: string;
    send: string; sending: string;
    toastTitle: string; toastDesc: string;
  };
  footer: { rights: string; partOf: string };
};

const translations: Record<Locale, Translations> = {
  pt: {
    nav: { home: "Início", services: "Serviços", about: "Sobre", contact: "Contato", cta: "Solicitar Cotação" },
    hero: {
      tag: "Global Container Trading",
      title1: "Compra e venda de",
      titleHighlight: "containers",
      title2: "no mundo todo",
      subtitle: "Soluções completas em trading de containers marítimos para empresas de todos os portes. Qualidade, agilidade e alcance global.",
      cta: "Solicitar Cotação",
      ctaSecondary: "Nossos Serviços",
    },
    stats: { years: "Anos de Experiência", countries: "Países Atendidos", containers: "Containers Negociados", clients: "Clientes Satisfeitos" },
    services: {
      tag: "O que fazemos", title: "Nossos Serviços",
      subtitle: "Soluções completas para compra, venda e logística de containers marítimos com alcance mundial.",
      items: [
        { title: "Venda de Containers", description: "Containers novos e usados de diversos tamanhos e especificações para atender sua demanda." },
        { title: "Compra de Containers", description: "Compramos seu container usado com avaliação justa e processo rápido em qualquer localidade." },
        { title: "Operação Global", description: "Presença em mais de 50 países com rede logística integrada para entregas ágeis." },
        { title: "Inspeção e Qualidade", description: "Todos os containers passam por inspeção rigorosa seguindo padrões internacionais." },
        { title: "Logística Integrada", description: "Transporte e entrega do container até o destino final com rastreamento completo." },
        { title: "Consultoria Especializada", description: "Orientação técnica para escolher o container ideal para cada necessidade do seu negócio." },
      ],
    },
    about: {
      tag: "Sobre nós",
      title: "Referência global em trading de containers marítimos",
      paragraphs: [
        "A <strong>Stock Storage Corp.</strong> é uma empresa especializada na compra e venda de containers marítimos, atuando em mais de 50 países com uma rede logística robusta e eficiente.",
        "Com mais de 15 anos de experiência no mercado, oferecemos containers novos e usados de alta qualidade, sempre seguindo rigorosos padrões internacionais de inspeção e certificação.",
        "Nossa missão é fornecer soluções ágeis e confiáveis para empresas de todos os portes, garantindo o melhor custo-benefício em cada negociação.",
      ],
    },
    contact: {
      tag: "Contato", title: "Fale Conosco",
      subtitle: "Solicite uma cotação ou tire suas dúvidas. Nossa equipe está pronta para atendê-lo.",
      email: "Email", phone: "Telefone", hq: "Sede",
      namePh: "Nome", emailPh: "Email", companyPh: "Empresa", messagePh: "Sua mensagem...",
      send: "Enviar Mensagem", sending: "Enviando...",
      toastTitle: "Mensagem enviada!", toastDesc: "Entraremos em contato em breve.",
    },
    footer: { rights: "Todos os direitos reservados.", partOf: "Uma empresa do grupo" },
  },
  en: {
    nav: { home: "Home", services: "Services", about: "About", contact: "Contact", cta: "Request a Quote" },
    hero: {
      tag: "Global Container Trading",
      title1: "Buying and selling",
      titleHighlight: "containers",
      title2: "worldwide",
      subtitle: "Complete solutions in maritime container trading for companies of all sizes. Quality, agility and global reach.",
      cta: "Request a Quote",
      ctaSecondary: "Our Services",
    },
    stats: { years: "Years of Experience", countries: "Countries Served", containers: "Containers Traded", clients: "Satisfied Clients" },
    services: {
      tag: "What we do", title: "Our Services",
      subtitle: "Complete solutions for buying, selling and logistics of maritime containers with worldwide reach.",
      items: [
        { title: "Container Sales", description: "New and used containers in various sizes and specifications to meet your demand." },
        { title: "Container Purchase", description: "We buy your used container with fair evaluation and fast process at any location." },
        { title: "Global Operations", description: "Presence in over 50 countries with integrated logistics network for agile deliveries." },
        { title: "Inspection & Quality", description: "All containers undergo rigorous inspection following international standards." },
        { title: "Integrated Logistics", description: "Transport and delivery of the container to its final destination with full tracking." },
        { title: "Expert Consulting", description: "Technical guidance to choose the ideal container for every business need." },
      ],
    },
    about: {
      tag: "About us",
      title: "A global reference in maritime container trading",
      paragraphs: [
        "<strong>Stock Storage Corp.</strong> is a company specialized in buying and selling maritime containers, operating in over 50 countries with a robust and efficient logistics network.",
        "With over 15 years of market experience, we offer new and used containers of the highest quality, always following rigorous international inspection and certification standards.",
        "Our mission is to provide agile and reliable solutions for companies of all sizes, ensuring the best cost-benefit in every negotiation.",
      ],
    },
    contact: {
      tag: "Contact", title: "Get in Touch",
      subtitle: "Request a quote or ask your questions. Our team is ready to assist you.",
      email: "Email", phone: "Phone", hq: "Headquarters",
      namePh: "Name", emailPh: "Email", companyPh: "Company", messagePh: "Your message...",
      send: "Send Message", sending: "Sending...",
      toastTitle: "Message sent!", toastDesc: "We'll get back to you shortly.",
    },
    footer: { rights: "All rights reserved.", partOf: "A company of the" },
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", about: "Nosotros", contact: "Contacto", cta: "Solicitar Cotización" },
    hero: {
      tag: "Global Container Trading",
      title1: "Compra y venta de",
      titleHighlight: "contenedores",
      title2: "en todo el mundo",
      subtitle: "Soluciones completas en trading de contenedores marítimos para empresas de todos los tamaños. Calidad, agilidad y alcance global.",
      cta: "Solicitar Cotización",
      ctaSecondary: "Nuestros Servicios",
    },
    stats: { years: "Años de Experiencia", countries: "Países Atendidos", containers: "Contenedores Negociados", clients: "Clientes Satisfechos" },
    services: {
      tag: "Lo que hacemos", title: "Nuestros Servicios",
      subtitle: "Soluciones completas para compra, venta y logística de contenedores marítimos con alcance mundial.",
      items: [
        { title: "Venta de Contenedores", description: "Contenedores nuevos y usados de diversos tamaños y especificaciones para atender su demanda." },
        { title: "Compra de Contenedores", description: "Compramos su contenedor usado con evaluación justa y proceso rápido en cualquier ubicación." },
        { title: "Operación Global", description: "Presencia en más de 50 países con red logística integrada para entregas ágiles." },
        { title: "Inspección y Calidad", description: "Todos los contenedores pasan por inspección rigurosa siguiendo estándares internacionales." },
        { title: "Logística Integrada", description: "Transporte y entrega del contenedor hasta el destino final con rastreo completo." },
        { title: "Consultoría Especializada", description: "Orientación técnica para elegir el contenedor ideal para cada necesidad de su negocio." },
      ],
    },
    about: {
      tag: "Sobre nosotros",
      title: "Referencia global en trading de contenedores marítimos",
      paragraphs: [
        "<strong>Stock Storage Corp.</strong> es una empresa especializada en la compra y venta de contenedores marítimos, operando en más de 50 países con una red logística robusta y eficiente.",
        "Con más de 15 años de experiencia en el mercado, ofrecemos contenedores nuevos y usados de alta calidad, siempre siguiendo rigurosos estándares internacionales de inspección y certificación.",
        "Nuestra misión es proporcionar soluciones ágiles y confiables para empresas de todos los tamaños, garantizando la mejor relación costo-beneficio en cada negociación.",
      ],
    },
    contact: {
      tag: "Contacto", title: "Contáctenos",
      subtitle: "Solicite una cotización o resuelva sus dudas. Nuestro equipo está listo para atenderle.",
      email: "Email", phone: "Teléfono", hq: "Sede",
      namePh: "Nombre", emailPh: "Email", companyPh: "Empresa", messagePh: "Su mensaje...",
      send: "Enviar Mensaje", sending: "Enviando...",
      toastTitle: "¡Mensaje enviado!", toastDesc: "Nos pondremos en contacto pronto.",
    },
    footer: { rights: "Todos los derechos reservados.", partOf: "Una empresa del grupo" },
  },
};

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextType>({
  locale: "pt",
  setLocale: () => {},
  t: translations.pt,
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("pt");
  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
};
