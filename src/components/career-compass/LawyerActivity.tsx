
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Scale, AlertTriangle, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import InfoCard from "./InfoCard";

type Stage = "intro" | "quiz" | "myth-busting" | "courtroom-choices" | "objection-game" | "results";

interface LawyerActivityProps {
    onBack: () => void;
};

const quizQuestions = [
    { id: 1, text: "Which court is the highest judicial forum in India?", options: ["High Court", "Supreme Court", "District Court", "Tribunal"], answer: "Supreme Court" },
    { id: 2, text: "What is a 'plaintiff' in a civil case?", options: ["The person being sued", "The person who initiates the lawsuit", "The judge", "The jury"], answer: "The person who initiates the lawsuit" },
    { id: 3, text: "What does 'pro bono' work refer to?", options: ["Work done for free for the public good", "Work for the government", "Work done on weekends", "International law cases"], answer: "Work done for free for the public good" },
    { id: 4, text: "A lawyer's duty to keep client information secret is called:", options: ["Discovery", "Privilege", "Stipulation", "Tort"], answer: "Privilege" },
];

const mythBustingQuestions = [
    { id: 1, text: "Lawyers know all the laws by heart.", answer: "Myth", explanation: "Lawyers specialize and are skilled at researching laws, not memorizing every single one." },
    { id: 2, text: "You must argue loudly in court to win.", answer: "Myth", explanation: "Effective legal arguments are built on evidence, logic, and clear communication, not volume." },
    { id: 3, text: "Only extroverts can be successful lawyers.", answer: "Myth", explanation: "While some lawyers are great public speakers, many excel through strong research, writing, and strategic thinking skills, which are strengths for introverts too." },
    { id: 4, text: "Lawyers can specialize in areas like family, corporate, or criminal law.", answer: "Fact", explanation: "Specialization is very common and allows lawyers to develop deep expertise in a particular area of law." },
];

const courtroomScenarios = [
    { id: 1, text: "Your client says they had a verbal agreement for a loan, but the other party denies it. What's your first step?", options: ["File a lawsuit immediately", "Collect evidence like emails and payment records", "Advise your client to forget about it"], answer: "Collect evidence like emails and payment records", explanation: "Even without a written contract, other forms of evidence can establish the agreement and breach." },
    { id: 2, text: "Your client is accused of a crime and says they were with a friend at the time. What do you do?", options: ["Find and interview the friend to confirm", "Immediately tell the police", "Hope the client is telling the truth"], answer: "Find and interview the friend to confirm", explanation: "Corroborating your client's alibi is crucial for their defense." },
];

const objectionScenarios = [
    { id: 1, text: "Opposing lawyer asks your witness: 'Your friend told you my client was driving recklessly, didn't she?'", answer: "Objection", explanation: "This is hearsay. The witness didn't see the event themselves; they are testifying about what someone else said." },
    { id: 2, text: "Prosecutor asks the jury: 'This man was arrested for theft five years ago, so he's clearly a thief, right?'", answer: "Objection", explanation: "This is prejudicial. Past records cannot be used to prove guilt in the current case as it can unfairly bias the jury." },
    { id: 3, text: "Your witness is asked: 'How did you feel when you saw the accident?'", answer: "Let it pass", explanation: "This is generally allowed. A witness can testify about their own feelings and observations." },
    { id: 4, text: "Opposing witness says: 'I think the defendant is a dishonest person.'", answer: "Objection", explanation: "This is an opinion, not a fact. A witness should testify to what they know, not their personal beliefs about someone's character." },
];

export default function LawyerActivity({ onBack }: LawyerActivityProps) {
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
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Scale className="text-primary"/>The Scales of Justice Challenge</CardTitle>
                        <CardDescription>Step into the shoes of a lawyer. This activity will test your logic, ethics, and quick thinking.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p>Ready to analyze evidence, challenge arguments, and fight for your client? Let's begin.</p>
                        <Button onClick={() => setStage("quiz")}>Start the Legal Challenge</Button>
                    </CardContent>
                    </>
                );
            case "quiz":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Legal Foundations Quiz</CardTitle>
                        <CardDescription>Test your basic legal knowledge.</CardDescription>
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
                        <Button onClick={() => setStage("myth-busting")} className="w-full">Continue to Myth-Busting</Button>
                    </CardFooter>
                    </>
                )
            case "myth-busting":
                 return (
                     <>
                    <CardHeader>
                        <CardTitle>Lawyer Myths: Fact or Fiction?</CardTitle>
                        <CardDescription>Let's debunk some common myths about the legal world.</CardDescription>
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
                        <Button onClick={() => setStage('courtroom-choices')} className="w-full">Continue to Courtroom Choices</Button>
                    </CardFooter>
                    </>
                );
            case "courtroom-choices":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Courtroom Choices</CardTitle>
                        <CardDescription>You are the lawyer. What is the best first step in these scenarios?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {courtroomScenarios.map(s => (
                             <div key={s.id} className="p-3 bg-secondary/50 rounded-lg space-y-2">
                                <p className="font-medium">{s.text}</p>
                                <RadioGroup onValueChange={(v) => handleAnswerChange(`court-${s.id}`, v)}>
                                    {s.options.map(opt => (
                                        <div key={opt} className="flex items-center space-x-2"><RadioGroupItem value={opt} id={`s-${s.id}-${opt}`} /><Label htmlFor={`s-${s.id}-${opt}`}>{opt}</Label></div>
                                    ))}
                                </RadioGroup>
                                {answers[`court-${s.id}`] && (
                                    <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Best Choice Rationale">
                                        <p className="text-muted-foreground">The best choice is <strong>"{s.answer}"</strong> because {s.explanation}</p>
                                    </InfoCard>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => setStage("objection-game")} className="w-full">Continue to Objection Game</Button>
                    </CardFooter>
                    </>
                )
            case "objection-game":
                 return (
                     <>
                    <CardHeader>
                        <CardTitle>Objection or Not?</CardTitle>
                        <CardDescription>A statement is made in court. Should you object?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       {objectionScenarios.map(s => (
                            <div key={s.id} className="space-y-2 p-3 bg-secondary/50 rounded-lg">
                                <p className="font-medium italic">"{s.text}"</p>
                                <RadioGroup onValueChange={(val) => handleAnswerChange(`obj-${s.id}`, val)} className="flex gap-4">
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Objection" id={`obj-objection-${s.id}`} /><Label htmlFor={`obj-objection-${s.id}`}>🚨 Objection</Label></div>
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Let it pass" id={`obj-pass-${s.id}`} /><Label htmlFor={`obj-pass-${s.id}`}>✅ Let it Pass</Label></div>
                                </RadioGroup>
                                {answers[`obj-${s.id}`] && (
                                    <p className={`text-sm pt-2 ${answers[`obj-${s.id}`] === s.answer ? 'text-green-600' : 'text-destructive'}`}>
                                        Correct Answer: <strong>{s.answer}</strong>. <span className="text-muted-foreground">{s.explanation}</span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => { toast({title: "Great work, counsel!"}); setStage('results')}} className="w-full">See Final Results</Button>
                    </CardFooter>
                    </>
                );
            case "results":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>You've explored the logic, ethics, and strategic thinking of a lawyer.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaways</h3>
                            <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
                                <li><strong>Evidence is Key:</strong> A lawyer's case is built on strong, verifiable evidence.</li>
                                <li><strong>Ethics are Non-Negotiable:</strong> The legal profession demands the highest standards of integrity.</li>
                                <li><strong>It's a Mental Game:</strong> Success relies on sharp logic, strategic thinking, and clear communication.</li>
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
