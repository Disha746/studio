
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Tv, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import InfoCard from "./InfoCard";

type Stage = "intro" | "quiz" | "myth-busting" | "scenarios" | "results";

interface EdTechSpecialistActivityProps {
    onBack: () => void;
};

const quizQuestions = [
    { id: 1, text: "What is the primary role of a teacher?", options: ["To give lectures", "To guide and facilitate student learning", "To manage school administration", "To assign homework"], answer: "To guide and facilitate student learning" },
    { id: 2, text: "Which of these is a key skill for a modern teacher?", options: ["Strict discipline", "Rote memorization", "Adaptability and communication", "Artistic talent"], answer: "Adaptability and communication" },
    { id: 3, text: "What technology is commonly used in today's classrooms?", options: ["Blackboards and chalk only", "Overhead projectors", "Smartboards, online platforms, and digital apps", "Typewriters"], answer: "Smartboards, online platforms, and digital apps" },
];

const mythBustingQuestions = [
    { id: 1, text: "Teachers just deliver information.", answer: "Myth", explanation: "Effective teaching is multifaceted, involving much more than just delivering information. Teachers also guide, mentor, assess, and inspire students." },
    { id: 2, text: "Teaching is an easy 9-to-5 job.", answer: "Myth", explanation: "Teachers often work beyond school hours on lesson planning, grading, and professional development." },
    { id: 3, text: "Modern teachers only use digital tools.", answer: "Myth", explanation: "Technology is a powerful tool, but effective teaching blends various methods, including traditional ones, to meet diverse learning needs." },
];

const classroomScenarios = [
    { id: 1, text: "A student is not paying attention in class. What should you do?", options: ["Ignore them", "Ask a friendly question to re-engage", "Send them out of the class"], answer: "Ask a friendly question to re-engage", explanation: "Re-engaging students respectfully is more effective than punishment." },
    { id: 2, text: "Some students finish their work early, while others are still struggling. What's the best approach?", options: ["Give extra challenge tasks to early finishers", "Make everyone wait until all are done", "Tell the slower students to hurry up"], answer: "Give extra challenge tasks to early finishers", explanation: "This provides enrichment and keeps advanced learners engaged without pressuring others." },
    { id: 3, text: "Your planned tech tool for the lesson isn't working. What do you do?", options: ["Cancel the lesson", "Switch to a backup plan using the board or interactive discussion", "Spend the whole class trying to fix it"], answer: "Switch to a backup plan using the board or interactive discussion", explanation: "Teachers need to be adaptable and have backup plans to ensure learning continues." },
];

