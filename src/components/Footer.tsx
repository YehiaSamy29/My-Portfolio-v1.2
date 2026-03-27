import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Get in Touch", href: "/contact", isRoute: true },
];

const Footer = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Copyright + Social */}
        <div className="flex items-center justify-center gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
            © 2026 Yehia Samy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
