import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Target, Bot, FileText, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  num: string;
  icon: LucideIcon;
  accentHsl: string;
  glowColor: string;
  title: string;
  subTitle: string;
  shortChallenge: string;
  shortSolution: string;
  shortResult: string;
  fullChallenge: string;
  fullSolution: string;
  fullResult: string;
  stats: string[];
}

const projects: Project[] = [
  {
    num: "01",
    icon: Phone,
    accentHsl: "191 100% 50%",
    glowColor: "rgba(0, 212, 255, 0.15)",
    title: "The After-Hours Revenue Leak Plug",
    subTitle: "24/7 AI Voice Receptionist & Appointment Setter",
    shortChallenge: "Up to 30% of revenue evaporates every time a call goes unanswered after hours or while the front desk is tied up.",
    shortSolution: "A fully autonomous AI Voice Agent that answers every call, qualifies leads, and books appointments 24/7.",
    shortResult: "100% call answer rate and 25–40% more booked appointments — zero additional staff cost.",
    fullChallenge: "For small service businesses — HVAC companies, dental clinics, law firms — the phone is still the #1 revenue channel. Yet up to 30% of that revenue evaporates silently every time a call goes unanswered after hours or while the front desk is tied up. Every missed call is a missed appointment. Every missed appointment is a lost client.",
    fullSolution: "A fully autonomous AI Voice Agent deployed directly on your business line. Using conversational voice technology, it answers every call with a natural, human-quality voice — 24 hours a day, 365 days a year. It handles FAQs, qualifies the caller's intent, and books the appointment directly into your calendar.",
    fullResult: "100% call answer rate — no lead ever goes to voicemail again. A 25–40% increase in booked appointments from the same inbound call volume. $0 in additional front-desk overhead.",
    stats: ["100% calls answered", "+25–40% bookings", "$0 added overhead"],
  },
  {
    num: "02",
    icon: Target,
    accentHsl: "252 90% 67%",
    glowColor: "rgba(123, 94, 246, 0.20)",
    title: "The Cold Outreach Machine",
    subTitle: "Autonomous Lead Enrichment & Hyper-Personalized Prospecting",
    shortChallenge: "B2B teams waste hundreds of hours on manual prospecting. Generic pitches get marked as spam.",
    shortSolution: "An automated end-to-end outbound pipeline that identifies prospects and drafts hyper-personalized emails at scale.",
    shortResult: "3× higher email open rates and a consistent flow of qualified sales calls.",
    fullChallenge: "B2B sales teams are haemorrhaging time. Hours are spent manually building prospect lists, researching companies, and writing emails that sound identical to every other pitch in the inbox. Generic outreach doesn't get ignored — it gets marked as spam.",
    fullSolution: "A fully automated, end-to-end outbound pipeline. The system identifies prospects in a target niche, visits each company's website, and uses AI to detect a specific, visible business gap. It then drafts a personalized email at a rate of hundreds per hour.",
    fullResult: "3× higher email open rates compared to templated outreach. A consistent flow of qualified sales calls landed directly in the calendar. Sales reps refocused entirely on closing — not prospecting.",
    stats: ["3× open rates", "Qualified pipeline daily", "0 manual prospecting"],
  },
  {
    num: "03",
    icon: Bot,
    accentHsl: "191 100% 50%",
    glowColor: "rgba(0, 212, 255, 0.12)",
    title: "The Support Cost Eliminator",
    subTitle: "Intelligent AI Customer Support Agent",
    shortChallenge: "Repetitive tickets consume 70% of support agent time, creating backlogs and customer churn.",
    shortSolution: "An AI Support Agent trained on your knowledge base, integrated with your CRM for real-time personalized answers.",
    shortResult: "70–80% fewer human-handled tickets, instant 24/7 responses, and higher CSAT scores.",
    fullChallenge: "Support teams are stuck in a loop. Repetitive tickets flood the queue and consume up to 70% of agent time. The result is a backlog that slows resolution for genuinely complex issues, tanks CSAT scores, and drives customer churn.",
    fullSolution: "An AI Support Agent trained on the company's own knowledge base — docs, PDFs, help articles, and website content. It integrates directly with your CRM to deliver real-time, personalized answers. It monitors sentiment and escalates to a human only when needed.",
    fullResult: "70–80% reduction in incoming support tickets handled by human agents. Instant 24/7 response times. Measurably higher CSAT scores and reduced churn from faster issue resolution.",
    stats: ["70–80% ticket reduction", "24/7 instant responses", "Higher CSAT scores"],
  },
  {
    num: "04",
    icon: FileText,
    accentHsl: "40 100% 50%",
    glowColor: "rgba(255, 180, 0, 0.12)",
    title: "The Document Processing Engine",
    subTitle: "AI-Powered Invoice Extraction & Automated Accounting Sync",
    shortChallenge: "Staff spend up to 15 minutes per PDF invoice on manual data entry — slow, error-prone, and costly.",
    shortSolution: "An AI Vision workflow that reads any PDF invoice on arrival and pushes clean structured data into accounting software instantly.",
    shortResult: "Processing time cut from 15 minutes → 10 seconds per document, with 99% accuracy.",
    fullChallenge: "A hidden operational tax drains productivity every single day: manual data entry. Staff spend up to 15 minutes per document — manually transcribing line items, tax figures, and totals from PDF invoices into accounting software.",
    fullSolution: "An automated document processing workflow. The moment a PDF invoice arrives — by email, upload, or shared folder — the system reads it, extracts every relevant field, and pushes a structured, clean record into your accounting tool for one-click approval.",
    fullResult: "Processing time reduced from 15 minutes → 10 seconds per document. 99% extraction accuracy — eliminating costly reconciliation errors. Administrative labor costs cut dramatically.",
    stats: ["15 min → 10 sec", "99% accuracy", "Zero manual entry"],
  },
  {
    num: "05",
    icon: Zap,
    accentHsl: "0 80% 65%",
    glowColor: "rgba(255, 80, 80, 0.12)",
    title: "The Lead Decay Antidote",
    subTitle: "24/7 AI Speed-to-Lead & Live Qualification Engine",
    shortChallenge: "Not responding within 5 minutes drops conversion probability by 80%. Fast owners still waste 10–15 hrs/week vetting prospects.",
    shortSolution: "An always-on AI Qualification Agent across website, social DMs, and SMS that instantly engages and only books high-intent leads.",
    shortResult: "4× lead-to-booking conversion rate and 10–15 hours of manual vetting eliminated weekly.",
    fullChallenge: "In high-demand service industries, the window to win a lead is measured in minutes. Failing to respond within 5 minutes reduces conversion probability by 80%. Even when owners respond fast, they burn 10–15 hours per week on unqualified prospects.",
    fullSolution: "An always-on AI Qualification Agent deployed across the website, social DMs, and SMS. The instant a lead makes contact, the AI engages, runs a qualification audit, and only delivers the booking link to prospects who meet the exact criteria.",
    fullResult: "4× increase in lead-to-booking conversion rates. The calendar contains only pre-vetted, high-intent prospects. 10–15 hours of manual vetting time eliminated every week.",
    stats: ["4× lead-to-booking", "Instant 24/7 response", "10–15 hrs saved/week"],
  },
  {
    num: "06",
    icon: FileText,
    accentHsl: "160 80% 45%",
    glowColor: "rgba(40, 200, 140, 0.12)",
    title: "The Field-to-Finance Billing Bridge",
    subTitle: "Instant Mobile-to-Invoice Automation via WhatsApp & AI Vision",
    shortChallenge: "Field technicians delay submitting paperwork, creating a 10-day \"dead zone\" where the business hasn't been paid for completed work.",
    shortSolution: "Instant mobile-to-invoice automation — an n8n workflow uses AI to read job photos and receipts sent via WhatsApp, auto-generating QuickBooks invoices in real-time.",
    shortResult: "Reduces time-to-payment from 10 days to 5 minutes and eliminates manual office data entry.",
    fullChallenge: "In service-heavy industries (Construction, HVAC, Restoration), there is a massive \"Paperwork Gap.\" Technicians finish jobs but wait until the end of the week to submit hours and material receipts. The office then takes another 3–5 days to manually type this data into accounting software. By the time the invoice reaches the client, the work is no longer \"top of mind,\" leading to more disputes, lost receipts, and severely damaged cash flow.",
    fullSolution: "This system uses n8n as a logic hub to connect the field staff's mobile devices directly to the company's financial core:\n\n• Instant Intake: Technicians send a \"Job Completion\" message via WhatsApp (Twilio) with photos of the finished work and material receipts.\n\n• AI Data Extraction: n8n sends these images to OpenAI Vision (GPT-4o) to verify completion and extract every line item from receipts.\n\n• Cross-Reference Logic: n8n pulls the original estimate from the CRM (HubSpot/Pipedrive) to ensure costs align. If a receipt is unexpectedly high, it pings a manager on Slack.\n\n• Auto-Documentation: If everything clears, n8n triggers QuickBooks to create the invoice and PDFmonkey to generate a branded \"Job Completion Report\" with the tech's photos.\n\n• Digital Delivery: The client receives an email with the Invoice, the Proof of Work Report, and a Stripe payment link immediately.",
    fullResult: "The business moves to \"Day-Zero\" Payments. The time between finishing a job and requesting payment drops by 99% (from 10 days to 5 minutes). This eliminates human error in data entry and builds immense trust with clients, who are more likely to pay instantly when they receive professional photo proof of the work while the technician is still on-site.",
    stats: ["10 days → 5 min", "99% faster billing", "Zero manual entry"],
  },
];

