
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, BookOpen, Sparkles } from "lucide-react";
import InfoCard from "./InfoCard";


type AstrologerIntroProps = {
    onBack?: () => void;
};

export default function AstrologerIntro({ onBack }: AstrologerIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Sparkles className="text-primary"/>A Career in Astrology (Indian Perspective)</CardTitle>
        <CardDescription>An overview of becoming an Astrologer in India.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">Astrology, or Jyotish, has been an integral part of Indian culture for centuries. While it is considered a pseudoscience by the scientific community, it remains a popular field in India, with many people seeking guidance on various aspects of life. A career in astrology can be a fulfilling and financially rewarding path for those with a deep passion for the subject.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope & Job Roles">
            <p className="text-muted-foreground mb-4">The scope for a career in astrology in India is diverse and expanding with digital platforms. Potential job roles include:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><span className="font-semibold text-foreground/90">Professional Astrologer/Jyotishi:</span> Providing personalized consultations to clients.</li>
                <li><span className="font-semibold text-foreground/90">Numerologist, Palmist, Tarot Card Reader:</span> Specializing in related divination fields.</li>
                <li><span className="font-semibold text-foreground/90">Astrology Writer/Content Creator:</span> Writing horoscopes for magazines, websites, or blogs.</li>
                <li><span className="font-semibold text-foreground/90">Corporate Consultant:</span> Offering guidance for strategic business decisions.</li>
                <li><span className="font-semibold text-foreground/90">Teacher/Trainer:</span> Teaching astrology at institutes or through private workshops.</li>
                <li><span className="font-semibold text-foreground/90">Online Astrologer:</span> Offering services through websites or dedicated apps.</li>
            </ul>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Flexibility & Independence:</span> Work as a freelancer with flexible hours.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Rewarding Work:</span> Help people navigate life's challenges and gain self-understanding.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Growing Demand:</span> The demand for astrological services, especially online, is on the rise.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Continuous Learning:</span> The field is vast and requires continuous study, keeping work stimulating.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Lack of Regulation:</span> The field is largely unregulated, leading to a lack of universal standards.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Skepticism and Scrutiny:</span> Face skepticism from the scientific community and the general public.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Inconsistent Income:</span> Income can be unpredictable, especially in the early stages of a career.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Emotional Toll:</span> Dealing with clients' personal problems and anxieties can be emotionally draining.</span></li>
                </ul>
            </InfoCard>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost of Education">
                <p className="text-muted-foreground">Formal university courses can cost from ₹10k to ₹50k. Private institute certificate courses can range from ₹20k to over ₹1 lakh.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Invest">
                <p className="text-muted-foreground">Mastering the fundamentals can take 2-3 years of dedicated study. Building a reputation and client base can take several more years.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<BookOpen className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Deep Subject Knowledge:</span> Strong understanding of astrological principles, planetary positions, and chart interpretation.</li>
                <li><span className="font-semibold text-foreground/90">Intuition & Analytical Skills:</span> Ability to blend intuitive insights with systematic analysis of complex charts.</li>
                <li><span className="font-semibold text-foreground/90">Communication & Empathy:</span> Excellent ability to communicate complex concepts clearly and compassionately.</li>
                <li><span className="font-semibold text-foreground/90">Ethical Conduct:</span> High degree of integrity and a commitment to providing responsible guidance.</li>
                <li><span className="font-semibold text-foreground/90">Patience & Listening Skills:</span> Ability to listen carefully to clients' concerns and patiently explain astrological insights.</li>
            </ul>
        </InfoCard>
      </CardContent>
    </Card>
  );
}

    