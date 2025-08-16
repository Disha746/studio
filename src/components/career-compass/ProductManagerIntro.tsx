"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle, XCircle, Rocket, DollarSign, Clock, Wrench } from "lucide-react";

type ProductManagerIntroProps = {
    onBack?: () => void;
    onProceed?: () => void;
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

export default function ProductManagerIntro({ onBack, onProceed }: ProductManagerIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Briefcase className="text-primary"/>A Career in Product Management (India)</CardTitle>
        <CardDescription>An overview of what it means to be a Product Manager in the Indian context.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">Product management in India's booming digital economy is a highly sought-after and strategic role. Product managers are key drivers of innovation and growth, responsible for understanding the unique needs of the Indian consumer, developing products that solve real-world problems, and steering these products from conception to launch and beyond.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope 📈">
            <p className="text-muted-foreground mb-4">The career progression is similar to the global model, with roles from Associate Product Manager to CPO. In India, many professionals transition from fields like engineering, business analysis, and project management. The most lucrative opportunities are often found in high-growth sectors like e-commerce, fintech, and SaaS.</p>
        </InfoCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Demand & Salaries:</span> Competitive salaries and attractive compensation packages.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Central to Digital Transformation:</span> Shape products that impact millions of users.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Diverse Opportunities:</span> High demand in SaaS, FinTech, healthcare, ed-tech, and more.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Clear Career Growth:</span> Well-defined path to senior and leadership roles.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages & Challenges">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Competition:</span> Intense competition, especially for entry-level roles.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Demanding Hours:</span> Fast-paced startup culture can lead to long hours.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Diverse User Base:</span> Must build products for vast linguistic and cultural diversity.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Price Sensitivity:</span> The Indian market is highly competitive and price-sensitive.</span></li>
                </ul>
            </InfoCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost">
                <p className="text-muted-foreground">MBA programs from top B-schools can cost ₹20-30 lakhs. Bootcamps and certifications are a more affordable option, ranging from ₹50,000 to over ₹3 lakhs.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Invest">
                 <p className="text-muted-foreground">Transitioning usually requires 2-3 years of work experience. For freshers, an Associate PM role from campus placement is a strong start. An MBA takes about 2 years.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<Wrench className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Data Analysis:</span> Crucial to understand user behavior and make informed decisions.</li>
                <li><span className="font-semibold text-foreground/90">User Empathy:</span> High level of empathy to understand local contexts and cultural nuances.</li>
                <li><span className="font-semibold text-foreground/90">Strategic and Business Acumen:</span> Understand market trends, competition, and business models.</li>
                <li><span className="font-semibold text-foreground/90">Technical Understanding:</span> Be able to communicate effectively with engineering teams.</li>
                <li><span className="font-semibold text-foreground/90">Leadership and Communication:</span> Ability to influence without authority in a cross-functional team.</li>
            </ul>
        </InfoCard>

      </CardContent>
       {onProceed && (
        <CardFooter>
            <Button onClick={onProceed} className="w-full">
                See My Suggestions
                <ArrowRight />
            </Button>
        </CardFooter>
      )}
    </Card>
  );
}
