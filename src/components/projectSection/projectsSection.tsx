import { FaCss3Alt, FaHtml5, FaReact, FaWordpress } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ProjectLeftSide from "./projectLeftSide";
import ProjectRightSide from "./projectRightSide";

export default function ProjectsSection() {
  return (
    <section id="portfolio">
      <div className="flex flex-col md:pt-10 mb-10 gap-12 items-center text-center">
        <h2 className="text-2xl md:text-4xl text-gray-300 md:w-1/2">
          Veja alguns dos{" "}
          <b className="text-transparent bg-clip-text bg-dark-blue-gradient">
            projetos realizados
          </b>
        </h2>
      </div>

      <section className="flex flex-col gap-12 md:pb-20 md:mx-32 mx-10">
        <ProjectLeftSide
          link={"https://ferline.co"}
          imgPath={"/ferline.png"}
          title={"Ferline Company"}
          description={
            "Landing Page de Gestor de Tráfego Pago criada para apresentar a empresa e seus serviços, com o objetivo de atrair novos clientes e gerar leads."
          }
          icons={[FaWordpress]}
        />

        <ProjectRightSide
          link={"https://noknokdesign.com.br/"}
          imgPath={"/noknok.png"}
          title={"NokNok Design"}
          description={
            "Site de móveis com design minimalista, projetado para demonstrar os serviços prestados pela marca e divulgar suas informações."
          }
          icons={[FaWordpress]}
        />

        <ProjectLeftSide
          link={"https://meva-consultoria.vercel.app/"}
          imgPath={"/meva.png"}
          title={"Meva Consultoria"}
          description={
            "Site de consultoria cervejeira, projetado para demonstrar os serviços prestados pela marca e divulgar suas informações."
          }
          icons={[SiNextdotjs, SiTailwindcss]}
        />

        <ProjectRightSide
          link={"https://next-casaverde.vercel.app/"}
          imgPath={"/casaverde.png"}
          title={"CasaVerde"}
          description={
            "Site de decorações para a casa, principalmente focado na venda de plantas. Projetado e desenvolvido como SPA para demonstrar o fluxo de páginas de produtos, página de venda e página de finalização de pedido."
          }
          icons={[SiNextdotjs, SiTailwindcss]}
        />

        <ProjectLeftSide
          link={"https://petshop-compass.vercel.app/"}
          imgPath={"/petshop.png"}
          title={"PetShop Paws n' Play"}
          description={
            "Projeto minimalista desenvolvido com foco em tamanhos de tela específicos (Desktop para 1024px e 1440px, mobile para 390px), conforme critérios de aceite"
          }
          icons={[FaHtml5, FaCss3Alt, SiJavascript]}
        />

        <ProjectRightSide
          link={"https://evandro-ribeiro.github.io/js-monks-challenge/"}
          imgPath={"/monks.png"}
          title={"Monks Web"}
          description={
            "Landing page desenvolvida com foco em utilização de menor quantidade de bibliotecas para melhorar performance e simplicidade do projeto"
          }
          icons={[FaHtml5, FaCss3Alt, SiJavascript]}
        />
      </section>
    </section>
  );
}
