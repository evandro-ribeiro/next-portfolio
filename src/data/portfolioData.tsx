import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaWordpress,
  FaNode,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaJava,
  FaPython,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiGithubactions,
  SiTypescript,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandTypescript, TbBrandReactNative } from "react-icons/tb";
import { MdScreenshotMonitor, MdSecurity } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { Project, Certification, StackItem, NavLink, SocialLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#certificacoes", label: "Certificações" },
];

export const STACKS: StackItem[] = [
  { Icon: FaReact, title: "React.js", colorItem: "shadow-sky-300 text-sky-400 hover:text-sky-300 hover:shadow-sky-300" },
  { Icon: SiNextdotjs, title: "Next.js", colorItem: "shadow-gray-400 text-gray-300 hover:text-white hover:shadow-gray-300" },
  { Icon: TbBrandTypescript, title: "TypeScript", colorItem: "shadow-blue-400 text-blue-300 hover:text-blue-200 hover:shadow-blue-300" },
  { Icon: SiJavascript, title: "JavaScript", colorItem: "shadow-amber-300 text-amber-300 hover:text-amber-200 hover:shadow-amber-200" },
  { Icon: FaHtml5, title: "HTML", colorItem: "shadow-[#e2542e] text-[#e2542e] hover:text-[#ff6b47] hover:shadow-[#e2542e]" },
  { Icon: FaCss3Alt, title: "CSS", colorItem: "shadow-blue-400 text-blue-400 hover:text-blue-300 hover:shadow-blue-300" },
  { Icon: SiTailwindcss, title: "Tailwind", colorItem: "shadow-sky-300 text-sky-300 hover:text-sky-200 hover:shadow-sky-200" },
  { Icon: FaNode, title: "Node.js", colorItem: "shadow-green-400 text-green-400 hover:text-green-300 hover:shadow-green-300" },
  { Icon: SiNestjs, title: "NestJS", colorItem: "shadow-red-400 text-red-400 hover:text-red-300 hover:shadow-red-300" },
  { Icon: FaDocker, title: "Docker", colorItem: "shadow-blue-300 text-blue-400 hover:text-blue-300 hover:shadow-blue-300" },
  { Icon: GrMysql, title: "MySQL", colorItem: "shadow-sky-400 text-sky-400 hover:text-sky-300 hover:shadow-sky-300" },
  { Icon: SiPostgresql, title: "PostgreSQL", colorItem: "shadow-cyan-300 text-cyan-300 hover:text-cyan-200 hover:shadow-cyan-200" },
  { Icon: FaWordpress, title: "WordPress", colorItem: "shadow-cyan-400 text-cyan-400 hover:text-cyan-300 hover:shadow-cyan-300" },
  { Icon: SiJest, title: "Jest", colorItem: "shadow-[#c8421c] text-[#c8421c] hover:text-[#e04820] hover:shadow-[#c8421c]" },
  { Icon: FaAws, title: "AWS", colorItem: "shadow-[#ff9c08] text-[#ff9c08] hover:text-[#ffb030] hover:shadow-[#ff9c08]" },
  { Icon: FaGitAlt, title: "Git", colorItem: "shadow-[#f05539] text-[#f05539] hover:text-[#ff6650] hover:shadow-[#f05539]" },
  { Icon: FaGithub, title: "GitHub", colorItem: "shadow-neutral-500 text-neutral-400 hover:text-neutral-200 hover:shadow-neutral-400" },
];

