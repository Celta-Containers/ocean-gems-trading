import { useI18n, type Locale } from "@/contexts/I18nContext";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const flags: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};

const labels: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
        aria-label={`Change language, current language ${labels[locale]}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{flags[locale]}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden min-w-[140px] z-50">
          {(["pt", "en", "es"] as Locale[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLocale(l); setOpen(false); }}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                locale === l ? "bg-muted font-semibold text-foreground" : "text-muted-foreground"
              }`}
            >
              <span>{flags[l]}</span>
              <span>{labels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
