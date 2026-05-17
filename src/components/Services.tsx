import { motion } from "framer-motion";
import { Bot, Sparkles, Workflow, Code2, Search } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    points: ["Autonomous AI agents", "Workflow orchestration", "AI copilots & assistants"],
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    points: ["Chatbots (Langchain + OpenAI)", "RAG systems", "LLM integrations"],
  },
  {
    icon: Workflow,
    title: "Enterprise Automation",
    points: ["Business process automation", "AI workflows", "Intelligent operations"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    points: ["Full-stack development", "React applications", "API development"],
  },
  {
    icon: Search,
    title: "Data Intelligence",
    points: ["Document AI processing", "NLP systems", "Search intelligence"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Services
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end AI engineering — from research and design to production deployment.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="p-7 rounded-2xl border border-border bg-gradient-to-b from-surface/80 to-surface/30 hover:border-primary/40 transition"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <s.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
