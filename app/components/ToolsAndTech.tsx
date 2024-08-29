import HighlightText from "@/components/HighlightText";
import ModalPdf from "@/components/ModalPdf";
import Image from "next/image";

interface ToolsAndTechProps {
    title?: string;
    desc?: string;
    image?: any;
}

const ToolsAndTech = (props: ToolsAndTechProps) => {
    return (
        <section id="Tools" className="bg-[#F4EADF] px-20 py-28 w-full">
            <div className="max-w-screen-2xl flex flex-col items-start justify-center gap-16">
                {props.image && (
                    <div className="flex items-center justify-center w-full mb-10">
                        <Image
                            src={props.image}
                            alt="Tools and Tech"
                            width={800}
                            height={400}
                            className="object-cover"
                        />
                    </div>
                )}
                
                {props.title && (
                    <HighlightText
                        text={props.title}
                        className="text-left lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                    />
                )}
                
                <div className="flex flex-col items-start gap-5 mt-10">
                    {props.desc && (
                        <HighlightText 
                            text={props.desc} 
                            className="lg:text-3xl text-2xl font-normal whitespace-pre-wrap text-left" 
                        />
                    )}
                    <div className="flex flex-col items-start gap-4 mb-12">
                        <ModalPdf
                            file="/assets/pdfs/MitchBio-for-MMM-site-including-phone-MHDsite.pdf"
                            text="See his bio"
                            className="bg-[#266480] text-xl text-white px-6 py-3 rounded-lg text-left"
                        />
                        <ModalPdf
                            file=" "
                            text="Fact Sheet on Gender Trends"
                            className="bg-[#DF7A2E] text-xl text-white px-6 py-3 rounded-lg text-left"
                        />
                    </div>                        
                </div>
            </div>
        </section>
    );
};

export default ToolsAndTech;
