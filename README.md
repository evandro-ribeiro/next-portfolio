# 🌐 Evandro Machado | Portfólio Tecnológico & Full Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🚀 Sobre o Projeto

Este é o **Meu Portfólio Profissional**, desenvolvido com ferramentas do desenvolvimento Web moderno. O projeto combina uma **arquitetura robusta de frontend** em **Next.js (App Router)** e **TypeScript** com uma experiência visual futurista e tecnológica (*Glassmorphism*, efeitos *Glow*, paleta neon e micro-interações fluidas).

Projetado do zero para oferecer alta velocidade de carregamento, responsividade impecável em qualquer dispositivo e acessibilidade, este portfólio destaca competências em Engenharia de Software, Desenvolvimento Full Stack, projetos realizados e histórico de certificações.

🔗 **Demonstração Online**: [portfolio-evandro-machado.vercel.app](https://portfolio-evandro-machado.vercel.app/)

---

## ✨ Destaques de UX/UI & Engenharia de Software

- 🌌 **Estética Tecnológica & Cyber-Glow**: Design exclusivo baseado em tom escuro profundo (`#0a0f1e`), gradientes em azul elétrico (`#4C00FF`), laranja solar (`#ff8300`) e detalhes em amarelo vibrante (`#F5DD61`).
- ⚡ **Efeito de Digitação Dinâmico**: Hero section com *typewriter effect* customizado apresentando o cargo de Desenvolvedor Full Stack de forma interativa.
- ✨ **Partículas Flutuantes Otimizadas**: Efeitos de partículas em movimento via **Framer Motion**, com verificação automática da preferência do usuário para redução de movimento (*Accessibility - WCAG*).
- 📜 **Linha do Tempo de Formação & Certificações**: Timeline vertical interativa apresentando o histórico contínuo de aprendizado, cursos e especializações (Alura, DIO, Udemy Business, AWS, etc.).
- 📱 **Menu Mobile Ultra-Fluido com React Portals**: Navegação lateral responsiva portala para o `document.body` com *backdrop blur*, garantindo que os elementos fiquem livres de contenção CSS e com travamento temporário do scroll da página.
- 🎯 **SEO Otimizado & Metadados**: Integração completa da *Metadata API* do Next.js, com tags OpenGraph, palavras-chave dinâmicas, favicon estruturado, `sitemap.xml` e `robots.txt`.
- 📊 **Monitoramento em Tempo Real**: Integração com **Vercel Analytics** e **Vercel Speed Insights** para métricas de desempenho e Core Web Vitals.

---

## 🛠️ Stack Tecnológica & Ferramentas

| Categoria | Tecnologias / Ferramentas |
|---|---|
| **Core & Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Estilização & UI** | [Tailwind CSS](https://tailwindcss.com/), Glassmorphism, CSS Variables, Design System customizado |
| **Animações** | [Framer Motion](https://www.framer.com/motion/), Transições de estado com `AnimatePresence` |
| **Componentes & Ícones** | React Icons (`fa`, `si`, `tb`, `fi`, `md`, `cg`), `react-vertical-timeline-component` |
| **Infraestrutura & Analytics** | Vercel Platform, Vercel Analytics, Vercel Speed Insights |

---

## 📁 Arquitetura do Código

O projeto segue a estrutura modular moderna do **Next.js App Router**, com separação clara de responsabilidades:

```bash
next-portfolio/
├── public/                  # Assets estáticos, logos, favicons e previews
├── src/
│   ├── app/                 # Rotas do App Router, layout global e estilos
│   │   ├── globals.css      # Sistema de design, tokens CSS e overrides
│   │   ├── layout.tsx       # Root layout com configuração da fonte Outfit e Vercel Analytics
│   │   └── page.tsx         # Página principal da aplicação com SEO
│   ├── components/          # Componentes reutilizáveis do projeto
│   │   ├── certifications/  # Timeline e cards de certificações
│   │   ├── projectSection/  # Seção e cards otimizados de projetos
│   │   ├── ui/              # Componentes genéricos de UI (Headings, Dividers)
│   │   ├── initialBanner.tsx# Hero section com partículas e typing effect
│   │   ├── navbar.tsx       # Navegação desktop e menu mobile com Portal
│   │   ├── stacks.tsx       # Badges da stack tecnológica
│   │   ├── contact.tsx      # Seção de contato com CTA do WhatsApp
│   │   └── footer.tsx       # Rodapé institucional e links sociais
│   ├── data/
│   │   └── portfolioData.tsx# Fonte da verdade (DRY) para projetos, stacks e certificações
│   ├── lib/
│   │   └── utils.ts         # Utilitários gerais (cn helper)
│   └── types/
│       └── index.ts         # Definições de interfaces TypeScript do projeto
```

---

## ⚡ Como Executar Localmente

### Pré-requisitos
- **Node.js** v18+ 
- **npm** ou **yarn**

### Passo a passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/evandro-ribeiro/next-portfolio.git
   cd next-portfolio
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação em `http://localhost:3000`.

4. **Gerar a build de produção:**
   ```bash
   npm run build
   ```
---

<div align="center">
  <sub>Desenvolvido por <b>Evandro Machado</b>.</sub>
</div>