const labelColors = {
  CHALLENGE: "#f59e0b",
  SOLUTION: "#00d4ff",
  RESULT: "#22c55e",
} as const;

const ProjectCard = ({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) => {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onClick={onOpen}
      className="group relative cursor-pointer"
    >
      {/* Card body */}
      <div className="relative glass-card rounded-2xl p-6 sm:p-6 h-full overflow-hidden hover:-translate-y-1 transition-all duration-[250ms]">
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, hsl(${project.accentHsl} / 0.08) 0%, transparent 60%)`,
          }}
        />

        {/* Floating number */}
        <div className="absolute top-4 right-5 font-display text-[40px] font-bold leading-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500">
          {project.num}
        </div>

        {/* Icon */}
        <div className="relative mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `hsl(${project.accentHsl} / 0.1)` }}
          >
            <Icon size={24} style={{ color: `hsl(${project.accentHsl})` }} />
          </div>
        </div>

        <h3 className="font-display text-[15px] font-bold text-foreground mb-5 leading-snug">{project.title}</h3>

        {/* Challenge / Solution / Result */}
        <div className="space-y-3.5">
          {(["CHALLENGE", "SOLUTION", "RESULT"] as const).map((key) => {
            const shortKey = `short${key.charAt(0) + key.slice(1).toLowerCase()}` as keyof Project;
            return (
              <div key={key}>
                <div
                  className="text-[10px] font-bold tracking-[2px] mb-1"
                  style={{ color: labelColors[key] }}
                >
                  {key}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{String(project[shortKey])}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <button
          className="mt-5 text-xs font-medium flex items-center gap-1.5"
          style={{ color: `hsl(${project.accentHsl})` }}
        >
          See Details
          <span>↓</span>
        </button>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const Icon = project.icon;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(5, 8, 18, 0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative w-full max-w-[600px] max-h-[85vh] overflow-y-auto rounded-3xl p-7 sm:p-9"
        style={{
          background: "hsl(var(--card))",
          border: `1px solid hsl(${project.accentHsl} / 0.2)`,
          boxShadow: `0 0 80px hsl(${project.accentHsl} / 0.08), 0 24px 60px rgba(0,0,0,0.6)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow inside modal */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none rounded-t-3xl"
          style={{ background: `radial-gradient(ellipse at 50% 0%, hsl(${project.accentHsl} / 0.06) 0%, transparent 70%)` }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 w-8 h-8 rounded-full flex items-center justify-center bg-muted/60 hover:bg-muted transition-colors z-10"
        >
          <X size={14} className="text-foreground" />
        </button>

        {/* Icon + Title */}
        <div className="flex items-center gap-4 mb-5 relative">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: `hsl(${project.accentHsl} / 0.1)` }}
          >
            <Icon size={26} style={{ color: `hsl(${project.accentHsl})` }} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">{project.title}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{project.subTitle}</p>
          </div>
        </div>

        <hr className="border-border mb-6" />

        {/* Sections */}
        {([
          ["THE CHALLENGE", project.fullChallenge, labelColors.CHALLENGE],
          ["THE SOLUTION", project.fullSolution, labelColors.SOLUTION],
          ["THE RESULT", project.fullResult, labelColors.RESULT],
        ] as const).map(([label, text, color]) => (
          <motion.div
            key={label}
            className="mb-6"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: label === "THE CHALLENGE" ? 0.1 : label === "THE SOLUTION" ? 0.2 : 0.3 }}
          >
            <div className="text-[10px] font-bold tracking-[2px] mb-2" style={{ color }}>
              {label}
            </div>
            <div className="text-[13.5px] text-muted-foreground leading-relaxed whitespace-pre-line">{text}</div>
          </motion.div>
        ))}

        {/* Stat pills */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.stats.map((s, i) => (
            <motion.span
              key={s}
              className="stat-pill"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.35 + i * 0.08 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-b from-background to-[hsl(252,90%,67%,0.02)]">
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "repeating-linear-gradient(45deg, hsl(252,90%,67%) 0, hsl(252,90%,67%) 1px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px"
      }}></div>
      
      {/* Section ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(191 100% 50% / 0.03) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge-secondary mx-auto w-fit mb-6">PORTFOLIO / REAL RESULTS</div>
          <h2 className="font-display text-5xl font-bold mb-6">
            Systems that turn <span className="gradient-text">time into revenue.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Proven AI solutions built for real businesses to maximize productivity and eliminate human errors.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={i}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Toggle button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-lg text-sm font-medium border border-[#00d4ff] text-[#00d4ff] bg-transparent hover:bg-[hsl(191,100%,50%,0.08)] transition-colors"
            >
              View All 6 Projects →
            </button>
          </motion.div>
        )}
        {showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-2.5 rounded-lg text-sm font-medium border border-[#00d4ff] text-[#00d4ff] bg-transparent hover:bg-[hsl(191,100%,50%,0.08)] transition-colors"
            >
              Show Less ↑
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
