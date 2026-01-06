import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, lang, switchLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
            Carré Françoise
          </span>
          <span className={`text-xs tracking-widest ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className={`text-sm ${isScrolled ? "text-foreground" : "text-white"}`}>
            {t.nav.about}
          </a>
          <a href="#services" className={`text-sm ${isScrolled ? "text-foreground" : "text-white"}`}>
            {t.nav.services}
          </a>
          <a href="#gallery" className={`text-sm ${isScrolled ? "text-foreground" : "text-white"}`}>
            {t.nav.gallery}
          </a>
          <a href="#hours" className={`text-sm ${isScrolled ? "text-foreground" : "text-white"}`}>
            {t.nav.hours}
          </a>
          <a href="#contact" className={`text-sm ${isScrolled ? "text-foreground" : "text-white"}`}>
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-white/20 pl-6">
            <button
              onClick={() => switchLanguage("fr")}
              className={`text-xs font-medium ${lang === "fr" ? "text-accent" : isScrolled ? "text-muted-foreground" : "text-white/70"}`}
            >
              FR
            </button>
            <button
              onClick={() => switchLanguage("de")}
              className={`text-xs font-medium ${lang === "de" ? "text-accent" : isScrolled ? "text-muted-foreground" : "text-white/70"}`}
            >
              DE
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`text-xs font-medium ${lang === "en" ? "text-accent" : isScrolled ? "text-muted-foreground" : "text-white/70"}`}
            >
              EN
            </button>
          </div>

          <Button asChild size="sm" className="ml-2">
            <a href="tel:+41277220561">
              <Phone className="h-4 w-4 mr-1.5" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-soft">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#about" className="block text-sm text-foreground hover:text-primary">
              {t.nav.about}
            </a>
            <a href="#services" className="block text-sm text-foreground hover:text-primary">
              {t.nav.services}
            </a>
            <a href="#gallery" className="block text-sm text-foreground hover:text-primary">
              {t.nav.gallery}
            </a>
            <a href="#hours" className="block text-sm text-foreground hover:text-primary">
              {t.nav.hours}
            </a>
            <a href="#contact" className="block text-sm text-foreground hover:text-primary">
              {t.nav.contact}
            </a>
            <div className="border-t pt-4 space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    switchLanguage("fr");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-xs font-medium ${lang === "fr" ? "text-accent" : "text-muted-foreground"}`}
                >
                  FR
                </button>
                <button
                  onClick={() => {
                    switchLanguage("de");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-xs font-medium ${lang === "de" ? "text-accent" : "text-muted-foreground"}`}
                >
                  DE
                </button>
                <button
                  onClick={() => {
                    switchLanguage("en");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-xs font-medium ${lang === "en" ? "text-accent" : "text-muted-foreground"}`}
                >
                  EN
                </button>
              </div>
              <Button asChild size="sm" className="w-full">
                <a href="tel:+41277220561">
                  <Phone className="h-4 w-4 mr-1.5" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
