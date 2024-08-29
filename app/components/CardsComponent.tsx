import HighlightText from "@/components/HighlightText";
import ModalImage from "@/components/ModalImage";
import ModalPdf from "@/components/ModalPdf";
import ModalText from "@/components/ModalText";
import ModalVideo from "@/components/ModalVideo";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CardsComponentProps {
    header?: string;
    title?: string;
    tagline?: string;
    data?: any[];
    sectionDetails?: {
        btnText: string;
        type: string;
        link: string;
    };
}

const CardsComponent = (props: CardsComponentProps) => {
    return (
        <section
            id="CardsComponent"
            className="bg-white flex items-center justify-center px-8 lg:pt-28 pt-16 py-16 w-full"
        >
            <div className="max-w-screen-3xl gap-16 flex flex-col max-lg:overflow-hidden lg:px-16 items-center justify-center">
                <div className="flex items-start w-full flex-col justify-center lg:gap-8 gap-5">
                    {props.header && (
                        <HighlightText
                            text={props.header}
                            className={cn(
                                "text-center w-full 2xl:text-8xl lg:text-7xl text-5xl font-medium whitespace-pre-wrap",
                                props.sectionDetails && props.sectionDetails.btnText ? "" : "lg:mb-20 mb-10"
                            )}
                        />
                    )}

                    <div className={cn("w-full flex justify-center", props.header ? "lg:mb-20 mb-10" : "")}>
                        {props.sectionDetails && props.sectionDetails.type === "pdf" && (
                            <ModalPdf
                                file={props.sectionDetails.link}
                                text={props.sectionDetails.btnText}
                                className="text-center md:text-2xl"
                            />
                        )}
                    </div>

                    {props.sectionDetails && props.sectionDetails.type === "text" && (
                        <ModalText text={props.sectionDetails.btnText} desc={props.sectionDetails.link} />
                    )}

                    {props.title && (
                        <HighlightText
                            text={props.title}
                            className={cn(
                                "text-center font-medium whitespace-pre-wrap",
                                props.title.length > 50 ? "lg:text-5xl text-3xl" : "lg:text-6xl text-4xl"
                            )}
                        />
                    )}

                    {props.tagline && (
                        <HighlightText
                            text={props.tagline}
                            className="lg:text-3xl text-2xl  font-normal whitespace-pre-wrap"
                        />
                    )}
                </div>
                {props.data && props.data.length !== 22 && (
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
                        {props.data &&
                            props.data.map((item) => (
                                <div
                                    key={item.id}
                                    className={cn(
                                        "flex flex-col justify-start border border-gray-200 rounded-tr-3xl rounded-bl-3xl text-white"
                                    )}
                                    style={{ background: item.color ?? "" }}
                                >
                                    <div className="w-full px-8 pt-10 rounded-tr-2xl rounded-bl-2xl">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={200}
                                            height={200}
                                            layout="responsive"
                                            className="rounded-tr-2xl rounded-bl-2xl  aspect-3/2"
                                        />
                                    </div>
                                    <div className="px-8 lg:py-10 py-5 lg:gap-4 gap-2 flex flex-col flex-grow">
                                        <HighlightText
                                            text={item.title}
                                            className="whitespace-pre-wrap font-bold lg:text-xl text-lg"
                                        />
                                        <HighlightText text={item.desc} className="whitespace-pre-wrap text-base" />
                                    </div>
                                    <div className="mb-4">
                                        {item.popup && item.popup.type === "video" && (
                                            <ModalVideo
                                                text={`${item.popup.text}`}
                                                icon={<ChevronRight className="w-4 h-4" />}
                                                videoId={item.popup.link ?? ""}
                                                className="flex items-center gap-2 font-semibold text-lg"
                                                style={{ background: item.color ?? "" }}
                                            />
                                        )}
                                        {item.popup && item.popup.type === "pdf" && (
                                            <ModalPdf
                                                text={`${item.popup.text}`}
                                                icon={<ChevronRight className="w-4 h-4" />}
                                                file={item.popup.link ?? ""}
                                                className="flex items-center gap-2 font-semibold text-lg"
                                                style={{ background: item.color ?? "" }}
                                            />
                                        )}
                                        {item.popup && item.popup.type === "image" && (
                                            <ModalImage
                                                text={`${item.popup.text}`}
                                                icon={<ChevronRight className="w-4 h-4" />}
                                                img={item.popup.link ?? ""}
                                                className="flex items-center gap-2 font-semibold text-lg"
                                                style={{ background: item.color ?? "" }}
                                            />
                                        )}
                                        {item.popup && item.popup.type === "text" && (
                                            <ModalText
                                                text={`${item.popup.text}`}
                                                icon={<ChevronRight className="w-4 h-4" />}
                                                className="flex items-center gap-2 font-semibold text-lg"
                                                style={{ background: item.color ?? "" }}
                                                desc={item.popup.link}
                                                title={item.title}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
                {/* {props.data && props.data.length === 4 && (
                    <div className="mx-auto flex w-full">
                        <Carousel
                            className="mx-auto max-w-screen-3xl w-full my-0"
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}
                        >
                            <CarouselContent className="mx-auto">
                                {props.data.map((item) => (
                                    <CarouselItem key={item.id} className="basis-[20rem] md:basis-1/2 lg:basis-1/3">
                                        <div
                                            className={cn(
                                                "flex flex-col border border-gray-200 rounded-tr-3xl rounded-bl-3xl w-full text-white md:min-h-[550px] min-h-[450px]"
                                            )}
                                            style={{ background: item.color ?? "" }}
                                        >
                                            <div className="w-full px-10 pt-10 rounded-tr-2xl rounded-bl-2xl">
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    width={200}
                                                    height={200}
                                                    layout="responsive"
                                                    className="rounded-tr-2xl rounded-bl-2xl aspect-3/2"
                                                />
                                            </div>
                                            <div className="px-10 lg:py-10 py-5 lg:gap-2 gap-1 flex flex-col flex-grow">
                                                <HighlightText
                                                    text={item.title}
                                                    className="whitespace-pre-wrap font-semibold lg:text-xl"
                                                />
                                                <HighlightText
                                                    text={item.desc}
                                                    className="whitespace-pre-wrap text-sm"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                {item.popup && item.popup.type === "video" && (
                                                    <ModalVideo
                                                        text={`${item.popup.text}`}
                                                        icon={<ChevronRight className="w-4 h-4" />}
                                                        videoId={item.popup.link ?? ""}
                                                        className="flex items-center gap-2 font-semibold text-lg"
                                                        style={{ background: item.color ?? "" }}
                                                    />
                                                )}
                                                {item.popup && item.popup.type === "pdf" && (
                                                    <ModalPdf
                                                        text={`${item.popup.text}`}
                                                        icon={<ChevronRight className="w-4 h-4" />}
                                                        file={item.popup.link ?? ""}
                                                        className="flex items-center gap-2 font-semibold text-lg"
                                                        style={{ background: item.color ?? "" }}
                                                    />
                                                )}
                                                {item.popup && item.popup.type === "image" && (
                                                    <ModalImage
                                                        text={`${item.popup.text}`}
                                                        icon={<ChevronRight className="w-4 h-4" />}
                                                        img={item.popup.link ?? ""}
                                                        className="flex items-center gap-2 font-semibold text-lg"
                                                        style={{ background: item.color ?? "" }}
                                                    />
                                                )}
                                                {item.popup && item.popup.type === "text" && (
                                                    <ModalText
                                                        text={`${item.popup.text}`}
                                                        icon={<ChevronRight className="w-4 h-4" />}
                                                        className="flex items-center gap-2 font-semibold text-lg"
                                                        style={{ background: item.color ?? "" }}
                                                        desc={item.popup.link}
                                                        title={item.title}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                )} */}
            </div>
        </section>
    );
};

export default CardsComponent;
