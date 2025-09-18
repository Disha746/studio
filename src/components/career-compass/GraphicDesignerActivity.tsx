
"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Check, Lightbulb, Sparkles, Coffee, Leaf, Users, Brush } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import InfoCard from "./InfoCard";

type Stage = "intro" | "logo" | "feedback" | "reflection" | "myth-busting" | "results";

interface GraphicDesignerActivityProps {
    onBack: () => void;
};

const mythBustingQuestions = [
    { id: 1, text: "Graphic designers just make things look pretty.", answer: "Myth", explanation: "Professional graphic designers are problem-solvers. They use visual elements to communicate messages, solve business challenges, and achieve specific objectives for clients." },
    { id: 2, text: "Anyone can do graphic design with tools like Canva.", answer: "Myth", explanation: "While accessible tools are great for basic tasks, professional graphic design involves deep knowledge of branding, typography, composition, color theory, client strategy, and advanced software skills." },
    { id: 3, text: "Graphic design is only used for advertisements and posters.", answer: "Myth", explanation: "Graphic design is pervasive – it's in app interfaces, video games, websites, product packaging, branding, signage, educational materials, and so much more." },
    { id: 4, text: "A designer's personal taste is the most important factor in a project.", answer: "Myth", explanation: "While taste is involved, the client's brand, target audience, and project goals are paramount. Good designers adapt their style to meet these needs." }
];

const icons = [
    { name: "Coffee Bean", component: <Coffee className="w-8 h-8" /> },
    { name: "Leaf", component: <Leaf className="w-8 h-8" /> },
    { name: "Mug", component: <Sparkles className="w-8 h-8" /> },
    { name: "Community", component: <Users className="w-8 h-8" /> }
];

const fonts = [
    { name: "Friendly Script", className: "font-serif italic" },
    { name: "Clean Sans-Serif", className: "font-sans" },
    { name: "Rustic Serif", className: "font-serif" }
];

const palettes = [
    { name: "Earthy Greens & Browns", primary: "bg-green-700", accent: "bg-yellow-800" },
    { name: "Warm Tans & Cream", primary: "bg-amber-600", accent: "bg-stone-200" },
    { name: "Soft Teal & Beige", primary: "bg-teal-600", accent: "bg-beige-200" }
];

