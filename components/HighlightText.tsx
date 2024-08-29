import { cn } from "@/lib/utils";

type HighlightTextProps = {
    text: string;
    className?: string;
    spanClass?: string;
};

const HighlightText = (props: HighlightTextProps) => {
    const parts = props.text.split(/(<b>.*?<\/b>)|(<t>.*?<\/t>)|(<m>.*?<\/m>)|(<.*?>)/);

    return (
        <p className={props.className ? props.className : ""}>
            {parts.map((part, index) =>
                part?.startsWith("<b>") && part.endsWith("</b>") ? (
                    <span
                        key={index}
                        className={cn("font-bold", props.spanClass ? props.spanClass : "")}
                        style={{ wordBreak: "break-word" }}
                    >
                        {part.slice(3, -4)}
                    </span>
                ) : part?.startsWith("<t>") && part.endsWith("</t>") ? (
                    <span
                        key={index}
                        className={cn("sm:ml-5 ml-2 inline-block", props.spanClass ? props.spanClass : "")}
                        style={{ wordBreak: "break-word" }}
                    >
                        {part
                            .slice(3, -4)
                            .split(/(<m>.*?<\/m>)/)
                            .map((innerPart, innerIndex) =>
                                innerPart?.startsWith("<m>") && innerPart.endsWith("</m>") ? (
                                    <span
                                        key={`${index}-${innerIndex}`}
                                        className={cn("sm:min-w-10 min-w-8", props.spanClass ? props.spanClass : "")}
                                        style={{ wordBreak: "break-word" }}
                                    >
                                        {innerPart.slice(3, -4)}
                                    </span>
                                ) : (
                                    innerPart
                                )
                            )}
                    </span>
                ) : part?.startsWith("<") && part.endsWith(">") ? (
                    <span
                        key={index}
                        className={cn("text-[#DF7A2E]", props.spanClass ? props.spanClass : "")}
                        style={{ wordBreak: "break-word" }}
                    >
                        {part.slice(1, -1)}
                    </span>
                ) : (
                    part
                )
            )}
        </p>
    );
};

export default HighlightText;
