import { createContext, useContext, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.fr;
  otherLang: Language;
  otherLangPath: string;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine language from URL path
  const lang: Language = location.pathname.startsWith("/de")
    ? "de"
    : location.pathname.startsWith("/en")
      ? "en"
      : "fr";

  const t = translations[lang];

  const otherLang: Language = lang === "fr" ? "de" : lang === "de" ? "en" : "fr";
  const otherLangPath =
    lang === "fr" ? "/de" : lang === "de" ? "/en" : "/";

  const switchLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    let newPath: string;

    if (newLang === "fr") {
      newPath = currentPath.replace(/^\/(de|en)/, "");
    } else if (newLang === "de") {
      newPath = currentPath.replace(/^\/(de|en)?/, "/de");
    } else if (newLang === "en") {
      newPath = currentPath.replace(/^\/(de|en)?/, "/en");
    } else {
      newPath = currentPath;
    }

    navigate(newPath || "/");
  };

  return (
    <LanguageContext.Provider value={{ lang, t, otherLang, otherLangPath, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
