import Image from "next/image";
import Link from "next/link";
import { BsFiletypeScss } from "react-icons/bs";
import { FaCss3Alt, FaDocker, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiGooglemaps,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function ProjectsSection() {
  return (
    <section id="portfolio">
      <div className="flex flex-col pt-10 mb-10 gap-12 items-center text-center">
        <h2 className="text-xl md:text-4xl text-cyan-900 md:w-1/4">
          Veja algumas das <b>nossas aplicações</b>
        </h2>
      </div>

      <div className="md:pb-20 md:mx-32 mx-10">
        <div className="flex gap-4 py-6 flex-col md:flex-row">
          <Link
            href="https://meva-consultoria.vercel.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-lg duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700"
              src="/project2.png"
              alt="Projeto do Portfolio"
              width={600}
              height={600}
            />
          </Link>
          <div className="md:w-2/3 rounded-3xl p-6 gap-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold bg-orange-gradient bg-clip-text text-transparent">
              Meva Consultoria
            </h3>
            <p className="text-sm md:text-base">
              Site de consultoria cervejeira, projetado para demonstrar os
              serviços prestados pela marca e divulgar suas informações.
            </p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido com:</span>
              <SiNextdotjs size={25} title="Next.js" />
              <SiTailwindcss size={25} title="TailwindCSS" color="#38bdf8" />
            </div>
          </div>
        </div>

        <div className="flex gap-4 py-6 flex-col md:flex-row">
          <div className="hidden md:flex md:w-2/3 rounded-3xl p-6 gap-8 flex-col justify-center">
            <h3 className="text-2xl font-bold bg-text-dark-gradient bg-clip-text text-transparent">
              CasaVerde
            </h3>
            <p>
              Site de decorações para a casa, principalmente focado na venda de
              plantas. Projetado e desenvolvido como SPA para demonstrar o fluxo
              de páginas de produtos, página de venda e página de finalização de
              pedido.
            </p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido com:</span>
              <SiNextdotjs size={25} title="Next.js" />
              <SiTailwindcss size={25} title="TailwindCSS" color="#38bdf8" />
            </div>
          </div>
          <Link
            href="https://next-casaverde.vercel.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-lg duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700"
              src="/project1.png"
              alt="Projeto do Portfolio"
              width={600}
              height={600}
            />
          </Link>
          <div className="md:hidden rounded-3xl p-6 gap-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold bg-text-dark-gradient bg-clip-text text-transparent">
              CasaVerde
            </h3>
            <p className="text-sm">
              Site de decorações para a casa, principalmente focado na venda de
              plantas. Projetado e desenvolvido como SPA para demonstrar o fluxo
              de páginas de produtos, página de venda e página de finalização de
              pedido.
            </p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido com:</span>
              <SiNextdotjs size={25} title="Next.js" />
              <SiTailwindcss size={25} title="TailwindCSS" color="#38bdf8" />
            </div>
          </div>
        </div>

        <div className="flex gap-4 py-6 flex-col md:flex-row">
          <Link
            href="https://alura-space-six.vercel.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-lg duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700"
              src="/project3.png"
              alt="Projeto do Portfolio"
              width={600}
              height={600}
            />
          </Link>
          <div className="md:w-2/3 rounded-3xl p-6 gap-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold bg-text-blue-gradient bg-clip-text text-transparent">
              Alura Space
            </h3>
            <p className="text-sm md:text-base">
              Site de imagens do universo desenvolvido para o teste técnico do
              cargo Desenvolvedor Front-End.
            </p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido com:</span>
              <FaReact size={25} title="React" color="#087ea4" />
              <BsFiletypeScss size={25} title="SCSS" />
            </div>
          </div>
        </div>

        <div className="flex gap-4 py-6 flex-col md:flex-row">
          <div className="hidden md:flex md:w-2/3 rounded-3xl p-6 gap-8 flex-col justify-center">
            <h3 className="text-2xl font-bold bg-orange-gradient bg-clip-text text-transparent">
              Mochila de Viagem
            </h3>
            <p>
              Site para organizar sua mochila de viagem, assim não esquecerá
              nada e evitará apuros!
            </p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido com:</span>
              <FaHtml5 size={25} title="HTML" color="red" />
              <FaCss3Alt size={25} title="CSS" color="darkblue" />
              <SiJavascript size={25} title="CSS" color="#f0d81e" />
            </div>
          </div>
          <Link
            href="https://evandro-ribeiro.github.io/mochila-de-viagem/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-lg duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700"
              src="/project4.png"
              alt="Projeto do Portfolio"
              width={600}
              height={600}
            />
          </Link>
          <div className="md:hidden rounded-3xl p-6 gap-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold bg-text-dark-gradient bg-clip-text text-transparent">
              Mochila de Viagem
            </h3>
            <p className="text-sm">
              Site para organizar sua mochila de viagem, assim não esquecerá
              nada e evitará apuros!
            </p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido com:</span>
              <FaHtml5 size={25} title="HTML" color="red" />
              <FaCss3Alt size={25} title="CSS" color="darkblue" />
              <SiJavascript size={25} title="CSS" color="#f0d81e" />
            </div>
          </div>
        </div>

        <div className="flex gap-4 py-6 flex-col md:flex-row">
          <Link
            href="https://github.com/evandro-ribeiro/node-next-amazing-trip"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-lg duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700"
              src="/project5.png"
              alt="Projeto do Portfolio"
              width={600}
              height={600}
            />
          </Link>
          <div className="md:w-2/3 rounded-3xl p-6 gap-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold bg-text-blue-gradient bg-clip-text text-transparent">
              Amazing Trips
            </h3>
            <p className="text-sm md:text-base">
              Aplicação FullStack desenvolvida para simular um serviço de
              viagens como Taxi e Uber, funcionando integrada com a API do
              Google Maps.
            </p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido com:</span>
              <SiNextdotjs size={25} title="React" />
              <FaNode size={25} title="Node.js" />
              <SiGooglemaps size={25} title="Google Maps" color="#dc4e42" />
              <FaDocker size={25} title="Docker" color="#0894e3" />
              <GrMysql size={25} title="MySQL" color="#076591" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
