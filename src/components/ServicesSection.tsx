import { motion } from "framer-motion";
import { Search, GitBranch, Wrench, TrendingUp, type LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  accentColor: "cyan" | "purple";
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: Search,
    accentColor: "cyan",
    number: "01",
    title: "Find Your Profit Leaks",
    description:
      "A full workflow audit identifies every process wasting time and leaking revenue — delivering a ranked action plan showing exactly where AI automation will drive the highest ROI.",
    tags: ["Workflow Audit", "ROI Mapping", "Action Plan"],
  },
  {
    icon: GitBranch,
    accentColor: "purple",
    number: "02",
    title: "Build & Connect the System",
    description:
      "AI systems connect to every tool your business already runs — CRMs, inboxes, calendars, and more — so data flows automatically and nothing requires a human to move it.",
    tags: ["n8n", "Make.com", "CRM/API Integration"],
  },
  {
    icon: Wrench,
    accentColor: "cyan",
    number: "03",
    title: "Fix It When It Breaks",
    description:
      "When automations break, drift, or fall behind business growth, the issue gets diagnosed, fixed fast, and migrated to infrastructure that scales with your needs.",
    tags: ["Bug Fixing", "Stack Migration", "Scaling"],
  },
  {
    icon: TrendingUp,
    accentColor: "purple",
    number: "04",
    title: "Keep It Growing",
    description:
      "Continuous monitoring, tuning, and evolution of automation systems as your business changes — so the AI stack keeps improving long after the initial build.",
    tags: ["Monitoring", "Optimization", "Ongoing Evolution"],
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const isCyan = service.accentColor === "cyan";
  const accentHsl = isCyan ? "191 100% 50%" : "252 90% 67%";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.09 }}
      className="group relative glass-card p-6 overflow-hidden hover:-translate-y-1 transition-all duration-[250ms] rounded-2xl"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `hsl(${accentHsl})` }}
      />

      {/* Number badge */}
      <div className="absolute top-4 right-4 text-[11px] font-semibold tracking-[2px] text-muted-foreground">
        {service.number}
      </div>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `hsl(${accentHsl} / 0.1)` }}
      >
        <service.icon size={20} style={{ color: `hsl(${accentHsl})` }} />
      </div>

      <h3 className="font-display text-base font-semibold text-foreground mb-3 pr-8">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-3 py-1 rounded-full"
            style={{
              background: `hsl(${accentHsl} / 0.06)`,
              color: `hsl(${accentHsl})`,
              border: `1px solid hsl(${accentHsl} / 0.15)`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(191,100%,50%,0.03)] to-background"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[hsl(191,100%,50%)] rounded-full blur-[100px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[hsl(252,90%,67%)] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[hsl(191,100%,50%,0.1)] border border-[hsl(191,100%,50%,0.3)] mb-4">
            <span className="text-xs font-semibold text-[hsl(191,100%,50%)] uppercase tracking-wider">Services</span>
          </div>
          <div className="section-badge mx-auto w-fit mb-4">WHAT I DELIVER</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            From First Audit to <span className="gradient-text">Full Autopilot</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every engagement starts with finding where you're losing money. Then I build the system. Then I keep it running.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        {/* Pricing anchor */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 max-w-[500px] mx-auto"
          style={{ fontSize: "14px", color: "rgba(255,255,255,0.40)" }}
        >
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
