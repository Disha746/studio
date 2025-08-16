"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Briefcase, Code } from "lucide-react";

type ChooseIntroStepProps = {
    onSelectIntro: (career: 'id' | 'sd') => void;
};

export default function ChooseIntroStep({ onSelectIntro }: ChooseIntroStepProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl sm:text-3xl">Quiz Complete!</CardTitle>
        <CardDescription>Based on your answers, you might be interested in one of these fields. Choose one to learn more before seeing your specific job suggestions.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={() => onSelectIntro('id')} className="w-full h-auto py-4" variant="outline">
            <div className="flex items-center text-left">
                <Briefcase className="w-6 h-6 mr-4 text-primary" />
                <div>
                    <div className="font-semibold">Interior Designer</div>
                    <div className="text-sm font-normal text-muted-foreground">Focus on aesthetics, functionality, and creating beautiful spaces.</div>
                </div>
            </div>
            <ArrowRight className="ml-auto" />
        </Button>
        <Button onClick={() => onSelectIntro('sd')} className="w-full h-auto py-4" variant="outline">
             <div className="flex items-center text-left">
                <Code className="w-6 h-6 mr-4 text-primary" />
                <div>
                    <div className="font-semibold">Software Developer</div>
                    <div className="text-sm font-normal text-muted-foreground">Focus on problem-solving, logic, and building technology.</div>
                </div>
            </div>
            <ArrowRight className="ml-auto" />
        </Button>
      </CardContent>
    </Card>
  );
}
