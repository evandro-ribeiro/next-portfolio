import { motion } from "framer-motion";
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
      <motion.section
        className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-gray-500 text-gray-200 bg-gray-700 lg:flex-row md:hover:bg-gray-800 transition-colors duration-700"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <Image
          className="duration-700 hover:scale-105 hover:duration-300 hover:ease-in hover:shadow-lg hover:shadow-orange"
          src={imgPath}
          alt="Projeto do Portfolio"
          width={600}
          height={600}
        />

        <article className="md:w-2/3 rounded-3xl px-6 gap-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold bg-text-dark-blue-gradient bg-clip-text text-transparent">
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
      </motion.section>
    </Link>
  );
}
