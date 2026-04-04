import { motion } from "framer-motion";

const checks = [
  "Business owners spending 10+ hours a week on manual tasks they know should be automated.",
  "Teams juggling 5+ tools and ready to bring everything into one streamlined system.",
  "Founders handling 20+ repetitive tasks daily who want systems to take over.",
  "Businesses dealing with 10+ daily interruptions from scattered workflows and manual follow-ups.",
  "Owners managing 3+ disconnected processes who want one automated system running everything smoothly.",
];

const IdealClientSection = () => {
  return (
    <section id="ideal" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-[hsl(191,100%,50%,0.02)]">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(191,100%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(191,100%,50%) 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }}></div>
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <div className="section-badge-secondary mx-auto w-fit mb-6">IDEAL CLIENT</div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
          Is This <span className="gradient-text">Right For You?</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          I work best with mature businesses that have established workflows but are hitting a manual scale ceiling.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[hsl(191,100%,50%)] opacity-5 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-10 leading-tight"
            >
              I work best with businesses that are ready to{" "}
              <span className="gradient-text">stop doing things manually.</span>
            </motion.h2>

            <div className="flex flex-col gap-4 text-left mx-auto max-w-[600px] mb-8">
              {checks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[hsl(191,100%,50%,0.05)] border border-[hsl(191,100%,50%,0.15)] hover:bg-[hsl(191,100%,50%,0.08)] transition-all"
                  style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)" }}
                >
                  <span className="text-[hsl(191,100%,50%)] text-xl mt-0.5 shrink-0 font-bold">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6 border-t border-border/50"
            >
              <p className="italic text-sm text-muted-foreground">
                If you're looking for a $50 Zapier setup, this isn't the right fit.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IdealClientSection;
