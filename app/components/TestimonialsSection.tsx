import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface TestimonialsSectionProps {
    testimonies?: { id: number; link?: string; name: string; img: any }[];
}

const TestimonialsSection = (props: TestimonialsSectionProps) => {
    return (
        <section className="flex items-center justify-center px-8 bg-white">
            <div className="lg:mx-10 mx-10">
                {props.testimonies && (
                    <Carousel className="my-16 mx-auto max-w-screen-3xl">
                        <CarouselContent className="flex items-center justify-between">
                            {props.testimonies.map((testimony) => (
                                <CarouselItem key={testimony.id} className="md:basis-1/3 basis-1/2 lg:basis-1/5">
                                    <Image
                                        src={testimony.img.src}
                                        alt={testimony.name}
                                        height={150}
                                        width={150}
                                        className="aspect-square object-contain mix-blend-color-burn"
                                    />
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

export default TestimonialsSection;
