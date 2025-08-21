
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, BookOpen, Tv } from "lucide-react";
import InfoCard from "./InfoCard";


type MediaAndMassCommIntroProps = {
    onBack?: () => void;
};

export default function MediaAndMassCommIntro({ onBack }: MediaAndMassCommIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Tv className="text-primary"/>A Career in Media & Mass Communication</CardTitle>
        <CardDescription>An overview of the media industry in India.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">A career in media and mass communication in India offers a diverse range of opportunities due to the country's growing media landscape. The field is dynamic, with traditional media like print and television coexisting with the rapid expansion of digital platforms.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope & Paths">
            <p className="text-muted-foreground mb-4">The scope of a media and mass communication career is extensive and includes:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><span className="font-semibold text-foreground/90">Journalism:</span> Reporter, editor, or content writer for newspapers, magazines, and digital news portals.</li>
                <li><span className="font-semibold text-foreground/90">Broadcasting:</span> Roles like news anchor, radio jockey (RJ), producer, and scriptwriter in radio and television.</li>
                <li><span className="font-semibold text-foreground/90">Advertising & PR:</span> Brand management roles like copywriter, PR executive, and social media strategist.</li>
                <li><span className="font-semibold text-foreground/90">Digital Media:</span> Social media manager, digital marketer, and content creator for online platforms.</li>
                <li><span className="font-semibold text-foreground/90">Film & Entertainment:</span> Roles like filmmaker, director, screenwriter, and video editor.</li>
            </ul>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Creative Expression:</span> Offers a platform to express creativity and tell compelling stories.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Influence & Impact:</span> Opportunity to inform public opinion and bring about social change.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Dynamic Environment:</span> Fast-paced and ever-evolving, ensuring work is never dull.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Irregular Hours:</span> Work schedules can be unpredictable and demanding, especially in news.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Pressure:</span> Tight deadlines and the need for accuracy can be stressful.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Initial Low Pay:</span> Entry-level salaries can be low compared to other industries.</span></li>
                </ul>
            </InfoCard>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost">
                <p className="text-muted-foreground">A Bachelor's degree (B.A. or B.Sc) in Mass Communication can cost between ₹50,000 to ₹5 lakh, depending on the college.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Invest">
                <p className="text-muted-foreground">A bachelor's degree takes 3 years. Building a strong portfolio and network can take an additional 1-2 years before landing a stable role.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<BookOpen className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Communication Skills:</span> Strong written, verbal, and presentation abilities.</li>
                <li><span className="font-semibold text-foreground/90">Creativity & Storytelling:</span> Ability to craft compelling narratives.</li>
                <li><span className="font-semibold text-foreground/90">Digital Literacy:</span> Proficiency in social media, content management systems, and basic editing software.</li>
                <li><span className="font-semibold text-foreground/90">Research & Analytical Skills:</span> Ability to verify facts and analyze information critically.</li>
                <li><span className="font-semibold text-foreground/90">Adaptability:</span> Must be able to work under pressure and adapt to new technologies.</li>
            </ul>
        </InfoCard>
      </CardContent>
    </Card>
  );
}

    