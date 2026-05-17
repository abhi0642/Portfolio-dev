import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Abhishek Chaturvedi | Software Developer | Generative AI & AI Agent Specialist",
      },
      {
        name: "description",
        content:
          "Portfolio of Abhishek Chaturvedi — Software Developer specializing in Generative AI, AI Agents and Chatbot Development using Langchain and OpenAI. Building intelligent automation solutions.",
      },
      {
        name: "keywords",
        content:
          "Abhishek Chaturvedi, AI developer, Generative AI specialist, Langchain developer, OpenAI integration, AI agent development, RAG system developer, AI chatbot developer, machine learning engineer",
      },
      { property: "og:title", content: "Abhishek Chaturvedi - AI Developer Portfolio" },
      {
        property: "og:description",
        content: "Software Developer specializing in Generative AI and Agentic Systems",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abhishek Chaturvedi",
          jobTitle: "Software Developer | AI Engineer",
          description:
            "Software Developer specializing in Generative AI, AI Agents, Langchain and OpenAI.",
          knowsAbout: [
            "Generative AI",
            "Langchain",
            "OpenAI",
            "AI Agents",
            "RAG Systems",
            "Multi-agent Systems",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-full"
      >
        Skip to content
      </a>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-right" richColors />
    </main>
  );
}
