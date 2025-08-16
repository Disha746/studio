"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Code, CheckCircle, Rocket, Sparkles, ArrowRight } from "lucide-react";

type SoftwareDeveloperIntroProps = {
    onBack?: () => void;
};

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-secondary/50 rounded-lg p-4">
        <h3 className="font-headline text-lg flex items-center gap-2 mb-2">
            {icon}
            {title}
        </h3>
        {children}
    </div>
)

export default function SoftwareDeveloperIntro({ onBack }: SoftwareDeveloperIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Code className="text-primary"/>A Career in Software Development</CardTitle>
        <CardDescription>An overview of what it means to be a Software Developer.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">A software developer is a professional who designs, develops, and maintains software applications. They are problem-solvers who use programming languages and tools to create everything from mobile apps and websites to complex enterprise systems and AI models. It's a field that blends creativity with logic, requiring both technical expertise and innovative thinking.</p>
        </div>

        <InfoCard icon={<Sparkles className="w-5 h-5 text-accent"/>} title="Why Choose This Field? 🤔">
            <p className="text-muted-foreground mb-4">Choosing a career in software development means entering a dynamic and constantly evolving industry. You get to build tangible products that can be used by millions of people, solving real-world problems and driving technological advancement. This profession is appealing because of:</p>
            <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Impact:</span> You have the power to create tools that can change industries and improve people's lives.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Continuous Learning:</span> Technology is always changing, which means you'll constantly be learning new skills and staying at the forefront of innovation.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Strong Demand:</span> Skilled software developers are in high demand across virtually every industry, leading to excellent job security and competitive salaries.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Flexible Work:</span> The nature of the work often allows for remote and flexible work arrangements.</span></li>
            </ul>
        </InfoCard>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Perspective & Scope 🚀">
            <p className="text-muted-foreground mb-4">The career path for a software developer is rich with opportunities for growth. Many start in junior roles, writing code and fixing bugs under supervision. As they gain experience, they can advance to senior, lead, or architect positions, where they design systems and mentor other developers. Specializations are abundant, allowing developers to focus on areas like AI/Machine Learning, Cybersecurity, Mobile Development, or Game Design.</p>
            <p className="text-muted-foreground font-semibold">The scope of work includes:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li><span className="font-semibold text-foreground/90">Front-End Development:</span> Building the user interface and experience of a website or app.</li>
                <li><span className="font-semibold text-foreground/90">Back-End Development:</span> Creating the server-side logic, databases, and APIs that power the application.</li>
                <li><span className="font-semibold text-foreground/90">Full-Stack Development:</span> Working on both the front-end and back-end of an application.</li>
                <li><span className="font-semibold text-foreground/90">DevOps & Infrastructure:</span> Managing the deployment, scaling, and reliability of software systems.</li>
            </ul>
        </InfoCard>

      </CardContent>
    </Card>
  );
}
