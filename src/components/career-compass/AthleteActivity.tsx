
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Dumbbell, Flag, Lightbulb, Zap } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import InfoCard from "./InfoCard";

type Stage = "intro" | "fitness" | "roadmap" | "myth-busting" | "results";

interface AthleteActivityProps {
    onBack: () => void;
};

const roadmapSteps = [
    { title: "Choose a Sport & Basic Training", description: "Start with a sport you're passionate about and focus on building foundational skills and physical conditioning." },
    { title: "Join Clubs/Academies & Get Coaching", description: "Seek out formal training and mentorship from experienced coaches to refine your technique." },
    { title: "Participate in District/National Competitions", description: "Test your skills against others. Competition is crucial for gaining experience and exposure." },
    { title: "Sports Scholarships & Sponsorships", description: "As you excel, opportunities for financial support through scholarships and sponsorships will become available." },
    { title: "National/International Level Athlete", description: "The pinnacle of the journey, representing your country or competing on the global stage." },
    { title: "Post-Career Opportunities", description: "An athlete's journey doesn't end with retirement. Explore coaching, sports commentary, or entrepreneurship." }
];

const mythBustingQuestions = [
    { id: 1, text: "Athletes are just naturally talented.", answer: "Myth", explanation: "While natural talent can be a starting point, consistent training, discipline, and hard work are far more critical to an athlete's success." },
    { id: 2, text: "Sports is not a career option.", answer: "Myth", explanation: "The sports industry is massive and offers a wide range of career paths beyond just being an athlete, including roles for coaches, sports scientists, and more." },
    { id: 3, text: "Athletes don't study.", answer: "Myth", explanation: "Many athletes successfully balance their sports career with their education, with many earning degrees and maintaining high academic standards." }
];

export default function AthleteActivity({ onBack }: AthleteActivityProps) {
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
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Zap className="text-primary"/>The Athlete's Discipline</CardTitle>
                        <CardDescription>This module gives you a taste of the physical and mental journey of a professional athlete.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <Dumbbell className="h-12 w-12 mx-auto text-primary" />
                        <p>Ready to see if you have the discipline and drive?</p>
                        <Button onClick={() => setStage("fitness")}>Start the Fitness Challenge</Button>
                    </CardContent>
                    </>
                );
            case "fitness":
                 return (
                    <>
                    <CardHeader>
                        <CardTitle>The Fitness Challenge</CardTitle>
                        <CardDescription>Complete these exercises to get a feel for an athlete's discipline. Focus on your form!</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <InfoCard icon={<Dumbbell className="w-5 h-5 text-accent"/>} title="Your Workout">
                            <ul className="list-decimal list-inside space-y-2 text-muted-foreground">
                                <li><strong>5 Squats:</strong> Keep your back straight and knees aligned with your toes.</li>
                                <li><strong>20-Second Plank:</strong> Maintain a straight line from head to heels, engaging your core.</li>
                                <li><strong>Stretching:</strong> Perform basic stretches for your hamstrings and quadriceps.</li>
                            </ul>
                        </InfoCard>
                        <div className="space-y-2">
                            <Label htmlFor="feedback">How did you feel after the challenge? What was most challenging?</Label>
                            <Textarea id="feedback" placeholder="e.g., 'The plank was tough, but I felt energized afterward. It shows how important core strength is.'"/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => {toast({title: "Feedback Submitted!"}); setStage("roadmap")}} className="w-full">Continue to Career Roadmap</Button>
                    </CardFooter>
                    </>
                )
            case "roadmap":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Roadmap to a Pro Athlete's Career</CardTitle>
                        <CardDescription>This is a typical journey for an aspiring professional athlete.</CardDescription>
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
                        <CardTitle>Sports Career: Myth or Fact?</CardTitle>
                        <CardDescription>Let's challenge some common misconceptions about being an athlete.</CardDescription>
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
                        <Button onClick={() => setStage('results')} className="w-full">See Final Results</Button>
                    </CardFooter>
                    </>
                );
            case "results":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>You've explored the discipline, journey, and realities of a sports career.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaways</h3>
                            <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
                                <li><strong>Discipline is Key:</strong> A sports career is built on a foundation of discipline, both physically and mentally.</li>
                                <li><strong>More Than a Game:</strong> A career in sports extends beyond playing, with many professional opportunities in related fields.</li>
                                <li><strong>Resilience is Essential:</strong> The path to becoming an athlete is filled with challenges. The ability to overcome setbacks is crucial.</li>
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
