
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Video, CheckCircle, XCircle, Rocket, DollarSign, Clock, Wrench } from "lucide-react";

type ContentCreatorIntroProps = {
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

export default function ContentCreatorIntro({ onBack, onProceed }: ContentCreatorIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Video className="text-primary"/>A Career in Content Creation</CardTitle>
        <CardDescription>An overview of what it means to be a Content Creator.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">Content creation has evolved from a hobby to a viable and dynamic career path. It involves producing various forms of media, such as videos, articles, podcasts, and social media posts, to entertain, inform, or engage an audience. The career offers significant opportunities but also comes with unique challenges.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope 📈">
            <p className="text-muted-foreground mb-4">The scope of a content creator career is broad and continues to expand. While many start as independent creators, there are many related career paths within this field.</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li><span className="font-semibold text-foreground/90">Independent Creator:</span> You build your own brand and monetize your content directly.</li>
                <li><span className="font-semibold text-foreground/90">In-House Creator:</span> You work for a company, creating content for their brand's marketing and communications.</li>
                <li><span className="font-semibold text-foreground/90">Related Career Paths:</span> This can lead to roles like a content manager, social media specialist, video editor, copywriter, or digital strategist.</li>
            </ul>
        </InfoCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Creative Freedom:</span> You have the autonomy to create content on topics you're passionate about.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Flexible Schedule:</span> You can work from anywhere and set your own hours.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Financial Potential:</span> The income can be scalable, with various revenue streams.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Community Building:</span> You can connect with a global audience and build a loyal community.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Inconsistent Income:</span> Especially at the beginning, your income can be unpredictable.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Workload:</span> Burnout is a real risk as you often manage everything yourself.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Lack of Job Security:</span> Success is tied to algorithms and audience trends, which can change.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Public Scrutiny:</span> Being in the public eye can expose you to criticism and negative comments.</span></li>
                </ul>
            </InfoCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost">
                <p className="text-muted-foreground">Initial costs can be very low. However, professional equipment can range from a few hundred to thousands of dollars.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Succeed">
                 <p className="text-muted-foreground">There's no set timeline. It can take several years of consistent, high-quality work to build a significant following and income.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<Wrench className="w-5 h-5 text-accent"/>} title="Required Skills">
            <h4 className="font-semibold text-foreground/90 mt-2">Creative Skills</h4>
            <ul className="list-disc list-inside text-muted-foreground mt-1 mb-3">
                <li>Strong storytelling, writing, graphic design, and video production/editing.</li>
            </ul>
             <h4 className="font-semibold text-foreground/90">Technical Skills</h4>
            <ul className="list-disc list-inside text-muted-foreground mt-1 mb-3">
                <li>Proficiency in CMS (e.g., WordPress), video/photo editing software, and SEO.</li>
            </ul>
             <h4 className="font-semibold text-foreground/90">Business Skills</h4>
            <ul className="list-disc list-inside text-muted-foreground mt-1">
                 <li>Audience analysis, marketing, data analysis, consistency, and time management.</li>
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
