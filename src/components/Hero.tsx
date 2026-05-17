import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            <Sparkles size={14} /> Available for AI engineering work
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Hello there! I am{" "}
            <span className="text-gradient">Abhishek Chaturvedi</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-foreground/90 font-display">
            Software Developer specializing in{" "}
            <span className="text-primary">Generative AI</span> &{" "}
            <span className="text-primary">Agentic Systems Design</span>
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I identify business needs and develop innovative chatbot
            applications powered by Langchain and OpenAI to drive accuracy and
            process efficiency. Passionate about designing data-driven analytical
            models and versatile applications that transform customer
            interactions and streamline support processes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border bg-surface/50 backdrop-blur hover:border-primary/50 hover:bg-primary/5 transition"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="/Abhishek_Chaturvedi_CV.pdf"
              download="Abhishek_Chaturvedi_CV.pdf"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full text-muted-foreground hover:text-foreground transition"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 max-w-lg gap-6 sm:gap-10">
            {[
              { k: "5+", v: "Years building" },
              { k: "20+", v: "AI projects" },
              { k: "Multi", v: "Agent systems" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">
                  {s.k}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
