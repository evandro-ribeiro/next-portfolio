import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

export default function ProjectLeftSide({
  link,
  imgPath,
  title,
  description,
  icons,
}: {
  link: string;
  imgPath: string;
  title: string;
  description: string;
  icons: IconType[];
}) {
  return (
    <Link href={link} target="blank" rel="noopener noreferrer">
      <section className="flex items-center gap-4 p-6 flex-col text-gray-200 bg-gray-700 rounded-lg md:flex-row md:hover:bg-gray-800 transition-colors duration-700">
        <Image
          className="rounded-lg duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700"
          src={imgPath}
          alt="Projeto do Portfolio"
          width={600}
          height={600}
        />

        <article className="md:w-2/3 rounded-3xl px-6 gap-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold bg-text-blue-gradient bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-sm md:text-base">{description}</p>
          <div className="flex items-center gap-2">
            <span>Desenvolvido com:</span>
            {icons.map((Icon, index) => (
              <Icon key={index} size={25} />
            ))}
          </div>
        </article>
      </section>
    </Link>
  );
}
