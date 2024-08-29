import HighlightText from "@/components/HighlightText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface WhatIDoSectionProps {
    data?: { id: number; question: string; answer: string; color: string }[];
    title?: string;
}

const WhatIDOSection = (props: WhatIDoSectionProps) => {
    return (
        <section className="w-full flex justify-center max-md:flex-col">
            <div className="flex flex-col items-center justify-center gap-6 lg:mt-10 md:mt-6 mt-4 px-8 max-w-screen-3xl">
                {props.title && (
                    <HighlightText
                        text={props.title}
                        className="font-semibold text-left w-full lg:text-3xl sm:text-2xl text-xl"
                    />
                )}
                {props.data && (
                    <Accordion
                        type="single"
                        collapsible
                        className="flex flex-col mb-28 md:w-[750px] lg:w-[1000px] gap-y-4 w-full"
                    >
                        {props.data.map((question, index) => (
                            <div
                                key={question.id}
                                className={`flex flex-col w-full ${
                                    index % 2 === 0 ? "md:items-start" : "md:items-end"
                                }`}
                            >
                                <AccordionItem
                                    key={question.id}
                                    value={`question-${question.id}`}
                                    className="px-4 rounded-tr-3xl md:min-w-96 min-w-full w-1/2"
                                    style={{ background: question.color }}
                                >
                                    <div className="flex justify-between items-center">
                                        <HighlightText
                                            text={question.question}
                                            className="lg:text-2xl sm:text-xl text-lg font-medium text-white"
                                        />
                                        <AccordionTrigger className="text-white" />
                                    </div>
                                    <AccordionContent>
                                        <HighlightText
                                            text={question.answer}
                                            className="lg:text-xl sm:text-lg text-base  whitespace-pre-wrap text-white"
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}
                    </Accordion>
                )}
            </div>
        </section>
    );
};

export default WhatIDOSection;
