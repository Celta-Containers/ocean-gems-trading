import { useI18n } from "@/contexts/I18nContext";
import logo from "@/assets/logo.png";
import logoTotalStorage from "@/assets/logo-total-storage.jpg";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-hero py-12 border-t border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Stock Storage Corp" className="h-14 w-auto" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-hero-muted text-xs uppercase tracking-wider">
              {t.footer.partOf}
            </span>
            <div className="bg-white rounded-md p-2">
              <img
                src={logoTotalStorage}
                alt="Total Storage - The Container Solution"
                className="h-16 w-auto"
              />
            </div>
          </div>

          <p className="text-hero-muted text-sm text-center md:text-right">
            © {new Date().getFullYear()} Stock Storage Corp.
            <br />
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
