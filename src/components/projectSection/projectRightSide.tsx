import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

export default function ProjectRightSide({
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
    <section className="flex gap-4 py-6 flex-col md:flex-row">
      <div className="hidden md:flex md:w-2/3 rounded-3xl p-6 gap-8 flex-col justify-center">
        <h3 className="text-2xl font-bold bg-text-dark-gradient bg-clip-text text-transparent">
          {title}
        </h3>
        <p>{description}</p>
        <div className="flex items-center gap-2">
          <span>Desenvolvido com:</span>
          {icons.map((Icon, index) => (
            <Icon key={index} size={25} />
          ))}
        </div>
      </div>
      <Link href={link} target="blank" rel="noopener noreferrer">
        <Image
          className="rounded-lg duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:bg-orange-gradient hover:shadow-xl hover:shadow-orange-700"
          src={imgPath}
          alt="Projeto do Portfolio"
          width={600}
          height={600}
        />
      </Link>
      <div className="md:hidden rounded-3xl p-6 gap-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold bg-text-dark-gradient bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-sm">{description}</p>
        <div className="flex items-center gap-2">
          <span>Desenvolvido com:</span>
          {icons.map((Icon, index) => (
            <Icon key={index} size={25} />
          ))}
        </div>
      </div>
    </section>
  );
}
