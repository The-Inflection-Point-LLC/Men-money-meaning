import Image from "next/image";
import HighlightText from "@/components/HighlightText";
import { Button } from "@/components/ui/button";
import ModalPdf from "@/components/ModalPdf";

interface WhoSectionProps {
    title?: string;
}

const WhoSection = (props: WhoSectionProps) => {
    return (
        <section id="Who" className="flex flex-col items-center px-8 gap-16">
            <div className="lg:mt-36 mt-16">
                {props.title && (
                    <HighlightText
                        text={props.title}
                        className="text-center 2xl:text-7xl lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                    />
                )}
            </div>

            <div className="flex gap-4 mb-12">
                <ModalPdf
                    file="/assets/pdfs/MitchDickey-bio.pdf"
                    text="See his bio"
                    className="bg-[#266480] text-xl text-white px-6 py-3 rounded-lg"
                />
                <ModalPdf
                    file="/assets/pdfs/MitchDickey-bio.pdf"
                    text="Fact Sheet on Gender Trends"
                    className="bg-[#DF7A2E] text-xl text-white px-6 py-3 rounded-lg"
                />                
            </div>
        </section>
    );
};

export default WhoSection;
