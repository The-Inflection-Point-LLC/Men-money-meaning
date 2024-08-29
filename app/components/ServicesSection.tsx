import ModalVideo from "@/components/ModalVideo";
import HighlightText from "@/components/HighlightText";
import Image from "next/image";
import ModalPdf from "@/components/ModalPdf";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import ModalImage from "@/components/ModalImage";

interface ServicesSectionProps {
    services?: {
        id: number;
        title: string;
        desc: string;
        text: string;
        color: string;
        img?: any;
        moreInfo?: {
            title: string;
            link?: any;
            type: string;
            file?: string;
        };
    }[];
    title?: string;
    desc?: string;
    pricingAccordion?: {
        id: number;
        title: string;
        color: string;
        btn?: {
            btnTxt: string;
            type: string;
            link: any;
            title?: string;
        };
    }[];
}

const ServicesSection = (props: ServicesSectionProps) => {
    return (
        <section id="Services" className="flex flex-col items-center bg-white justify-center px-8">
            <div className="flex flex-col items-center mt-28 mb-12">
                {props.title && (
                    <HighlightText
                        text={props.title}
                        className="lg:text-6xl text-4xl font-medium text-center whitespace-pre-wrap"
                    />
                )}
                {props.desc && (
                    <HighlightText
                        text={props.desc}
                        className="lg:text-2xl text-lg font-normal text-center whitespace-pre-wrap"
                    />
                )}
            </div>
            {props.pricingAccordion &&
                props.pricingAccordion.length > 0 &&
                props.pricingAccordion.map((accordion) => (
                    <>
                        <div
                            key={accordion.id}
                            className={cn(
                                "flex md:mb-12 mb-4 items-center md:justify-between justify-center md:min-w-[700px] min-w-full rounded-bl-3xl rounded-tr-3xl p-4"
                            )}
                            style={{ background: accordion.color ?? "" }}
                        >
                            <HighlightText
                                className="lg:text-2xl sm:text-xl text-lg font-normal text-white"
                                text={accordion.title && accordion.title}
                            />
                            {accordion.btn && accordion.btn.type === "video" ? (
                                <ModalVideo
                                    text={accordion.btn.btnTxt}
                                    title={accordion.btn.title ?? ""}
                                    className="md:flex hidden"
                                    videoId={accordion.btn.link}
                                />
                            ) : accordion.btn && accordion.btn.type === "pdf" ? (
                                <ModalPdf
                                    file={accordion.btn.link}
                                    text={accordion.btn.btnTxt}
                                    title={accordion.btn.title ?? ""}
                                    className="md:flex hidden"
                                />
                            ) : accordion.btn && accordion.btn.type === "img" ? (
                                <ModalImage
                                    img={accordion.btn.link}
                                    text={accordion.btn.btnTxt}
                                    className="md:flex hidden"
                                />
                            ) : null}
                        </div>

                        {accordion.btn && accordion.btn.type === "video" ? (
                            <ModalVideo
                                text={accordion.btn.btnTxt}
                                title={accordion.btn.title ?? ""}
                                className="md:hidden flex"
                                videoId={accordion.btn.link}
                            />
                        ) : accordion.btn && accordion.btn.type === "pdf" ? (
                            <ModalPdf
                                file={accordion.btn.link}
                                text={accordion.btn.btnTxt}
                                title={accordion.btn.title ?? ""}
                                className="md:hidden flex"
                            />
                        ) : accordion.btn && accordion.btn.type === "img" ? (
                            <ModalImage
                                img={accordion.btn.link}
                                text={accordion.btn.btnTxt}
                                className="md:hidden flex"
                            />
                        ) : null}
                    </>
                ))}

            {props.services && (
                <Accordion type="single" collapsible className="mb-16 mt-10 flex flex-col gap-y-8">
                    {props.services.map((service) => (
                        <AccordionItem
                            value={`service-${service.id}`}
                            className="lg:min-w-[800px] min-w-full"
                            key={service.id}
                        >
                            <div
                                className="flex items-center justify-between px-4 py-2 rounded-tr-3xl lg:max-w-[800px] max-w-full sm:max-w-[612px]"
                                style={{ background: service.color }}
                            >
                                <div className="flex flex-col">
                                    <HighlightText
                                        text={service.title}
                                        className="lg:text-2xl sm:text-xl text-lg font-semibold text-white"
                                    />
                                    <HighlightText
                                        text={service.desc}
                                        className="lg:text-xl sm:text-lg text-base font-normal text-white whitespace-pre-wrap"
                                    />
                                </div>
                                <AccordionTrigger className="text-white" />
                            </div>
                            <AccordionContent className="flex lg:flex-row flex-col items-center md:gap-4 bg-[#E8DED4] lg:max-w-[800px] max-w-full sm:max-w-[612px]">
                                <div
                                    className={cn(
                                        "flex flex-col lg:items-start items-center gap-4 px-2 lg:py-2 lg:mb-0 mb-4",
                                        service.img ? "lg:w-2/3" : "w-full"
                                    )}
                                >
                                    <HighlightText
                                        className="lg:p-4 p-2 lg:text-lg text-base font-normal whitespace-pre-wrap"
                                        text={service.text}
                                    />
                                    {service.moreInfo && service.moreInfo.type === "video" ? (
                                        <ModalVideo
                                            text={service.moreInfo.title}
                                            variant="default"
                                            className="lg:mx-4"
                                        />
                                    ) : service.moreInfo && service.moreInfo.type === "pdf" ? (
                                        <ModalPdf
                                            file={service.moreInfo.link}
                                            text={service.moreInfo.title}
                                            className="lg:mx-4"
                                        />
                                    ) : service.moreInfo && service.moreInfo.type === "img" ? (
                                        <ModalImage
                                            img={service.moreInfo.link}
                                            text={service.moreInfo.title}
                                            className="lg:mx-4"
                                        />
                                    ) : null}
                                </div>
                                {service.img && (
                                    <div className="lg:w-1/3 w-full">
                                        <Image
                                            src={service.img.src}
                                            alt="img"
                                            className="max-w-full lg:aspect-square object-contain"
                                            height={400}
                                            width={400}
                                            layout="responsive"
                                        />
                                    </div>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </section>
    );
};

export default ServicesSection;
