import HighlightText from "@/components/HighlightText";
import ModalImage from "@/components/ModalImage";
import ModalPdf from "@/components/ModalPdf";
import ModalText from "@/components/ModalText";
import ModalVideo from "@/components/ModalVideo";
import Image from "next/image";

interface Section3Props {
    title1?: string;
    text1?: string;
    image?: any;    
    btn1?: {
        text: string;
        type: string;
        link?: string;
    };
    title2?: string;
    text2?: string;
    btn2?: {
        text: string;
        type: string;
        link?: string;
    };
}

const Section3 = (props: Section3Props) => {
    return (
            <section id="Section3" className="bg-[#F0EFEE] flex items-center justify-center px-8 lg:pt-32 py-20 w-full">
                <div className="max-w-screen-2xl lg:gap-12 gap-8 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center lg:gap-6 gap-3">
                        {props.title1 && (
                            <HighlightText
                                text={props.title1}
                                className="lg:text-6xl text-4xl font-medium whitespace-pre-wrap text-center mb-10"
                            />
                        )}
                        {props.text1 && (
                            <HighlightText
                                text={props.text1}
                                className="lg:text-3xl text-2xl font-normal whitespace-pre-wrap text-center"
                            />
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-center lg:gap-4 gap-2">
                        {props.title2 && (
                            <HighlightText
                                text={props.title2}
                                className="lg:text-4xl text-2xl font-medium whitespace-pre-wrap text-center"
                            />
                        )}
                        {props.text2 && (
                            <HighlightText
                                text={props.text2}
                                className="lg:text-3xl text-2xl font-normal whitespace-pre-wrap text-center"
                            />
                        )}
                        {props.image && (
                        <div className="flex items-center justify-center w-full">
                            <Image
                                src={props.image}
                                alt="Tools and Tech"
                                width={800} 
                                height={400}
                                className="object-cover"
                            />
                        </div>
                    )}                           
                    </div>
                </div>
            </section>

    );
};

export default Section3;
