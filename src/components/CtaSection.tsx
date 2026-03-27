import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Mail, Linkedin } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const floatingOrbs = [
  { size: 120, x: "10%", y: "20%", delay: 0, duration: 8, color: "191 100% 50%" },
  { size: 80, x: "80%", y: "30%", delay: 2, duration: 10, color: "252 90% 67%" },
  { size: 60, x: "70%", y: "70%", delay: 4, duration: 7, color: "191 100% 50%" },
  { size: 100, x: "20%", y: "75%", delay: 1, duration: 9, color: "252 90% 67%" },
];

const CtaSection = () => (
  <section id="cta" className="py-20 px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto relative"
    >
      {/* Animated card */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-card">
          {floatingOrbs.map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: orb.size,
                height: orb.size,
                left: orb.x,
                top: orb.y,
                background: `radial-gradient(circle, hsl(${orb.color} / 0.12) 0%, transparent 70%)`,
                filter: "blur(30px)",
              }}
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -25, 15, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{
                duration: orb.duration,
                delay: orb.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Border glow */}
        <div className="absolute inset-0 rounded-3xl border border-border" />
        <div
          className="absolute inset-0 rounded-3xl opacity-40"
          style={{
            border: "1px solid hsl(191 100% 50% / 0.15)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 py-16 px-6 sm:px-12 text-center">
          <motion.h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ready to Stop Losing{" "}
            <span className="gradient-text">Revenue to Manual Work?</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Book a free 30-minute discovery call to uncover exactly where AI
            automation can deliver the highest ROI for your business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://calendly.com/yehia-samy"
              target="_blank"
              rel="noopener noreferrer"
              className="cyan-glow-btn px-8 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-200"
            >
              <Calendar size={16} />
              Book a Discovery Call
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.color = "rgba(255,255,255,1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Trust micro-signals */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-5 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: "12px", color: "rgba(255,255,255,0.30)" }}
          >
            <span>🔒 No commitment — cancel anytime</span>
            <span>⏱ 30-minute call — completely free</span>
            <span>📋 You receive a written action plan either way</span>
          </motion.div>
        </div>
      </div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <p className="text-center text-base text-muted-foreground mb-6">Or reach out directly</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.a
            href="https://wa.me/201040111238"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="glass-card p-6 flex items-center gap-5 hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/10 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 group-hover:scale-110 transition-all">
              <FaWhatsapp size={32} className="text-[#25D366]" />
            </div>
            <div className="flex-1">
              <p className="text-base text-muted-foreground font-medium">WhatsApp</p>
            </div>
          </motion.a>

          <motion.a
            href="https://x.com/YehiaSamy341266"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="glass-card p-6 flex items-center gap-5 hover:border-[hsl(191,100%,50%)] hover:shadow-lg hover:shadow-[hsl(191,100%,50%)]/10 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-xl bg-[hsl(191,100%,50%,0.1)] flex items-center justify-center group-hover:bg-[hsl(191,100%,50%,0.2)] group-hover:scale-110 transition-all">
              <FaXTwitter size={32} className="text-[hsl(191,100%,50%)]" />
            </div>
            <div className="flex-1">
              <p className="text-base text-muted-foreground font-medium">X</p>
            </div>
          </motion.a>

          <motion.a
            href="www.linkedin.com/in/yehiasamymohamed"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="glass-card p-6 flex items-center gap-5 hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/10 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 group-hover:scale-110 transition-all">
              <Linkedin size={32} className="text-[#0A66C2]" />
            </div>
            <div className="flex-1">
              <p className="text-base text-muted-foreground font-medium">LinkedIn</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:yehiasamy.dev@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              const subject = encodeURIComponent('Inquiry About AI Automation Services');
              const body = encodeURIComponent('Hi Yehia,\n\nI came across your portfolio and I\'m interested in learning more about your AI automation services.\n\n');
              window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yehiasamy.dev@gmail.com&su=${subject}&body=${body}`, '_blank');
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="glass-card p-6 flex items-center gap-5 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 group-hover:scale-110 transition-all">
              <Mail size={32} className="text-red-500" />
            </div>
            <div className="flex-1">
              <p className="text-base text-muted-foreground font-medium">Gmail</p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default CtaSection;
