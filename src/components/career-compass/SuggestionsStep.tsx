
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Lightbulb, Wand2 } from "lucide-react";

type SuggestionsStepProps = {
  suggestions: string[];
  onSelectOccupation: (occupation: string) => void;
  onBack: () => void;
};

const occupationDisplayNames: Record<string, string> = {
    softwareDeveloper: "Software Developer",
    interiorDesigner: "Interior Designer",
    graphicDesigner: "Graphic Designer",
    doctor: "Doctor",
    dataScientist: "Data Scientist",
    contentCreator: "Content Creator",
    productManager: "Product Manager",
    athlete: "Athlete",
    charteredAccountant: "Chartered Accountant",
    civilServant: "Civil Servant",
    mediaAndMassComm: "Media and Mass Communication",
    lawyer: "Lawyer",
    astrologer: "Astrologer",
    meteorologist: "Meteorologist",
    edTechSpecialist: "Educational Technology Specialist",
    pharmacist: "Pharmacist",
};

export default function SuggestionsStep({
  suggestions,
  onSelectOccupation,
  onBack,
}: SuggestionsStepProps) {

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <Lightbulb className="text-accent" />
            Your Top Career Matches
        </CardTitle>
        <CardDescription>
          Based on your quiz results, here are a couple of career paths that could be a great fit for you. Explore them to learn more.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {suggestions.map((occupationKey) => (
          <Button
            key={occupationKey}
            variant="outline"
            className="w-full h-auto justify-start p-4 text-left border-2 border-transparent hover:border-accent hover:bg-accent/10 transition-colors duration-300"
            onClick={() => onSelectOccupation(occupationDisplayNames[occupationKey])}
          >
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Wand2 className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium text-lg text-foreground">{occupationDisplayNames[occupationKey] || occupationKey}</span>
            </div>
          </Button>
        ))}
         {suggestions.length === 0 && (
            <div className="text-center text-muted-foreground p-8">
                <p>We couldn't determine your top careers at this time. Please try the quiz again.</p>
            </div>
        )}
      </CardContent>
       <CardFooter>
        <Button onClick={onBack} variant="ghost" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft />
          Back to Start
        </Button>
      </CardFooter>
    </Card>
  );
}
