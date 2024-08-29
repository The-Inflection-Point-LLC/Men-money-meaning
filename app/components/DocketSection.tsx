import Image from "next/image";
import { Button } from "@/components/ui/button";
import HighlightText from "@/components/HighlightText";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface DocketSectionProps {
    dockets?: {
        id: number;
        img: any;
        color: string;
        boldTxt: string;
        text: string;
        btns?: string[];
        time: string;
        event: string;
        place: string;
        cost: string;
    }[];
    title?: string;
}

const DocketSection = (props: DocketSectionProps) => {
    return (
        <section className="flex flex-col justify-center px-8 gap-8 bg-[#F0EFEE]">
            <div className="mt-44">
                {props.title && (
                    <HighlightText text={props.title} className="lg:text-6xl text-4xl font-medium text-center" />
                )}
            </div>
            <div className="lg:mx-10 mx-10">
                {props.dockets && props.dockets.length > 0 && (
                    <Carousel className="my-16 mx-auto max-w-screen-xl">
                        <CarouselContent className="flex items-center justify-between">
                            {props.dockets.map((docket) => (
                                <CarouselItem className="md:basis-1/2" key={docket.id}>
                                    <div
                                        className="flex flex-col w-full p-4 gap-y-4 text-white rounded-2xl md:min-h-[350px] min-h-[300px]"
                                        style={{ background: docket.color }}
                                    >
                                        <HighlightText className="md:text-2xl" text={`Event: ${docket.event}`} />
                                        <HighlightText className="md:text-2xl" text={`Place: ${docket.place}`} />
                                        <HighlightText className="md:text-2xl" text={`Day/time: ${docket.time}`} />
                                        {docket.cost && (
                                            <HighlightText className="md:text-2xl" text={`Cost: ${docket.cost}`} />
                                        )}

                                        {docket.btns &&
                                            docket.btns.length > 0 &&
                                            docket.btns.map((btn) => (
                                                <Button key={btn} variant="secondary" className="w-full my-auto">
                                                    {btn}
                                                </Button>
                                            ))}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                )}
            </div>
        </section>
    );
};

export default DocketSection;
