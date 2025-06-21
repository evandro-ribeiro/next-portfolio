import { BsFiletypeScss } from "react-icons/bs";
import { FaDocker, FaNode, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiGooglemaps, SiNextdotjs, SiTailwindcss } from "react-icons/si";
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
          imgPath={"/project2.png"}
          title={"Meva Consultoria"}
          description={
            "Site de consultoria cervejeira, projetado para demonstrar os serviços prestados pela marca e divulgar suas informações."
          }
          icons={[SiNextdotjs, SiTailwindcss]}
        />

        <ProjectRightSide
          link={"https://next-casaverde.vercel.app/"}
          imgPath={"/project1.png"}
          title={"CasaVerde"}
          description={
            "Site de decorações para a casa, principalmente focado na venda de plantas. Projetado e desenvolvido como SPA para demonstrar o fluxo de páginas de produtos, página de venda e página de finalização de pedido."
          }
          icons={[SiNextdotjs, SiTailwindcss]}
        />

        <ProjectLeftSide
          link={"https://github.com/evandro-ribeiro/node-next-amazing-trip"}
          imgPath={"/project5.png"}
          title={"Amazing Trips"}
          description={
            "Aplicação FullStack desenvolvida para simular um serviço de viagens como Taxi e Uber, funcionando integrada com a API do Google Maps."
          }
          icons={[SiNextdotjs, FaNode, SiGooglemaps, FaDocker, GrMysql]}
        />

        <ProjectRightSide
          link={"https://alura-space-six.vercel.app/"}
          imgPath={"/project3.png"}
          title={"Alura Space"}
          description={
            "Site de imagens do universo desenvolvido para o teste técnico do cargo Desenvolvedor Front-End."
          }
          icons={[FaReact, BsFiletypeScss]}
        />
      </div>
    </section>
  );
}
