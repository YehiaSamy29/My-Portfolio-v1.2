import { motion } from "framer-motion";
import { 
  Workflow, 
  Brain, 
  Sheet, 
  Mail, 
  MessageSquare, 
  FileText, 
  Database, 
  Calendar, 
  File, 
  Target, 
  Zap, 
  GitBranch, 
  Users, 
  Send, 
  Phone, 
  Bot, 
  Sparkles, 
  Gem, 
  Network, 
  Search, 
  Pin, 
  Volume2, 
  CreditCard, 
  ShoppingCart, 
  Package, 
  Globe, 
  Crosshair, 
  BarChart3, 
  Cloud, 
  CheckSquare, 
  ListTodo, 
  MousePointer,
  Headphones
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Tool {
  name: string;
  icon: LucideIcon;
}

const tools: Tool[] = [
  { name: "n8n", icon: Workflow },
  { name: "OpenAI", icon: Brain },
  { name: "Google Sheets", icon: Sheet },
  { name: "Gmail", icon: Mail },
  { name: "Slack", icon: MessageSquare },
  { name: "Notion", icon: FileText },
  { name: "Airtable", icon: Database },
  { name: "Google Calendar", icon: Calendar },
  { name: "Google Docs", icon: File },
  { name: "HubSpot", icon: Target },
  { name: "Salesforce", icon: Cloud },
  { name: "Pipedrive", icon: GitBranch },
  { name: "Zoho CRM", icon: Users },
  { name: "GoHighLevel", icon: Zap },
  { name: "ActiveCampaign", icon: Send },
  { name: "Mailchimp", icon: Mail },
  { name: "Intercom", icon: MessageSquare },
  { name: "Zendesk", icon: Headphones },
  { name: "Typeform", icon: CheckSquare },
  { name: "WhatsApp Business API", icon: Phone },
  { name: "Telegram", icon: Send },
  { name: "Twilio", icon: Phone },
  { name: "Calendly", icon: Calendar },
  { name: "Botpress", icon: Bot },
  { name: "Retell", icon: Phone },
  { name: "Anthropic", icon: Sparkles },
  { name: "Google Gemini", icon: Gem },
  { name: "Meta LLMs", icon: Brain },
  { name: "Groq", icon: Zap },
  { name: "OpenRouter", icon: Network },
  { name: "Perplexity", icon: Search },
  { name: "Pinecone", icon: Pin },
  { name: "ElevenLabs", icon: Volume2 },
  { name: "Stripe", icon: CreditCard },
  { name: "Shopify", icon: ShoppingCart },
  { name: "WooCommerce", icon: Package },
  { name: "Supabase", icon: Database },
  { name: "Apify", icon: Globe },
  { name: "Firecrawl", icon: Crosshair },
  { name: "Hunter.io", icon: Search },
  { name: "Looker Studio", icon: BarChart3 },
  { name: "Mixpanel", icon: BarChart3 },
  { name: "LinkedIn", icon: Network },
  { name: "Instagram", icon: MessageSquare },
  { name: "Facebook", icon: Users },
  { name: "X (Twitter)", icon: Send },
  { name: "Dropbox", icon: Cloud },
  { name: "OneDrive", icon: Cloud },
  { name: "Trello", icon: CheckSquare },
  { name: "Asana", icon: ListTodo },
  { name: "ClickUp", icon: MousePointer },
  { name: "VPA", icon: Headphones },
];

const ToolsMarquee = () => {
  // Duplicate tools for seamless loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="py-12 overflow-hidden relative bg-card/30 border-y border-border/50">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/30 via-card/30 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/30 via-card/30 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling container */}
        <div className="flex">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-[hsl(191,100%,50%,0.5)] hover:shadow-md transition-all shrink-0 group"
                >
                  <IconComponent 
                    size={28} 
                    className="text-muted-foreground group-hover:text-[hsl(191,100%,50%)] group-hover:scale-110 transition-all" 
                  />
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-[hsl(191,100%,50%)] transition-colors whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
