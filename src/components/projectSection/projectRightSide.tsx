import { motion } from "framer-motion";
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
    <Link href={link} target="blank" rel="noopener noreferrer">
      <motion.section
        className="flex items-center gap-4 p-6 flex-col border-2 border-zinc-500 text-gray-200 bg-zinc-700 rounded-xl lg:flex-row md:hover:bg-zinc-800 transition-colors duration-700"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <article className="flex order-2 lg:order-1 md:w-2/3 rounded-3xl px-6 gap-8 flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold bg-text-dark-gradient bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-sm md:text-base">{description}</p>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <span>Desenvolvido com:</span>
            {icons.map((Icon, index) => (
              <Icon key={index} size={25} />
            ))}
          </div>
        </article>

        <Image
          className="order-1 lg:order-2 duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:shadow-lg hover:shadow-orange"
          src={imgPath}
          alt="Projeto do Portfolio"
          width={600}
          height={600}
        />
      </motion.section>
    </Link>
  );
}
