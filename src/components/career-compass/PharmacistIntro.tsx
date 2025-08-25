
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, BookOpen, Pill, ArrowRight } from "lucide-react";
import InfoCard from "./InfoCard";

type PharmacistIntroProps = {
    onBack?: () => void;
    onProceed?: () => void;
};

export default function PharmacistIntro({ onBack, onProceed }: PharmacistIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Pill className="text-primary"/>A Career in Pharmacy</CardTitle>
        <CardDescription>An overview of becoming a Pharmacist in India.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">Pharmacy is a healthcare profession focused on the safe and effective use of medicines. Pharmacists are medication experts who dispense drugs, advise patients and other healthcare professionals on medication usage, and ensure the correct dosage and prevention of harmful drug interactions.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope & Roles">
            <p className="text-muted-foreground mb-4">The scope of pharmacy extends far beyond just dispensing medications. Pharmacists can specialize and work in various sectors:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><span className="font-semibold text-foreground/90">Community Pharmacy:</span> Working in a retail setting, interacting directly with patients.</li>
                <li><span className="font-semibold text-foreground/90">Hospital Pharmacy:</span> Collaborating with doctors and nurses to manage medication for inpatients.</li>
                <li><span className="font-semibold text-foreground/90">Industrial Pharmacy:</span> Roles in R&D, manufacturing, quality control, and marketing.</li>
                <li><span className="font-semibold text-foreground/90">Regulatory Affairs:</span> Ensuring products comply with government regulations.</li>
                <li><span className="font-semibold text-foreground/90">Clinical Research:</span> Conducting and overseeing clinical trials for new drugs.</li>
                <li><span className="font-semibold text-foreground/90">Academics:</span> Teaching and conducting research at pharmacy colleges.</li>
                <li><span className="font-semibold text-foreground/90">Drug Inspector:</span> A government role ensuring the safety and quality of drugs.</li>
            </ul>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Demand:</span> A stable career path in the growing healthcare sector.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Good Earning Potential:</span> Pharmacists have good salaries with growth opportunities.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Respected Profession:</span> Essential and trusted members of the healthcare team.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Diverse Career Paths:</span> A wide range of specializations and work environments.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Long Hours & High Stress:</span> Retail and hospital roles can be fast-paced and demanding.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Responsibility:</span> Directly responsible for patient safety, requiring meticulous attention to detail.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Continuing Education:</span> Must complete ongoing education to stay current.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Physical Demands:</span> Often requires standing for long periods.</span></li>
                </ul>
            </InfoCard>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost of Education">
                <p className="text-muted-foreground">B.Pharm fees can range from ₹50,000 to ₹2,00,000 annually. D.Pharm is generally less, from ₹10,000 to ₹1,00,000 annually. Pharm.D is higher, from ₹1,00,000 to ₹3,00,000+ per year.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Invest">
                <p className="text-muted-foreground">A D.Pharm is a 2-year diploma. A B.Pharm is a 4-year degree. A Pharm.D is a 6-year professional doctorate program.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<BookOpen className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Attention to Detail:</span> Crucial for accurately dispensing medications and preventing errors.</li>
                <li><span className="font-semibold text-foreground/90">Scientific Aptitude:</span> Strong foundation in chemistry and biology.</li>
                <li><span className="font-semibold text-foreground/90">Communication & Interpersonal Skills:</span> Essential for advising patients and collaborating with other healthcare professionals.</li>
                <li><span className="font-semibold text-foreground/90">Integrity & Ethics:</span> High ethical standards are paramount when dealing with patient health.</li>
                <li><span className="font-semibold text-foreground/90">Analytical Skills:</span> Ability to assess drug interactions and patient needs.</li>
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
