import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free 30-Min Discovery Call",
    description:
      "I map your workflows, find where time and money are being lost, and identify the highest-ROI automations for your business.",
  },
  {
    num: "02",
    title: "I Build Your System",
    description:
      "Custom AI workflows built and tested in 5–10 or more business days based on automation requirements. You're kept in the loop at every stage. Zero technical knowledge needed on your end.",
  },
  {
    num: "03",
    title: "It Runs — You Scale",
    description:
      "Your system goes live and runs 24/7. I monitor it for 15 days post-launch and hand over full documentation so you own it completely.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-[hsl(191,100%,50%,0.015)]">
      {/* Dots pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, hsl(191,100%,50%) 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[hsl(191,100%,50%,0.1)] border border-[hsl(191,100%,50%,0.3)] mb-4">
            <span className="text-xs font-semibold text-[hsl(191,100%,50%)] uppercase tracking-wider">How It Works</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="section-badge mx-auto w-fit mb-4">THE PROCESS</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            From first call to full automation —{" "}
            <span className="gradient-text">in days, not months.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col md:flex-row items-center flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="glass-card rounded-2xl p-6 flex-1 w-full hover:-translate-y-1 transition-transform duration-250"
              >
                <div
                  className="font-display font-extrabold mb-3"
                  style={{ fontSize: "32px", color: "hsl(191, 100%, 50%)", opacity: 0.9 }}
                >
                  {step.num}
                </div>
                <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: "17px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.50)", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <>
                  <div
                    className="hidden md:flex items-center justify-center px-4"
                    style={{ fontSize: "24px", color: "hsl(191, 100%, 50%)", opacity: 0.4 }}
                  >
                    →
                  </div>
                  <div
                    className="flex md:hidden items-center justify-center py-3"
                    style={{ fontSize: "24px", color: "hsl(191, 100%, 50%)", opacity: 0.4 }}
                  >
                    ↓
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
