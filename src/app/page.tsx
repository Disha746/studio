
"use client";

import { useState } from "react";
import WelcomeStep from "@/components/career-compass/WelcomeStep";
import QuizStep from "@/components/career-compass/QuizStep";
import SuggestionsStep from "@/components/career-compass/SuggestionsStep";
import OccupationDetailsStep from "@/components/career-compass/OccupationDetailsStep";
import { Compass } from "lucide-react";
import { quizQuestions } from "@/lib/quiz-questions";
import ContentCreatorActivity from "@/components/career-compass/ContentCreatorActivity";
import DoctorActivity from "@/components/career-compass/DoctorActivity";
import InteriorDesignerActivity from "@/components/career-compass/InteriorDesignerActivity";
import GraphicDesignerActivity from "@/components/career-compass/GraphicDesignerActivity";
import type { QuizAnswer } from "@/lib/types";


type Step = "welcome" | "quiz" | "suggestions" | "details" | "activity";

export default function Home() {
  const [step, setStep] = useState<Step>("welcome");
  const [userData, setUserData] = useState<{ country: string; age: number }>({
    country: "",
    age: 0,
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(
    null
  );
  const [activity, setActivity] = useState<string | null>(null);

  const handleWelcomeSubmit = (country: string, age: number) => {
    setUserData({ country, age });
    setStep("quiz");
  };

  const handleQuizComplete = (answers: QuizAnswer[]) => {
    const scores: { [key: string]: number } = {
        softwareDeveloper: 0,
        interiorDesigner: 0,
        graphicDesigner: 0,
        doctor: 0,
        dataScientist: 0,
        contentCreator: 0,
        productManager: 0,
        athlete: 0,
        charteredAccountant: 0,
        civilServant: 0,
        mediaAndMassComm: 0,
        lawyer: 0,
        astrologer: 0,
        meteorologist: 0,
        edTechSpecialist: 0,
        pharmacist: 0,
    };

    answers.forEach(answer => {
        const question = quizQuestions.find(q => q.id === answer.questionId);
        if (question && question.options) {
            const answerValues = Array.isArray(answer.value) ? answer.value : [answer.value];
            answerValues.forEach(value => {
                const option = question.options.find(o => o.value === value);
                if (option) {
                    for (const career in option.scores) {
                        if (scores[career] !== undefined) {
                            scores[career] += option.scores[career as keyof typeof scores] || 0;
                        }
                    }
                }
            });
        }
    });

    const sortedCareers = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    setSuggestions(sortedCareers.slice(0, 2));
    setStep("suggestions");
  };

  const handleSelectOccupation = (occupation: string) => {
    setSelectedOccupation(occupation);
    setStep("details");
  };

  const handleBackToSuggestions = () => {
    setSelectedOccupation(null);
    setStep("suggestions");
  };
  
  const handleBackToWelcome = () => {
    setStep("welcome");
    setUserData({ country: "", age: 0 });
    setSuggestions([]);
    setSelectedOccupation(null);
  }

  const handleStartActivity = (activityName: string) => {
    setActivity(activityName);
    setStep("activity");
  }

  const handleBackToDetails = () => {
    setActivity(null);
    setStep("details");
  }

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeStep onSubmit={handleWelcomeSubmit} />;
      case "quiz":
        return <QuizStep onComplete={handleQuizComplete} />;
      case "suggestions":
        return (
          <SuggestionsStep
            suggestions={suggestions}
            onSelectOccupation={handleSelectOccupation}
            onBack={handleBackToWelcome}
          />
        );
      case "details":
        if (!selectedOccupation) return null;
        return (
          <OccupationDetailsStep
            occupation={selectedOccupation}
            onBack={handleBackToSuggestions}
            onStartActivity={handleStartActivity}
          />
        );
      case "activity":
        switch (activity) {
          case 'contentcreator':
            return <ContentCreatorActivity onBack={handleBackToDetails} />;
          case 'doctor':
              return <DoctorActivity onBack={handleBackToDetails} />
          case 'interiordesigner':
              return <InteriorDesignerActivity onBack={handleBackToDetails} />
          case 'graphicdesigner':
              return <GraphicDesignerActivity onBack={handleBackToDetails} />
          default:
            // Fallback or loading state while activity is being determined
            return null;
        }
      default:
        return <WelcomeStep onSubmit={handleWelcomeSubmit} />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
            <div className="bg-primary/10 border border-primary/20 p-3 rounded-full mb-4">
                <Compass className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-headline font-bold text-foreground">
            Career Compass
            </h1>
            <p className="mt-2 text-muted-foreground max-w-md">
            Your AI-powered guide to a fulfilling career.
            </p>
        </div>
        <div className="relative">
          {renderStep()}
        </div>
      </div>
    </main>
  );
}
