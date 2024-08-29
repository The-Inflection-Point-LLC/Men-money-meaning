"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HighlightText from "./HighlightText";

interface ModalImageProps {
    className?: string;
    text: string;
    title?: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    img: any;
    width?: string;
    height?: string;
    icon?: any;
    style?: any;
}

const ModalImage = (props: ModalImageProps) => {
    return (
        <Dialog>
            <DialogTrigger
                className={buttonVariants({
                    className: props.className ? props.className : "",
                    variant: props.variant ? props.variant : "default",
                })}
                style={props.style ?? {}}
            >
                {props.text} {props.icon ?? props.icon}
            </DialogTrigger>
            <DialogContent
                className={cn(
                    `bg-white overflow-scroll pt-10 px-0`,
                    props.height ? `h-[${props.height}px]` : "md:h-2/3",
                    props.width ? `max-w-[${props.width}px]` : "md:max-w-[66.66%] max-w-[800px]"
                )}
            >
                {props.title && (
                    <DialogHeader className="flex items-center justify-center">
                        <div className="flex items-end justify-end">
                            {props.title && <DialogTitle>{props.title}</DialogTitle>}
                        </div>
                    </DialogHeader>
                )}
                <div className="w-full h-full">
                    {props.img && (
                        <Image
                            src={props.img.src}
                            alt={props.title ?? ""}
                            width={500}
                            height={500}
                            className="w-full h-full"
                        />
                    )}
                    {!props.img && (
                        <div className="flex w-full h-full items-center justify-center bg-slate-600">
                            <HighlightText text="Nothing to show" className="text-yellow-500 font-bold text-2xl" />
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ModalImage;
