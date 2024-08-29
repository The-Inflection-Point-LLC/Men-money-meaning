"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "./ui/button";
import HighlightText from "./HighlightText";

interface ModalTextProps {
    className?: string;
    text: string;
    title?: string;
    icon?: any;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    desc: string;
    style?: any;
}

const ModalText = (props: ModalTextProps) => {
    return (
        <Dialog>
            <DialogTrigger
                className={buttonVariants({
                    className: props.className ? props.className : "",
                    variant: props.variant ? props.variant : "default",
                })}
                style={props.style ?? {}}
            >
                {props.text} {props.icon ?? ""}
            </DialogTrigger>
            <DialogContent className="bg-white min-h-[400px] md:min-w-[600px] overflow-auto max-h-[90%] md:max-w-[700px] p-10 rounded-md sm:p-5 lg:max-w-[900px]">
                <DialogHeader>
                    {props.title && <DialogTitle className="text-2xl md:pl-10 md:pt-7">{props.title}</DialogTitle>}
                    <DialogDescription>
                        <HighlightText
                            text={props.desc}
                            className="whitespace-pre-wrap text-lg text-start font-medium text-black md:pl-10 md:pr-9 md:pb-7"
                        />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ModalText;
