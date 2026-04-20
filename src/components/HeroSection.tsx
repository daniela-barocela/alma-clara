import { motion } from "framer-motion";
import heroImage from "@/assets/hero-nature.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5491168344165?text=Hola%2C%20quiero%20empezar%20a%20sentirme%20mejor.%20Me%20gustar%C3%ADa%20contarte%20lo%20que%20me%20est%C3%A1%20pasando.";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Paisaje natural sereno"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      {/* Velo sutil bordó → acento dorado → bordó oscuro (la foto sigue visible) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#3d1a22]/38 via-amber-900/10 to-[#1a0a0e]/58"
        aria-hidden
      />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto px-6 py-32">
      <div className="text-center rounded-3xl bg-cream/88 px-6 py-10 md:px-12 md:py-12 shadow-[0_8px_40px_rgba(45,18,24,0.12)] backdrop-blur-sm ring-1 ring-[#3d1a22]/10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm tracking-[0.25em] uppercase text-[#722f37] mb-6"
        >
          Acompañamiento integral cuerpo–emoción
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-[#2d1218] leading-tight mb-8 text-balance"
        >
          Tu cuerpo no está fallando, te está hablando
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-[#4a2430] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Te acompaño a entender qué hay detrás de lo que sentís y a aliviarlo desde la raíz a través de la Medicina Tradicional China y la escucha terapéutica.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="heroOutline"
            size="lg"
            className="border-[#5c2a38] text-[#2d1218] hover:bg-[#3d1a22] hover:border-[#3d1a22] hover:text-cream"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Escribime por WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
