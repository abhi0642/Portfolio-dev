import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Linkedin, Github, Download, Send, Loader2, Phone, Instagram, Copy, Check } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
  // honeypot
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopied((c) => (c === label ? null : c)), 1800);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  const onSubmit = async (data: FormData) => {
    if (data.website) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast.success("Message sent! I'll be in touch shortly.");
    reset();
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Contact
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Interested in working together? Let's discuss how I can help with
            your AI projects — from agents and RAG to enterprise automation.
          </p>

          <div className="mt-8 space-y-3">
            <CopyRow
              icon={<Mail size={18} className="text-primary" />}
              href="mailto:reach2abhishekchaturvedi@gmail.com"
              label="reach2abhishekchaturvedi@gmail.com"
              copyValue="reach2abhishekchaturvedi@gmail.com"
              copyLabel="Email"
              copied={copied === "Email"}
              onCopy={copy}
            />
            <CopyRow
              icon={<Phone size={18} className="text-primary" />}
              href="tel:+918962547434"
              label="+91 8962547434"
              copyValue="+918962547434"
              copyLabel="Phone"
              copied={copied === "Phone"}
              onCopy={copy}
            />
            <a
              href="https://linkedin.com/in/abhi0642/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface/60 hover:border-primary/40 transition"
            >
              <Linkedin size={18} className="text-primary" />
              <span className="text-sm">linkedin.com/in/abhi0642</span>
            </a>
            <a
              href="https://github.com/abhi0642"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface/60 hover:border-primary/40 transition"
            >
              <Github size={18} className="text-primary" />
              <span className="text-sm">github.com/abhi0642</span>
            </a>
            <a
              href="https://instagram.com/abhi_0642"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface/60 hover:border-primary/40 transition"
            >
              <Instagram size={18} className="text-primary" />
              <span className="text-sm">@abhi_0642</span>
            </a>
            <a
              href="/Abhishek_Chaturvedi_CV.pdf"
              download="Abhishek_Chaturvedi_CV.pdf"
              className="inline-flex items-center gap-2 mt-2 h-11 px-5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-7"
          noValidate
        >
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} className="hidden" aria-hidden="true" />

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} className="input" placeholder="Your name" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} type="email" className="input" placeholder="you@email.com" />
            </Field>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <Field label="Phone (optional)" error={errors.phone?.message}>
              <input {...register("phone")} className="input" placeholder="+1 555 ..." />
            </Field>
            <Field label="Subject" error={errors.subject?.message}>
              <input {...register("subject")} className="input" placeholder="What's it about?" />
            </Field>
          </div>
          <Field label="Message" error={errors.message?.message} className="mt-4">
            <textarea {...register("message")} rows={5} className="input resize-none" placeholder="Tell me about your project..." />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow disabled:opacity-60"
          >
            {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} />}
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function CopyRow({
  icon,
  href,
  label,
  copyValue,
  copyLabel,
  copied,
  onCopy,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
  copyValue: string;
  copyLabel: string;
  copied: boolean;
  onCopy: (value: string, label: string) => void;
}) {
  return (
    <div className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-surface/60 hover:border-primary/40 transition">
      {icon}
      <a href={href} className="flex-1 text-sm break-all hover:text-primary transition">
        {label}
      </a>
      <button
        type="button"
        onClick={() => onCopy(copyValue, copyLabel)}
        aria-label={`Copy ${copyLabel}`}
        className="shrink-0 p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition"
      >
        {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && (
        <span role="alert" className="mt-1 block text-xs text-destructive">
          {error}
        </span>
      )}
      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: oklch(0.16 0.02 260);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          color: var(--foreground);
          font-size: 0.875rem;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.72 0.19 245 / 0.2);
        }
        .input::placeholder { color: oklch(0.55 0.02 255); }
      `}</style>
    </label>
  );
}