export default function EdTechSpecialistActivity({ onBack }: EdTechSpecialistActivityProps) {
    const { toast } = useToast();
    const [stage, setStage] = useState<Stage>("intro");
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const renderContent = () => {
        switch (stage) {
            case "intro":
                return (
                    <>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Lightbulb className="text-primary"/>The Digital Classroom Challenge</CardTitle>
                        <CardDescription>Step into the shoes of an EdTech Specialist. This activity tests your pedagogical and technical problem-solving skills.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p>Ready to blend technology with teaching to create amazing learning experiences? Let's begin.</p>
                        <Button onClick={() => setStage("quiz")}>Start the Challenge</Button>
                    </CardContent>
                    </>
                );
            case "quiz":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>EdTech Foundations Quiz</CardTitle>
                        <CardDescription>Test your basic educational knowledge.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {quizQuestions.map(q => (
                            <div key={q.id} className="p-3 bg-secondary/50 rounded-lg space-y-2">
                                <p className="font-medium">{q.text}</p>
                                <RadioGroup onValueChange={(v) => handleAnswerChange(`quiz-${q.id}`, v)}>
                                    {q.options.map(opt => (
                                        <div key={opt} className="flex items-center space-x-2"><RadioGroupItem value={opt} id={`q-${q.id}-${opt}`} /><Label htmlFor={`q-${q.id}-${opt}`}>{opt}</Label></div>
                                    ))}
                                </RadioGroup>
                                {answers[`quiz-${q.id}`] && (
                                     <p className={`text-sm pt-2 ${answers[`quiz-${q.id}`] === q.answer ? 'text-green-600' : 'text-destructive'}`}>
                                        {answers[`quiz-${q.id}`] === q.answer ? <Check className="inline-block mr-1"/> : <X className="inline-block mr-1"/>}
                                        Correct Answer: <strong>{q.answer}</strong>
                                    </p>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => { setAnswers({}); setStage("myth-busting")}} className="w-full">Continue to Myth-Busting</Button>
                    </CardFooter>
                    </>
                )
            case "myth-busting":
                 return (
                     <>
                    <CardHeader>
                        <CardTitle>EdTech Myths: Fact or Fiction?</CardTitle>
                        <CardDescription>Let's debunk some common myths about educational technology.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       {mythBustingQuestions.map(q => (
                            <div key={q.id} className="space-y-2 p-3 bg-secondary/50 rounded-lg">
                                <p className="font-medium italic">"{q.text}"</p>
                                <RadioGroup onValueChange={(val) => handleAnswerChange(`myth-${q.id}`, val)} className="flex gap-4">
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Myth" id={`myth-${q.id}`} /><Label htmlFor={`myth-${q.id}`}>Myth</Label></div>
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Fact" id={`fact-${q.id}`} /><Label htmlFor={`fact-${q.id}`}>Fact</Label></div>
                                </RadioGroup>
                                {answers[`myth-${q.id}`] && (
                                    <p className={`text-sm pt-2 ${answers[`myth-${q.id}`] === q.answer ? 'text-green-600' : 'text-destructive'}`}>
                                        Correct Answer: <strong>{q.answer}</strong>. <span className="text-muted-foreground">{q.explanation}</span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => { setAnswers({}); setStage('scenarios')}} className="w-full">Continue to Classroom Scenarios</Button>
                    </CardFooter>
                    </>
                );
            case "scenarios":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Classroom Choices</CardTitle>
                        <CardDescription>As an EdTech Specialist, what would you advise the teacher to do?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {classroomScenarios.map(s => (
                             <div key={s.id} className="p-3 bg-secondary/50 rounded-lg space-y-2">
                                <p className="font-medium">{s.text}</p>
                                <RadioGroup onValueChange={(v) => handleAnswerChange(`scenario-${s.id}`, v)}>
                                    {s.options.map(opt => (
                                        <div key={opt} className="flex items-center space-x-2"><RadioGroupItem value={opt} id={`s-${s.id}-${opt}`} /><Label htmlFor={`s-${s.id}-${opt}`}>{opt}</Label></div>
                                    ))}
                                </RadioGroup>
                                {answers[`scenario-${s.id}`] && (
                                    <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Best Choice Rationale">
                                        <p className="text-muted-foreground">The best choice is <strong>"{s.answer}"</strong> because {s.explanation}</p>
                                    </InfoCard>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => {toast({title: "Great work!"}); setStage("results")}} className="w-full">Finish Activity</Button>
                    </CardFooter>
                    </>
                )
            case "results":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>You've explored the responsibilities and knowledge required to be an EdTech Specialist.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaways</h3>
                            <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
                                <li><strong>Pedagogy First, Technology Second:</strong> The best EdTech solutions are grounded in solid teaching and learning principles.</li>
                                <li><strong>Adaptability is Crucial:</strong> Technology changes, and so do classroom needs. Being flexible is key.</li>
                                <li><strong>Empowering Others:</strong> A core role of an EdTech specialist is to empower teachers and students with new tools and skills.</li>
                            </ul>
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
    }

    return (
        <Card>
            <CardHeader className="p-4">
                 <Button onClick={() => {
                    if (stage === 'intro') {
                        onBack();
                    } else {
                        setStage('intro');
                        setAnswers({});
                    }
                 }} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                    <ArrowLeft />
                    Back
                </Button>
            </CardHeader>
            {renderContent()}
        </Card>
    );
}
