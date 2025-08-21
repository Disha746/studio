
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Brush, CheckCircle, XCircle, Rocket, Wrench, ArrowRight } from "lucide-react";
import InfoCard from "./InfoCard";


type GraphicDesignerIntroProps = {
    onBack?: () => void;
    onProceed?: () => void;
};

export default function GraphicDesignerIntro({ onBack, onProceed }: GraphicDesignerIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Brush className="text-primary"/>A Career in Graphic Design</CardTitle>
        <CardDescription>An overview of what it means to be a Graphic Designer.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">A career in graphic design is a dynamic and creative field with a wide range of opportunities. It involves creating visual concepts to communicate ideas that inform, inspire, and captivate consumers. Here's a breakdown of what to expect from a career in graphic design.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Perspective & Scope 📈">
            <p className="text-muted-foreground mb-4">The scope for graphic designers is broad and extends across various industries. You can work in-house for a single company, at a design or advertising agency with multiple clients, or as a freelancer running your own business.</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><span className="font-semibold text-foreground/90">In-house:</span> You'll work on a variety of projects for a single brand, from marketing campaigns to annual reports. This often provides a traditional work environment with a steady salary.</li>
                <li><span className="font-semibold text-foreground/90">Agency:</span> You'll work with a diverse range of clients and projects, collaborating with other creative professionals. This environment can be fast-paced with tight deadlines.</li>
                <li><span className="font-semibold text-foreground/90">Freelance:</span> This offers flexibility in terms of work hours and location, allowing you to choose your own projects and clients. However, it requires strong self-motivation and business skills.</li>
            </ul>
             <p className="text-muted-foreground mt-4 font-semibold">Specialized career paths include:</p>
             <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li><span className="font-semibold text-foreground/90">UI/UX Designer:</span> Focusing on the user interface and experience of digital products like websites and apps.</li>
                <li><span className="font-semibold text-foreground/90">Brand Identity Designer:</span> Creating a cohesive brand identity through logos, color schemes, and visual guidelines.</li>
                <li><span className="font-semibold text-foreground/90">Motion Graphics Designer:</span> Creating animated graphics for film, television, or online platforms.</li>
            </ul>
        </InfoCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Creative Outlet:</span> You get to use your creativity daily to solve visual problems and bring ideas to life.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Variety of Work:</span> You'll work on a diverse range of projects, from designing a logo to creating a full-blown website.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Demand:</span> With the continuous growth of digital media and marketing, there's a steady demand for skilled designers.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Remote Work Potential:</span> Many graphic design jobs, especially freelance ones, can be done remotely.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Client Feedback & Criticism:</span> You'll need to be prepared for constructive criticism and be able to revise designs to meet client requirements.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Tight Deadlines:</span> The industry can be fast-paced, and you'll often have to work under pressure to meet tight deadlines.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Screen Time:</span> A significant portion of your job will involve sitting in front of a computer for long hours.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Multitasking:</span> You may have to juggle multiple projects at once, requiring strong time management skills.</span></li>
                </ul>
            </InfoCard>
        </div>
        
        <InfoCard icon={<Wrench className="w-5 h-5 text-accent"/>} title="Required Skills">
            <h4 className="font-semibold text-foreground/90">Technical Skills</h4>
            <ul className="list-disc list-inside text-muted-foreground mt-1 mb-3">
                <li><span className="font-semibold text-foreground/90">Software Proficiency:</span> Mastery of industry-standard software like Adobe Photoshop, Illustrator, and InDesign is crucial. Knowledge of tools like Figma and Sketch is also valuable for UI/UX design.</li>
                <li><span className="font-semibold text-foreground/90">Design Principles:</span> A strong understanding of layout, typography, color theory, and composition.</li>
            </ul>
        </InfoCard>

      </CardContent>
      {onProceed && (
        <CardFooter>
            <Button onClick={onProceed} className="w-full">
                Try a hands-on activity
                <ArrowRight />
            </Button>
        </CardFooter>
        )}
    </Card>
  );
}

    