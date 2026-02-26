import { useI18n } from "@/contexts/I18nContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-hero py-12 border-t border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Stock Storage Corp" className="h-14 w-auto" />
          </div>
          <p className="text-hero-muted text-sm">
            © {new Date().getFullYear()} Stock Storage Corp. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
