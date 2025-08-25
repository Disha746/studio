
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Shield, Loader2, AlertTriangle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import InfoCard from "./InfoCard";
import { Textarea } from "../ui/textarea";
import { getSimulationConsequenceAction } from "@/app/actions";

type Stage = "intro" | "simulation" | "roadmap" | "myth-busting" | "reflection" | "results";

interface CivilServantActivityProps {
    onBack: () => void;
};

const roadmapSteps = [
    { title: "Graduate (any stream)", description: "A bachelor's degree is the minimum educational requirement to appear for the UPSC exam." },
    { title: "Prepare for UPSC", description: "Intensive preparation covering subjects like History, Polity, Current Affairs, and Ethics is crucial." },
    { title: "Prelims → Mains → Interview", description: "The exam consists of three rigorous stages: a preliminary objective test, a descriptive main exam, and a final personality test (interview)." },
    { title: "Training at LBSNAA", description: "Successful candidates undergo foundational training at the Lal Bahadur Shastri National Academy of Administration." },
    { title: "Posting as an IAS/IPS/IFS officer", description: "After training, officers are posted to their respective cadres and services across the country." },
    { title: "Leadership Roles", description: "With experience, officers can rise to top positions like Secretary, Director General, or Ambassador." }
];

const mythBustingQuestions = [
    { id: 1, text: "IAS officers only sit in offices.", answer: "Myth", explanation: "They are often in the field handling law, order, and development." },
    { id: 2, text: "Civil Services is only about power.", answer: "Myth", explanation: "It is primarily about responsibility and service to the public." },
    { id: 3, text: "One exam can make you successful for life.", answer: "Myth", explanation: "Success requires continuous training, adaptability, and lifelong learning." }
];

export default function CivilServantActivity({ onBack }: CivilServantActivityProps) {
    const { toast } = useToast();
    const [stage, setStage] = useState<Stage>("intro");
    const [simulationChoice, setSimulationChoice] = useState('');
    const [simulationResult, setSimulationResult] = useState({ consequence: '', explanation: '' });
    const [loading, setLoading] = useState(false);
    const [mythAnswers, setMythAnswers] = useState<Record<number, string>>({});
    
    const handleMythAnswerChange = (questionId: number, value: string) => {
        setMythAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSimulationSubmit = async () => {
        if (!simulationChoice) {
            toast({ variant: 'destructive', title: "Please make a choice." });
            return;
        }
        setLoading(true);
        const result = await getSimulationConsequenceAction({ decision: simulationChoice });
        if (result.success && result.data) {
            setSimulationResult(result.data);
        } else {
            toast({ variant: 'destructive', title: "Error", description: result.error });
            // Set a default result in case of AI error
            setSimulationResult({
                consequence: "An unexpected issue occurred while processing your decision.",
                explanation: "In real-world scenarios, decisions must be made even with incomplete information or unforeseen challenges. Adaptability is key."
            });
        }
        setLoading(false);
    };

    const renderContent = () => {
        switch (stage) {
            case "intro":
                return (
                    <>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Shield className="text-primary"/>The Administrator's Mindset</CardTitle>
                        <CardDescription>This module simulates the challenges and responsibilities of a civil servant.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p>Ready to step into the shoes of a District Collector and make critical decisions for your community?</p>
                        <Button onClick={() => setStage("simulation")}>Start the Simulation</Button>
                    </CardContent>
                    </>
                );
            case "simulation":
                 return (
                    <>
                    <CardHeader>
                        <CardTitle>The Flood Crisis: A Civil Servant's Dilemma</CardTitle>
                        <CardDescription>You are a District Collector. A severe flood has damaged houses and disrupted the community. You have limited funds available to address the crisis.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <RadioGroup value={simulationChoice} onValueChange={setSimulationChoice} className="space-y-2">
                            <div className="flex items-center space-x-2"><RadioGroupItem value="A" id="choice-a" /><Label htmlFor="choice-a">Allocate all funds to immediate rescue operations.</Label></div>
                            <div className="flex items-center space-x-2"><RadioGroupItem value="B" id="choice-b" /><Label htmlFor="choice-b">Focus resources on rebuilding essential public infrastructure like schools.</Label></div>
                            <div className="flex items-center space-x-2"><RadioGroupItem value="C" id="choice-c" /><Label htmlFor="choice-c">Prioritize providing immediate food and shelter to those displaced.</Label></div>
                        </RadioGroup>
                        {simulationResult.consequence && (
                            <InfoCard icon={<AlertTriangle className="w-5 h-5 text-accent"/>} title="Outcome of Your Decision">
                                <p className="font-semibold">{simulationResult.consequence}</p>
                                <p className="text-muted-foreground mt-2">{simulationResult.explanation}</p>
                            </InfoCard>
                        )}
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button onClick={handleSimulationSubmit} disabled={loading || !!simulationResult.consequence} className="w-full">
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {loading ? "Analyzing..." : "Submit Decision"}
                        </Button>
                        {!!simulationResult.consequence && (
                            <Button onClick={() => setStage("roadmap")} className="w-full">Continue to Career Roadmap</Button>
                        )}
                    </CardFooter>
                    </>
                )
            case "roadmap":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Your Roadmap to Civil Services</CardTitle>
                        <CardDescription>This is the typical journey to becoming a civil servant in India.</CardDescription>
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
                        <CardTitle>Civil Services: Myth vs. Fact?</CardTitle>
                        <CardDescription>Let's challenge some common misconceptions about being a civil servant.</CardDescription>
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
                           <Label>Do you want to dedicate your life to public service, not just personal success?</Label>
                           <Textarea placeholder="Your thoughts..."/>
                        </div>
                        <div className="space-y-2">
                           <Label>Can you handle pressure, criticism, and long working hours?</Label>
                           <Textarea placeholder="Your thoughts..."/>
                        </div>
                        <div className="space-y-2">
                           <Label>Would you enjoy being part of policy-making and nation-building?</Label>
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
                        <CardDescription>You've explored the decision-making, career path, and realities of civil services.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaways</h3>
                            <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
                                <li><strong>It's about Service:</strong> The core of the job is public service and responsibility, not just authority.</li>
                                <li><strong>Complex Decisions:</strong> Civil servants must constantly balance competing priorities with limited resources.</li>
                                <li><strong>Lifelong Learning:</strong> The journey doesn't end with the exam; it demands continuous adaptation and learning.</li>
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
                        setSimulationResult({ consequence: '', explanation: ''});
                        setSimulationChoice('');
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
