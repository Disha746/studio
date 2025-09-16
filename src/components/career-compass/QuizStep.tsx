
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
import { ArrowRight, Check, Sparkles, Loader2 } from "lucide-react";
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

  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

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
        return (
          <RadioGroup
            value={typeof currentAnswer === 'string' ? currentAnswer : ''}
            onValueChange={(val) => isAnswering && setCurrentAnswer(val)}
            className="space-y-2"
            disabled={!isAnswering}
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
                        disabled={(!isChecked && selectedCount >= 2) || !isAnswering}
                        onCheckedChange={(checked) => isAnswering && handleCheckboxChange(!!checked, option.value)}
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

  const hasSelection = currentAnswer !== null && (Array.isArray(currentAnswer) ? currentAnswer.length > 0 : true);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Skills Assessment</CardTitle>
        <CardDescription>
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </CardDescription>
        <Progress value={progress} className="mt-2" />
      </CardHeader>
      <CardContent className="min-h-[220px]">
        <p className="font-medium mb-4 text-center">{currentQuestion.text}</p>
        <div className="p-4 rounded-lg bg-secondary/50">
          {renderQuestionInput(currentQuestion)}
        </div>
         {quizStage === "feedback" && feedback && (
            <InfoCard icon={<Sparkles className="w-5 h-5 text-accent"/>} title="Insight">
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
      <CardFooter>
        {quizStage === "answering" && (
          <Button onClick={handleConfirmAnswer} disabled={!hasSelection} className="w-full">
            OK <Check />
          </Button>
        )}
        {quizStage === "feedback" && (
          <Button onClick={handleNext} className="w-full">
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
