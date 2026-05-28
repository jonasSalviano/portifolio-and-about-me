"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import {
  MapPin,
  Mail,
  Linkedin,
  Code,
  Terminal,
  GraduationCap,
  Briefcase,
  Layers,
  Server,
  TrendingUp,
  CheckCircle,
  University,
  Bot,
  CodeXml,
  Download,
  Sun,
  Moon,
  Github,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
}

export default function Portfolio() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [theme, setTheme] = useState("light");

  // Lógica para carregar e aplicar o tema salvo ou a preferência do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
      });

      // Títulos
      const sectionTitles = gsap.utils.toArray(".section-title");
      sectionTitles.forEach((title) => {
        gsap.fromTo(
          title,
          { y: 30, opacity: 0 }, // Estado Inicial
          {
            scrollTrigger: {
              trigger: title,
              start: "top 90%",
            },
            y: 0, // Estado Final
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
        );
      });

      // Stacks (Onde o bug estava acontecendo)
      gsap.fromTo(
        ".skill-pill",
        { y: 20, opacity: 0 }, // Estado Inicial
        {
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
          },
          y: 0, // Estado Final
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
      );

      // Cards (Impacto e Projetos)
      const grids = gsap.utils.toArray(".grid-2");
      grids.forEach((grid) => {
        const cards = grid.querySelectorAll(".card");
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 }, // Estado Inicial
          {
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
            },
            y: 0, // Estado Final
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
        );
      });

      // Timeline de Experiência
      gsap.fromTo(
        ".timeline-item",
        { x: -50, opacity: 0 }, // Estado Inicial
        {
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
          },
          x: 0, // Estado Final
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: "power2.out",
        },
      );
    },
    { scope: wrapperRef },
  );

  const personalInfo = {
    name: "Jonas Flora",
    role: "Chapter Leader & FullStack",
    location: "Galeão, Rio de Janeiro - RJ",
    email: "jonasalmeida49@gmail.com",
    linkedin: "https://www.linkedin.com/in/jonasflora/",
    github: "https://github.com/jonasSalviano",
    about:
      "Desenvolvedor FullStack e Chapter Leader de Frontend. Focado em construir soluções escaláveis com Next.js e na complexa integração de microsserviços e micro-frontends. Atuo como a principal referência técnica em CI/CD da equipe, liderando a criação de pipelines e a infraestrutura de deploy.",
  };

  const skills = [
    "Next.js",
    "React (Single SPA , Vite)",
    "Node.js",
    "TypeScript",
    "PHP",
    "Laravel",
    "AdonisJS",
    "Redis",
    "SQL Server",
    "Oracle",
    "Apache & Nginx",
    "Docker",
    "Azure DevOps (CI/CD)",
  ];

  const impacts = [
    {
      title: "Otimização de Performance (Backend)",
      result: "Redução de bloqueios no servidor principal.",
      description:
        "Implementação de arquitetura de filas (Background Jobs) com Redis e Bull para processamento assíncrono de tarefas pesadas e downloads, melhorando a responsividade da aplicação.",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Escalabilidade de Frontend",
      result: "Padronização e reutilização de código.",
      description:
        "Adoção de Micro-frontends (Single-SPA) e criação de uma biblioteca interna de componentes compartilhados, permitindo que múltiplos times trabalhem simultaneamente sem conflitos.",
      icon: <Layers size={24} />,
    },
    {
      title: "Estabilidade de Infraestrutura",
      result: "Deploys mais seguros e organizados.",
      description:
        "Configuração de Proxy Reverso (Apache) e ambientes containerizados para orquestrar aplicações Node.js modernas rodando lado a lado com sistemas legados.",
      icon: <Server size={24} />,
    },
    {
      title: "Cultura de CI/CD & Infraestrutura",
      result: "Deploys automatizados e equipe capacitada.",
      description:
        "Referência técnica na criação de pipelines. Conduzi um workshop interno de Azure DevOps para padronizar as entregas do time, além de orquestrar aplicações em contêineres e proxy reverso.",
      icon: <Server size={24} />,
    },
    {
      title: "Modernização de Legado",
      result: "Melhoria na experiência do usuário.",
      description:
        "Integração de novas interfaces reativas (React/Next.js) consumindo APIs de sistemas legados (PHP/SQL Server), estendendo a vida útil do software corporativo.",
      icon: <CheckCircle size={24} />,
    },
  ];

  const projects = [
    {
      title: "Arquitetura de Filas (Background Jobs)",
      description:
        "Sistema robusto para gerenciamento de downloads e tarefas pesadas em segundo plano. Utilização de filas para garantir alta performance e evitar bloqueios no servidor principal.",
      tags: ["Redis", "Bull", "Backend", "Performance"],
      icon: <Layers size={24} />,
    },
  ];

  const experiences = [
    {
      company: "SESA - Sesatech",
      role: "Chapter Leader Frontend & Dev FullStack",
      period: "06/2023 - Atual",
      description:
        "Atuação estratégica na arquitetura de Micro-frontends com Single-SPA, desenvolvendo bibliotecas de componentes compartilhados. Responsável também pela infraestrutura de deploy, incluindo configuração de Proxy Reverso (Apache) e otimização de servidores para aplicações Next.js e Node.js.",
      tags: [
        "Micro-serviços",
        "React (Single-SPA e Next.Js)",
        "Apache",
        "DevOps",
        "Node",
        "Express",
        "CI/CD",
        "Azure",
      ],
    },
    {
      company: "NTL - Nova Tecnologia LTDA",
      role: "Desenvolvedor FullStack",
      period: "07/2022 - 06/2023",
      description:
        "Criação de sistemas em PHP (MVC) e SQL Server. Utilização de Bootstrap para responsividade e foco em lógica de programação para soluções eficientes.",
      tags: ["Backend", "MVC", "SQL Server", "Frontend", "PHP"],
    },
    {
      company: "NTL - Nova Tecnologia LTDA",
      role: "Aprendiz em Desenvolvimento Web",
      period: "06/2021 - 07/2022",
      description:
        "Início da trajetória como programador, adquirindo experiência prática em diversas tecnologias e desenvolvendo competências de trabalho em equipe.",
      tags: ["Backend", "MVC", "SQL Server", "Frontend", "PHP"],
    },
  ];

  const education = [
    {
      institution: "Estácio",
      course: "Graduação em Análise de Sistemas",
      year: "2025",
      icon: <University size={24} />,
    },
    {
      institution: "UNIPDS",
      course:
        "Pós-graduação em Inteligência Artificial Aplicada e Engenharia de Sistemas com IA",
      year: "02/2026 - 02/2027 ",
      icon: <Bot size={24} />,
    },
    {
      institution: "Alura",
      course: "Formação PHP, Front-end & Dados",
      year: "2022 (+200h)",
      icon: <CodeXml size={24} />,
    },
  ];

  return (
    <>
      {/* Botão de Toggle Fixo na Tela */}
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label="Alternar tema"
        style={{
          position: "fixed",
          top: "1.5rem",
          right: "1.5rem",
          zIndex: 9999, // Fica sempre acima das animações do GSAP
          padding: "0.75rem",
          borderRadius: "50%",
          backgroundColor: theme === "light" ? "#f1f5f9" : "#1e293b",
          color: theme === "light" ? "#0f172a" : "#f8fafc",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          transition: "all 0.3s ease",
        }}
      >
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </button>

      <div ref={wrapperRef} id="smooth-wrapper">
        <div ref={contentRef} id="smooth-content">
          <div>
            <header className="hero">
              <div className="container hero-content">
                <div className="hero-text">
                  <span className="tag tag-blue">{personalInfo.role}</span>
                  <h1>{personalInfo.name}</h1>
                  <p className="hero-description">{personalInfo.about}</p>

                  <div className="contact-info">
                    <div className="contact-item">
                      <MapPin size={18} />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="contact-item">
                      <Mail size={18} />
                      <a href={`mailto:${personalInfo.email}`}>
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="btn-group">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                    <a
                      href="/curriculo.pdf"
                      download="curriculo.pdf"
                      className="btn btn-outline"
                    >
                      <Download size={20} />
                      Currículo
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="hero-visual">
                  <Code size={64} color="white" style={{ opacity: 0.5 }} />
                </div>
              </div>
            </header>

            <section className="section bg-white">
              <div className="container">
                <h2 className="section-title">
                  <Terminal className="icon-blue" />
                  Stacks
                </h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="section bg-slate">
              <div className="container">
                <h2 className="section-title">
                  <TrendingUp className="icon-blue" />
                  Impacto & Otimizações
                </h2>
                <div className="grid-2">
                  {impacts.map((item, index) => (
                    <div key={index} className="card">
                      <div className="card-icon">{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p
                        style={{
                          fontWeight: "600",
                          color: "#2563eb",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.result}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section bg-white">
              <div className="container">
                <h2 className="section-title">
                  <Server className="icon-blue" />
                  Projetos Pessoais
                </h2>
                <div className="grid-2">
                  {projects.map((project, index) => (
                    <div key={index} className="card">
                      <div className="card-icon">{project.icon}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tags-container">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="mini-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section bg-slate">
              <div className="container">
                <h2 className="section-title">
                  <Briefcase className="icon-blue" />
                  Experiência Profissional
                </h2>

                <div className="timeline">
                  {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <span className="timeline-dot"></span>

                      <div>
                        <div className="exp-header">
                          <div>
                            <h3 className="exp-role">{exp.role}</h3>
                            <p className="exp-company">{exp.company}</p>
                          </div>
                          <span className="exp-date">{exp.period}</span>
                        </div>
                        <p style={{ color: "#475569", marginBottom: "1rem" }}>
                          {exp.description}
                        </p>
                        <div
                          className="tags-container"
                          style={{ marginBottom: "1rem" }}
                        >
                          {exp.tags.map((tag, i) => (
                            <span key={i} className="tag tag-gray">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section bg-white">
              <div className="container">
                <h2 className="section-title">
                  <GraduationCap className="icon-blue" />
                  Formação Acadêmica
                </h2>
                <div className="grid-2">
                  {education.map((edu, index) => (
                    <div key={index} className="card">
                      <div className="card-icon">{edu.icon}</div>
                      <h3>{edu.course}</h3>
                      <p style={{ fontWeight: "500", marginBottom: "0.25rem" }}>
                        {edu.institution}
                      </p>
                      <span style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
                        {edu.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <footer className="footer">
              <div className="container">
                <p>© {new Date().getFullYear()} Jonas Flora</p>
                <div className="footer-links">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a href={`mailto:${personalInfo.email}`}>Email</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
