"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Textarea } from "./ui/TextArea";
import { sendEmail } from "~/app/actions";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";

interface ContactFormProps {
    className?: string
}

export const formSchema = z.object({
    name: z.string().min(1, { message: "This field has to be filled." }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email(),
    subject: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .max(988, { message: "Subject cannot exceed 988 characters." }),
    message: z.string().min(1, { message: "This field has to be filled." }),
});

const ContactForm: React.FC<ContactFormProps> = ({className}) => {
    const { toast } = useToast();

    const { mutate: onSubmitMutation } = useMutation({
        mutationKey: ["SubmitForm"],
        mutationFn: async (values: z.infer<typeof formSchema>) => {
            const data = await sendEmail(values);
            return data;
        },
        onSuccess: (data) => {
            console.log(data);
            form.reset();
            return toast({
                title: "Email Sent",
                duration: 2000,
            });
        },
        onError: (err) => {
            return toast({
                title: "An Error Occurred!",
                description: `Please try again.`,
                variant: "destructive",
                duration: 2000,
            });
        },
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        onSubmitMutation(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormDescription>your full name</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="jdoe@abc.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                your email address
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>subject</FormLabel>
                            <FormControl>
                                <Input placeholder="hello" {...field} />
                            </FormControl>
                            <FormDescription>
                                your email subject
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>message</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="h-48 resize-none"
                                    placeholder="..."
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                your email content
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default ContactForm;
