"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  UserRound,
  Mail,
  MessageSquareText,
  LoaderIcon,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import HighlightText from "@/components/HighlightText";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  companyName: z.string().optional(),
  phone: z.string().optional(),
  message: z.string(),
});

interface SuggestionBoxProps {
  title?: string;
  desc?: string;
  disclaimer?: string;
}

const SuggestionBox = (props: SuggestionBoxProps) => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const suggestionForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      phone: "",
      message: "",
    },
  });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = suggestionForm.getValues();

      const payload = {
        checkedValue: [], // Since there are no checkboxes, this will be empty
        name: formData.name,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await fetch(
        "https://api.menmoneymeaning.com/api/EmailSender/contact/newContact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setIsLoading(false);
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
        });
        suggestionForm.reset();
      } else {
        const errorText = await response.text();
        setIsLoading(false);
        toast({
          title: "Failed to Send",
          description: `${errorText}\nPlease try again.`,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      toast({
        title: "Failed to Send",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="w-full px-8 gap-10 bg-[#F0EFEE] flex items-center justify-center">
      <div className="max-w-screen-xl grid lg:grid-cols-2 grid-cols-1">
        <div className="mt-16 flex flex-col gap-8">
          <div className="max-w-full">
            {props.title && (
              <HighlightText
                text={props.title}
                className="lg:text-6xl text-4xl max-lg:text-center font-medium leading-tight whitespace-pre-wrap"
              />
            )}
          </div>
          <div className="flex justify-center flex-col gap-2 md:max-w-[880px] max-w-full">
            {props.desc && (
              <HighlightText
                text={props.desc}
                className="lg:text-3xl text-2xl font-medium whitespace-pre-wrap"
              />
            )}
            {props.disclaimer && (
              <HighlightText
                text={props.disclaimer}
                className="lg:text-xl text-lg font-normal whitespace-pre-wrap"
              />
            )}
          </div>
        </div>
        <Form {...suggestionForm}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 flex mt-16 items-center justify-center w-full flex-col lg:max-w-[880px] max-w-full lg:px-32 mb-16"
          >
            <FormField
              control={suggestionForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Name"
                      icon={<UserRound color="#DF7A2E" />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={suggestionForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      icon={<Mail color="#DF7A2E" />}
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={suggestionForm.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Company Name (Optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={suggestionForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      icon={<PhoneCall color="#DF7A2E" />}
                      placeholder="Phone (Optional)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={suggestionForm.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      icon={<MessageSquareText color="#DF7A2E" />}
                      placeholder="Message"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              value="Send"
              type="submit"
              size={"lg"}
              className="max-md:w-full flex items-center gap-4 max-w-[300px]"
            >
              Submit {isLoading && <LoaderIcon className="w-6 h-6" />}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SuggestionBox;

