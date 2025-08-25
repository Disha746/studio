
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Clock, DollarSign, Dumbbell, Rocket, Trophy, XCircle, ArrowRight } from "lucide-react";
import InfoCard from "./InfoCard";

type AthleteIntroProps = {
    onBack?: () => void;
    onProceed?: () => void;
};

export default function AthleteIntro({ onBack, onProceed }: AthleteIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Trophy className="text-primary"/>A Career as a Pro Athlete</CardTitle>
        <CardDescription>An overview of being a professional sports athlete in India.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">A career as a professional sports athlete in India is highly competitive and demanding. While it can offer great rewards, it requires immense dedication, physical and mental toughness, and a long-term commitment.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope & Path">
            <p className="text-muted-foreground mb-4">The scope is growing, driven by pro leagues (IPL, PKL, ISL), but opportunities are concentrated in popular sports. The path begins young, moving through local to national competitions to get noticed. A pro career is often short, with retirement in the 30s leading to roles like coaching, management, or commentary.</p>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Fame & Recognition:</span> Successful athletes become national heroes.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Financial Rewards:</span> Top athletes earn substantial incomes.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Personal Growth:</span> Builds discipline, resilience, and teamwork.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Global Exposure:</span> Opportunity to represent India internationally.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Competition:</span> Extremely low success rate.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Financial Instability:</span> Majority struggle financially; income is not stable.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Risk of Injury:</span> High risk of career-ending injuries.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Short Career Span:</span> A "Plan B" is crucial for post-retirement.</span></li>
                </ul>
            </InfoCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost">
                <p className="text-muted-foreground">Costs vary dramatically. Sports like tennis or golf are very expensive due to equipment, coaching, and travel. A Bachelor's in Physical Education can cost ₹10k to ₹20 lakh.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Succeed">
                 <p className="text-muted-foreground">It can take 10-15 years or more of focused training and competition to reach a professional level, often starting from a very young age (4-5 years old).</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<Dumbbell className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Physical Skills:</span> Peak physical fitness (endurance, strength, speed), agility, and excellent hand-eye coordination.</li>
                <li><span className="font-semibold text-foreground/90">Mental Skills:</span> Mental toughness, ability to handle extreme pressure, and resilience to recover from setbacks.</li>
                <li><span className="font-semibold text-foreground/90">Strategic Skills:</span> Ability to think tactically, understand game strategy, and adapt to opponents.</li>
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
