"use client";

import { useState, useEffect } from "react";
import type { QuizAnswer } from "@/lib/types";
import { quizQuestions } from "@/lib/quiz-questions";
import WelcomeStep from "@/components/career-compass/WelcomeStep";
import QuizStep from "@/components/career-compass/QuizStep";
import SuggestionsStep from "@/components/career-compass/SuggestionsStep";
import OccupationDetailsStep from "@/components/career-compass/OccupationDetailsStep";
import { Compass } from "lucide-react";
import CareerIntro from "@/components/career-compass/CareerIntro";
import SoftwareDeveloperIntro from "@/components/career-compass/SoftwareDeveloperIntro";
import DataScientistIntro from "@/components/career-compass/DataScientistIntro";
import DoctorIntro from "@/components/career-compass/DoctorIntro";
import GraphicDesignerIntro from "@/components/career-compass/GraphicDesignerIntro";
import ContentCreatorIntro from "@/components/career-compass/ContentCreatorIntro";
import ProductManagerIntro from "@/components/career-compass/ProductManagerIntro";
import { Button } from "@/components/ui/button";

type Step = "welcome" | "quiz" | "suggestions" | "details" | "intro";
type Career = 'id' | 'sd' | 'ds' | 'dr' | 'gd' | 'cc' | 'pm';

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
  const [topCareer, setTopCareer] = useState<Career | null>(null);

  const handleWelcomeSubmit = (country: string, age: number) => {
    setUserData({ country, age });
    setStep("quiz");
  };

  const handleQuizComplete = (answers: QuizAnswer[]) => {
    setQuizAnswers(answers);
    
    const scores: Record<Career, number> = {
      sd: 0, // softwareDeveloper
      id: 0, // interiorDesigner
      gd: 0, // graphicDesigner
      dr: 0, // doctor
      ds: 0, // dataScientist
      cc: 0, // contentCreator
      pm: 0, // productManager
    };

    answers.forEach(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      if (question?.options) {
        const answerValues = Array.isArray(answer.value) ? answer.value : [answer.value];
        answerValues.forEach(value => {
            const selectedOption = question.options.find(opt => opt.value === value);
            if (selectedOption) {
                scores.sd += selectedOption.scores.softwareDeveloper;
                scores.id += selectedOption.scores.interiorDesigner;
                scores.gd += selectedOption.scores.graphicDesigner;
                scores.dr += selectedOption.scores.doctor;
                scores.ds += selectedOption.scores.dataScientist;
                scores.cc += selectedOption.scores.contentCreator;
                scores.pm += selectedOption.scores.productManager;
            }
        });
      }
    });

    let highestScore = -1;
    let bestCareer: Career | null = null;
    
    for (const career in scores) {
      if (scores[career as Career] > highestScore) {
        highestScore = scores[career as Career];
        bestCareer = career as Career;
      }
    }
    
    setTopCareer(bestCareer);
    setStep("intro");
  };

  useEffect(() => {
    if (step === 'intro' && topCareer) {
        const timer = setTimeout(() => {
            handleProceedToSuggestions();
        }, 5000); // 5 seconds
        return () => clearTimeout(timer);
    }
  }, [step, topCareer]);

  const handleSuggestionsGenerated = (newSuggestions: string[]) => {
    setSuggestions(newSuggestions);
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
    setQuizAnswers([]);
    setSuggestions([]);
    setSelectedOccupation(null);
    setTopCareer(null);
  }

  const handleProceedToSuggestions = () => {
    setStep("suggestions");
  }

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeStep onSubmit={handleWelcomeSubmit} />;
      case "quiz":
        return <QuizStep onComplete={handleQuizComplete} />;
      case "intro":
        if (!topCareer) {
          return (
            <div className="text-center p-8">
              <p>Could not determine a top career. Please try the quiz again.</p>
              <Button onClick={handleBackToWelcome} className="mt-4">Retake Quiz</Button>
            </div>
          );
        }
        switch (topCareer) {
          case 'id':
            return <CareerIntro onBack={handleBackToWelcome} />;
          case 'sd':
            return <SoftwareDeveloperIntro onBack={handleBackToWelcome} />;
          case 'ds':
            return <DataScientistIntro onBack={handleBackToWelcome} />;
          case 'dr':
            return <DoctorIntro onBack={handleBackToWelcome} />;
          case 'gd':
            return <GraphicDesignerIntro onBack={handleBackToWelcome} />;
          case 'cc':
            return <ContentCreatorIntro onBack={handleBackToWelcome} />;
          case 'pm':
            return <ProductManagerIntro onBack={handleBackToWelcome} />;
          default:
            return <CareerIntro onBack={handleBackToWelcome} />;
        }
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
