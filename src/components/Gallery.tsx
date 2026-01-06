import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Map images with descriptions
  const images: GalleryImage[] = [
    { src: "/images/img-3.jpg", alt: t.lang === "fr" ? "Examen de vision" : t.lang === "de" ? "Sehtauglichkeit" : "Vision exam" },
    { src: "/images/img-4.jpg", alt: t.lang === "fr" ? "Cabinet moderne" : t.lang === "de" ? "Moderne Praxis" : "Modern clinic" },
    { src: "/images/img-5.jpg", alt: t.lang === "fr" ? "Remèdes naturels" : t.lang === "de" ? "Natürliche Heilmittel" : "Natural remedies" },
    { src: "/images/img-6.jpg", alt: t.lang === "fr" ? "Homéopathie" : t.lang === "de" ? "Homöopathie" : "Homeopathy" },
    { src: "/images/img-7.jpg", alt: t.lang === "fr" ? "Équipement médical" : t.lang === "de" ? "Medizinische Ausrüstung" : "Medical equipment" },
    { src: "/images/img-9.jpg", alt: t.lang === "fr" ? "Traitement holistique" : t.lang === "de" ? "Ganzheitliche Behandlung" : "Holistic treatment" },
  ];

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">{t.gallery.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.gallery.description}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full rounded-lg"
            />
            <p className="text-white text-sm mt-4 text-center">{images[selectedIndex].alt}</p>

            {/* Controls */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
