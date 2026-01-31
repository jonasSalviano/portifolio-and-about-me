import React from "react";
import {
  MapPin,
  Mail,
  Linkedin,
  Code,
  Terminal,
  GraduationCap,
  Briefcase,
  Cpu,
  Layers,
  Server,
  TrendingUp,
  CheckCircle,
  University,
  Bot,
  CodeXml,
  Download,
} from "lucide-react";

export default function Portfolio() {
  const personalInfo = {
    name: "Jonas Flora",
    role: "Desenvolvedor FullStack",
    location: "Galeão, Rio de Janeiro - RJ",
    email: "jonasalmeida49@gmail.com",
    linkedin: "https://linkedin.com/in/jonas-flora",
    about:
      "Desenvolvedor FullStack focado em construir soluções escaláveis. Tenho experiência avançada em arquiteturas modernas (Micro-frontends, Micro-SaaS) e infraestrutura de deploy, além de forte base em PHP e Node.js.",
  };

  const skills = [
    "Next.js",
    "React (Single SPA)",
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
      title: "Modernização de Legado",
      result: "Melhoria na experiência do usuário.",
      description:
        "Integração de novas interfaces reativas (React/Next.js) consumindo APIs de sistemas legados (PHP/SQL Server), estendendo a vida útil do software corporativo.",
      icon: <CheckCircle size={24} />,
    },
  ];

  const projects = [
    {
      title: "Micro-SaaS AI Video Clipper",
      description:
        "Aplicação para automação de cortes de vídeo utilizando Inteligência Artificial. Implementei a lógica de manipulação de mídia e integração com APIs de IA para processamento de conteúdo.",
      tags: ["Node.js", "AI Integration", "SaaS", "Video Processing"],
      icon: <Cpu size={24} />,
    },
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
      role: "Desenvolvedor FullStack",
      period: "06/2023 - Atual",
      description:
        "Atuação estratégica na arquitetura de Micro-frontends com Single-SPA, desenvolvendo bibliotecas de componentes compartilhados. Responsável também pela infraestrutura de deploy, incluindo configuração de Proxy Reverso (Apache) e otimização de servidores para aplicações Next.js e Node.js.",
      tags: ["Micro-frontends", "Single-SPA", "Apache", "DevOps"],
    },
    {
      company: "NTL - Nova Tecnologia LTDA",
      role: "Desenvolvedor FullStack",
      period: "07/2022 - 06/2023",
      description:
        "Criação de sistemas em PHP (MVC) e SQL Server. Utilização de Bootstrap para responsividade e foco em lógica de programação para soluções eficientes.",
      tags: ["Backend", "MVC", "SQL Server"],
    },
    {
      company: "NTL - Nova Tecnologia LTDA",
      role: "Aprendiz em Desenvolvimento Web",
      period: "06/2021 - 07/2022",
      description:
        "Início da trajetória como programador, adquirindo experiência prática em diversas tecnologias e desenvolvendo competências de trabalho em equipe.",
      tags: ["Aprendizado", "Web"],
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
      institution: "RocketSeat",
      course: "Agentes de IA",
      year: "2025 (5h)",
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
    <div>
      {/* Hero Section */}
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
            </div>
          </div>

          <div className="hero-visual">
            <Code size={64} color="white" style={{ opacity: 0.5 }} />
          </div>
        </div>
      </header>

      {/* Skills Section */}
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

      {/* Impact Section */}
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

      {/* Projects Section */}
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

      {/* Experience Section */}
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

      {/* Education Section (ATUALIZADA) */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">
            <GraduationCap className="icon-blue" />
            Formação Acadêmica
          </h2>
          <div className="grid-2">
            {education.map((edu, index) => (
              // Estrutura do card atualizada para usar o ícone quadrado
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

      {/* Footer */}
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
  );
}
