import Image from "next/image";
import Link from "next/link";
import { BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function ProjectsSection() {
  return (
    <section id="portfolio">
      <div className="flex flex-col pt-10 mb-10 gap-12 items-center text-center">
        <h2 className="text-xl md:text-4xl text-cyan-900 md:w-1/4">
          Veja alguns dos <b>nossos sites</b>
        </h2>
      </div>
      <div className="md:pb-20 md:mx-32 mx-10">
        <div className="flex gap-4 py-6 flex-col md:flex-row">
          <Link href="https://meva-consultoria.vercel.app/" target="blank">
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
          <Link href="https://next-casaverde.vercel.app/" target="blank">
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
          <Link href="https://alura-space-six.vercel.app/" target="blank">
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
      </div>
    </section>
  );
}
