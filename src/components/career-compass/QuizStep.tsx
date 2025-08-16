"use client";

import { useState } from "react";
import { quizQuestions, type Question } from "@/lib/quiz-questions";
import type { QuizAnswer } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

type QuizStepProps = {
  onComplete: (answers: QuizAnswer[]) => void;
};

export default function QuizStep({ onComplete }: QuizStepProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string | string[] | null>(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleNext = () => {
    if (currentAnswer !== null) {
      const newAnswer: QuizAnswer = {
        questionId: currentQuestion.id,
        value: currentAnswer,
      };
      const updatedAnswers = [...answers, newAnswer];
      setAnswers(updatedAnswers);
      setCurrentAnswer(null);

      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        onComplete(updatedAnswers);
      }
    }
  };

  const renderQuestionInput = (question: Question) => {
    switch (question.type) {
      case "likert":
        return (
          <RadioGroup
            value={typeof currentAnswer === 'string' ? currentAnswer : ''}
            onValueChange={(val) => setCurrentAnswer(val)}
            className="flex justify-between"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <div key={value} className="flex flex-col items-center space-y-2">
                <Label htmlFor={`q${question.id}-v${value}`}>{value}</Label>
                <RadioGroupItem value={String(value)} id={`q${question.id}-v${value}`} />
              </div>
            ))}
          </RadioGroup>
        );
      case "mcq":
        return (
          <RadioGroup
            value={typeof currentAnswer === 'string' ? currentAnswer : ''}
            onValueChange={(val) => setCurrentAnswer(val)}
            className="space-y-2"
          >
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`q${question.id}-${option.value}`} />
                <Label htmlFor={`q${question.id}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case "mcq-multi":
        const handleCheckboxChange = (checked: boolean, value: string) => {
          const currentSelection = Array.isArray(currentAnswer) ? [...currentAnswer] : [];
          if (checked) {
            if (currentSelection.length < 2) {
              setCurrentAnswer([...currentSelection, value]);
            }
          } else {
            setCurrentAnswer(currentSelection.filter(v => v !== value));
          }
        };
        const selectedCount = Array.isArray(currentAnswer) ? currentAnswer.length : 0;

        return (
          <div className="space-y-2">
            {question.options?.map((option) => {
                const isChecked = Array.isArray(currentAnswer) && currentAnswer.includes(option.value);
                return (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox
                        id={`q${question.id}-${option.value}`}
                        checked={isChecked}
                        disabled={!isChecked && selectedCount >= 2}
                        onCheckedChange={(checked) => handleCheckboxChange(!!checked, option.value)}
                    />
                    <Label htmlFor={`q${question.id}-${option.value}`}>{option.label}</Label>
                  </div>
                )
            })}
          </div>
        )
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Skills Assessment</CardTitle>
        <CardDescription>
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </CardDescription>
        <Progress value={progress} className="mt-2" />
      </CardHeader>
      <CardContent className="min-h-[150px]">
        <p className="font-medium mb-4 text-center">{currentQuestion.text}</p>
        <div className="p-4 rounded-lg bg-secondary/50">
          {renderQuestionInput(currentQuestion)}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleNext}
          disabled={!currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0)}
          className="w-full"
        >
          {currentQuestionIndex < quizQuestions.length - 1 ? (
            <>
              Next
              <ArrowRight />
            </>
          ) : (
            <>
              Finish Quiz
              <Check />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
