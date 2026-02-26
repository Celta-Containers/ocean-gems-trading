import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/contexts/I18nContext";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: t.contact.toastTitle, description: t.contact.toastDesc });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            {t.contact.tag}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Mail, label: t.contact.email, value: "contato@stockstoragecorp.com" },
              { icon: Phone, label: t.contact.phone, value: "+1 (555) 123-4567" },
              { icon: MapPin, label: t.contact.hq, value: "Miami, FL — USA" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 bg-card rounded-xl p-8 border border-border shadow-sm space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder={t.contact.namePh} required />
              <Input placeholder={t.contact.emailPh} type="email" required />
            </div>
            <Input placeholder={t.contact.companyPh} />
            <Textarea placeholder={t.contact.messagePh} rows={5} required />
            <Button type="submit" variant="default" size="lg" className="w-full" disabled={loading}>
              {loading ? t.contact.sending : (
                <>
                  {t.contact.send} <Send className="ml-2" size={16} />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
