
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Briefcase, Loader2, AlertTriangle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import InfoCard from "./InfoCard";
import { Textarea } from "../ui/textarea";
import { getProductManagerSimulationAction } from "@/app/actions";

type Stage = "intro" | "simulation" | "feedback" | "reflection" | "puzzle" | "results";

interface ProductManagerActivityProps {
    onBack: () => void;
};

export default function ProductManagerActivity({ onBack }: ProductManagerActivityProps) {
    const { toast } = useToast();
    const [stage, setStage] = useState<Stage>("intro");
    const [simulationChoices, setSimulationChoices] = useState({ targetAudience: '', features: '', businessModel: '' });
    const [simulationResult, setSimulationResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [feedbackChoice, setFeedbackChoice] = useState('');
    
    const handleSimulationChoiceChange = (field: keyof typeof simulationChoices, value: string) => {
        setSimulationChoices(prev => ({ ...prev, [field]: value }));
    };

    const handleSimulationSubmit = async () => {
        if (!simulationChoices.targetAudience || !simulationChoices.features || !simulationChoices.businessModel) {
            toast({ variant: 'destructive', title: "Please make all choices." });
            return;
        }
        setLoading(true);
        const result = await getProductManagerSimulationAction(simulationChoices);
        if (result.success && result.data) {
            setSimulationResult(result.data.summary);
        } else {
            toast({ variant: 'destructive', title: "Error", description: result.error });
            setSimulationResult("An unexpected issue occurred. In product management, it's crucial to have fallback plans and analyze what went wrong.");
        }
        setLoading(false);
    };

    const renderContent = () => {
        switch (stage) {
            case "intro":
                return (
                    <>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Briefcase className="text-primary"/>The Product Manager's Toolkit</CardTitle>
                        <CardDescription>This activity simulates the strategic decisions and problem-solving a PM faces daily.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p>Ready to launch a new product and guide it to success?</p>
                        <Button onClick={() => setStage("simulation")}>Start the Simulation</Button>
                    </CardContent>
                    </>
                );
            case "simulation":
                 return (
                    <>
                    <CardHeader>
                        <CardTitle>Launching a Food Delivery App</CardTitle>
                        <CardDescription>You are a Product Manager for a new food delivery app. Make these key decisions before launch.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Target Audience">
                            <RadioGroup value={simulationChoices.targetAudience} onValueChange={(v) => handleSimulationChoiceChange('targetAudience', v)} className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Students" id="ta-students" /><Label htmlFor="ta-students">Students</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Working Professionals" id="ta-profs" /><Label htmlFor="ta-profs">Working Professionals</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Families" id="ta-families" /><Label htmlFor="ta-families">Families</Label></div>
                            </RadioGroup>
                        </InfoCard>
                        <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Key Features">
                            <RadioGroup value={simulationChoices.features} onValuecha2ge={(v) => handleSimulationChoiceChange('features', v)} className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Fast Delivery" id="feat-delivery" /><Label htmlFor="feat-delivery">Fast Delivery</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Discounts" id="feat-discounts" /><Label htmlFor="feat-discounts">Discounts</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Premium Restaurants" id="feat-premium" /><Label htmlFor="feat-premium">Premium Restaurants</Label></div>
                            </RadioGroup>
                        </InfoCard>
                        <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Business Model">
                             <RadioGroup value={simulationChoices.businessModel} onValueChange={(v) => handleSimulationChoiceChange('businessModel', v)} className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Subscription" id="bm-sub" /><Label htmlFor="bm-sub">Subscription</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Ads" id="bm-ads" /><Label htmlFor="bm-ads">Ads</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Pay-per-order" id="bm-ppo" /><Label htmlFor="bm-ppo">Pay-per-order</Label></div>
                            </RadioGroup>
                        </InfoCard>
                        {simulationResult && (
                            <InfoCard icon={<AlertTriangle className="w-5 h-5 text-accent"/>} title="Strategy Outcome">
                                <p className="text-muted-foreground">{simulationResult}</p>
                            </InfoCard>
                        )}
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button onClick={handleSimulationSubmit} disabled={loading || !!simulationResult} className="w-full">
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {loading ? "Analyzing Strategy..." : "Analyze Strategy"}
                        </Button>
                        {!!simulationResult && (
                            <Button onClick={() => setStage("feedback")} className="w-full">Continue to Next Challenge</Button>
                        )}
                    </CardFooter>
                    </>
                )
            case "feedback":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Prioritizing User Feedback</CardTitle>
                        <CardDescription>You've received three pieces of user feedback. Which do you act on first?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <RadioGroup className="space-y-2" value={feedbackChoice} onValueChange={setFeedbackChoice}>
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="slow" className="sr-only" />"The app is too slow."</Label>
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="dark" className="sr-only" />"The app needs a dark mode."</Label>
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="ads" className="sr-only" />"There are too many ads."</Label>
                        </RadioGroup>
                         {feedbackChoice && (
                            <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="The PM's Approach">
                                <p className="text-muted-foreground">The best approach is to analyze impact vs. effort. A slow app (performance) often has the highest negative impact on user retention and should be prioritized. A feature like dark mode is lower impact, and too many ads relates to the business model, which is a strategic decision.</p>
                            </InfoCard>
                         )}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => setStage("reflection")} className="w-full">Continue to Reflection</Button>
                    </CardFooter>
                    </>
                )
            case "reflection":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>A Moment of Reflection</CardTitle>
                        <CardDescription>Consider these questions honestly. Your answers are for you alone.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                           <Label>Do you enjoy working at the intersection of tech, business, and design?</Label>
                           <Textarea placeholder="Your thoughts..."/>
                        </div>
                        <div className="space-y-2">
                           <Label>Do you prefer leading a team through influence or having direct authority?</Label>
                           <Textarea placeholder="Your thoughts..."/>
                        </div>
                        <div className="space-y-2">
                           <Label>Do you get excited about understanding user needs and solving their problems?</Label>
                           <Textarea placeholder="Your thoughts..."/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => {toast({title: "Reflection Saved"}); setStage("puzzle")}} className="w-full">Continue to Final Puzzle</Button>
                    </CardFooter>
                    </>
                );
            case "puzzle":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>The User Retention Puzzle</CardTitle>
                        <CardDescription>Your app downloads are increasing rapidly, but a majority of users delete it after just one week. What is the most likely problem?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <RadioGroup className="space-y-2">
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="features" className="sr-only" />Add more features to keep users engaged.</Label>
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="onboarding" className="sr-only" />Improve the onboarding process to better introduce the app.</Label>
                            <Label className="p-3 rounded-md border block cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary"><RadioGroupItem value="ads" className="sr-only" />Run more ads to acquire new users.</Label>
                        </RadioGroup>
                         <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="The PM's Rationale">
                            <p className="text-muted-foreground">The best answer is to improve the onboarding. High churn after one week suggests users don't understand the app's value or how to use it. Adding features or ads won't fix this core problem.</p>
                        </InfoCard>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => setStage('results')} className="w-full">Finish Activity</Button>
                    </CardFooter>
                    </>
                );
            case "results":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>You've explored the strategic thinking, user empathy, and problem-solving required of a Product Manager.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaways</h3>
                            <ul className="list-disc list-inside text-green-800 dark:text-green-300 space-y-1">
                                <li><strong>It's About Trade-offs:</strong> PMs constantly balance competing priorities (e.g., growth vs. revenue).</li>
                                <li><strong>User-Centric:</strong> The user's problem is the ultimate focus. All decisions revolve around solving it.</li>
                                <li><strong>Data-Informed, Not Data-Led:</strong> Data helps you understand the problem, but vision and strategy guide the solution.</li>
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
                        setSimulationResult('');
                        setSimulationChoices({ targetAudience: '', features: '', businessModel: '' });
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

    