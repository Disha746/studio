"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Briefcase, CheckCircle, Rocket, Sparkles, ArrowRight } from "lucide-react";

type CareerIntroProps = {
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

export default function CareerIntro({ onBack }: CareerIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Briefcase className="text-primary"/>A Career in Interior Design</CardTitle>
        <CardDescription>An overview of what it means to be an Interior Designer or Spatial Planner.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">An interior designer focuses on enhancing the aesthetics and functionality of a space within a building, while a spatial planner is concerned with the efficient organization and arrangement of an interior space. The two fields often overlap, with spatial planning being a core component of interior design. Both careers offer rewarding opportunities for creative individuals who enjoy problem-solving and making an impact on the built environment.</p>
        </div>

        <InfoCard icon={<Sparkles className="w-5 h-5 text-accent"/>} title="Why Choose This Field? 🤔">
            <p className="text-muted-foreground mb-4">Choosing a career in interior design or spatial planning allows you to blend creativity with practicality. You can see your ideas come to life as you transform ordinary spaces into functional, beautiful, and personalized environments. These professions are appealing because of:</p>
            <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Creative expression:</span> You have the chance to use your artistic and imaginative skills to design unique spaces.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Job satisfaction:</span> There's a tangible sense of accomplishment when a project is complete and you see the positive impact your work has on a client's life or a company's productivity.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Growing demand:</span> As urbanization increases and people recognize the importance of well-designed spaces for homes, offices, and commercial establishments, the demand for skilled professionals is rising.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Diverse opportunities:</span> You can specialize in various areas, from residential or commercial design to set design for movies, hospitality, or healthcare.</span></li>
            </ul>
        </InfoCard>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Perspective & Scope 🚀">
            <p className="text-muted-foreground mb-4">The career path for an interior designer or spatial planner can be quite varied. Many begin by working for an established firm, such as an architectural or design consultancy, to gain experience. With time, many professionals choose to work on a freelance basis or start their own design firm. The job outlook for interior designers is positive, with a projected growth rate that is as fast as the average for all occupations.</p>
            <p className="text-muted-foreground font-semibold">The scope of work for these professionals includes:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li><span className="font-semibold text-foreground/90">Residential design:</span> Creating functional and aesthetic spaces for homes.</li>
                <li><span className="font-semibold text-foreground/90">Commercial design:</span> Designing layouts for offices, retail stores, restaurants, and hotels.</li>
                <li><span className="font-semibold text-foreground/90">Project management:</span> Overseeing projects from concept to completion, which includes managing budgets, coordinating with contractors, and sourcing materials.</li>
                <li><span className="font-semibold text-foreground/90">Consulting:</span> Providing expert advice on space utilization, color schemes, and furnishings.</li>
            </ul>
        </InfoCard>

      </CardContent>
    </Card>
  );
}