export default function GraphicDesignerActivity({ onBack }: GraphicDesignerActivityProps) {
    const { toast } = useToast();
    const [stage, setStage] = useState<Stage>("intro");
    const [logo, setLogo] = useState({ icon: "Coffee Bean", font: "Clean Sans-Serif", palette: "Earthy Greens & Browns" });
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
                        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Brush className="text-primary"/>Bringing Brands to Life</CardTitle>
                        <CardDescription>Graphic design is the art of visual communication. It’s about solving problems and creating memorable experiences. Ready to create your own visual solution?</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <Button onClick={() => setStage("logo")}>Start Your First Logo Creation</Button>
                    </CardContent>
                    </>
                );
            case "logo":
                const selectedIcon = icons.find(i => i.name === logo.icon)?.component;
                const selectedFont = fonts.find(f => f.name === logo.font)?.className;
                const selectedPalette = palettes.find(p => p.name === logo.palette);
                return (
                    <>
                    <CardHeader>
                        <CardTitle>Your First Logo Creation</CardTitle>
                        <CardDescription>Design a logo for 'Green Bean Café' – a new, eco-friendly café for customers who value sustainability and a cozy environment.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className={`p-4 border rounded-lg flex flex-col items-center justify-center gap-2 h-48 ${selectedPalette?.primary} text-white`}>
                           {selectedIcon}
                            <p className={`text-2xl font-bold ${selectedFont}`}>Green Bean Café</p>
                        </div>
                        <InfoCard icon={<Sparkles className="w-5 h-5 text-accent"/>} title="Iconography">
                            <RadioGroup value={logo.icon} onValueChange={(val) => setLogo(p => ({ ...p, icon: val }))} className="flex flex-wrap gap-4">
                                {icons.map(o => <div key={o.name} className="flex items-center space-x-2"><RadioGroupItem value={o.name} id={o.name}/><Label htmlFor={o.name}>{o.name}</Label></div>)}
                            </RadioGroup>
                        </InfoCard>
                        <InfoCard icon={<Brush className="w-5 h-5 text-accent"/>} title="Typography">
                           <RadioGroup value={logo.font} onValueChange={(val) => setLogo(p => ({...p, font: val}))} className="flex flex-wrap gap-4">
                                {fonts.map(o => <div key={o.name} className="flex items-center space-x-2"><RadioGroupItem value={o.name} id={o.name}/><Label htmlFor={o.name} className={o.className}>{o.name}</Label></div>)}
                            </RadioGroup>
                        </InfoCard>
                        <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Color Palette">
                            <RadioGroup value={logo.palette} onValueChange={(val) => setLogo(p => ({...p, palette: val}))} className="flex flex-wrap gap-4">
                                {palettes.map(o => <div key={o.name} className="flex items-center space-x-2"><RadioGroupItem value={o.name} id={o.name}/><Label htmlFor={o.name}>{o.name}</Label></div>)}
                            </RadioGroup>
                        </InfoCard>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => setStage("feedback")} className="w-full">Finalize Logo</Button>
                    </CardFooter>
                    </>
                )
             case "feedback":
                const finalIcon = icons.find(i => i.name === logo.icon)?.component;
                const finalFont = fonts.find(f => f.name === logo.font);
                const finalPalette = palettes.find(p => p.name === logo.palette);
                 return (
                    <>
                    <CardHeader>
                        <CardTitle>Your Final Logo</CardTitle>
                        <CardDescription>Here's the logo you created, with some professional considerations.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className={`p-8 border rounded-lg flex flex-col items-center justify-center gap-4 h-52 ${finalPalette?.primary} text-white`}>
                           {finalIcon}
                            <p className={`text-3xl font-bold ${finalFont?.className}`}>Green Bean Café</p>
                        </div>
                        <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Designer's Considerations">
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li><strong>Brand Identity:</strong> You've chosen the "{logo.icon}" icon and a "{logo.font}" font. This combination suggests a brand that is focused on {logo.icon === 'Leaf' ? 'nature and freshness' : logo.icon === 'Community' ? 'togetherness and warmth' : 'the core coffee experience'}.</li>
                                <li><strong>Target Audience:</strong> The "{logo.palette}" palette evokes a feeling of {logo.palette.includes('Green') ? 'eco-consciousness and calm' : 'warmth and comfort'}. This aligns well with customers seeking a relaxed, sustainable café.</li>
                                <li><strong>Simplicity & Memorability:</strong> Your logo combines a clear icon with readable text. In real design, you would test how this looks at various sizes, from a tiny app icon to a large sign.</li>
                            </ul>
                        </InfoCard>
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
                        <CardTitle>Your Designer's Mindset</CardTitle>
                        <CardDescription>Consider your experience and personal interests. Be honest with yourself!</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label>Do you enjoy spending hours on digital tools to create something visual and tangible?</Label>
                            <RadioGroup><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q1-yes" /><Label htmlFor="q1-yes">Yes, I lose track of time!</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="sometimes" id="q1-sometimes" /><Label htmlFor="q1-sometimes">Sometimes, it depends on the project.</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q1-no" /><Label htmlFor="q1-no">Not really, I prefer other types of activities.</Label></div></RadioGroup>
                        </div>
                         <div className="space-y-2">
                            <Label>Do you get excited when you see ads or logos and imagine how you might improve them?</Label>
                            <RadioGroup><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q2-yes" /><Label htmlFor="q2-yes">Absolutely, I'm always analyzing them!</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="sometimes" id="q2-sometimes" /><Label htmlFor="q2-sometimes">Occasionally, if it catches my eye.</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q2-no" /><Label htmlFor="q2-no">Not usually, I just see them as information.</Label></div></RadioGroup>
                        </div>
                         <div className="space-y-2">
                            <Label>Would you like the challenge of balancing your creative vision with a client's specific needs?</Label>
                             <RadioGroup><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q3-yes" /><Label htmlFor="q3-yes">Yes, I enjoy collaborative problem-solving.</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q3-no" /><Label htmlFor="q3-no">I prefer creative freedom without constraints.</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="maybe" id="q3-maybe" /><Label htmlFor="q3-maybe">Client needs can be restrictive to my creativity.</Label></div></RadioGroup>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={() => {toast({title: "Reflections Saved!"}); setStage("myth-busting")}} className="w-full">Submit My Reflections</Button>
                    </CardFooter>
                    </>
                 );
            case "myth-busting":
                return (
                     <>
                    <CardHeader>
                        <CardTitle>Graphic Design Realities: Myth or Fact?</CardTitle>
                        <CardDescription>Let's separate common misconceptions from the truth.</CardDescription>
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
                                    <p className={`text-sm pt-2 text-muted-foreground ${mythAnswers[q.id] === q.answer ? 'text-green-600' : 'text-destructive'}`}>Correct Answer: <strong>{q.answer}</strong>. {q.explanation}</p>
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
                        <CardDescription>You've just experienced key aspects of graphic design.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/50">
                            <h3 className="font-headline text-lg flex items-center gap-2 mb-2"><Lightbulb className="text-green-600"/>Key Takeaway</h3>
                            <p className="text-green-800 dark:text-green-300">Great job! You've explored how creativity meets strategy to solve real-world problems. This is the core of graphic design.</p>
                        </div>
                        <Separator />
                         <div className="space-y-2">
                            <h4 className="font-semibold">Next Steps:</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                                <li>Explore design disciplines like Branding, UI/UX, or Motion Graphics.</li>
                                <li>Learn about design software like Adobe Illustrator, Photoshop, and Figma.</li>
                                <li>Look up portfolios of professional designers for inspiration.</li>
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
