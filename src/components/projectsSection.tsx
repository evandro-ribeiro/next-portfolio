import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
    return (
        <section id="portfolio">
            <div className="flex flex-col pt-10 mb-10 gap-12 items-center text-center">
                <h2 className="text-xl md:text-4xl text-cyan-900 md:w-1/4">Veja alguns dos <b>nossos sites</b></h2>
            </div>
            <div className="flex flex-wrap justify-center pb-20 gap-10">
                <Link href="https://evandro-ribeiro.github.io/bootstrap-single-page-responsiva/" target="blank">
                    <div className="size-80 rounded-3xl pt-6 gap-8 flex flex-col items-center duration-700 hover:scale-110 md:skew-y-3 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700">
                        <h3 className="text-xl font-bold">TopCasaFina Arquitetura</h3>
                        <Image className="rounded-lg h-screen" src="/project2.png" alt="Projeto do Portfolio" width={600} height={600} />
                    </div>
                </Link>
                <Link href="https://next-casaverde.vercel.app/" target="blank">
                    <div className="size-80 md:size-96 rounded-3xl pt-6 gap-8 flex flex-col items-center duration-700 hover:scale-110 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700">
                        <h3 className="text-xl font-bold">CasaVerde</h3>
                        <Image className="rounded-lg h-screen" src="/project1.png" alt="Projeto do Portfolio" width={600} height={600} />
                    </div>
                </Link>
                <Link href="https://alura-space-six.vercel.app/" target="blank">
                    <div className="size-80 rounded-3xl pt-6 gap-8 flex flex-col items-center duration-700 hover:scale-110 md:-skew-y-3 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700">
                        <h3 className="text-xl font-bold">Alura Space</h3>
                        <Image className="rounded-lg h-screen" src="/project3.png" alt="Projeto do Portfolio" width={600} height={600} />
                    </div>
                </Link>
            </div>
        </section>
    )
}