
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Stethoscope } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

interface DoctorActivityProps {
    onBack: () => void;
};

type Stage = "intro" | "quiz" | "reflection" | "myth-busting" | "results";

const bioQuizQuestions = [
    { id: 1, text: "What is the primary function of the mitochondria in a cell?", options: ["Protein synthesis", "Energy production", "Waste removal", "Genetic material storage"], answer: "Energy production" },
    { id: 2, text: "Which organ is primarily responsible for filtering blood and producing urine?", options: ["Liver", "Heart", "Lungs", "Kidneys"], answer: "Kidneys" },
    { id: 3, text: "What is the basic unit of the nervous system?", options: ["Neuron", "Axon", "Synapse", "Glial cell"], answer: "Neuron" },
];

const mythBustingQuestions = [
    { id: 1, text: "Doctors only work with sick patients; they don't focus on preventing illness.", answer: "Myth", explanation: "Doctors play a crucial role in preventive medicine, vaccinations, health education, and lifestyle counseling." },
    { id: 2, text: "Once you're a doctor, your learning is complete.", answer: "Myth", explanation: "Medicine is constantly evolving, requiring lifelong learning, continuous professional development, and staying updated with research." },
    { id: 3, text: "All doctors have to be surgeons.", answer: "Myth", explanation: "There are numerous medical specialties beyond surgery, such as pediatrics, internal medicine, dermatology, psychiatry, radiology, etc." },
];

export default function DoctorActivity({ onBack }: DoctorActivityProps) {
    const { toast } = useToast();
    const [stage, setStage] = useState<Stage>("intro");
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [score, setScore] = useState(0);

    const handleAnswerChange = (questionId: number, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const submitQuiz = () => {
        let correctAnswers = 0;
        bioQuizQuestions.forEach(q => {
            if (answers[q.id] === q.answer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setStage("reflection");
        toast({ title: "Quiz Submitted!", description: `You got ${correctAnswers} out of ${bioQuizQuestions.length} correct.` });
        setAnswers({}); // Reset for next section
    };

    const submitReflection = () => {
        setStage("myth-busting");
        toast({ title: "Reflection Saved", description: "Your insights are valuable." });
        setAnswers({});
    }

    const submitMyths = () => {
        let correctAnswers = 0;
        mythBustingQuestions.forEach(q => {
             if (answers[q.id] === q.answer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setStage("results");
         toast({ title: "Myth-Busting Submitted!", description: `You identified ${correctAnswers} out of ${mythBustingQuestions.length} correctly.` });
    }

    const renderContent = () => {
        switch (stage) {
            case "intro":
                return (
                    <CardContent className="text-center space-y-4">
                        <Stethoscope className="h-12 w-12 mx-auto text-primary" />
                        <p>Becoming a doctor is a calling that blends rigorous scientific knowledge with profound empathy and unwavering commitment.</p>
                        <p>This section offers a glimpse into the essential qualities and challenges of this noble profession.</p>
                        <Button onClick={() => setStage("quiz")}>Start Activity</Button>
                    </CardContent>
                );
            
            case "quiz":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Medical Foundations: A Quick Quiz</CardTitle>
                        <CardDescription>Let's see how familiar you are with some basic biological concepts.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {bioQuizQuestions.map(q => (
                            <div key={q.id} className="space-y-2">
                                <Label>{q.text}</Label>
                                <RadioGroup onValueChange={(val) => handleAnswerChange(q.id, val)}>
                                    {q.options.map(opt => (
                                        <div key={opt} className="flex items-center space-x-2">
                                            <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                                            <Label htmlFor={`${q.id}-${opt}`}>{opt}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={submitQuiz} className="w-full">Check Answers</Button>
                    </CardFooter>
                    </>
                );

            case "reflection":
                 return (
                    <>
                    <CardHeader>
                        <CardTitle>Are You a Natural Fit?</CardTitle>
                        <CardDescription>Think honestly about your interests and how you approach challenges.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label>Do you enjoy studying biology and other life sciences?</Label>
                            <RadioGroup><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q1-yes" /><Label htmlFor="q1-yes">Yes</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q1-no" /><Label htmlFor="q1-no">No</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="somewhat" id="q1-somewhat" /><Label htmlFor="q1-somewhat">Somewhat</Label></div></RadioGroup>
                        </div>
                         <div className="space-y-2">
                            <Label>How do you feel when making important decisions that affect others?</Label>
                            <RadioGroup><div className="flex items-center space-x-2"><RadioGroupItem value="calm" id="q2-calm" /><Label htmlFor="q2-calm">Confident and calm</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="anxious" id="q2-anxious" /><Label htmlFor="q2-anxious">A little anxious, but I manage</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="stressed" id="q2-stressed" /><Label htmlFor="q2-stressed">Quite stressed</Label></div></RadioGroup>
                        </div>
                         <div className="space-y-2">
                            <Label>Can you imagine yourself dedicating 10+ years to rigorous study and training?</Label>
                            <RadioGroup><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q3-yes" /><Label htmlFor="q3-yes">Yes, I'm prepared for the long haul.</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q3-no" /><Label htmlFor="q3-no">No, that's too much commitment.</Label></div></RadioGroup>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={submitReflection} className="w-full">Submit Self-Reflection</Button>
                    </CardFooter>
                    </>
                 );

            case "myth-busting":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Medical Myths: Fact or Fiction?</CardTitle>
                        <CardDescription>Read each statement and decide if it's a myth or a fact.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       {mythBustingQuestions.map(q => (
                            <div key={q.id} className="space-y-2 p-3 bg-secondary/50 rounded-lg">
                                <p className="font-medium italic">"{q.text}"</p>
                                <RadioGroup onValueChange={(val) => handleAnswerChange(q.id, val)} className="flex gap-4">
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Myth" id={`myth-${q.id}`} /><Label htmlFor={`myth-${q.id}`}>Myth</Label></div>
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Fact" id={`fact-${q.id}`} /><Label htmlFor={`fact-${q.id}`}>Fact</Label></div>
                                </RadioGroup>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={submitMyths} className="w-full">Submit My Answers</Button>
                    </CardFooter>
                    </>
                );
            case "results":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>Thank you for exploring the world of medicine. Here are some final thoughts.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaway</h3>
                            <p className="text-green-800 dark:text-green-300">Understanding the realities of the medical profession—both the challenges and rewards—is the first step in making an informed career decision.</p>
                        </div>
                        <Separator />
                         <div className="space-y-2">
                             <h4 className="font-semibold">Myth-Busting Results:</h4>
                            {mythBustingQuestions.map(q => (
                                <div key={q.id} className="text-sm">
                                    <p className="italic">"{q.text}"</p>
                                    <p className="font-bold">Correct Answer: {q.answer}. <span className="font-normal text-muted-foreground">{q.explanation}</span></p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={onBack} className="w-full">
                            <Check className="mr-2"/> Finish & Go Back
                        </Button>
                    </CardFooter>
                    </>
                )
        }
    };

    return (
        <Card>
            <CardHeader>
                <Button onClick={stage === 'intro' ? onBack : () => setStage('intro')} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                    <ArrowLeft />
                    {stage === 'intro' ? 'Back' : 'Start Over'}
                </Button>
                 <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Stethoscope className="text-primary"/>Your Path to Healing</CardTitle>
            </CardHeader>
            {renderContent()}
        </Card>
    );
}
