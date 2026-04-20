import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, MessageCircle, Twitter, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roleOptions = ["Owner", "Executive", "Manager", "Operations", "Technical", "Sales", "Marketing", "Finance", "Other"];
const improvementOptions = [
  "Lead Gen/Sales",
  "Customer Support",
  "Internal Ops",
  "Data Processing",
  "Content/Marketing",
  "Not sure yet",
];

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  companyEmail: string;
  companyWebsite: string;
  role: string;
  improvements: string[];
  notes: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  companyName: "",
  companyEmail: "",
  companyWebsite: "",
  role: "",
  improvements: [],
  notes: "",
};

const Contact = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const set = (field: keyof FormData, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleImprovement = (val: string) => {
    setForm((prev) => ({
      ...prev,
      improvements: prev.improvements.includes(val)
        ? prev.improvements.filter((v) => v !== val)
        : [...prev.improvements, val],
    }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.companyName.trim()) e.companyName = "Required";
    if (!form.companyEmail.trim()) e.companyEmail = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.companyEmail))
      e.companyEmail = "Invalid company email";
    if (!form.companyWebsite.trim()) {
  e.companyWebsite = "Required";
} else if (!/^(https?:\/\/|www\.)\S+\.\S+/.test(form.companyWebsite)) {
  e.companyWebsite = "Enter a valid URL (e.g. www.example.com or https://example.com)";
}
    if (!form.role) e.role = "Required";
    if (form.improvements.length === 0) e.improvements = "Select at least one";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(
        "https://yehiasamy-auto2.app.n8n.cloud/webhook/d1b072a4-9a24-4a76-af2f-da4104b169b7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
        }
      );
      if (!res.ok) throw new Error("Webhook error");
      setIsSuccess(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-[10px] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 ${
      errors[field]
        ? "border border-destructive shadow-[0_0_0_3px_hsl(0_72%_65%/0.08)]"
        : "border border-border focus:border-primary focus:shadow-[0_0_0_3px_hsl(191_100%_50%/0.08)]"
    }`;

  const inputBg = { background: "rgba(17, 21, 32, 0.8)" };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "hsl(191 100% 50% / 0.1)", boxShadow: "0 0 30px hsl(191 100% 50% / 0.15)" }}>
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">You're in the queue.</h2>
            <p className="text-muted-foreground text-sm mb-8">
              I've received your details and will review them personally. If there's a fit, you'll hear from me within 48 hours.
            </p>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-[760px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="section-badge mx-auto w-fit mb-4">Let's Work Together</div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">Get in Touch</h1>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Tell me about your business and where you want automation to take it. I read every submission personally.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5" noValidate>
            {/* Row 1 */}
            <Field label="Full Name" error={errors.fullName}>
              <input className={inputClass("fullName")} style={inputBg} value={form.fullName} onChange={(e) => set("fullName", e.target.value)} required />
            </Field>

            {/* Row 2 */}
            <Field label="Email Address" error={errors.email}>
              <input type="email" className={inputClass("email")} style={inputBg} value={form.email} onChange={(e) => set("email", e.target.value)} required />
            </Field>

            {/* Row 3 — Company Name + Company Email side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Company Name" error={errors.companyName}>
                <input className={inputClass("companyName")} style={inputBg} value={form.companyName} onChange={(e) => set("companyName", e.target.value)} required />
              </Field>
              <Field label="Company Email" error={errors.companyEmail}>
                <input type="email" className={inputClass("companyEmail")} style={inputBg} value={form.companyEmail} onChange={(e) => set("companyEmail", e.target.value)} required />
              </Field>
            </div>

            {/* Row 4 — Company Website (required, www. format) */}
            <Field label="Company Website" error={errors.companyWebsite}>
              <input className={inputClass("companyWebsite")} style={inputBg} placeholder="www.example.com" value={form.companyWebsite} onChange={(e) => set("companyWebsite", e.target.value)} required />
            </Field>

            {/* Row 5 */}
            <Field label="Your Role" error={errors.role}>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  className={`${inputClass("role")} w-full text-left flex items-center justify-between`}
                  style={inputBg}
                >
                  <span className={form.role ? "text-foreground" : "text-muted-foreground"}>
                    {form.role || "Select your role..."}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[hsl(191,100%,50%)] transition-transform ${isRoleDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isRoleDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 w-full mt-2 rounded-xl border border-border overflow-hidden shadow-xl"
                      style={{ background: "rgba(17, 21, 32, 0.95)", backdropFilter: "blur(10px)" }}
                    >
                      {roleOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            set("role", option);
                            setIsRoleDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm font-medium transition-all ${
                            form.role === option
                              ? "bg-[hsl(191,100%,50%,0.15)] text-[hsl(191,100%,50%)] border-l-4 border-[hsl(191,100%,50%)]"
                              : "text-muted-foreground hover:bg-[hsl(191,100%,50%,0.1)] hover:text-foreground hover:border-l-4 hover:border-[hsl(191,100%,50%,0.5)]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Field>

            {/* Row 6 — Checkboxes */}
            <Field label="What are you hoping to improve?" error={errors.improvements}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {improvementOptions.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                      form.improvements.includes(opt)
                        ? "border-[hsl(191,100%,50%,0.5)] bg-[hsl(191,100%,50%,0.08)] text-foreground"
                        : "border-border bg-card/50 text-muted-foreground hover:border-[hsl(191,100%,50%,0.3)] hover:bg-card"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.improvements.includes(opt)}
                      onChange={() => toggleImprovement(opt)}
                      className="w-5 h-5 rounded-md border-2 border-border accent-[hsl(191,100%,50%)] cursor-pointer"
                    />
                    <span className="text-sm font-medium">{opt}</span>
                  </label>
                ))}
              </div>
            </Field>

            {/* Row 7 */}
            <Field label="Notes" optional>
              <textarea rows={4} className={inputClass("notes")} style={inputBg} placeholder="Any additional information, questions, or context..." value={form.notes} onChange={(e) => set("notes", e.target.value)} />
            </Field>

            {/* Error banner */}
            {submitError && (
              <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                {submitError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-[10px] text-[15px] font-semibold tracking-[0.3px] cyan-glow-btn disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                "Send My Details →"
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Field = ({
  label,
  error,
  optional,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1.5">
      {label}
      {optional && <span className="text-muted-foreground text-xs ml-1">(optional)</span>}
    </label>
    {children}
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

export default Contact;
