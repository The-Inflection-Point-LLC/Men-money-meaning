import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
    return <div className={cn("mx-auto w-full px-2.5 lg:px-12", className)}>{children}</div>;
};

export default MaxWidthWrapper;
