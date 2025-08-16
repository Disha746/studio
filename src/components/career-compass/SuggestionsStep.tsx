"use client";

import { useEffect, useState } from "react";
import type { QuizAnswer } from "@/lib/types";
import { getSuggestionsAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Wand2, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type SuggestionsStepProps = {
  quizAnswers: QuizAnswer[];
  userData: { country: string; age: number };
  onSelectOccupation: (occupation: string) => void;
  onSuggestionsGenerated: (suggestions: string[]) => void;
  suggestions: string[];
};

export default function SuggestionsStep({
  quizAnswers,
  userData,
  onSelectOccupation,
  onSuggestionsGenerated,
  suggestions,
}: SuggestionsStepProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (suggestions.length > 0) {
        setIsLoading(false);
        return;
    };

    const fetchSuggestions = async () => {
      setIsLoading(true);
      const quizResults = quizAnswers
        .map((a) => `Q${a.questionId}: ${a.value}`)
        .join("; ");
      const input = { quizResults, ...userData };

      const result = await getSuggestionsAction(input);

      if (result.success && result.data) {
        onSuggestionsGenerated(result.data.suggestedOccupations);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [quizAnswers, userData, toast, onSuggestionsGenerated, suggestions]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-12 space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="font-medium text-lg">Analyzing your results...</p>
          <p className="text-muted-foreground text-center">
            Our AI is crafting personalized career suggestions for you.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <Lightbulb className="text-accent" />
            Your Suggested Career Paths
        </CardTitle>
        <CardDescription>
          Based on your quiz results, here are a few career paths that might be a great fit for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {suggestions.map((occupation) => (
          <Button
            key={occupation}
            variant="outline"
            className="w-full h-auto justify-start p-4 text-left"
            onClick={() => onSelectOccupation(occupation)}
          >
            <div className="flex items-center">
              <div className="bg-accent/10 p-2 rounded-md mr-4">
                  <Wand2 className="h-5 w-5 text-accent" />
              </div>
              <span className="font-medium">{occupation}</span>
            </div>
          </Button>
        ))}
         {suggestions.length === 0 && !isLoading && (
            <div className="text-center text-muted-foreground p-8">
                <p>We couldn't generate any suggestions at this time. Please try again.</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
