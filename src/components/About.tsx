import { motion } from "framer-motion";
import { Bot, Database, Workflow, Brain, Building2 } from "lucide-react";
import portrait from "@/assets/abhishek.png";

const skills = [
  { icon: Brain, label: "Generative AI Development" },
  { icon: Bot, label: "AI Agent Architecture" },
  { icon: Workflow, label: "Chatbot Development" },
  { icon: Database, label: "Workflow Automation" },
  { icon: Building2, label: "Enterprise AI Solutions" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl blur-2xl opacity-60" />
          <div className="relative aspect-[4/5] max-w-md rounded-3xl overflow-hidden border border-border glow-ring">
            <img
              src={portrait}
              alt="Portrait of Abhishek Chaturvedi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs uppercase tracking-widest text-primary mb-1">
                AI Engineer
              </div>
              <div className="font-display text-2xl font-semibold">
                Abhishek Chaturvedi
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            About Me
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Building the next generation of <span className="text-gradient">intelligent systems</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Software Developer working at the intersection of Generative
              AI and Agentic Systems Design. I focus on identifying real business
              needs and building innovative AI solutions powered by{" "}
              <span className="text-foreground font-medium">Langchain</span> and{" "}
              <span className="text-foreground font-medium">OpenAI</span> that
              drive accuracy and process efficiency.
            </p>
            <p>
              My approach is data-driven — designing analytical models and
              versatile applications that transform customer interactions and
              streamline support processes. I'm passionate about learning,
              building, and shipping production-grade RAG, multi-agent, and
              enterprise automation systems.
            </p>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface/60 border border-border hover:border-primary/40 transition"
              >
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary">
                  <s.icon size={18} />
                </span>
                <span className="text-sm font-medium">{s.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
