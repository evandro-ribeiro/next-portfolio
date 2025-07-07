import { BsFiletypeScss } from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ProjectLeftSide from "./projectLeftSide";
import ProjectRightSide from "./projectRightSide";

export default function ProjectsSection() {
  return (
    <section id="portfolio">
      <div className="flex flex-col pt-10 mb-10 gap-12 items-center text-center">
        <h2 className="text-xl md:text-4xl text-cyan-900 md:w-1/4">
          Veja algumas das <b>nossas aplicações</b>
        </h2>
      </div>

      <div className="md:pb-20 md:mx-32 mx-10">
        <ProjectLeftSide
          link={"https://meva-consultoria.vercel.app/"}
          imgPath={"/project1.png"}
          title={"Meva Consultoria"}
          description={
            "Site de consultoria cervejeira, projetado para demonstrar os serviços prestados pela marca e divulgar suas informações."
          }
          icons={[SiNextdotjs, SiTailwindcss]}
        />

        <ProjectRightSide
          link={"https://next-casaverde.vercel.app/"}
          imgPath={"/project2.png"}
          title={"CasaVerde"}
          description={
            "Site de decorações para a casa, principalmente focado na venda de plantas. Projetado e desenvolvido como SPA para demonstrar o fluxo de páginas de produtos, página de venda e página de finalização de pedido."
          }
          icons={[SiNextdotjs, SiTailwindcss]}
        />

        <ProjectLeftSide
          link={"https://evandro-ribeiro.github.io/js-monks-challenge/"}
          imgPath={"/project3.png"}
          title={"Monks Web"}
          description={
            "Landing page desenvolvida com foco em utilização de menor quantidade de bibliotecas para melhorar performance e simplicidade do projeto"
          }
          icons={[FaHtml5, FaCss3Alt, SiJavascript]}
        />

        <ProjectRightSide
          link={"https://petshop-compass.vercel.app/"}
          imgPath={"/project4.png"}
          title={"PetShop Paws n' Play"}
          description={
            "Projeto minimalista desenvolvido com foco apenas em dois tamanhos de tela específicos (1440px e 390px), conforme critérios de aceite."
          }
          icons={[FaHtml5, FaCss3Alt, SiJavascript]}
        />
      </div>
    </section>
  );
}
