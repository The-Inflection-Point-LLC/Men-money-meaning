import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    icon?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, icon, ...props }, ref) => {
    return (
        <div className="relative">
            {icon && (
                <div className="absolute top-0 left-0 flex items-center pl-2 pt-2 pointer-events-none">{icon}</div>
            )}
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-sm border border-black bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 disabled:cursor-not-allowed disabled:opacity-50",
                    `${icon ? "pl-10" : ""}`,
                    className
                )}
                ref={ref}
                {...props}
            />
        </div>
    );
});
Textarea.displayName = "Textarea";

export { Textarea };
