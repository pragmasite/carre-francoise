import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  const schedule = [
    { hours: "09:00 - 18:00" }, // Monday
    { hours: "09:00 - 18:00" }, // Tuesday
    { hours: "09:00 - 18:00" }, // Wednesday
    { hours: "09:00 - 18:00" }, // Thursday
    { hours: "09:00 - 17:00" }, // Friday
    { hours: "09:00 - 12:00" }, // Saturday
    { hours: t.hours.closed },   // Sunday
  ];

  // Get today's day index (0 = Sunday in JS, adjust for our array)
  const today = new Date();
  const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1; // Convert to 0-6 where Monday is 0

  return (
    <section id="hours" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">{t.hours.title}</h2>
          </div>

          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === dayIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                      <span className={`${isToday ? "font-semibold text-primary" : ""}`}>
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={`font-medium ${isClosed ? "text-muted-foreground" : "text-foreground"}`}>
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            📍 Rue du Rhône 5, 1920 Martigny
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
