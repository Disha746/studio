"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight, Info } from "lucide-react";

const formSchema = z.object({
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  age: z.coerce
    .number()
    .min(13, { message: "You must be at least 13 years old." })
    .max(100, { message: "Age must be less than 100." }),
});

type WelcomeStepProps = {
  onSubmit: (country: string, age: number) => void;
  onViewIntro: () => void;
};

export default function WelcomeStep({ onSubmit, onViewIntro }: WelcomeStepProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      age: undefined,
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values.country, values.age);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Let's Get Started</CardTitle>
        <CardDescription>
          Tell us a little about yourself to personalize your career guidance.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. United States" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 25" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col sm:flex-row gap-2">
            <Button type="submit" className="w-full">
              Start Quiz
              <ArrowRight />
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
