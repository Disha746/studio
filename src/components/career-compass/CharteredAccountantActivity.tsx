
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, BookOpen, Scale } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import InfoCard from "./InfoCard";
import { Textarea } from "../ui/textarea";

type Stage = "intro" | "simulation" | "roadmap" | "myth-busting" | "reflection" | "results";

interface CharteredAccountantActivityProps {
    onBack: () => void;
};

const roadmapSteps = [
    { title: "Register for CA Foundation", description: "This is the entry-level examination conducted by the Institute of Chartered Accountants of India (ICAI). It assesses fundamental knowledge in subjects like accounting, law, quantitative aptitude, and economics." },
    { title: "Pass Foundation, then Intermediate, and begin Articleship", description: "After clearing the Foundation exam, you'll proceed to the CA Intermediate level. Upon passing, you must undergo a mandatory practical training period ('Articleship') for 2-3 years under a practicing CA." },
    { title: "Clear the CA Final Exam", description: "The CA Final is the final professional level examination. It's a rigorous test of advanced knowledge in auditing, taxation, corporate law, and strategic finance." },
    { title: "Get a Membership from the ICAI", description: "Once you've passed the CA Final exams and completed your Articleship, you can apply for membership with the ICAI, making you a 'Chartered Accountant'." },
    { title: "Choose Your Path", description: "You can specialize in Audit, Taxation, Financial Management, Corporate Finance, Forensic Accounting, or start your own consulting firm." },
];

const mythBustingQuestions = [
    { id: 1, text: "CA is only about accounting.", answer: "Myth", explanation: "The profession covers diverse fields like tax, law, audit, finance, and business strategy. CAs are highly versatile professionals." },
    { id: 2, text: "CAs earn big money right away.", answer: "Myth", explanation: "Early salaries are modest; significant growth and earnings come with experience, specialization, and building a client base." },
    { id: 3, text: "The CA exam is impossible to clear.", answer: "Myth", explanation: "It's a challenging exam, but it is achievable with discipline, consistent effort, proper planning, and access to good resources." }
];

export default function CharteredAccountantActivity({ onBack }: CharteredAccountantActivityProps) {
    const { toast } = useToast();
    const [stage, setStage] = useState<Stage>("intro");
    const [mythAnswers, setMythAnswers] = useState<Record<number, string>>({});
    
    const handleMythAnswerChange = (questionId: number, value: string) => {
        setMythAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const renderContent = () => {
        switch (stage) {
            case "intro":
                return (
                    <>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><BookOpen className="text-primary"/>The Financial Strategist's Mind</CardTitle>
                        <CardDescription>This module simulates the analytical challenges and responsibilities of a Chartered Accountant.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p>Ready to step into the shoes of a CA and advise a client on a critical financial decision?</p>
                        <Button onClick={() => setStage("simulation")}>Start Your First Client Case</Button>
                    </CardContent>
                    </>
                );
            case "simulation":
                 return (
                    <>
                    <CardHeader>
                        <CardTitle>Your First Client Case: A Mini-Simulation</CardTitle>
                        <CardDescription>A small business client wants to reduce their tax liability. They've heard about claiming personal expenses as business expenses. What do you advise?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <RadioGroup className="space-y-2">
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="A" id="choice-a" className="sr-only" />Advise them it's a great way to save money and show them how to do it.</Label>
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="B" id="choice-b" className="sr-only" />Explain the serious legal risks and penalties involved, and suggest legitimate tax-saving strategies instead.</Label>
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="C" id="choice-c" className="sr-only" />Tell them you can't officially advise it, but what they do on their own is their business.</Label>
                        </RadioGroup>
                         <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="The CA's Rationale">
                            <p className="text-muted-foreground">The correct answer is B. A CA's primary duty is to uphold the law and ensure ethical compliance. Advising a client to commit tax fraud is illegal and unethical. The correct approach is to educate the client on the risks and guide them towards legal and sustainable financial practices. This builds trust and protects both the client and the CA.</p>
                        </InfoCard>
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
                        <CardTitle>Your Journey to Becoming a CA</CardTitle>
                        <CardDescription>This is the typical path to becoming a Chartered Accountant in India.</CardDescription>
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
                        <Button onClick={() => setStage("myth-busting")} className="w-full">Continue to Myth-Busting</Button>
                    </CardFooter>
                    </>
                )
            case "myth-busting":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>CA: Myth vs. Fact?</CardTitle>
                        <CardDescription>Let's challenge some common misconceptions about the CA profession.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       {mythBustingQuestions.map(q => (
                            <div key={q.id} className="space-y-2 p-3 bg-secondary/50 rounded-lg">
                                <p className="font-medium italic">"{q.text}"</p>
                                <RadioGroup onValueChange={(val) => handleMythAnswerChange(q.id, val)} className="flex gap-4">
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Myth" id={`myth-${q.id}`} /><Label htmlFor={`myth-${q.id}`}>Myth</Label></div>
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Fact" id={`fact-${q.id}`} /><Label htmlFor={`fact-${q.id}`}>Fact</Label></div>
                                </RadioGroup>
                                {mythAnswers[q.id] && (
                                    <p className={`text-sm pt-2 ${mythAnswers[q.id] === q.answer ? 'text-green-600' : 'text-destructive'}`}>
                                        Correct Answer: <strong>{q.answer}</strong>. <span className="text-muted-foreground">{q.explanation}</span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => setStage('reflection')} className="w-full">Continue to Reflection</Button>
                    </CardFooter>
                    </>
                );
            case "reflection":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>A Moment of Reflection</CardTitle>
                        <CardDescription>Consider these questions honestly. Your answers are for you alone.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                           <Label>Do you genuinely enjoy working with numbers, rules, and meticulous details?</Label>
                           <Textarea placeholder="Your thoughts..."/>
                        </div>
                        <div className="space-y-2">
                           <Label>Are you patient enough to handle long study hours and a multi-stage examination process?</Label>
                           <Textarea placeholder="Your thoughts..."/>
                        </div>
                        <div className="space-y-2">
                           <Label>Would you like to be a trusted advisor who guides businesses and individuals in finance and compliance?</Label>
                           <Textarea placeholder="Your thoughts..."/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => {toast({title: "Reflection Saved"}); setStage("results")}} className="w-full">Continue to Final Thoughts</Button>
                    </CardFooter>
                    </>
                );
            case "results":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>You've explored the decision-making, career path, and realities of being a Chartered Accountant.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaways</h3>
                            <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
                                <li><strong>Integrity is Paramount:</strong> A CA's role is built on a foundation of ethics and trust.</li>
                                <li><strong>It's a Marathon, Not a Sprint:</strong> The path to becoming a CA requires long-term dedication and perseverance.</li>
                                <li><strong>Beyond Numbers:</strong> The profession is about strategic thinking, problem-solving, and expert advisory.</li>
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
                        setMythAnswers({});
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
