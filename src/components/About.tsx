import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const features = t.about.features as Array<{ title: string; description: string }>;

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t.about.p1}</p>
            <p className="text-muted-foreground mb-8 leading-relaxed">{t.about.p2}</p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-primary mb-2">✓</div>
                <p className="text-sm text-muted-foreground">{t.about.stat1}</p>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-primary mb-2">✓</div>
                <p className="text-sm text-muted-foreground">{t.about.stat2}</p>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-primary mb-2">✓</div>
                <p className="text-sm text-muted-foreground">{t.about.stat3}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-lg bg-background border border-border hover:shadow-soft transition-shadow"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
