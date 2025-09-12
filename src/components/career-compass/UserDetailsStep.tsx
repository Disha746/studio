
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { UserData } from "@/lib/types";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  education: z.string().min(1, { message: "Please select your education level." }),
  country: z.string().min(2, { message: "Please enter your country." }),
  age: z.coerce.number().min(13, { message: "You must be at least 13 years old." }).max(100),
});

type UserDetailsStepProps = {
  onSubmit: (data: UserData) => void;
  onBack: () => void;
};

export default function UserDetailsStep({ onSubmit, onBack }: UserDetailsStepProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      education: "",
      country: "",
      age: 18,
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Tell Us About Yourself</CardTitle>
        <CardDescription>
          This will help us personalize your career suggestions.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Highest Level of Education</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                       <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
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
                    <Input type="number" placeholder="e.g., 21" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., India" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={onBack} variant="ghost">
              <ArrowLeft />
              Back
            </Button>
            <Button type="submit">
              Start Quiz
              <ArrowRight />
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
