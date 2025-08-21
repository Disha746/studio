
"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Palette, Sofa, Lamp, LayoutTemplate, Sparkles } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import InfoCard from "./InfoCard";

type Stage = "intro" | "makeover" | "consultation" | "mythbusting" | "reflection" | "results";

interface InteriorDesignerActivityProps {
    onBack: () => void;
}

const consultationQuestions = [
    { id: 1, text: "What kind of color palette would you suggest to achieve a professional yet comfortable feel?", options: ["Cool blues and grays for professionalism, with warm wood accents for comfort.", "Bright, energetic yellows and oranges to boost creativity.", "Muted earth tones and greens for a calming, natural vibe.", "Primarily black and white for a sleek, modern look."] },
    { id: 2, text: "For lighting, what's most important for video calls?", options: ["Bright, direct overhead lighting to eliminate shadows.", "Soft, diffused lighting from multiple sources, preferably facing the user.", "Dramatic spotlighting to highlight the desk area.", "Natural light from a window is always best, regardless of facing."] },
    { id: 3, text: "I'm unsure about the furniture. What's a good balance between modern and cozy?", options: ["Sleek, metal furniture with sharp lines.", "Upholstered pieces with softer silhouettes and natural materials.", "A mix of minimalist furniture with touches of warm textures (e.g., rugs, throws).", "Vintage-inspired pieces with ornate details."] }
];

const mythBustingQuestions = [
    { id: 1, text: "Interior designers only pick out paint colors and furniture.", answer: "Myth", explanation: "Designers also deal with space planning, building codes, material selection, project management, budgeting, and collaborating with contractors." },
    { id: 2, text: "You need a fine arts degree to be an interior designer.", answer: "Myth", explanation: "While art skills are important, degrees in Interior Design, Architecture, or related fields are more common and cover technical and practical aspects." },
    { id: 3, text: "Good interior design is all about following trends.", answer: "Myth", explanation: "Timeless design principles, client needs, and functionality often take precedence over fleeting trends." },
    { id: 4, text: "Clients always know exactly what they want from the start.", answer: "Myth", explanation: "Designers often help clients clarify their vision, explore possibilities, and discover preferences they didn't realize they had." },
    { id: 5, text: "Interior design is a purely subjective field with no rules.", answer: "Myth", explanation: "While creative, design adheres to principles like balance, scale, proportion, color theory, ergonomics, and often building regulations." }
];


