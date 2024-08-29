import ModalVideo from "@/components/ModalVideo";
import HighlightText from "@/components/HighlightText";
import ModalPdf from "@/components/ModalPdf";

interface InterestingSectionProps {
    title: string;
    description: string;
    data: {
        id: number;
        text: string;
        color: string;
        btn: { title?: string; btnTxt: string; type: string; link: string };
    }[];
}

const InterestingSection = (props: InterestingSectionProps) => {
    return (
        <section id="Test" className="flex flex-col items-center justify-center gap-10 px-8 bg-white">
            <div className="md:max-w-[802px] w-full mt-28">
                <HighlightText
                    text={props.title}
                    className="lg:text-6xl text-4xl font-medium text-center whitespace-pre-wrap break-words"
                />
            </div>
            <div className="md:max-w-[802px] w-full mb-8">
                <HighlightText
                    text={props.description}
                    className="text-center font-normal lg:text-3xl text-2xl whitespace-pre-wrap"
                />
            </div>
            <div className="mb-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {props.data.map((snippet, index) => (
                    <div
                        className={`w-72 p-4 flex flex-col items-center gap-y-8 ${
                            index % 4 === 0 || index % 4 === 1 ? "rounded-tl-[25%]" : "rounded-br-[25%]"
                        }`}
                        style={{ background: snippet.color }}
                        key={snippet.id}
                    >
                        <HighlightText
                            className="lg:text-3xl text-2xl font-normal text-center p-4 text-white whitespace-pre-wrap"
                            text={snippet.text}
                        />
                        {snippet.btn.type === "video" && (
                            <ModalVideo
                                title={snippet.btn.title ?? ""}
                                text={snippet.btn.btnTxt}
                                className="w-2/3"
                                variant="secondary"
                                videoId={snippet.btn.link}
                            />
                        )}
                        {snippet.btn.type === "pdf" && (
                            <ModalPdf
                                title={snippet.btn.title ?? ""}
                                text={snippet.btn.btnTxt}
                                className="w-2/3"
                                variant="secondary"
                                file=""
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InterestingSection;
