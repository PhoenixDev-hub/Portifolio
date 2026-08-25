import { Loader2, Mail, Send, type LucideIcon } from "lucide-react";
import { contact, type ContactChannel, type ContactIcon } from "../data/content";
import { Github, Instagram } from "./Icons";
import SectionHeading from "./SectionHeading";
import { sendContactMessage } from "../services/contact.service";
import { useState } from "react";

const ICONS: Record<ContactIcon, LucideIcon> = {
  mail: Mail,
  github: Github,
  instagram: Instagram,
};

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />

      <div className="mt-10 grid gap-14 lg:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold leading-snug text-white">
            {contact.heading}{" "}
            <span className="text-accent">{contact.headingAccent}</span>
          </h3>

          <p className="mt-4 max-w-md leading-relaxed text-slate-400">
            {contact.paragraph}
          </p>

          <div className="mt-8 space-y-4">
            {contact.channels.map((channel) => (
              <ContactRow key={channel.text} {...channel} />
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactRow({ icon, text, href }: ContactChannel) {
  const Icon = ICONS[icon];
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-colors hover:opacity-80">
      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-slate-400">
        <Icon size={15} />
      </div>
      <span className="font-mono text-sm text-slate-300">{text}</span>
    </a>
  );
}

function ContactForm() {
  const { form } = contact;
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg("");
    try {
      await sendContactMessage({ name, email, message });
      setStatusMsg("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatusMsg("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className="space-y-5 rounded-xl border border-border bg-surface p-8"
      onSubmit={handleSubmit}
    >
      <Field label={form.nameLabel} placeholder={form.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} required />
      <Field label={form.emailLabel} placeholder={form.emailPlaceholder} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <div>
        <label className="mb-2 block font-mono text-xs text-slate-400">
          {form.messageLabel}
        </label>
        <textarea
          rows={4}
          placeholder={form.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-accent/50 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300 disabled:opacity-50"
      >
        {isSending ? (
          <>
            <Loader2 size={16} className="animate-spin" /> {form.sending}
          </>
        ) : (
          <>
            <Send size={16} /> {form.submit}
          </>
        )}
      </button>
      {statusMsg && <p className="text-sm mt-4 text-center text-slate-300">{statusMsg}</p>}
    </form>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Field({ label, placeholder, type = "text", value, onChange, required }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs text-slate-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-accent/50 focus:outline-none"
      />
    </div>
  );
}
