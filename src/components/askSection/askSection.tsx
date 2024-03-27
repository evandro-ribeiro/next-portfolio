import { FaArrowRight } from "react-icons/fa";
import { AccordionComponent } from "./accordion";
import { AccordionComponent2 } from "./accordion2";
import Link from "next/link";

export default function FrequentAskSection() {
    return (
        <section className="flex flex-col items-center gap-6 md:gap-16 md:px-28 py-10 md:py-20">
            <h2 className="text-xl md:text-3xl">Dúvidas Frequentes</h2>
            <div className="flex flex-wrap md:flex-nowrap w-full px-10 justify-between gap-10">
                <AccordionComponent />
                <AccordionComponent2 />                
            </div>
            <Link
                href={"https://wa.me/5544999561963"} target="blank"
                className="flex items-center gap-3 font-semibold border-2 rounded-full py-2 px-6 hover:scale-110 duration-300 hover:shadow-orange-400 hover:shadow-md"
            >
                Tem outras perguntas? <FaArrowRight color="orange" />
            </Link>
        </section>
    )
}