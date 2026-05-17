import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const roles = [
  {
    title: "Senior Software Developer — Generative AI",
    company: "Tech Mahindra (Makers Lab)",
    location: "Bengaluru",
    period: "Nov 2024 – Present",
    points: [
      "Engineered an AI-powered enterprise search from scratch, enabling natural-language retrieval of assets and database queries via prompt engineering, attention mapping and few-shot learning; adopted as the client's primary Data Marketplace product.",
      "Optimized performance by skipping redundant LLM calls for UI filters and auto-suggestions.",
      "Proved architecture extensibility beyond databases to CRMs (Salesforce) for unified chat-based data access — positioning the solution for enterprise-wide deployment.",
      "Building an agentic AI migration automation system that interacts with Jenkins, analyzes execution logs, handles auth, calls enterprise APIs and feeds contextual data to LLMs to automate issue resolution across the migration workflow.",
    ],
  },
  {
    title: "Senior Software Developer",
    company: "Indegene + Bitcot",
    location: "Bengaluru",
    period: "Aug 2023 – Aug 2024",
    points: [
      "Developed a Generative AI Chatbot Creator Platform enabling users to build custom chatbots over images, text, CSV, JSON, PPT and databases.",
      "Integrated a Generative AI product recommendation engine using RAG with LangChain, ChromaDB and PGVector for accurate, context-aware responses.",
      "Implemented an enterprise search solution with AWS Kendra, optimizing access to 1,000+ PDFs.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Apisero",
    location: "Bangalore",
    period: "Mar 2022 – July 2023",
    points: [
      "Automated integrations with Salesforce, Guidewire and Symbility through MuleSoft API, cutting data update cycles by 50%.",
      "Collaborated with stakeholders to architect integration solutions and ran rigorous reliability/performance testing.",
      "Drove Agile delivery and cross-functional collaboration to ship high-quality releases.",
    ],
  },
  {
    title: "Software Developer",
    company: "ICICI Lombard GIC Ltd.",
    location: "Mumbai",
    period: "Aug 2020 – Feb 2022",
    points: [
      "Product Prediction Model: built a deep-learning model to predict product success, with data preprocessing and feature engineering on customer behaviour.",
      "Created a customer segmentation algorithm leveraging NLP and reinforcement learning insights.",
      "SMS Engine (Samadhaan): designed a customer communication engine from scratch using Django and PostgreSQL — lifting performance from 98.8% to 99.4% and reducing turnaround time.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Experience
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Where I've <span className="text-gradient">built things</span>
          </h2>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-border" />
          <ol className="space-y-10">
            {roles.map((r, i) => (
              <motion.li
                key={r.title + r.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-14 sm:pl-16"
              >
                <span className="absolute left-0 top-1 grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-primary/10 border border-primary/30 text-primary">
                  <Briefcase size={16} />
                </span>
                <div className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg sm:text-xl font-semibold">
                      {r.title}
                    </h3>
                    <span className="text-xs text-primary font-medium">{r.period}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                    <span className="text-foreground/90 font-medium">{r.company}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {r.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
