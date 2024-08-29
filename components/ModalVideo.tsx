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
import Youtube from "./Youtube";

interface ModalVideoProps {
    className?: string;
    text: string;
    title?: string;
    icon?: any;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    videoId?: string;
    style?: any;
}

const ModalVideo = (props: ModalVideoProps) => {
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
            <DialogContent className="bg-[#F4EADF] min-h-[400px] md:min-w-[600px] md:max-w-[700px] px-2 rounded-md sm:px-4 lg:max-w-[900px]">
                <DialogHeader>
                    {props.title && <DialogTitle>{props.title}</DialogTitle>}
                    <DialogDescription>
                        <Youtube videoId={props.videoId || "2g811Eo7K8U"} key={props.videoId} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ModalVideo;
