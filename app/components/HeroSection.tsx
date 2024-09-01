import Image from "next/image";
import ModalVideo from "@/components/ModalVideo";
import HighlightText from "@/components/HighlightText";
import ModalPdf from "@/components/ModalPdf";

interface HeroSectionProps {
    title: string;
    img?: any;
    desc?: string;
    title2?: string;
    desc2?: string;
    btns?: { type: "video" | "pdf"; link: string; btnText: string; title: string }[];
}

const HeroSection = (props: HeroSectionProps) => {
    return (
        <section id="Home" className="w-full flex justify-center">
            <div className="flex lg:flex-row lg:px-16 px-4 flex-col items-center lg:gap-16 gap-12 my-16 lg:mt-32 lg:mb-32 md:mt-28 mt-20 justify-center max-w-screen-3xl">
                <div className="flex flex-col items-center justify-center mx-auto gap-6 lg:w-[45%]">
                    <div className="break-words flex flex-col justify-center gap-4 lg:gap-6">
                        <HighlightText
                            text={props.title}
                            className="2xl:text-5xl lg:text-4xl text-3xl font-semibold text-center lg:text-left leading-tight whitespace-pre-wrap"
                            spanClass="2xl:text-5xl lg:text-4xl text-3xl text-center lg:text-left whitespace-pre-wrap"
                        />
                        {props.desc && (
                            <HighlightText
                                text={props.desc}
                                className="lg:text-2xl sm:text-xl text-xl lg:text-left text-center whitespace-pre-wrap"
                            />
                        )}

                        {(props.title2 || props.desc2) && (
                            <div className="flex flex-col gap-1 mt-4">
                                {props.title2 && (
                                    <HighlightText
                                        text={props.title2}
                                        className="lg:text-4xl sm:text-3xl text-2xl font-semibold"
                                    />
                                )}
                                {props.desc2 && (
                                    <HighlightText
                                        text={props.desc2}
                                        className="lg:text-2xl sm:text-xl whitespace-pre-wrap text-xl"
                                        spanClass="!inline-flex items-start md:gap-1"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                    {props.btns && props.btns.length > 0 && (
                        <div className="flex lg:flex-row flex-col gap-4 max-lg:w-full">
                            {props.btns.map((btn, index) =>
                                btn.type === "video" ? (
                                    <ModalVideo
                                        key={`btn-${index}`}
                                        title={btn.title}
                                        text={btn.btnText}
                                        className="max-lg:w-full"
                                        videoId={btn.link}
                                    />
                                ) : (
                                    <ModalPdf
                                        key={`btn-${index}`}
                                        text={btn.btnText}
                                        title={btn.title}
                                        file=""
                                        className="max-lg:w-full"
                                    />
                                )
                            )}
                        </div>
                    )}
                </div>
                {props.img && (
                    <div className="lg:ml-16">
                        <Image src={props.img.src} alt="Hero" className="lg:flex hidden" width={600} height={380} unoptimized />
                        <div className="lg:h-96 max-lg:flex hidden">
                            <Image src={props.img.src} alt="Hero" width={380} height={380} unoptimized />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
