"use client";

import { useState } from "react";
import type { QuizAnswer } from "@/lib/types";
import WelcomeStep from "@/components/career-compass/WelcomeStep";
import QuizStep from "@/components/career-compass/QuizStep";
import SuggestionsStep from "@/components/career-compass/SuggestionsStep";
import OccupationDetailsStep from "@/components/career-compass/OccupationDetailsStep";
import { Compass } from "lucide-react";

type Step = "welcome" | "quiz" | "suggestions" | "details";

export default function Home() {
  const [step, setStep] = useState<Step>("welcome");
  const [userData, setUserData] = useState<{ country: string; age: number }>({
    country: "",
    age: 0,
  });
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(
    null
  );

  const handleWelcomeSubmit = (country: string, age: number) => {
    setUserData({ country, age });
    setStep("quiz");
  };

  const handleQuizComplete = (answers: QuizAnswer[]) => {
    setQuizAnswers(answers);
    setStep("suggestions");
  };

  const handleSuggestionsGenerated = (newSuggestions: string[]) => {
    setSuggestions(newSuggestions);
  };

  const handleSelectOccupation = (occupation: string) => {
    setSelectedOccupation(occupation);
    setStep("details");
  };

  const handleBackToSuggestions = () => {
    setSelectedOccupation(null);
    setStep("suggestions");
  };
  
  const handleRestart = () => {
    setStep("welcome");
    setUserData({ country: "", age: 0 });
    setQuizAnswers([]);
    setSuggestions([]);
    setSelectedOccupation(null);
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
            quizAnswers={quizAnswers}
            userData={userData}
            onSelectOccupation={handleSelectOccupation}
            onSuggestionsGenerated={handleSuggestionsGenerated}
            suggestions={suggestions}
            onRestart={handleRestart}
          />
        );
      case "details":
        if (!selectedOccupation) return null;
        return (
          <OccupationDetailsStep
            occupation={selectedOccupation}
            onBack={handleBackToSuggestions}
          />
        );
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
            Your AI-powered guide to a fulfilling career in interior design.
            </p>
        </div>
        <div className="relative">
          {renderStep()}
        </div>
      </div>
    </main>
  );
}
