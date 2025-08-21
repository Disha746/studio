
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, BookOpen, Scale } from "lucide-react";
import InfoCard from "./InfoCard";


type LawyerIntroProps = {
    onBack?: () => void;
};

export default function LawyerIntro({ onBack }: LawyerIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Scale className="text-primary"/>A Career in Law (India)</CardTitle>
        <CardDescription>An overview of becoming a lawyer in India.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">A career in law in India offers a diverse and evolving landscape with numerous opportunities. It's a challenging but rewarding path that requires a specific set of skills and a significant commitment to education.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope & Paths">
            <p className="text-muted-foreground mb-4">The scope of a law career in India is expanding beyond traditional courtroom practice. Here are some of the key career paths:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><span className="font-semibold text-foreground/90">Advocacy/Litigation:</span> Representing clients in courts of law (civil or criminal).</li>
                <li><span className="font-semibold text-foreground/90">Corporate Law:</span> Working as an in-house counsel for companies, advising on contracts, mergers, and compliance.</li>
                <li><span className="font-semibold text-foreground/90">Judicial Services:</span> Becoming a judge by clearing judicial service examinations.</li>
                <li><span className="font-semibold text-foreground/90">Legal Academia:</span> A career in teaching and research at universities and law schools.</li>
                <li><span className="font-semibold text-foreground/90">Legal Process Outsourcing (LPO):</span> Providing legal services to foreign clients and law firms.</li>
            </ul>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Diverse Opportunities:</span> A law degree opens doors to numerous fields beyond traditional litigation.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Intellectual Challenge:</span> The work is intellectually stimulating, requiring sharp analytical and reasoning skills.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Social Impact:</span> Lawyers can play a crucial role in upholding justice and fighting for social causes.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Long Gestation Period:</span> It can take many years to establish a successful practice and reputation.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Stress:</span> The profession is adversarial and demanding, with high stakes and long hours.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Initial Financial Struggle:</span> New entrants, especially in litigation, may face financial instability at the start.</span></li>
                </ul>
            </InfoCard>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost of Education">
                <p className="text-muted-foreground">Varies greatly. Government colleges can cost ₹10k - ₹12 lakh for the full course, while private universities can be ₹2 lakh - ₹10 lakh per year.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Invest">
                <p className="text-muted-foreground">5 years for an integrated LLB after 12th, or 3 years for an LLB after graduation. Clearing the Bar exam is also required to practice.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<BookOpen className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Analytical & Logical Reasoning:</span> Ability to analyze complex information and form strong arguments.</li>
                <li><span className="font-semibold text-foreground/90">Research Skills:</span> Proficiency in researching case laws, statutes, and legal precedents.</li>
                <li><span className="font-semibold text-foreground/90">Communication & Oratory Skills:</span> Excellent command over language and persuasive speaking abilities.</li>
                <li><span className="font-semibold text-foreground/90">Attention to Detail:</span> Meticulousness is key for drafting legal documents and reviewing evidence.</li>
                <li><span className="font-semibold text-foreground/90">Integrity:</span> A strong ethical compass is non-negotiable in the legal profession.</li>
            </ul>
        </InfoCard>
      </CardContent>
    </Card>
  );
}

    