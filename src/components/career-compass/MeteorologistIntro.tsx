
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, BookOpen, CloudSun } from "lucide-react";

type MeteorologistIntroProps = {
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

export default function MeteorologistIntro({ onBack }: MeteorologistIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><CloudSun className="text-primary"/>A Career in Meteorology (India)</CardTitle>
        <CardDescription>An overview of becoming a Meteorologist in India.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">In India, a career in meteorology offers a blend of scientific research and practical application, with a strong focus on public service and disaster management. The field is constantly evolving due to advancements in technology and the increasing global concern for climate change.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope & Job Roles">
            <p className="text-muted-foreground mb-4">The primary employer for meteorologists in India is the India Meteorological Department (IMD). Other opportunities exist in research institutions, academia, and the private sector.</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><span className="font-semibold text-foreground/90">Weather Forecasting:</span> Analyzing data to predict weather patterns for public and specific sectors like aviation and agriculture.</li>
                <li><span className="font-semibold text-foreground/90">Atmospheric Research:</span> Studying climate change, pollution, and atmospheric phenomena at organizations like ISRO and DRDO.</li>
                <li><span className="font-semibold text-foreground/90">Academia:</span> Teaching and conducting research at universities and colleges.</li>
                <li><span className="font-semibold text-foreground/90">Private Sector:</span> Working for renewable energy companies, weather forecasting services, and media outlets.</li>
            </ul>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Public Service:</span> Directly contribute to public safety through accurate weather warnings.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Intellectually Stimulating:</span> The work is challenging and involves solving complex scientific problems.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Job Security:</span> Government jobs, particularly with the IMD, offer high job security.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Contribute to Science:</span> Opportunity to be at the forefront of climate and atmospheric research.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High-Pressure Environment:</span> Can be very stressful, especially during severe weather events where forecasts have life-or-death implications.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Irregular Hours:</span> Weather is a 24/7 phenomenon, so shift work, including nights and weekends, is common.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Limited Private Sector Jobs:</span> While growing, job opportunities outside of government and research are still limited in India.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Location Constraints:</span> Jobs may be located in specific areas with weather stations or research centers.</span></li>
                </ul>
            </InfoCard>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost of Education">
                <p className="text-muted-foreground">For a B.Tech, fees can range from ₹1 lakh to ₹4 lakh. M.Sc. fees vary widely from ~₹5k in public universities to over ₹20 lakh in top private ones.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Invest">
                <p className="text-muted-foreground">A minimum of 5-6 years for a Master's degree. A Ph.D. for research roles can take an additional 3-5 years.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<BookOpen className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Strong Science Foundation:</span> Excellent knowledge of Physics, Chemistry, and advanced Mathematics.</li>
                <li><span className="font-semibold text-foreground/90">Analytical & Problem-Solving:</span> Ability to analyze complex data and solve weather-related problems.</li>
                <li><span className="font-semibold text-foreground/90">Computer Expertise:</span> Proficiency in programming and data modeling for forecasting.</li>
                <li><span className="font-semibold text-foreground/90">Communication Skills:</span> Ability to clearly communicate complex weather information to the public.</li>
                <li><span className="font-semibold text-foreground/90">Attention to Detail:</span> Precision is vital for accurate forecasting and research.</li>
            </ul>
        </InfoCard>
      </CardContent>
    </Card>
  );
}
