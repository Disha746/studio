
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Pill, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import InfoCard from "./InfoCard";

type Stage = "intro" | "quiz" | "myth-busting" | "prescription-choices" | "roadmap" | "results";

interface PharmacistActivityProps {
    onBack: () => void;
};

const quizQuestions = [
    { id: 1, text: "Which of these is NOT a primary role of a pharmacist?", options: ["Dispensing medicine", "Diagnosing illnesses", "Counseling patients", "Checking for drug interactions"], answer: "Diagnosing illnesses" },
    { id: 2, text: "What does 'OTC' stand for in a pharmacy context?", options: ["On The Counter", "Over The Counter", "Only The Chemist", "Out of Tincture"], answer: "Over The Counter" },
    { id: 3, text: "Which of these is a common career path for a pharmacist outside of a retail store?", options: ["Industrial Pharmacy (R&D)", "Hospital Pharmacy", "Clinical Research", "All of the above"], answer: "All of the above" },
];

const mythBustingQuestions = [
    { id: 1, text: "Pharmacists just count pills.", answer: "Myth", explanation: "They do much more, including counseling patients, checking for drug interactions, and managing complex medication regimens." },
    { id: 2, text: "A pharmacist's job is not very stressful.", answer: "Myth", explanation: "The job requires high attention to detail and carries significant responsibility for patient safety, which can be very stressful." },
    { id: 3, text: "You only need to go to college for 2 years to be a pharmacist.", answer: "Myth", explanation: "While a 2-year D.Pharm exists, most roles require a 4-year B.Pharm or 6-year Pharm.D degree." },
    { id: 4, text: "Pharmacists are found only in drug stores.", answer: "Myth", explanation: "Pharmacists work in many settings, including hospitals, research labs, universities, and pharmaceutical companies." },
];

const prescriptionScenarios = [
    { id: 1, text: "A patient asks for a refill but their prescription has expired. What do you do?", options: ["Refuse the refill", "Explain the situation and advise them to contact their doctor for a new prescription", "Give them the medicine anyway"], answer: "Explain the situation and advise them to contact their doctor for a new prescription", explanation: "Dispensing an expired prescription is unsafe and illegal. The best action is to guide the patient on the correct procedure." },
    { id: 2, text: "You notice a doctor has prescribed a dosage that seems unusually high for a child. What's your first step?", options: ["Dispense it as written", "Contact the doctor to verify the dosage", "Ask the parent if it seems right"], answer: "Contact the doctor to verify the dosage", explanation: "A pharmacist's key role is to be a safety check. Verifying with the prescriber is essential to prevent potential harm." },
];

const roadmapSteps = [
    { title: "Complete Higher Secondary (10+2 with Science)", description: "A background in Physics, Chemistry, and Biology/Mathematics is essential." },
    { title: "Choose Your Pharmacy Course", description: "Select from D.Pharm (2 years), B.Pharm (4 years), or Pharm.D (6 years) based on your career goals." },
    { title: "Gain Practical Experience", description: "Complete mandatory internships or training to apply theoretical knowledge in real-world settings." },
    { title: "Register with the Pharmacy Council", description: "You must be a registered pharmacist with your state's pharmacy council to practice legally." },
    { title: "Pursue Specialization or Employment", description: "Choose to work in community/hospital pharmacy, join the industry, or pursue advanced studies like M.Pharm or a PhD." },
];

export default function PharmacistActivity({ onBack }: PharmacistActivityProps) {
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
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Pill className="text-primary"/>The Pharmacist's Duty</CardTitle>
                        <CardDescription>Step into the world of pharmacy. This activity tests your attention to detail and patient care skills.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p>Ready to ensure patient safety and navigate the complexities of medication? Let's begin.</p>
                        <Button onClick={() => setStage("quiz")}>Start the Pharmacy Challenge</Button>
                    </CardContent>
                    </>
                );
            case "quiz":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Pharmacy Foundations Quiz</CardTitle>
                        <CardDescription>Test your basic pharmaceutical knowledge.</CardDescription>
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
                        <CardTitle>Pharmacy Myths: Fact or Fiction?</CardTitle>
                        <CardDescription>Let's debunk some common myths about the world of pharmacy.</CardDescription>
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
                        <Button onClick={() => { setAnswers({}); setStage('prescription-choices')}} className="w-full">Continue to Prescription Choices</Button>
                    </CardFooter>
                    </>
                );
            case "prescription-choices":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Prescription Choices</CardTitle>
                        <CardDescription>You are the pharmacist. What is the correct action in these scenarios?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {prescriptionScenarios.map(s => (
                             <div key={s.id} className="p-3 bg-secondary/50 rounded-lg space-y-2">
                                <p className="font-medium">{s.text}</p>
                                <RadioGroup onValueChange={(v) => handleAnswerChange(`scenario-${s.id}`, v)}>
                                    {s.options.map(opt => (
                                        <div key={opt} className="flex items-center space-x-2"><RadioGroupItem value={opt} id={`s-${s.id}-${opt}`} /><Label htmlFor={`s-${s.id}-${opt}`}>{opt}</Label></div>
                                    ))}
                                </RadioGroup>
                                {answers[`scenario-${s.id}`] && (
                                    <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Correct Action Rationale">
                                        <p className="text-muted-foreground">The best choice is <strong>"{s.answer}"</strong> because {s.explanation}</p>
                                    </InfoCard>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => setStage("roadmap")} className="w-full">Continue to Career Roadmap</Button>
                    </CardFooter>
                    </>
                )
             case "roadmap":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Roadmap to Becoming a Pharmacist</CardTitle>
                        <CardDescription>This is a typical journey for an aspiring pharmacist in India.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative pl-6">
                            {roadmapSteps.map((item, index) => (
                                <div key={index} className="relative pb-8">
                                {index < roadmapSteps.length - 1 && (
                                    <div className="absolute left-[1px] top-4 h-full w-0.5 bg-border -translate-x-1/2" />
                                )}
                                <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary -translate-x-1/2" />
                                <div className="pl-4">
                                    <h4 className="font-semibold">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => {toast({title: "Great work!"}); setStage("results")}} className="w-full">See Final Results</Button>
                    </CardFooter>
                    </>
                )
            case "results":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>You've explored the responsibilities and knowledge required to be a pharmacist.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaways</h3>
                            <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
                                <li><strong>Patient Safety is Paramount:</strong> A pharmacist's primary duty is to ensure the safe and effective use of medication.</li>
                                <li><strong>Attention to Detail is Crucial:</strong> Accuracy in dispensing and checking prescriptions can be life-saving.</li>
                                <li><strong>A Bridge in Healthcare:</strong> Pharmacists are vital communicators between doctors and patients.</li>
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
