import HighlightText from "@/components/HighlightText";
import ModalPdf from "@/components/ModalPdf";

interface Section4 {
    title?: string;
    tagline?: {
        title?: string;
        btnTxt?: string;
        link?: string;
    };
    pyramid?: {
        title1?: string;
        text1?: string;
        title2?: string;
        text2?: string;
        title3?: string;
        text3?: string;
        title4?: string;
        text4?: string;
    };
}

const Section4 = (props: Section4) => {
    return (
        <section id="Tools" className="bg-[#F0EFEE] flex items-center justify-center px-8 py-28 w-full">
            <div className="max-w-screen-3xl gap-16 w-full flex lg:px-16 flex-col items-center justify-center">
                {props.title && (
                    <HighlightText
                        text={props.title}
                        className="text-center 2xl:text-7xl lg:text-6xl text-4xl font-medium whitespace-pre-wrap"
                    />
                )}
                {props.tagline && props.tagline.title && (
                    <div className="flex items-center justify-between px-6 py-3 bg-[#266480] text-white gap-16 rounded-tr-2xl rounded-bl-2xl">
                        <HighlightText text={props.tagline.title} className="text-2xl" />
                        {props.tagline.btnTxt && (
                            <ModalPdf text={props.tagline.btnTxt} file={props.tagline.link ?? ""} />
                        )}
                    </div>
                )}
                {props.pyramid && props.pyramid.title1 && (
                    <div className="grid grid-cols-12 w-full gap-10 2xl:gap-24">
                        <div className="lg:col-span-10 col-span-12 flex flex-col items-center justify-center w-full">
                            <div className="md:p-10 p-5 border-4 flex-col border-[#DF7A2E] w-full flex items-center justify-center rounded-tr-3xl rounded-bl-3xl">
                                {props.pyramid.title1 && (
                                    <HighlightText
                                        text={props.pyramid.title1}
                                        className="lg:text-3xl sm:text-2xl text-xl whitespace-pre-wrap font-semibold text-center text-[#DF7A2E]"
                                    />
                                )}
                                {props.pyramid.text1 && (
                                    <HighlightText
                                        text={props.pyramid?.text1}
                                        className="lg:text-xl text-lg whitespace-pre-wrap text-center text-[#DF7A2E]"
                                    />
                                )}
                            </div>
                            <div className="md:p-10 p-5 border-4 flex-col border-[#048404] w-5/6 flex items-center justify-center rounded-tr-3xl rounded-bl-3xl">
                                {props.pyramid.title2 && (
                                    <HighlightText
                                        text={props.pyramid.title2}
                                        className="lg:text-3xl sm:text-2xl text-xl whitespace-pre-wrap font-semibold text-center text-[#048404]"
                                    />
                                )}
                                {props.pyramid.text2 && (
                                    <HighlightText
                                        text={props.pyramid?.text2}
                                        className="lg:text-xl text-lg whitespace-pre-wrap text-center text-[#048404]"
                                    />
                                )}
                            </div>
                            <div className="md:p-10 p-5 border-4 border-[#906F2E] flex-col w-8/12 flex items-center justify-center rounded-tr-3xl rounded-bl-3xl">
                                {props.pyramid.title3 && (
                                    <HighlightText
                                        text={props.pyramid.title3}
                                        className="lg:text-3xl sm:text-2xl text-xl whitespace-pre-wrap font-semibold text-center text-[#906F2E]"
                                    />
                                )}
                                {props.pyramid.text3 && (
                                    <HighlightText
                                        text={props.pyramid?.text3}
                                        className="lg:text-xl text-lg text-center whitespace-pre-wrap text-[#906F2E]"
                                    />
                                )}
                            </div>
                            <div className="md:p-10 p-5 border-4 flex-col border-[#266480] w-6/12 flex items-center justify-center rounded-tr-3xl rounded-bl-3xl">
                                {props.pyramid.title4 && (
                                    <HighlightText
                                        text={props.pyramid.title4}
                                        className="lg:text-3xl sm:text-2xl text-xl whitespace-pre-wrap font-semibold text-center text-[#266480]"
                                    />
                                )}
                                {props.pyramid.text4 && (
                                    <HighlightText
                                        text={props.pyramid?.text4}
                                        className="lg:text-xl text-lg text-center whitespace-pre-wrap text-[#266480]"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="lg:flex hidden flex-col items-center justify-start pt-16 gap-24 w-full col-span-2">
                            <div className="flex flex-col gap-1 items-start">
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Cost" className="font-medium text-xl w-20" />
                                    <div className="w-8 h-5 bg-[#DF7A2E]" />
                                </div>
                                <div className="flex items-center w-full gap-4">
                                    <HighlightText text="Quality" className="font-medium text-xl w-20" />
                                    <div className="w-8 h-5 bg-[#DF7A2E]" />
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Access" className="font-medium text-xl w-20" />
                                    <div className="w-28 h-5 bg-[#DF7A2E]" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Cost" className="font-medium text-xl w-20" />
                                    <div className="w-14 h-5 bg-[#048404]" />
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Quality" className="font-medium text-xl w-20" />
                                    <div className="w-14 h-5 bg-[#048404]" />
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Access" className="font-medium text-xl w-20" />
                                    <div className="w-28 h-5 bg-[#048404]" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Cost" className="font-medium text-xl w-20" />
                                    <div className="w-16 h-5 bg-[#906F2E]" />
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Quality" className="font-medium text-xl w-20" />
                                    <div className="w-28 h-5 bg-[#906F2E]" />
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Access" className="font-medium text-xl w-20" />
                                    <div className="w-10 h-5 bg-[#906F2E]" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 items-start">
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Cost" className="font-medium text-xl w-20" />
                                    <div className="w-28 h-5 bg-[#266480]" />
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Quality" className="font-medium text-xl w-20" />
                                    <div className="w-28 h-5 bg-[#266480]" />
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <HighlightText text="Access" className="font-medium text-xl w-20" />
                                    <div className="w-8 h-5 bg-[#266480]" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Section4;
