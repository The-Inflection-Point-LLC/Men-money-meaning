import HighlightText from "@/components/HighlightText";
import ModalVideo from "@/components/ModalVideo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ModalPdf from "@/components/ModalPdf";
import ModalImage from "@/components/ModalImage";

interface WhatMakesDifferentSectionProps {
    title: string;
    desc: string;
    btn?: {
        type: string;
        link: any;
        title?: string;
        btnTxt: string;
    };
    data: {
        id: number;
        title: string;
        color: string;
        desc?: string;
        img?: any[];
        moreInfo?: {
            title: string;
            link: any;
            type: string;
            btnTxt: string;
        };
    }[];
}

const WhatMakesDifferentSection = (props: WhatMakesDifferentSectionProps) => {
    return (
        <section id="How" className="flex flex-col items-center justify-center px-8 gap-10 bg-white">
            <div className="mt-32">
                <HighlightText
                    text={props.title}
                    className="text-center 2xl:text-7xl lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                />
            </div>
            <div className="md:max-w-[640px]">
                <HighlightText
                    text={props.desc}
                    className="lg:text-3xl text-2xl text-center font-normal whitespace-pre-wrap"
                />
            </div>

            {props.btn && props.btn.type === "video" && (
                <ModalVideo title={props.btn.title} text={props.btn.btnTxt} videoId={props.btn.link} />
            )}

            {props.btn && props.btn.type === "pdf" && (
                <ModalPdf title={props.btn.title} text={props.btn.btnTxt} file={props.btn.link} />
            )}

            {props.btn && props.btn.type === "img" && <ModalImage text={props.btn.btnTxt} img={props.btn.link} />}

            {props.data && (
                <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col mb-28 lg:mt-16 mt-10 md:w-[750px] lg:w-[1000px] xl:w-[1250px] 2xl:w-[1400px] gap-y-4 w-full"
                >
                    {props.data.map((item, index) => (
                        <AccordionItem
                            value={`item-${item.id}`}
                            className={`flex flex-col w-full border-b-0 ${
                                index % 2 === 0 ? "lg:items-start" : "lg:items-end"
                            }`}
                            key={item.id}
                        >
                            <div
                                className={cn("flex items-center justify-between px-4 rounded-tr-3xl lg:w-1/2 w-full")}
                                style={{ background: item.color }}
                            >
                                <HighlightText
                                    className="lg:text-2xl sm:text-xl text-lg font-semibold text-white whitespace-pre-wrap"
                                    text={item.title}
                                />
                                <AccordionTrigger className="text-white" />
                            </div>
                            <AccordionContent className="flex flex-col py-4 px-2 lg:flex-row gap-4 items-center justify-center bg-[#E8DED4] w-full lg:rounded-2xl">
                                {item.desc && (
                                    <div
                                        className={cn(
                                            "flex flex-col lg:items-start items-center justify-center p-4 gap-4 w-full",
                                            `${item.img && item.img.length > 0 ? "lg:w-2/3" : ""}`
                                        )}
                                    >
                                        {item.desc && (
                                            <HighlightText
                                                text={item.desc}
                                                className="lg:text-xl sm:text-lg font-medium whitespace-pre-wrap"
                                                spanClass="!inline-flex items-start"
                                            />
                                        )}
                                        {item.moreInfo && item.moreInfo.type === "video" && (
                                            <ModalVideo
                                                text={item.moreInfo.title}
                                                title={item.moreInfo.title}
                                                videoId={item.moreInfo.link}
                                            />
                                        )}
                                        {item.moreInfo && item.moreInfo.type === "pdf" && (
                                            <ModalPdf
                                                text={item.moreInfo.btnTxt}
                                                title={item.moreInfo.title}
                                                file={item.moreInfo.link}
                                            />
                                        )}
                                        {item.moreInfo && item.moreInfo.type === "img" && (
                                            <ModalImage
                                                text={item.moreInfo.btnTxt}
                                                title={item.moreInfo.title}
                                                img={item.moreInfo.link}
                                            />
                                        )}
                                    </div>
                                )}
                                {item.img &&
                                    item.img.length > 0 &&
                                    item.img.map((img: any, index) => (
                                        <div
                                            key={`img-${index}`}
                                            className={cn("h-full w-full", item.desc ? "lg:w-1/3" : "lg:w-1/2")}
                                        >
                                            <Image
                                                key={index}
                                                src={img.src}
                                                alt=""
                                                height={600}
                                                width={600}
                                                className="max-w-full  object-contain"
                                                layout="responsive"
                                            />
                                        </div>
                                    ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </section>
    );
};

export default WhatMakesDifferentSection;
