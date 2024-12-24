import { FaArrowRight } from "react-icons/fa";
import { AccordionComponent } from "./accordion";
import { AccordionComponent2 } from "./accordion2";
import Link from "next/link";

export default function FrequentAskSection() {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-16 md:px-16 py-10 md:py-20 overflow-hidden">
      <h2 className="text-xl md:text-3xl">Dúvidas Frequentes</h2>
      <div className="flex flex-wrap w-3/4 md:w-2/3 lg:w-full md:flex-nowrap px-14 justify-center gap-10">
        <AccordionComponent />
        <AccordionComponent2 />
      </div>
      <Link
        href={"https://t.me/evandrormf"}
        target="blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 font-semibold border-2 rounded-full py-2 px-6 hover:scale-110 duration-300 hover:shadow-orange-400 hover:shadow-md"
      >
        Tem outras perguntas? <FaArrowRight color="orange" />
      </Link>
    </section>
  );
}
