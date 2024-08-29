"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { Mail, LoaderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import HighlightText from "@/components/HighlightText";

interface GetInTouchSectionProps {
    title?: string;
}

const GetInTouchSection = (props: GetInTouchSectionProps) => {
    const form = useRef<HTMLFormElement>(null);
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Schema for validating the email field
    const contactFormSchema = z.object({
        from_email: z.string().email({ message: "Please provide a valid email." }),
    });

    const contactForm = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            from_email: "",
        },
    });

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (form.current) {
                setIsLoading(true);
                emailjs
                    .sendForm(
                        process.env.NEXT_PUBLIC_SMTP_SERVICE ?? "",
                        process.env.NEXT_PUBLIC_SMTP_TEMPLATE ?? "",
                        form.current,
                        {
                            publicKey: process.env.NEXT_PUBLIC_SMTP_PUBLIC_KEY ?? "",
                        }
                    )
                    .then(
                        () => {
                            console.log("SUCCESS!");
                            setIsLoading(false);
                            toast({
                                title: "Message Sent",
                                description: "Thank you! Mitch will reach out to you shortly.",
                            });
                            contactForm.reset();
                        },
                        (error) => {
                            console.log("FAILED...", error.text);
                            setIsLoading(false);
                            toast({
                                title: "Failed to Send",
                                description: `${error.text}\n Please try again`,
                                variant: "destructive",
                            });
                        }
                    );
            }
        } catch (err) {
            console.error(err);
            setIsLoading(false);
            toast({
                title: "Failed to Send",
                description: `Please try again`,
                variant: "destructive",
            });
        }
    };

    return (
        <section id="Contact" className="flex flex-col items-center justify-center w-full px-8 gap-16 bg-[#F0EFEE]">
            {/* Centered Title */}
            <div className="mt-36 text-center">
                {props.title && (
                    <HighlightText text={props.title} className="lg:text-6xl text-4xl font-medium" />
                )}
            </div>

            {/* Content Section: Text on the Left, Email Field on the Right */}
            <div className="flex lg:flex-row flex-col items-center justify-between lg:w-2/3 w-full gap-8 mb-12">
                {/* Text Line on the Left */}
                <div className="flex flex-col max-w-[400px] text-left">
                    <HighlightText
                        className="text-2xl text-gray-500"
                        text="See his bio for his phone number or connect by email and Mitch will reach out to you."
                    />
                </div>

                {/* Email Field and Submit Button */}
                <Form {...contactForm}>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col items-center justify-center gap-4 w-full lg:max-w-[400px]"
                    >
                        <FormField
                            control={contactForm.control}
                            name="from_email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            required
                                            icon={<Mail color="#DF7A2E" />}
                                            placeholder="Your Email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            value="Send"
                            size={"lg"}
                            className="w-full flex items-center justify-center gap-4"
                        >
                            Submit {isLoading && <LoaderIcon className="w-6 h-6" />}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default GetInTouchSection;
