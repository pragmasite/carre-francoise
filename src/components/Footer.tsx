import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Carré Françoise</h3>
            <p className="text-sm opacity-80">{t.footer.tagline}</p>
            <p className="text-sm opacity-80 mt-2">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:opacity-100 transition-opacity">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Quick Link */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">
              {t.nav.contact}
            </h4>
            <p className="text-sm opacity-80 mb-3">
              <a href="tel:+41277220561" className="hover:opacity-100 transition-opacity">
                +41 27 722 05 61
              </a>
            </p>
            <p className="text-sm opacity-80">
              <a href="mailto:carre1920@netplus.ch" className="hover:opacity-100 transition-opacity break-all">
                carre1920@netplus.ch
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-60"
        >
          <p>
            © {new Date().getFullYear()} Carré Françoise. {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
