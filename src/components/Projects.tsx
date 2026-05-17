import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, CheckCircle2, Sparkles, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Project = {
  title: string;
  category: string;
  blurb: string;
  tags: string[];
  description: string;
  highlights: string[];
  responsibilities: string[];
  outcomes: string[];
  techStack: string[];
  links?: { github?: string; demo?: string };
};

const projects: Project[] = [
  {
    title: "Agentic AI Migration Automation",
    category: "Workflow Automation · Multi-Agent Systems",
    blurb:
      "Multi-agent automation orchestrating complex migration workflows with intelligent retry, error detection and automatic recovery via LangGraph.",
    tags: ["LangGraph", "Multi-Agent", "REST APIs", "Event-Driven"],
    description:
      "An agentic AI system that interacts with Jenkins servers, analyzes execution logs, handles authentication seamlessly and communicates with enterprise APIs over HTTP to intelligently automate actions and issue resolution across complex migration workflows.",
    highlights: [
      "LangGraph-powered multi-agent orchestration with planner, executor and recovery agents",
      "Real-time Jenkins log analysis with contextual error classification",
      "Self-healing pipelines with intelligent retry and rollback strategies",
      "Pluggable tool layer for HTTP/REST enterprise APIs",
    ],
    responsibilities: [
      "Architected the agentic graph and message-passing contract between agents",
      "Implemented Jenkins integration, log streaming and authentication handling",
      "Designed the LLM context-injection layer feeding structured run state to the model",
      "Built observability — traces, retries and failure-mode dashboards",
    ],
    outcomes: [
      "Reduced manual intervention in migration runs by an estimated 70%+",
      "Dramatically faster MTTR on failed migrations through automated recovery",
      "Reusable agent framework now applied to other internal automation flows",
    ],
    techStack: [
      "Python",
      "LangGraph",
      "LangChain",
      "OpenAI GPT-4",
      "Jenkins API",
      "REST",
      "PostgreSQL",
    ],
  },
  {
    title: "AI-Powered Enterprise Search & Query System",
    category: "NLP · Database Query · Enterprise Search",
    blurb:
      "Natural-language-to-SQL enterprise search with prompt engineering, few-shot learning and an intelligent caching layer.",
    tags: ["Prompt Engineering", "Few-Shot", "NLP", "Caching"],
    description:
      "Built from scratch as the client's primary Data Marketplace product — lets users retrieve assets and query enterprise databases in natural language. Combines advanced prompt engineering, attention mapping and few-shot learning, with an optimisation layer that skips redundant LLM calls for UI filters and auto-suggestions.",
    highlights: [
      "Natural-language to SQL across multiple enterprise schemas",
      "Few-shot + attention mapping for high query accuracy",
      "Caching layer that bypasses redundant LLM calls for filters & suggestions",
      "Architecture proven to extend to CRMs like Salesforce",
    ],
    responsibilities: [
      "Owned end-to-end design — prompt layer, retrieval, SQL generation and validation",
      "Built schema introspection and few-shot example selection pipeline",
      "Designed multi-tier cache for query, suggestions and filter responses",
      "Worked with stakeholders to harden the product for enterprise rollout",
    ],
    outcomes: [
      "Adopted as the client's primary Data Marketplace product",
      "Significant reduction in LLM cost via smart caching",
      "Foundation for unified chat-based access across enterprise data sources",
    ],
    techStack: [
      "Python",
      "LangChain",
      "OpenAI GPT-4",
      "PostgreSQL",
      "pgVector",
      "FastAPI",
      "Redis",
    ],
  },
  {
    title: "Multi-Modal Chatbot Creation Platform",
    category: "RAG · LLM · No-Code Platform",
    blurb:
      "No-code platform to create custom AI chatbots trained on PDFs, Office docs, code, OCR'd images and SQL/NoSQL databases.",
    tags: ["RAG", "Vector Embeddings", "Multi-Modal", "LLM"],
    description:
      "A Generative AI Chatbot Creator Platform enabling non-technical users to build accurate, context-aware chatbots over diverse knowledge sources — images, text files, CSV, JSON, PPT and even relational/NoSQL databases — all via a modular RAG pipeline.",
    highlights: [
      "Modular RAG pipeline with pluggable loaders, splitters and retrievers",
      "Multi-modal ingestion including OCR for images and document parsing",
      "Per-bot vector namespaces with ChromaDB and PGVector",
      "Friendly no-code authoring flow for non-technical users",
    ],
    responsibilities: [
      "Designed the ingestion → embedding → retrieval → answer pipeline",
      "Integrated multi-modal loaders (PDF, PPT, CSV, JSON, image OCR, SQL)",
      "Implemented prompt templates and grounding guards to reduce hallucinations",
      "Shipped the bot-builder UX flow with enterprise-grade security",
    ],
    outcomes: [
      "Used internally to launch multiple production chatbots quickly",
      "Cut time-to-deploy a new chatbot from weeks to hours",
      "Reusable RAG core powering a product-recommendation engine as well",
    ],
    techStack: [
      "Python",
      "LangChain",
      "OpenAI",
      "ChromaDB",
      "PGVector",
      "FastAPI",
      "React",
    ],
  },
  {
    title: "Generative AI Chatbot",
    category: "Langchain · Python · OpenAI",
    blurb:
      "AI-powered chatbot creator integrating Langchain and OpenAI across documents, URLs, slides, images and databases.",
    tags: ["Langchain", "OpenAI", "Python"],
    description:
      "A no-code chatbot creator that lets enterprises ingest documents, URLs, slides, images and databases and deploy context-aware assistants with enterprise-grade security and access control.",
    highlights: [
      "Heterogeneous source ingestion in a unified pipeline",
      "Token-aware chunking and embedding strategy",
      "Conversation memory with grounded citations",
      "Role-based access on top of indexed content",
    ],
    responsibilities: [
      "Developed the LangChain + OpenAI orchestration layer",
      "Implemented ingestion adapters and embedding workers",
      "Wired authentication, authorization and audit logging",
    ],
    outcomes: [
      "Enabled rapid rollout of internal assistants",
      "Improved knowledge discovery across siloed enterprise content",
    ],
    techStack: ["Python", "LangChain", "OpenAI", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Digital Video Avatar",
    category: "Python · Heygen · Elevenlabs",
    blurb:
      "Virtual video creation app combining custom images, Heygen avatars and Elevenlabs voices for fast, personalized output.",
    tags: ["Heygen", "Elevenlabs", "Python"],
    description:
      "A video generation tool that fuses custom imagery, predefined Heygen avatars and customizable Elevenlabs voices to produce personalized videos at scale — script in, polished avatar video out.",
    highlights: [
      "Pipeline combining avatar generation and TTS voice cloning",
      "Script-driven scene composition",
      "Async job orchestration with status polling",
    ],
    responsibilities: [
      "Integrated Heygen and Elevenlabs APIs end-to-end",
      "Built the rendering and job-tracking backend",
      "Designed the prompt-and-script authoring flow",
    ],
    outcomes: [
      "Cut video production time from days to minutes",
      "Enabled personalized video at scale for marketing experiments",
    ],
    techStack: ["Python", "FastAPI", "Heygen API", "Elevenlabs API"],
  },
  {
    title: "Bank System",
    category: "Java · Applet",
    blurb:
      "Mini banking application in Java with admin and user flows for accounts, deposits, withdrawals and closure.",
    tags: ["Java", "OOP", "Applet"],
    description:
      "An academic-grade banking application demonstrating clean OOP design — separate admin and user workflows for account creation, balance enquiry, deposit, withdrawal and account closure.",
    highlights: [
      "Clear separation of admin and user roles",
      "Persistent account storage",
      "Validated transaction flow with audit trail",
    ],
    responsibilities: [
      "Designed the domain model and account state machine",
      "Implemented the UI and core banking operations",
    ],
    outcomes: [
      "Delivered a complete end-to-end banking demo",
      "Reinforced strong OOP and validation patterns",
    ],
    techStack: ["Java", "Java Applet", "File I/O"],
  },
  {
    title: "Social App",
    category: "React · JavaScript",
    blurb:
      "Open-source React social network demonstrating a clean component-based architecture.",
    tags: ["React", "JavaScript", "Open Source"],
    description:
      "An open-source React social network showcasing component-driven architecture and a flexible foundation that's easy to extend with new features like feeds, profiles and messaging.",
    highlights: [
      "Component-based architecture with reusable primitives",
      "Open-source, easy to fork and extend",
      "Clean state and routing patterns",
    ],
    responsibilities: [
      "Designed the component hierarchy and routing",
      "Implemented core social features",
    ],
    outcomes: [
      "Reusable starter for social-style apps",
      "Strong foundation for future feature additions",
    ],
    techStack: ["React", "JavaScript", "React Router", "CSS"],
    links: { github: "https://github.com/abhi0642" },
  },
];

export function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx === null ? null : projects[openIdx];

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Selected Work
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A snapshot of AI systems, agents and developer tools I've designed and shipped.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col p-7 rounded-2xl border border-border bg-surface/60 backdrop-blur hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, oklch(0.72 0.19 245 / 0.12), transparent 60%)",
                }}
              />
              <div className="relative flex flex-col h-full">
                <div className="text-xs uppercase tracking-wide text-primary/80">
                  {p.category}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs bg-primary/10 text-primary/90 border border-primary/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setOpenIdx(i)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group/btn"
                  >
                    View Details
                    <ArrowUpRight
                      size={16}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </button>
                  <div className="flex items-center gap-2">
                    {p.links?.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {p.links?.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} live demo`}
                        className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-2xl bg-surface/95 border-border backdrop-blur-xl max-h-[85vh] overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <div className="text-xs uppercase tracking-wide text-primary">
                  {active.category}
                </div>
                <DialogTitle className="font-display text-2xl">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground leading-relaxed">
                  {active.description}
                </DialogDescription>
              </DialogHeader>

              <Section icon={<Sparkles size={16} />} title="Highlights" items={active.highlights} />
              <Section icon={<CheckCircle2 size={16} />} title="Responsibilities" items={active.responsibilities} />
              <Section icon={<Target size={16} />} title="Outcomes" items={active.outcomes} />

              <div className="mt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {active.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(active.links?.github || active.links?.demo) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {active.links?.github && (
                    <a
                      href={active.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition text-sm"
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                  {active.links?.demo && (
                    <a
                      href={active.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition glow"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Section({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="mt-5">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="text-primary">{icon}</span>
        {title}
      </h4>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
