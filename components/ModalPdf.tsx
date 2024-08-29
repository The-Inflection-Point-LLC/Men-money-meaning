"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "./ui/button";
import Pdf from "./Pdf";
import { cn } from "@/lib/utils";

interface ModalPdfProps {
    className?: string;
    text: string;
    trigger?: any;
    title?: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    file: string;
    icon?: any;
    style?: any;
}

const ModalPdf = (props: ModalPdfProps) => {
    return (
        <Dialog>
            <DialogTrigger
                className={cn(
                    props.trigger
                        ? ""
                        : buttonVariants({
                              className: props.className ? props.className : "",
                              variant: props.variant ? props.variant : "default",
                          }),
                    props.className
                )}
                style={props.style ?? {}}
            >
                {props.trigger ? props.trigger : props.text} {props.icon ?? props.icon}
            </DialogTrigger>
            <DialogContent className="bg-white max-h-[90%] max-w-full lg:max-w-fit lg:min-w-[50%] min-h-[50%] overflow-scroll px-0">
                <DialogHeader className="flex items-center justify-center">
                    <div className="flex items-end justify-end">
                        {props.title && <DialogTitle>{props.title}</DialogTitle>}
                    </div>
                </DialogHeader>
                <div className="flex justify-center items-center w-full">
                    <Pdf file={props.file} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ModalPdf;
