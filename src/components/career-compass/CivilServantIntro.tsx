
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, Shield, Briefcase, ArrowRight } from "lucide-react";
import InfoCard from "./InfoCard";


type CivilServantIntroProps = {
    onBack?: () => void;
    onProceed?: () => void;
};

export default function CivilServantIntro({ onBack, onProceed }: CivilServantIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Shield className="text-primary"/>A Career as a Civil Servant (India)</CardTitle>
        <CardDescription>An overview of becoming a civil servant in India through the UPSC exam.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">Becoming a civil servant in India is a highly sought-after career that offers a unique combination of prestige, public service, and job security. The primary entry point is the highly competitive UPSC Civil Services Examination (CSE).</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Perspective & Scope">
            <p className="text-muted-foreground mb-4">A career as a civil servant is diverse, covering everything from law and order (IPS) to policy formulation (IAS) and international relations (IFS). The career path is structured, with clear growth from junior roles like Sub-Divisional Magistrate to senior posts like Cabinet Secretary. Officers can also be deputed to various ministries and international organizations.</p>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Job Security & Prestige:</span> Unmatched job security and high social respect.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Opportunity for Impact:</span> Directly contribute to public welfare and national development.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Diverse Roles:</span> Wide variety of roles and responsibilities across different sectors.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Intense Competition:</span> Extremely competitive entrance exam with a very low success rate.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Political Pressure:</span> Navigating bureaucracy and political interference can be challenging.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Frequent Transfers:</span> Can lead to personal and family life disruptions.</span></li>
                </ul>
            </InfoCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost">
                <p className="text-muted-foreground">Exam fees are minimal (around ₹100). The major cost is coaching, which can range from ₹50,000 to over ₹2 lakh per year. Living expenses in coaching hubs are additional.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Invest">
                <p className="text-muted-foreground">Requires a bachelor's degree (3-4 years). Preparation for the UPSC exam is intensive and can take 1-3 years of dedicated study, with many attempting it multiple times.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<Briefcase className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Analytical & Problem-Solving Skills:</span> Ability to analyze complex issues and devise effective solutions.</li>
                <li><span className="font-semibold text-foreground/90">Leadership & Decision-Making:</span> Capacity to lead teams and make informed decisions under pressure.</li>
                <li><span className="font-semibold text-foreground/90">Integrity & Ethics:</span> Strong moral compass and commitment to ethical conduct.</li>
                <li><span className="font-semibold text-foreground/90">Empathy & Communication:</span> Genuine desire to serve the public and communicate effectively with diverse groups.</li>
                <li><span className="font-semibold text-foreground/90">Resilience:</span> Ability to handle stressful situations and political pressure.</li>
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
