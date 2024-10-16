"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  UserRound,
  PhoneCall,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  MessageSquareText,
  LoaderIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import HighlightText from "@/components/HighlightText";

interface GetInTouchSectionProps {
  title?: string;
  instaLink?: string;
  fbLink?: string;
  linkedinLink?: string;
  youtubeLink?: string;
}

const GetInTouchSection = (props: GetInTouchSectionProps) => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contactFormSchema = z.object({
    from_name: z.string(),
    from_email: z.string().email({ message: "Please provide a valid email." }),
    phone: z.string(),
    companyName: z.string(),
    subject: z.array(z.string()).refine((value) => value.length > 0, {
      message: "You have to select at least one item.",
    }),
    message: z.string(),
  });

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      from_name: "",
      from_email: "",
      phone: "",
      companyName: "",
      message: "",
      subject: [],
    },
  });

  const items = [
    {
      id: "set-up-a-call",
      label: "Set up a call",
    },
    {
      id: "looking-for-an-investment",
      label: "Looking for an investment",
    },
    // Add other items as needed
  ];

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = contactForm.getValues();

      const payload = {
        checkedValue: formData.subject.map((subjectId) => {
          const item = items.find((item) => item.id === subjectId);
          return item ? item.label : subjectId;
        }),
        name: formData.from_name,
        companyName: formData.companyName,
        email: formData.from_email,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await fetch(
        "https://api.makingadults.com/api/EmailSender/contact/newContact",
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
        contactForm.reset();
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
    <section
      id="Contact"
      className="flex flex-col items-center justify-center w-full px-8 gap-16 bg-[#F0EFEE]"
    >
      <div className="mt-36 flex flex-col gap-8 max-w-[600px]">
        {props.title && (
          <HighlightText
            text={props.title}
            className="lg:text-6xl text-4xl font-medium text-center"
          />
        )}
        <HighlightText
          className="text-center text-2xl text-gray-500"
          text="Response emails from us will come from our team."
        />
      </div>
      <Form {...contactForm}>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-x-8 flex md:flex-row flex-col md:justify-between max-md:items-center lg:w-2/3 md:max-w-[900px] w-full"
        >
          <div className="flex flex-col gap-4 md:w-2/5 w-full items-start lg:items-end md:border-gray-300 p-4">
            <div className="flex flex-col-reverse gap-4">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={contactForm.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== item.id)
                                );
                          }}
                          className="lg:w-6 lg:h-6 h-4 w-4"
                          name={item.id}
                        />
                      </FormControl>
                      <FormLabel className="font-normal lg:text-xl sm:text-lg">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 max-md:items-start items-center justify-center md:w-3/5 w-full">
            <FormField
              control={contactForm.control}
              name="from_name"
              render={({ field }) => (
                <FormItem className="lg:max-w-[400px] w-full">
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
              control={contactForm.control}
              name="from_email"
              render={({ field }) => (
                <FormItem className="w-full lg:max-w-[400px] ">
                  <FormControl>
                    <Input
                      required
                      icon={<Mail color="#DF7A2E" />}
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full lg:max-w-[400px] ">
                  <FormControl>
                    <Input
                      icon={<PhoneCall color="#DF7A2E" />}
                      placeholder="Phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="w-full lg:max-w-[400px]">
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full lg:max-w-[400px]">
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
              type="submit"
              value="Send"
              size={"lg"}
              className="max-md:w-full flex items-center gap-4"
            >
              Submit {isLoading && <LoaderIcon className="w-6 h-6" />}
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-col justify-center items-center gap-16 my-16">
        <div className="flex space-x-8">
          <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
            <Link href={props.fbLink ? props.fbLink : "#"} target="_blank">
              <FacebookIcon className="w-8 h-8" />
            </Link>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
            <Link href={props.instaLink ? props.instaLink : "#"} target="_blank">
              <InstagramIcon className="w-8 h-8" />
            </Link>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
            <Link href={props.linkedinLink ? props.linkedinLink : "#"} target="_blank">
              <LinkedinIcon className="w-8 h-8" />
            </Link>
          </div>
          <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full">
            <Link href={props.youtubeLink ? props.youtubeLink : "#"} target="_blank">
              <YoutubeIcon className="w-8 h-8" />
            </Link>
          </div>
        </div>
        <p className="text-[#0B1539] text-center text-2xl font-normal">
          ©The Inflection Point, LLC Greenwich, CT
        </p>
      </div>
    </section>
  );
};

export default GetInTouchSection;
