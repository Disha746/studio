"use client";

import { useState } from "react";
import type { QuizAnswer } from "@/lib/types";
import WelcomeStep from "@/components/career-compass/WelcomeStep";
import QuizStep from "@/components/career-compass/QuizStep";
import SuggestionsStep from "@/components/career-compass/SuggestionsStep";
import OccupationDetailsStep from "@/components/career-compass/OccupationDetailsStep";
import { Compass } from "lucide-react";
import CareerIntro from "@/components/career-compass/CareerIntro";
import ChooseIntroStep from "@/components/career-compass/ChooseIntroStep";
import SoftwareDeveloperIntro from "@/components/career-compass/SoftwareDeveloperIntro";
import DataScientistIntro from "@/components/career-compass/DataScientistIntro";
import DoctorIntro from "@/components/career-compass/DoctorIntro";

type Step = "welcome" | "quiz" | "suggestions" | "details" | "choose-intro" | "intro-id" | "intro-sd" | "intro-ds" | "intro-dr";

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
    setStep("choose-intro");
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

  const handleViewIntro = (career: 'id' | 'sd' | 'ds' | 'dr') => {
    if (career === 'id') {
      setStep("intro-id");
    } else if (career === 'sd') {
      setStep("intro-sd");
    } else if (career === 'ds') {
      setStep("intro-ds");
    } else {
      setStep("intro-dr");
    }
  }

  const handleProceedToSuggestions = () => {
    setStep("suggestions");
  }

  const handleBackToWelcome = () => {
    setStep("welcome");
  }

  const handleBackToChooseIntro = () => {
    setStep("choose-intro");
  }


  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeStep onSubmit={handleWelcomeSubmit} onViewIntro={() => handleViewIntro('id')} />;
      case "quiz":
        return <QuizStep onComplete={handleQuizComplete} />;
      case "choose-intro":
        return <ChooseIntroStep onSelectIntro={handleViewIntro} />;
      case "suggestions":
        return (
          <SuggestionsStep
            quizAnswers={quizAnswers}
            userData={userData}
            onSelectOccupation={handleSelectOccupation}
            onSuggestionsGenerated={handleSuggestionsGenerated}
            suggestions={suggestions}
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
      case "intro-id":
        return <CareerIntro onBack={quizAnswers.length > 0 ? handleBackToChooseIntro : handleBackToWelcome} onProceed={handleProceedToSuggestions} showProceed={quizAnswers.length > 0} />;
      case "intro-sd":
        return <SoftwareDeveloperIntro onBack={quizAnswers.length > 0 ? handleBackToChooseIntro : handleBackToWelcome} onProceed={handleProceedToSuggestions} showProceed={quizAnswers.length > 0} />;
      case "intro-ds":
        return <DataScientistIntro onBack={quizAnswers.length > 0 ? handleBackToChooseIntro : handleBackToWelcome} onProceed={handleProceedToSuggestions} showProceed={quizAnswers.length > 0} />;
      case "intro-dr":
        return <DoctorIntro onBack={quizAnswers.length > 0 ? handleBackToChooseIntro : handleBackToWelcome} onProceed={handleProceedToSuggestions} showProceed={quizAnswers.length > 0} />;
      default:
        return <WelcomeStep onSubmit={handleWelcomeSubmit} onViewIntro={() => handleViewIntro('id')}/>;
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
