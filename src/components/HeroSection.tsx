import { motion } from "framer-motion";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleGrid from "./ParticleGrid";
import yehiaPhoto from "@/assets/yehia.jpg";
import { useState, useEffect } from "react";

const stats = [
  { value: "100+", label: "Hours Saved for Clients", cyan: true },
  { value: "40%", label: "Avg. Cost Reduction", cyan: false },
  { value: "24/7", label: "Systems Run Non-Stop", cyan: false },
  { value: "7-Day", label: "Average Delivery Time", cyan: true },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "Yehia Samy",
    "an AI Automation Specialist",
    "Aspiring AIOS",
    "into Agentic Systems"
  ];
  
  const [counters, setCounters] = useState({ hours: 0, cost: 0, uptime: 0, days: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentTitle.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentIndex]);

  const animateCounter = (target: number, key: 'hours' | 'cost' | 'uptime' | 'days', duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounters(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };

  const handleStatsInView = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      animateCounter(100, 'hours', 2000);
      animateCounter(40, 'cost', 2000);
      animateCounter(24, 'uptime', 1500);
      animateCounter(7, 'days', 1500);
    }
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsl(191 100% 50% / 0.06) 0%, transparent 70%)",
        }}
      />
      <ParticleGrid />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[hsl(191,100%,50%)] min-h-[2.5rem]">
            I'm {typedText}
            <span className="animate-pulse">|</span>
          </h2>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-bold leading-tight mb-4"
          style={{ fontSize: "clamp(28px, 7vw, 56px)" }}
        >
          Automate Your Workflows.{" "}
          <span className="gradient-text">Multiply Your Revenue.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.35)}
          className="max-w-[560px] mx-auto mb-8 leading-relaxed"
          style={{ fontSize: "clamp(15px, 2.5vw, 17px)", color: "rgba(255,255,255,0.55)" }}
        >
          Stop trading time for money. I build custom AI systems that capture every lead,
          eliminate manual work, and let your business scale — without hiring anyone new.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href="https://calendly.com/yehia-samy"
            target="_blank"
            rel="noopener noreferrer"
            className="cyan-glow-btn px-8 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-200"
          >
            <Calendar size={16} />
            Book a Discovery Call
          </a>
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-lg font-medium text-sm border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-[1.02]"
          >
            Explore My Work
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* Trust micro-signals */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
          style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}
        >
          <span className="inline-flex items-center gap-1.5">🔒 No commitment required</span>
          <span className="inline-flex items-center gap-1.5">⏱ 30 minutes — free</span>
          <span className="inline-flex items-center gap-1.5">✅ 100% delivery guarantee</span>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.65)}
          onViewportEnter={handleStatsInView}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              className="font-display text-2xl sm:text-3xl font-bold mb-1"
              style={{ color: "hsl(191, 100%, 50%)" }}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {counters.hours}+
            </motion.div>
            <div className="text-xs text-muted-foreground">Hours Saved for Clients</div>
          </div>
          
          <div className="text-center">
            <motion.div
              className="font-display text-2xl sm:text-3xl font-bold mb-1"
              style={{ color: "hsl(var(--primary))" }}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {counters.cost}%
            </motion.div>
            <div className="text-xs text-muted-foreground">Avg. Cost Reduction</div>
          </div>
          
          <div className="text-center">
            <motion.div
              className="font-display text-2xl sm:text-3xl font-bold mb-1"
              style={{ color: "hsl(var(--primary))" }}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              {counters.uptime}/7
            </motion.div>
            <div className="text-xs text-muted-foreground">Systems Run Non-Stop</div>
          </div>
          
          <div className="text-center">
            <motion.div
              className="font-display text-2xl sm:text-3xl font-bold mb-1"
              style={{ color: "hsl(191, 100%, 50%)" }}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {counters.days}-Day
            </motion.div>
            <div className="text-xs text-muted-foreground">Average Delivery Time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
