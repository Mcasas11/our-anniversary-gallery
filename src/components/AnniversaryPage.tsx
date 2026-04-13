import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import handsImg from "@/assets/hands.jpg";
import walkImg from "@/assets/walk.jpg";
import flowersImg from "@/assets/flowers.jpg";

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="overflow-hidden rounded-sm">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-auto object-cover scale-110"
        loading="lazy"
      />
    </div>
  );
}

export function AnniversaryPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.img
          src={heroImg}
          alt="Us together"
          style={{ scale: heroScale }}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/50" />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-muted-foreground tracking-[0.3em] uppercase text-sm font-body mb-6"
          >
            Celebrating
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-display text-7xl md:text-9xl font-medium text-foreground tracking-tight"
          >
            3 Years
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-primary font-display italic text-2xl md:text-3xl mt-4"
          >
            of you & me
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 z-10"
        >
          <div className="w-px h-12 bg-muted-foreground/40 mx-auto" />
        </motion.div>
      </section>

      {/* Section 1 */}
      <section className="max-w-5xl mx-auto px-6 py-32 md:py-48">
        <FadeSection>
          <p className="text-primary tracking-[0.2em] uppercase text-xs mb-8">The beginning</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight mb-12">
            From the first moment,<br />
            <span className="text-primary italic">I knew.</span>
          </h2>
        </FadeSection>
        <FadeSection className="mt-8">
          <ParallaxImage src={handsImg} alt="Our hands together" />
        </FadeSection>
        <FadeSection className="mt-16 max-w-2xl">
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-body">
            Three years ago, something beautiful started. A glance that turned into a conversation, 
            a conversation that turned into forever. Every day with you feels like the first — 
            full of wonder, warmth, and a love that only grows deeper.
          </p>
        </FadeSection>
      </section>

      {/* Full-width image */}
      <section className="w-full">
        <FadeSection>
          <ParallaxImage src={walkImg} alt="Walking together" />
        </FadeSection>
      </section>

      {/* Section 2 */}
      <section className="max-w-5xl mx-auto px-6 py-32 md:py-48">
        <FadeSection>
          <p className="text-primary tracking-[0.2em] uppercase text-xs mb-8">Every moment</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight mb-12">
            You make the ordinary<br />
            <span className="text-primary italic">extraordinary.</span>
          </h2>
        </FadeSection>
        <FadeSection className="mt-16 max-w-2xl ml-auto text-right">
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-body">
            The quiet mornings, the late-night talks, the silly laughs over nothing — 
            these are the moments I treasure most. You are my favorite chapter 
            in the story of my life.
          </p>
        </FadeSection>
      </section>

      {/* Flowers image */}
      <section className="max-w-4xl mx-auto px-6">
        <FadeSection>
          <ParallaxImage src={flowersImg} alt="Flowers for you" />
        </FadeSection>
      </section>

      {/* Closing */}
      <section className="flex items-center justify-center min-h-screen px-6">
        <FadeSection className="text-center max-w-3xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-primary tracking-[0.2em] uppercase text-xs mb-8">Forever & always</p>
            <h2 className="font-display text-5xl md:text-8xl text-foreground leading-tight mb-8">
              Happy Anniversary,<br />
              <span className="text-primary italic">my love.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-body max-w-xl mx-auto">
              Here's to a thousand more sunsets, a million more laughs, 
              and an eternity of this beautiful thing we call us.
            </p>
            <div className="mt-16">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block text-5xl"
              >
                ❤️
              </motion.span>
            </div>
          </motion.div>
        </FadeSection>
      </section>
    </div>
  );
}
