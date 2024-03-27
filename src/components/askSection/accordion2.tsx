import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionComponent2() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" >
          <AccordionTrigger>O que fazer após o lançamento do site?</AccordionTrigger>
          <AccordionContent>
            Você deve planejar ações de Marketing Digital com especialistas para que consiga analisar os dados de interação com os visitantes do seu site, visando maior conversão para sua área.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Como definimos a hospedagem do site?</AccordionTrigger>
          <AccordionContent>
            A hospedagem é um serviço pago a parte para manter seu site online, ou seja, não está incluso o preço no nosso serviço. O cliente pode escolher qual a melhor opção e podemos auxiliar nisto também.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Como funciona o registro de domínio?</AccordionTrigger>
          <AccordionContent>
            Este processo deve ser feito pelo cliente para a segurança das informações. Nós podemos auxiliar no processo de escolha e registro do domínio do site, mas a ação final é do cliente.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>O que preciso para iniciar o desenvolvimento?</AccordionTrigger>
          <AccordionContent>
            Será importante já ter em mãos a Logotipo da empresa em alta resolução, o conteúdo geral do site &#40;Textos, imagens, produtos e serviços oferecidos&#41;.
            É importante também ter uma estrutura em mente de como seria seu site e do menu inicial da página.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}
