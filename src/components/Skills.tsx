import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["Python", "Core Java", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Keras", "Scikit-learn", "Pandas", "NumPy", "Spark"],
  },
  {
    title: "Generative AI",
    items: [
      "Langchain",
      "OpenAI",
      "Hugging Face",
      "Sentence-transformers",
      "Diffusion Models",
      "GANs",
      "VAEs",
      "Transformers",
      "Diffusers",
    ],
  },
  {
    title: "Models",
    items: ["GPT-3.5", "GPT-4", "BERT", "LLaMA", "LLaMA 2", "T5"],
  },
  {
    title: "Databases",
    items: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "ChromaDB",
      "pgVector",
      "MongoDB",
      "Elastic Vector DB",
      "FAISS",
    ],
  },
  {
    title: "AI Techniques",
    items: [
      "NLP",
      "Reinforcement Learning",
      "Data Preprocessing",
      "Feature Engineering",
      "Self-Supervised Learning",
      "Computer Vision",
      "OpenCV",
      "CLIP",
    ],
  },
  {
    title: "Developer Tools",
    items: [
      "PyCharm",
      "Git",
      "Visual Studio",
      "Postman",
      "Jupyter Notebook",
      "Google Colab",
      "Docker",
    ],
  },
  {
    title: "MLOps",
    items: ["Model Deployment", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Tech Stack
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete view of the languages, frameworks, models and tools I work with.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-7 hover:border-primary/40 transition"
            >
              <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
