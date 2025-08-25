
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Tv, AlertTriangle, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import InfoCard from "./InfoCard";
import { Textarea } from "../ui/textarea";

type Stage = "intro" | "challenge" | "quiz" | "myth-busting" | "results";

interface MediaAndMassCommActivityProps {
    onBack: () => void;
};

const scenarios = [
    { id: "traffic", title: "Major Traffic Jam", description: "A major traffic jam in the city due to heavy rain." },
    { id: "winner", title: "National Competition Winner", description: "A student from your school/college wins a national competition." },
    { id: "trend", title: "New Social Media Trend", description: "A new social media trend is going viral." },
    { id: "campaign", title: "Environmental Campaign", description: "An environmental campaign is launched in your town." }
];

const quizQuestions = [
    { id: 1, text: "Which of these is NOT a career in mass media?", options: ["Journalist", "News Anchor", "Civil Engineer", "Public Relations Officer"], answer: "Civil Engineer" },
    { id: 2, text: "What is the main responsibility of a journalist?", options: ["Entertain people with jokes", "Report accurate and verified information", "Create advertisements", "Teach students in a classroom"], answer: "Report accurate and verified information" },
    { id: 3, text: "Which media format is the fastest to spread news?", options: ["Newspaper", "Television", "Radio", "Social Media"], answer: "Social Media" },
    { id: 4, text: "A career in mass media requires mostly:", options: ["Coding skills", "Strong communication & creativity", "Heavy physical strength", "Advanced math skills"], answer: "Strong communication & creativity" },
    { id: 5, text: "Which of these is an ethical responsibility of mass media professionals?", options: ["Spreading rumors to gain views", "Publishing unverified news quickly", "Presenting unbiased and truthful information", "Promoting only their personal opinion"], answer: "Presenting unbiased and truthful information" }
];

const mythBustingQuestions = [
    { id: 1, text: "Mass Media professionals only work on TV.", answer: "Myth", explanation: "The field includes print, radio, digital media, advertising, PR, and more." },
    { id: 2, text: "Journalists must always verify information before reporting.", answer: "Fact", explanation: "Verifying information is a core ethical principle of journalism to ensure accuracy and credibility." },
    { id: 3, text: "Mass Media is only about entertainment.", answer: "Myth", explanation: "It also includes news, education, public awareness campaigns, and strategic communication." },
    { id: 4, text: "A Mass Media career requires strong communication skills.", answer: "Fact", explanation: "Excellent writing, speaking, and interpersonal skills are fundamental to success in this field." },
    { id: 5, text: "Anyone can spread fake news, but mass media professionals cannot.", answer: "Fact", explanation: "Ethical professionals are bound by standards of truthfulness and accountability. Spreading fake news deliberately is a serious breach of journalistic ethics." },
    { id: 6, text: "Mass Media careers are dying because of the internet.", answer: "Myth", explanation: "The industry is evolving, not dying. The internet has created new roles in digital media, social media management, and online content creation." }
];

export default function MediaAndMassCommActivity({ onBack }: MediaAndMassCommActivityProps) {
    const { toast } = useToast();
    const [stage, setStage] = useState<Stage>("intro");
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };
    
    const handleReportSubmit = () => {
        if (!answers.scenario) {
            toast({ variant: 'destructive', title: "Please select a scenario." });
            return;
        }
        if (!answers.report) {
            toast({ variant: 'destructive', title: "Please write your report." });
            return;
        }
        toast({ title: "Report Submitted!", description: "Great work getting the story out!" });
        setStage("quiz");
    }

    const renderContent = () => {
        switch (stage) {
            case "intro":
                return (
                    <>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Tv className="text-primary"/>🚨 Breaking News Challenge! 🚨</CardTitle>
                        <CardDescription>Are you ready to step into the fast-paced world of news reporting? Let's put your skills to the test!</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p>Imagine this: A major event has just happened, and the world is waiting for the facts. You're the reporter on the scene.</p>
                        <Button onClick={() => setStage("challenge")}>Start the Challenge</Button>
                    </CardContent>
                    </>
                );
            case "challenge":
                 return (
                    <>
                    <CardHeader>
                        <CardTitle>Part 1: The Breaking News Scenario</CardTitle>
                        <CardDescription>Choose a scenario, then write a brief news report. Focus on being clear, concise, and factual.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Choose Your Scenario">
                             <RadioGroup value={answers.scenario} onValueChange={(v) => handleAnswerChange('scenario', v)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {scenarios.map(s => (
                                    <div key={s.id} className="flex items-center space-x-2"><RadioGroupItem value={s.id} id={s.id} /><Label htmlFor={s.id}>{s.title}</Label></div>
                                ))}
                            </RadioGroup>
                        </InfoCard>
                        <div className="space-y-2">
                           <Label htmlFor="news-report">Your News Report</Label>
                           <Textarea id="news-report" placeholder="Report the who, what, where, when, and why..." rows={5} value={answers.report} onChange={e => handleAnswerChange('report', e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleReportSubmit} className="w-full">Submit Report & Continue</Button>
                    </CardFooter>
                    </>
                )
            case "quiz":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Part 2: Sharpen Your Knowledge</CardTitle>
                        <CardDescription>Test your knowledge with this quick quiz.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {quizQuestions.map(q => (
                            <div key={q.id} className="space-y-2 p-3 bg-secondary/50 rounded-lg">
                                <p className="font-medium">{q.text}</p>
                                <RadioGroup onValueChange={(val) => handleAnswerChange(`quiz-${q.id}`, val)}>
                                    {q.options.map(opt => (
                                        <div key={opt} className="flex items-center space-x-2">
                                            <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                                            <Label htmlFor={`${q.id}-${opt}`}>{opt}</Label>
                                        </div>
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
                        <CardTitle>Part 3: Separating Fact from Fiction</CardTitle>
                        <CardDescription>Let's clear up some common myths about the media world.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       {mythBustingQuestions.map(q => (
                            <div key={q.id} className="space-y-2 p-3 bg-secondary/50 rounded-lg">
                                <p className="font-medium italic">"{q.text}"</p>
                                <RadioGroup onValueChange={(val) => handleAnswerChange(`myth-${q.id}`, val)} className="flex gap-4">
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Myth" id={`myth-${q.id}`} /><Label htmlFor={`myth-${q.id}`}>Myth ❌</Label></div>
                                    <div className="flex items-center space-x-2"><RadioGroupItem value="Fact" id={`fact-${q.id}`} /><Label htmlFor={`fact-${q.id}`}>Fact ✅</Label></div>
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
                        <Button onClick={() => setStage('results')} className="w-full">See Final Results</Button>
                    </CardFooter>
                    </>
                );
            case "results":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>You've explored the fast-paced, high-stakes world of mass media.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaways</h3>
                            <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
                                <li><strong>Speed & Accuracy:</strong> The media world demands both quick thinking and a commitment to facts.</li>
                                <li><strong>Communication is Key:</strong> Strong writing and speaking skills are non-negotiable.</li>
                                <li><strong>Ethics Matter:</strong> Upholding truth and integrity is the foundation of credible journalism.</li>
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
