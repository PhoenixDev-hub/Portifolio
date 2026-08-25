export interface NavItem {
  n: string;
  label: string;
  href: string;
}

export const nav = {
  brand: "PhoenixDev",
  items: [
    { n: "01", label: "Sobre", href: "#sobre" },
    { n: "02", label: "Skills", href: "#skills" },
    { n: "03", label: "Projetos", href: "#projetos" },
    { n: "04", label: "Contato", href: "#contato" },
  ] as NavItem[],
  cta: "Falar comigo",
};

export const hero = {
  eyebrow: "Olá, eu sou",
  name: "PhoenixDev",
  headline:
    "Desenvolvedor Full-Stack Júnior apaixonado por criar soluções.",
  paragraph:
    "Sou desenvolvedor full-stack júnior com dois anos de dedicação aos estudos e projetos práticos. Possuo uma base sólida nos fundamentos da programação e já sou capaz de desenvolver aplicações de complexidade moderada.",
  primaryCta: "Ver projetos",
  secondaryCta: "Baixar currículo",
  statusLine: "// Disponível para novos projetos",
  code: {
    filename: "dev.ts",
    status: "online — desenvolvendo",
    object: {
      nome: "Phoenix",
      stack: ["TypeScript", "React", "NodeJS"],
      foco: "Full-Stack Web",
      cafe: true,
      disponivel: true,
    },
  },
};

export type TechIcon = "target" | "code" | "map" | "book";

export interface TechRow {
  icon: TechIcon;
  label: string;
  value: string;
}

export const about = {
  eyebrow: "01",
  title: "Sobre mim",
  paragraphs: [
    "Sou desenvolvedor full-stack júnior com dois anos de dedicação aos estudos e projetos práticos. Minha jornada na programação tem sido impulsionada por uma forte curiosidade de entender como as coisas funcionam por baixo dos panos.",
    "Possuo uma base sólida nos fundamentos da programação e já construí diversas aplicações web de complexidade moderada, lidando tanto com a construção de interfaces interativas quanto com o desenvolvimento e a modelagem do backend.",
  ],
  note: "// Foco atual: Aprimorar habilidades em ecossistema Full-Stack",
  card: {
    label: "// FICHA TÉCNICA",
    rows: [
      { icon: "target", label: "FOCO", value: "Desenvolvimento Full-Stack" },
      { icon: "code", label: "STACK PRINCIPAL", value: "React + Node.js" },
      { icon: "map", label: "BASE", value: "Brasil (Remoto)" },
      { icon: "book", label: "APRENDENDO", value: "Arquitetura e Boas Práticas" },
    ] as TechRow[],
  },
};

export const skills = {
  eyebrow: "02",
  title: "Skills & Stack",
  tabs: {
    "Frontend": ["TypeScript", "JavaScript", "React", "TailwindCSS", "Vite", "React Router"],
    "Backend": ["NodeJS", "Express", "Postgres", "MongoDB", "Prisma", "Supabase", "JWT"],
    "Ferramentas": ["Git", "GitHub", "GitLab", "Postman", "NPM", "Nodemon"],
    "Deploy": ["Render", "Vercel"],
  } as Record<string, string[]>,
  marquee: [
    "TypeScript",
    "React",
    "NodeJS",
    "Postgres",
    "TailwindCSS",
    "MongoDB",
    "Prisma",
    "Vite"
  ],
};

import dualLibrasImg from "../assets/DualLibrasHome.png";
import sistemaBibliotecaImg from "../assets/SistemaBiblioteca.png";
import plurimentesImg from "../assets/PlurimentesHome.png";

export interface Project {
  id: string;
  title: string;
  desc: string;
  stack: string[];
  image: string;
  deploy?: string;
  github?: string;
}

export const projects = {
  eyebrow: "03",
  title: "Projetos",
  intro:
    "Alguns dos projetos que venho construindo ao longo da minha jornada como desenvolvedor.",
  items: [
    {
      id: "01",
      title: "DualLibras",
      desc: "Aplicação de transcrição em tempo real com tradução para Libras, desenvolvida para auxiliar alunos surdos em ambientes educacionais. Captura áudio do professor, transcreve usando IA e traduz em tempo real para Libras usando a integração VLibras.",
      stack: ["React", "TypeScript", "TailwindCSS", "Python", "WebSocket", "AssemblyAI"],
      image: dualLibrasImg,
      deploy: "https://duallibrasai.vercel.app/",
      github: "https://github.com/PhoenixDev-hub/DualLibras.AI",
    },
    {
      id: "02",
      title: "Sistema da Biblioteca",
      desc: "Sistema web para gerenciamento de biblioteca escolar/acadêmica, com catálogo digital, reservas, empréstimos, leitores, notificações, dúvidas e configurações administrativas.",
      stack: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Zod", "JWT"],
      image: sistemaBibliotecaImg,
      github: "https://github.com/PhoenixDev-hub/ProjectLibrey",
    },
    {
      id: "03",
      title: "Plurimentes",
      desc: "Um sistema que trabalha com neurodivergentes, focando no desenvolvimento e integração. Contribuição no front-end e no back-end.",
      stack: ["React", "Vite", "TailwindCSS", "TypeScript", "Express", "Nodemailer"],
      image: plurimentesImg,
      github: "https://github.com/Ninhay/Projeto-PluriMentes",
    },
  ] as Project[],
};

export type ContactIcon = "mail" | "github" | "instagram";

export interface ContactChannel {
  icon: ContactIcon;
  text: string;
  href: string;
}

export const contact = {
  eyebrow: "04",
  title: "Contato",
  heading: "Tem um projeto em mente?",
  headingAccent: "Vamos conversar.",
  paragraph:
    "Sempre aberto a novas oportunidades e desafios interessantes. Sinta-se à vontade para me mandar uma mensagem!",
  channels: [
    { icon: "mail", text: "PhoenixDev184@gmail.com", href: "mailto:PhoenixDev184@gmail.com" },
    { icon: "github", text: "PhoenixDev-hub", href: "https://github.com/PhoenixDev-hub" },
    { icon: "instagram", text: "@phoenixdev123", href: "https://www.instagram.com/phoenixdev123" },
  ] as ContactChannel[],
  form: {
    nameLabel: "NOME",
    namePlaceholder: "Seu nome",
    emailLabel: "EMAIL",
    emailPlaceholder: "voce@email.com",
    messageLabel: "MENSAGEM",
    messagePlaceholder: "Olá, gostei do seu perfil...",
    submit: "Enviar mensagem",
    sending: "Enviando...",
  },
};

export const footer = {
  copy: "© 2026 PhoenixDev — Desenvolvido com React, Tailwind e Vite.",
};