export const PROJECTS: Project[] = [
  {
    id: "ferline",
    link: "https://ferline.co",
    imgPath: "/ferline.png",
    title: "Ferline Company",
    description:
      "Landing Page de Gestor de Tráfego Pago criada para apresentar a empresa e seus serviços, com o objetivo de atrair novos clientes e gerar leads.",
    icons: [FaWordpress],
  },
  {
    id: "noknok",
    link: "https://noknokdesign.com.br/",
    imgPath: "/noknok.png",
    title: "NokNok Design",
    description:
      "Site de móveis com design minimalista, projetado para demonstrar os serviços prestados pela marca e divulgar suas informações.",
    icons: [FaWordpress],
  },
  {
    id: "meva",
    link: "https://meva-consultoria.vercel.app/",
    imgPath: "/meva.png",
    title: "Meva Consultoria",
    description:
      "Site de consultoria cervejeira, projetado para demonstrar os serviços prestados pela marca e divulgar suas informações.",
    icons: [SiNextdotjs, SiTailwindcss],
  },
  {
    id: "casaverde",
    link: "https://next-casaverde.vercel.app/",
    imgPath: "/casaverde.png",
    title: "CasaVerde",
    description:
      "Site de decorações para a casa, principalmente focado na venda de plantas. Projetado e desenvolvido como SPA para demonstrar o fluxo de páginas de produtos, página de venda e página de finalização de pedido.",
    icons: [SiNextdotjs, SiTailwindcss],
  },
  {
    id: "petshop",
    link: "https://petshop-compass.vercel.app/",
    imgPath: "/petshop.png",
    title: "PetShop Paws n' Play",
    description:
      "Projeto minimalista desenvolvido com foco em tamanhos de tela específicos (Desktop para 1024px e 1440px, mobile para 390px), conforme critérios de aceite.",
    icons: [FaHtml5, FaCss3Alt, SiJavascript],
  },
  {
    id: "monks",
    link: "https://evandro-ribeiro.github.io/js-monks-challenge/",
    imgPath: "/monks.png",
    title: "Monks Web",
    description:
      "Landing page desenvolvida com foco em utilização de menor quantidade de bibliotecas para melhorar performance e simplicidade do projeto.",
    icons: [FaHtml5, FaCss3Alt, SiJavascript],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { id: "1", title: "HTML, CSS e JavaScript", subtitle: "Alura", icon: <SiJavascript />, date: "2022" },
  { id: "2", title: "Formação Front-End com React e TypeScript", subtitle: "Alura", icon: <SiTypescript />, date: "2022" },
  { id: "3", title: "WordPress, Responsividade e SEO", subtitle: "Alura", icon: <FaWordpress />, date: "2022" },
  { id: "4", title: "Formação SQL com MySQL", subtitle: "Alura", icon: <FaDatabase />, date: "2022" },
  { id: "5", title: "Fullstack Java + Angular", subtitle: "DIO", icon: <FaJava />, date: "2023" },
  { id: "6", title: "Python AI Backend Developer", subtitle: "DIO", icon: <FaPython />, date: "2024" },
  { id: "7", title: "Banco de Dados: Oracle PL/SQL", subtitle: "DIO", icon: <FaDatabase />, date: "2024" },
  { id: "8", title: "Front-End & Back-End", subtitle: "Santander Tech+", icon: <MdScreenshotMonitor />, date: "2024 - 2025" },
  { id: "9", title: "The Absolute Beginners Guide to Cyber Security", subtitle: "Udemy Business", icon: <MdSecurity />, date: "2025" },
  { id: "10", title: "Unit Testing for Typescript & Nodejs Developers with Jest", subtitle: "Udemy Business", icon: <SiJest />, date: "2025" },
  { id: "11", title: "React Native - The Practical Guide", subtitle: "Udemy Business", icon: <TbBrandReactNative />, date: "2025" },
  { id: "12", title: "NestJS - The Complete Developers Guide", subtitle: "Udemy Business", icon: <SiNestjs />, date: "2025" },
  { id: "13", title: "GitHub Actions - The Complete Guide", subtitle: "Udemy Business", icon: <SiGithubactions />, date: "2025" },
  { id: "14", title: "AWS Certified Cloud Practitioner", subtitle: "Amazon Web Services", icon: <FaAws />, date: "2025" },
  { id: "15", title: "Docker & Kubernetes: The Practical Guide", subtitle: "Udemy Business", icon: <FaDocker />, date: "2025" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "footer-linkedin",
    href: "https://www.linkedin.com/in/evandro-rm-filho/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]",
  },
  {
    id: "footer-github",
    href: "https://github.com/evandro-ribeiro",
    icon: FiGithub,
    label: "GitHub",
    hoverColor: "hover:text-gray-100 hover:border-gray-400 hover:shadow-[0_0_12px_rgba(156,163,175,0.4)]",
  },
  {
    id: "footer-telegram",
    href: "https://t.me/evandrormf",
    icon: FaTelegramPlane,
    label: "Telegram",
    hoverColor: "hover:text-sky-400 hover:border-sky-400 hover:shadow-[0_0_12px_rgba(56,189,248,0.5)]",
  },
];
