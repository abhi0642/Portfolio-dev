import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, ExternalLink } from "lucide-react";

const education = [
  {
    school: "National Institute of Technology Karnataka, Surathkal",
    degree: "Master of Computer Application",
    period: "Jul 2017 – May 2020",
  },
  {
    school: "Welingkar Institute of Management Development and Research, Mumbai",
    degree: "PGDM (Finance)",
    period: "Jul 2020 – May 2022",
  },
  {
    school: "Maharaja Ranjit Singh, Indore",
    degree: "Bachelor of Computer Application",
    period: "Jul 2014 – May 2017",
  },
];

const certifications = [
  {
    name: "Certified ScrumMaster® (Scrum Alliance)",
    meta: "Certificate ID: 001046716",
  },
  {
    name: "Machine Learning (Coursera)",
    meta: "Verified Certificate",
    href: "https://www.coursera.org/account/accomplishments/certificate/RXZPRNTHBK9X",
  },
];

const achievements = [
  "Secured AIR-80 in NIMCET-2017.",
  "Competed at the state level in Muay Thai martial arts — discipline, resilience and personal growth.",
  "Secured AIR-65 in BIT-2017 MCA Entrance Exam.",
];

export function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Background
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-7"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={18} />
              </span>
              <h3 className="font-display font-semibold text-lg">Education</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {education.map((e) => (
                <li key={e.school} className="border-l border-primary/30 pl-4">
                  <div className="text-xs text-primary">{e.period}</div>
                  <div className="mt-1 font-medium">{e.degree}</div>
                  <div className="text-sm text-muted-foreground">{e.school}</div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-7"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                <Award size={18} />
              </span>
              <h3 className="font-display font-semibold text-lg">Certifications</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {certifications.map((c) => (
                <li key={c.name} className="border-l border-primary/30 pl-4">
                  <div className="font-medium">{c.name}</div>
                  <div className="text-sm text-muted-foreground">{c.meta}</div>
                  {c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      View certificate <ExternalLink size={12} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-7"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                <Trophy size={18} />
              </span>
              <h3 className="font-display font-semibold text-lg">Achievements</h3>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
