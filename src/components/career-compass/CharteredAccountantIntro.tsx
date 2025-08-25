
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import InfoCard from "./InfoCard";


type CharteredAccountantIntroProps = {
    onBack?: () => void;
    onProceed?: () => void;
};

export default function CharteredAccountantIntro({ onBack, onProceed }: CharteredAccountantIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><BookOpen className="text-primary"/>A Career as a Chartered Accountant (CA)</CardTitle>
        <CardDescription>An overview of becoming a CA in India.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">Becoming a Chartered Accountant (CA) in India is a highly respected and challenging career path. The profession, governed by the Institute of Chartered Accountants of India (ICAI), offers significant career opportunities and financial rewards. However, it also requires immense dedication and a long-term commitment.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Perspective & Scope">
            <p className="text-muted-foreground mb-4">The career scope for a CA in India is vast and multifaceted. After completing the course, a CA can choose to either start their own practice or join a company in various roles. CAs are in high demand across multiple sectors, including banking, finance, auditing, taxation, and consulting.</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><span className="font-semibold text-foreground/90">Auditing and Assurance:</span> Legally authorized to audit financial statements.</li>
                <li><span className="font-semibold text-foreground/90">Taxation:</span> Experts for tax planning and compliance (direct and indirect tax).</li>
                <li><span className="font-semibold text-foreground/90">Financial Reporting and Management:</span> Senior roles like CFO, Financial Controller.</li>
                <li><span className="font-semibold text-foreground/90">Forensic Accounting:</span> Investigating financial fraud and discrepancies.</li>
                <li><span className="font-semibold text-foreground/90">Advisory and Consulting:</span> Advice on financial matters, mergers, and business strategies.</li>
                <li><span className="font-semibold text-foreground/90">Entrepreneurship:</span> Starting their own firms.</li>
            </ul>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Demand & Job Security:</span> Essential for every business, ensuring consistent demand.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Lucrative Salary:</span> Starting salary typically ₹7-₹8 lakh p.a. with high growth potential.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Professional Prestige:</span> Highly respected qualification.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Diverse & Global Opportunities:</span> Qualification opens doors to various roles and is recognized internationally.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Rigorous Course:</span> Notoriously difficult exams with low pass rates.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Long Training Period:</span> Demanding three-year articleship with long hours.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Continuous Learning:</span> Must constantly update knowledge on changing laws.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Responsibility & Stress:</span> Responsible for financial accuracy and compliance.</span></li>
                </ul>
            </InfoCard>
        </div>

        <InfoCard icon={<Briefcase className="w-5 h-5 text-accent"/>} title="Cost & Duration">
            <p className="text-muted-foreground">The CA course in India is known for being relatively affordable compared to other professional courses like an MBA. The total cost, including ICAI registration fees, examination fees, and articleship fees, is</p>
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
