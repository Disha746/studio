
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
import { ArrowLeft, ArrowRight, Check, Sparkles, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { getQuizFeedbackAction } from "@/app/actions";
import InfoCard from "./InfoCard";

type QuizStepProps = {
  onComplete: (answers: QuizAnswer[]) => void;
};

type QuizStage = "answering" | "feedback" | "loading";

export default function QuizStep({ onComplete }: QuizStepProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string | string[] | null>(null);
  const [quizStage, setQuizStage] = useState<QuizStage>("answering");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleConfirmAnswer = async () => {
    if (currentAnswer === null) return;
    setLoading(true);
    setQuizStage("loading");

    const answerLabel = Array.isArray(currentAnswer)
      ? currentAnswer.map(val => currentQuestion.options?.find(o => o.value === val)?.label || val).join(', ')
      : currentQuestion.options?.find(o => o.value === currentAnswer)?.label || String(currentAnswer);

    const feedbackResult = await getQuizFeedbackAction({
      question: currentQuestion.text,
      answer: answerLabel,
    });

    if (feedbackResult.success && feedbackResult.data) {
      setFeedback(feedbackResult.data.feedback);
    } else {
      setFeedback("That's an interesting choice! Let's move on to the next question.");
    }

    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      value: currentAnswer,
    };
    setAnswers(prev => [...prev, newAnswer]);
    setLoading(false);
    setQuizStage("feedback");
  };

  const handleNext = () => {
    setFeedback("");
    setCurrentAnswer(null);
    setQuizStage("answering");

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete([...answers, { questionId: currentQuestion.id, value: currentAnswer! }]);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setFeedback("");
      setQuizStage("answering");
      const previousAnswers = answers.slice(0, -1);
      const lastAnswer = previousAnswers[previousAnswers.length - 1];
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentAnswer(lastAnswer?.value || null);
      setAnswers(previousAnswers);
    }
  };

  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const renderQuestionInput = (question: Question) => {
    const isAnswering = quizStage === "answering";

    switch (question.type) {
      case "likert":
        return (
          <RadioGroup
            value={typeof currentAnswer === 'string' ? currentAnswer : ''}
            onValueChange={(val) => isAnswering && setCurrentAnswer(val)}
            className="flex justify-between"
            disabled={!isAnswering}
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
      case "mcq-multi":
        const isMulti = question.type === "mcq-multi";
        
        const handleCheckboxChange = (checked: boolean, value: string) => {
          if (!isAnswering) return;
          const currentSelection = Array.isArray(currentAnswer) ? [...currentAnswer] : [];
          if (checked) {
            setCurrentAnswer([...currentSelection, value]);
          } else {
            setCurrentAnswer(currentSelection.filter(v => v !== value));
          }
        };

        const maxSelections = question.id === 2 ? 2 : 1;
        const selectedCount = Array.isArray(currentAnswer) ? currentAnswer.length : 0;
        
        if (isMulti) {
           return (
            <div className="space-y-3">
              {question.options?.map((option) => {
                const isChecked = Array.isArray(currentAnswer) && currentAnswer.includes(option.value);
                const isDisabled = !isChecked && selectedCount >= maxSelections;
                
                return (
                   <Label key={option.value} htmlFor={`q${question.id}-${option.value}`} className={`flex items-center space-x-3 p-4 rounded-full border-2 cursor-pointer transition-all ${isChecked ? 'bg-primary/10 border-primary shadow-md' : 'bg-secondary/50 border-secondary hover:border-primary/50'} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                     <Checkbox
                          id={`q${question.id}-${option.value}`}
                          checked={isChecked}
                          disabled={isDisabled || !isAnswering}
                          onCheckedChange={(checked) => handleCheckboxChange(!!checked, option.value)}
                          className="h-5 w-5 rounded-full"
                      />
                    <span>{option.label}</span>
                  </Label>
                )
              })}
            </div>
           )
        }
        
        return (
          <RadioGroup 
            className="space-y-3"
            value={currentAnswer as string}
            onValueChange={(val) => isAnswering && setCurrentAnswer(val)}
            disabled={!isAnswering}
          >
            {question.options?.map((option) => {
              const isChecked = currentAnswer === option.value;
              return (
                 <Label key={option.value} htmlFor={`q${question.id}-${option.value}`} className={`flex items-center space-x-3 p-4 rounded-full border-2 cursor-pointer transition-all ${isChecked ? 'bg-primary/10 border-primary shadow-md' : 'bg-secondary/50 border-secondary hover:border-primary/50'}`}>
                    <RadioGroupItem 
                        value={option.value} 
                        id={`q${question.id}-${option.value}`}
                        className="h-5 w-5"
                    />
                  <span>{option.label}</span>
                </Label>
              )
            })}
          </RadioGroup>
        )
      default:
        return null;
    }
  };

  const hasSelection = currentAnswer !== null && (Array.isArray(currentAnswer) ? currentAnswer.length > 0 : true);

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline font-bold text-xl sm:text-2xl">Skills Assessment</CardTitle>
        <CardDescription>
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </CardDescription>
        <Progress value={progress} className="mt-2 h-2 [&>div]:bg-accent" />
      </CardHeader>
      <CardContent className="min-h-[250px] sm:min-h-[300px]">
        <p className="font-medium mb-6 text-center text-base sm:text-lg">{currentQuestion.text}</p>
        <div className="p-1">
          {renderQuestionInput(currentQuestion)}
        </div>
         {quizStage === "feedback" && feedback && (
            <InfoCard icon={<Sparkles className="w-5 h-5 text-primary"/>} title="Insight">
                <p className="text-muted-foreground">{feedback}</p>
            </InfoCard>
         )}
         {quizStage === "loading" && (
            <div className="flex justify-center items-center pt-4">
                <Loader2 className="h-6 w-6 text-primary animate-spin" />
                <p className="text-muted-foreground ml-2">Analyzing your choice...</p>
            </div>
         )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {(quizStage === 'answering' || quizStage === 'feedback') && (
            <Button onClick={handlePrevious} variant="ghost" disabled={isFirstQuestion && quizStage !== 'feedback'}>
                <ArrowLeft />
                Previous
            </Button>
        )}
        
        {quizStage === "answering" && (
          <Button onClick={handleConfirmAnswer} disabled={!hasSelection}>
            OK <Check />
          </Button>
        )}
        {quizStage === "feedback" && (
          <Button onClick={handleNext}>
            {isLastQuestion ? (
              <>
                Finish Quiz <Check />
              </>
            ) : (
              <>
                Next <ArrowRight />
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
