import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionComponent() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Qual é o prazo médio de entrega dos sites?
        </AccordionTrigger>
        <AccordionContent>
          O prazo para criação da sua landing page básica é de aproximadamente
          45 dias. Depende bastante da complexidade de elementos que você deseja
          adicionar.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Quais as vantagens em criar meu próprio site?
        </AccordionTrigger>
        <AccordionContent>
          Com um site próprio,você tem total controle sobre o conteúdo, o design
          e a experiência do usuário, podendo comunicar sua identidade de forma
          autêntica e profissional. Além disso, ele funciona como um ponto
          central de informações, onde clientes, parceiros ou empregadores podem
          conhecer seu trabalho, produtos ou serviços a qualquer momento.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Meu site vai aparecer nas pesquisas do Google?
        </AccordionTrigger>
        <AccordionContent>
          Sim, todo o desenvolvimento do site utiliza conceitos de SEO e de boas
          práticas para indexação no Google. Não ficará já inicialmente nas
          primeiras colocações, mas utilizando ferramentas de SEO posteriormente
          pode te auxiliar nisto.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Como é feito o contato durante o desenvolvimento?
        </AccordionTrigger>
        <AccordionContent>
          Fazemos várias reuniões para alinharmos as demandas de desenvolvimento
          do site com o cliente e o atendimento é 100% online via WhatsApp.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
