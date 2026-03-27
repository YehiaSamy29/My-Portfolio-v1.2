import { motion } from "framer-motion";
import yehiaPhoto from "@/assets/yehia.jpg";

const skills = ["n8n", "AI Integration", "AI Voice Agents", "CRM Automation", "WhatsApp Bots"];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-b from-background via-background/50 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(191,100%,50%)] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(252,90%,67%)] rounded-full blur-[120px] opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[hsl(191,100%,50%,0.1)] border border-[hsl(191,100%,50%,0.3)] mb-4">
            <span className="text-xs font-semibold text-[hsl(191,100%,50%)] uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Meet Your <span className="gradient-text">Automation Partner</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 sm:p-12"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Left column */}
            <div className="flex flex-col items-center shrink-0">
              <motion.div 
                className="relative group cursor-pointer"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-[hsl(191,100%,50%)] opacity-20 blur-2xl rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src={yehiaPhoto}
                  alt="Yehia Samy"
                  className="relative w-[220px] h-[220px] rounded-2xl object-cover border-2 border-[hsl(191,100%,50%,0.4)] shadow-lg"
                  whileHover={{
                    borderColor: "hsl(191,100%,50%)",
                    boxShadow: "0 0 40px hsl(191 100% 50% / 0.6), 0 0 80px hsl(191 100% 50% / 0.3)",
                  }}
                />
                {/* Floating particles around image on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[hsl(191,100%,50%)] opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[hsl(252,90%,67%)] opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -right-3 w-2 h-2 rounded-full bg-[hsl(191,100%,50%)] opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [0, 15, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
              </motion.div>
              <div className="flex flex-col gap-2.5 mt-6">
                <span className="text-xs px-4 py-2 rounded-full bg-[hsl(191,100%,50%,0.1)] text-[hsl(191,100%,50%)] border border-[hsl(191,100%,50%,0.3)] font-medium text-center">
                  ✓ Remote Work
                </span>
                <span className="text-xs px-4 py-2 rounded-full bg-[hsl(191,100%,50%,0.1)] text-[hsl(191,100%,50%)] border border-[hsl(191,100%,50%,0.3)] font-medium text-center">
                  ✓ Available for New Projects
                </span>
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-display font-bold text-foreground mb-6 leading-tight"
                style={{ fontSize: "clamp(24px, 4vw, 32px)" }}
              >
                I turn manual chaos into{" "}
                <span className="gradient-text">automated profit.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-5"
                style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}
              >
                <p>
                  I'm <span className="text-[hsl(191,100%,50%)] font-semibold">Yehia Samy</span>, an AI automation specialist. I work with business owners who are tired of doing the same repetitive tasks every day — answering leads manually, chasing invoices, copy-pasting data between tools.
                </p>
                <p>
                  I build end-to-end AI systems using <span className="text-foreground font-medium">n8n</span>, and custom AI agents that plug directly into your existing stack — CRM, inbox, WhatsApp, calendars, Gmail, … — and run everything automatically, 24/7.
                </p>
                <p className="text-foreground font-medium">
                  I don't just deliver a workflow. I deliver results you can measure on day one.
                </p>
              </motion.div>

              {/* Skill tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2.5 mt-8"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs font-semibold px-4 py-2 rounded-full cursor-default transition-all"
                    style={{
                      background: "hsl(191 100% 50% / 0.08)",
                      color: "hsl(191, 100%, 50%)",
                      border: "1px solid hsl(191 100% 50% / 0.2)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
