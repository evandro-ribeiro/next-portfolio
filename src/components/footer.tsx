import Link from "next/link";
import { FaLinkedinIn, FaRegCopyright, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  const linkStyle = "border-2 p-3 rounded-full bg-gray-200 hover:scale-125";

  return (
    <div className="flex flex-col items-center pb-4 md:pb-0 md:flex-row justify-around bg-dark-blue">
      <div className="flex mb-5 md:my-5 gap-6">
        <Link
          className={linkStyle}
          href={"https://www.linkedin.com/in/evandro-machado-464485180/"}
          target="blank"
        >
          <FaLinkedinIn className="" />
        </Link>
        <Link
          className={linkStyle}
          href={"https://github.com/evandro-ribeiro"}
          target="blank"
        >
          <FiGithub size={18} className="" />
        </Link>
        <Link
          className={linkStyle}
          href={"https://t.me/evandrormf"}
          target="blank"
        >
          <FaTelegramPlane size={18} className="" />
        </Link>
      </div>
      <p className="flex gap-1 items-center text-xs md:text-base text-gray-200">
        Todos os direitos reservados. <FaRegCopyright size={14} /> 2024
      </p>
    </div>
  );
}