export default function InteriorDesignerActivity({ onBack }: InteriorDesignerActivityProps) {
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
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Sparkles className="text-primary"/>Crafting Spaces: The Art and Science of Interior Design</CardTitle>
                        <CardDescription>Interior design is about transforming spaces into functional, aesthetic, and inspiring environments. Let's get creative!</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <Image src="https://placehold.co/600x400.png" alt="Empty room with potential for design" width={600} height={400} className="rounded-lg" data-ai-hint="empty room" />
                        <Button onClick={() => setStage("makeover")}>Start Your First Design Project</Button>
                    </CardContent>
                    </>
                );

            case "makeover":
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Your First Design Project</CardTitle>
                        <CardDescription>Redesign this living room. Select elements that best fit a desired aesthetic.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Image src="https://placehold.co/600x400.png" alt="Living room to be redesigned" width={600} height={400} className="rounded-lg mb-4" data-ai-hint="living room" />
                        <InfoCard icon={<Palette className="w-5 h-5 text-accent"/>} title="Color Palette">
                            <RadioGroup onValueChange={(val) => handleAnswerChange('color', val)} className="flex flex-wrap gap-4">
                                {["Calm & Serene", "Modern & Bold", "Earthy & Natural", "Vibrant & Energetic"].map(o => <div key={o} className="flex items-center space-x-2"><RadioGroupItem value={o} id={o}/><Label htmlFor={o}>{o}</Label></div>)}
                            </RadioGroup>
                        </InfoCard>
                        <InfoCard icon={<Sofa className="w-5 h-5 text-accent"/>} title="Furniture Style">
                           <RadioGroup onValueChange={(val) => handleAnswerChange('furniture', val)} className="flex flex-wrap gap-4">
                                {["Minimalist", "Mid-Century Modern", "Industrial", "Bohemian"].map(o => <div key={o} className="flex items-center space-x-2"><RadioGroupItem value={o} id={o}/><Label htmlFor={o}>{o}</Label></div>)}
                            </RadioGroup>
                        </InfoCard>
                        <InfoCard icon={<Lamp className="w-5 h-5 text-accent"/>} title="Lighting">
                            <RadioGroup onValueChange={(val) => handleAnswerChange('lighting', val)} className="flex flex-wrap gap-4">
                                {["Ambient & Soft", "Task-Oriented & Bright", "Accent & Dramatic", "Natural Light Maximization"].map(o => <div key={o} className="flex items-center space-x-2"><RadioGroupItem value={o} id={o}/><Label htmlFor={o}>{o}</Label></div>)}
                            </RadioGroup>
                        </InfoCard>
                        <InfoCard icon={<LayoutTemplate className="w-5 h-5 text-accent"/>} title="Layout Consideration">
                           <RadioGroup onValueChange={(val) => handleAnswerChange('layout', val)} className="flex flex-wrap gap-4">
                                {["Open Plan for Socializing", "Zoned for Different Activities", "Focused on a Central Feature"].map(o => <div key={o} className="flex items-center space-x-2"><RadioGroupItem value={o} id={o}/><Label htmlFor={o}>{o}</Label></div>)}
                            </RadioGroup>
                        </InfoCard>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => setStage("consultation")} className="w-full">Submit Design & Meet Client</Button>
                    </CardFooter>
                    </>
                );
            case "consultation":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Meeting Your Client</CardTitle>
                        <CardDescription>Respond to your client's requests and concerns based on their initial thoughts.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="p-3 bg-secondary rounded-lg italic">"Hi there! I'm looking to refresh my home office. I want it to feel more professional, but also comfortable enough for me to focus. I'm not a fan of stark white walls, and I need good lighting for video calls."</p>
                        {consultationQuestions.map(q => (
                            <div key={q.id} className="space-y-2">
                                <Label>{q.text}</Label>
                                <RadioGroup onValueChange={(val) => handleAnswerChange(`consultation-${q.id}`, val)}>
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
                        <Button onClick={() => setStage("mythbusting")} className="w-full">Submit Responses & Continue</Button>
                    </CardFooter>
                    </>
                );
             case "mythbusting":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Design Debunked: Myth or Fact?</CardTitle>
                        <CardDescription>Let's see if you can tell the difference between common myths and the reality of the profession.</CardDescription>
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
                                    <p className="text-sm pt-2 text-muted-foreground">Correct Answer: <strong>{q.answer}</strong>. {q.explanation}</p>
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
                        <CardTitle>Your Design DNA</CardTitle>
                        <CardDescription>Let's understand your personal design leanings and how you think about creating spaces.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label>What kind of atmosphere do you find most appealing in a living space?</Label>
                            <Input placeholder="e.g., Cozy, Minimalist, Vibrant..." />
                        </div>
                         <div className="space-y-2">
                            <Label>When you enter a room, what's the first thing you notice?</Label>
                            <Input placeholder="e.g., The lighting, the colors, the clutter..." />
                        </div>
                         <div className="space-y-2">
                            <Label>How important is sustainability and eco-friendliness in design to you?</Label>
                            <Slider defaultValue={[50]} max={100} step={1} />
                        </div>
                        <div className="space-y-2">
                            <Label>Can you imagine spending hours researching fabrics, finishes, and furniture for a project?</Label>
                            <RadioGroup>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="research-yes" /><Label htmlFor="research-yes">Yes, I'd find it exciting!</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="maybe" id="research-maybe" /><Label htmlFor="research-maybe">Maybe, if it's for a project I'm passionate about.</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="research-no" /><Label htmlFor="research-no">Probably not, it sounds tedious.</Label></div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => {toast({title: "Reflection Saved!", description: "Your design preferences have been noted."}); setStage('results')}} className="w-full">Submit Preferences & Finish</Button>
                    </CardFooter>
                    </>
                );
            case "results":
                 return (
                     <>
                    <CardHeader>
                        <CardTitle>Activity Complete!</CardTitle>
                        <CardDescription>You've experienced a taste of the creativity, client interaction, and knowledge that goes into interior design.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaway</h3>
                            <p className="text-green-800 dark:text-green-300">Great job! You've already started thinking like a designer—balancing client needs, aesthetic choices, and practical considerations.</p>
                        </div>
                        <Separator />
                         <div className="space-y-2">
                            <h4 className="font-semibold">Next Steps:</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                                <li>Explore different interior design niches like residential, commercial, or hospitality design.</li>
                                <li>Learn about design tools like AutoCAD, SketchUp, and Revit.</li>
                                <li>Look up interviews with real interior designers to learn about their journey.</li>
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
