"use client";

import { MdScreenshotMonitor, MdSecurity } from "react-icons/md";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CertificationCard from "./certificationCard";
import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaJava,
  FaPython,
  FaWordpress,
} from "react-icons/fa";
import {
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function CertificationSection() {
  const linearGradient2022 =
    "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)";
  const linearGradient2023 =
    "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 121, 33, 1) 35%, rgba(0, 255, 25, 1) 100%)";
  const linearGradient2024 =
    "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(121, 9, 9, 1) 35%, rgba(204, 0, 255, 1) 99%)";
  const linearGradient2025 =
    "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 121, 91, 1) 35%, rgba(0, 255, 204, 1) 100%)";

  return (
    <section className="h-fit" id="certificacoes">
      <h2 className="text-center font-bold text-4xl pt-10">Certificações</h2>
      <VerticalTimeline
        lineColor="#000"
        layout="2-columns"
        animate={true}
        className="h-full"
      >
        <CertificationCard
          title="HTML, CSS e JavaScript"
          subtitle="Alura"
          icon={<SiJavascript />}
          date="2022"
          backgroundColor={linearGradient2022}
        />
        <CertificationCard
          title="Formação Front-End com React e TypeScript"
          subtitle="Alura"
          icon={<SiTypescript />}
          date="2022"
          backgroundColor={linearGradient2022}
        />
        <CertificationCard
          title="WordPress, Responsividade e SEO"
          subtitle="Alura"
          icon={<FaWordpress />}
          date="2022"
          backgroundColor={linearGradient2022}
        />
        <CertificationCard
          title="Formação SQL com MySQL"
          subtitle="Alura"
          icon={<FaDatabase />}
          date="2022"
          backgroundColor={linearGradient2022}
        />
        <CertificationCard
          title="Fullstack Java + Angular"
          subtitle="DIO"
          icon={<FaJava />}
          date="2023"
          backgroundColor={linearGradient2023}
        />
        <CertificationCard
          title="Python AI Backend Developer"
          subtitle="DIO"
          icon={<FaPython />}
          date="2024"
          backgroundColor={linearGradient2024}
        />
        <CertificationCard
          title="Banco de Dados: Oracle PL/SQL"
          subtitle="DIO"
          icon={<FaDatabase />}
          date="2024"
          backgroundColor={linearGradient2024}
        />
        <CertificationCard
          title="Front-End & Back-End"
          subtitle="Santander Tech+"
          icon={<MdScreenshotMonitor />}
          date="2024 - 2025"
          backgroundColor={linearGradient2024}
        />
        <CertificationCard
          title="The Absolute Beginners Guide to Cyber Security"
          subtitle="Udemy Business"
          icon={<MdSecurity />}
          date="2025"
          backgroundColor={linearGradient2025}
        />
        <CertificationCard
          title="Unit Testing for Typescript & Nodejs Developers with Jest"
          subtitle="Udemy Business"
          icon={<SiJest />}
          date="2025"
          backgroundColor={linearGradient2025}
        />
        <CertificationCard
          title="React Native - The Practical Guide"
          subtitle="Udemy Business"
          icon={<TbBrandReactNative />}
          date="2025"
          backgroundColor={linearGradient2025}
        />
        <CertificationCard
          title="NestJS - The Complete Developers Guide"
          subtitle="Udemy Business"
          icon={<SiNestjs />}
          date="2025"
          backgroundColor={linearGradient2025}
        />
        <CertificationCard
          title="GitHub Actions - The Complete Guide"
          subtitle="Udemy Business"
          icon={<SiGithubactions />}
          date="2025"
          backgroundColor={linearGradient2025}
        />
        <CertificationCard
          title="AWS Certified Cloud Practitioner"
          subtitle="Amazon Web Services"
          icon={<FaAws />}
          date="2025"
          backgroundColor={linearGradient2025}
        />
        <CertificationCard
          title="Docker & Kubernetes: The Practical Guide"
          subtitle="Udemy Business"
          icon={<FaDocker />}
          date="2025"
          backgroundColor={linearGradient2025}
        />
      </VerticalTimeline>
    </section>
  );
}
