
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Briefcase } from "lucide-react";
import CareerIntro from "./CareerIntro";
import SoftwareDeveloperIntro from "./SoftwareDeveloperIntro";
import GraphicDesignerIntro from "./GraphicDesignerIntro";
import DoctorIntro from "./DoctorIntro";
import DataScientistIntro from "./DataScientistIntro";
import ContentCreatorIntro from "./ContentCreatorIntro";
import ProductManagerIntro from "./ProductManagerIntro";
import AthleteIntro from "./AthleteIntro";
import CharteredAccountantIntro from "./CharteredAccountantIntro";
import CivilServantIntro from "./CivilServantIntro";
import MediaAndMassCommIntro from "./MediaAndMassCommIntro";
import LawyerIntro from "./LawyerIntro";
import AstrologerIntro from "./AstrologerIntro";
import MeteorologistIntro from "./MeteorologistIntro";


type OccupationDetailsStepProps = {
  occupation: string;
  onBack: () => void;
  onStartActivity: (activityName: string) => void;
};

const occupationComponentMap: Record<string, React.ComponentType<any>> = {
  "Interior Designer": CareerIntro,
  "Software Developer": SoftwareDeveloperIntro,
  "Graphic Designer": GraphicDesignerIntro,
  "Doctor": DoctorIntro,
  "Data Scientist": DataScientistIntro,
  "Content Creator": ContentCreatorIntro,
  "Product Manager": ProductManagerIntro,
  "Athlete": AthleteIntro,
  "Chartered Accountant": CharteredAccountantIntro,
  "Civil Servant": CivilServantIntro,
  "Media and Mass Communication": MediaAndMassCommIntro,
  "Lawyer": LawyerIntro,
  "Astrologer": AstrologerIntro,
  "Meteorologist": MeteorologistIntro,
};

export default function OccupationDetailsStep({
  occupation,
  onBack,
  onStartActivity,
}: OccupationDetailsStepProps) {

  const IntroComponent = occupationComponentMap[occupation]

  if (IntroComponent) {
    return <IntroComponent onBack={onBack} onProceed={() => onStartActivity(occupation.toLowerCase().replace(/\s+/g, ''))} />
  }

  // Fallback for AI-generated details
  return (
    <Card>
        <CardHeader>
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back to Suggestions
            </Button>
            <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Briefcase className="text-primary"/>{occupation}</CardTitle>
            <CardDescription>A detailed look into the career path.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Detailed information for this career path will be available soon.</p>
        </CardContent>
    </Card>
  );
}
