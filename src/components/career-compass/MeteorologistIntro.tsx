
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, BookOpen, CloudSun, GraduationCap, Map, Microscope, Compass } from "lucide-react";
import InfoCard from "./InfoCard";


type MeteorologistIntroProps = {
    onBack?: () => void;
};

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
                <li><span className="font-semibold text-foreground/90">Weather Forecaster:</span> Analyzing data to predict weather for public sectors like aviation, agriculture, AIR, and Doordarshan. Private companies like Skymet also hire.</li>
                <li><span className="font-semibold text-foreground/90">Climate Scientist / Researcher:</span> Studying climate change, pollution, and atmospheric phenomena at organizations like IITM Pune, TERI, IISc, ISRO, DRDO, CSIR, and IITs.</li>
                 <li><span className="font-semibold text-foreground/90">Aviation Meteorologist:</span> Specialized roles at the Airports Authority of India (AAI) and various airlines.</li>
                <li><span className="font-semibold text-foreground/90">Academia:</span> Teaching and conducting research at universities and colleges.</li>
                <li><span className="font-semibold text-foreground/90">Environmental Consultant / Disaster Risk Analyst:</span> Working with private firms or NGOs on climate-related projects.</li>
            </ul>
        </InfoCard>

        <InfoCard icon={<Map className="w-5 h-5 text-accent"/>} title="Roadmap to Become a Meteorologist in India">
            <div className="space-y-4 text-muted-foreground">
                <div>
                    <h4 className="font-semibold text-foreground/90">Step 1: Foundation (Class 11–12)</h4>
                    <p>Take the Science stream with Physics & Mathematics (mandatory). Geography is also helpful.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground/90">Step 2: Bachelor’s Degree (3–4 years)</h4>
                    <p>Options include B.Sc. in Meteorology, Atmospheric Science, or Geography (with Climatology), or a B.Tech in Atmospheric Science.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground/90">Step 3: Master’s Degree (2 years)</h4>
                    <p>An M.Sc. in Meteorology, Atmospheric Science, Oceanography, or Climate Science is required for most serious jobs.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground/90">Step 4: Competitive Exams & Entry</h4>
                    <p>Appear for exams for the IMD. Research roles are available through ISRO, DRDO, CSIR, and IITM Pune.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground/90">Step 5: Advanced Research (Optional)</h4>
                    <p>A Ph.D. is needed for high-level research, academic, and policy roles, focusing on areas like AI in weather prediction.</p>
                </div>
            </div>
        </InfoCard>

        <InfoCard icon={<GraduationCap className="w-5 h-5 text-accent"/>} title="Good Colleges in India">
            <div className="space-y-3 text-muted-foreground">
                <div>
                    <h4 className="font-semibold text-foreground/90">Top Tier (Govt. & Research)</h4>
                    <p>Indian Institute of Tropical Meteorology (IITM) Pune, IISc Bangalore, IITs (Delhi, Kharagpur, Bhubaneswar), Andhra University, and BHU.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground/90">Other Notable Universities</h4>
                    <p>Cochin University of Science and Technology (CUSAT), University of Calcutta, Osmania University, and Anna University.</p>
                </div>
                 <div className="p-3 bg-primary/10 rounded-lg mt-2">
                    <p className="font-semibold text-primary-foreground/90">Example Path:</p>
                    <p className="text-sm text-primary-foreground/80">If strong in Physics + Maths → B.Sc. Meteorology at Andhra University → M.Sc. at IITM Pune → IMD/ISRO career.</p>
                 </div>
            </div>
        </InfoCard>

        <InfoCard icon={<Compass className="w-5 h-5 text-accent"/>} title="Ways to Explore Meteorology">
             <div className="space-y-4 text-muted-foreground">
                <div>
                    <h4 className="font-semibold text-foreground/90">🌱 Early Exploration (Class 9–12)</h4>
                    <p>Follow weather apps (IMD, Windy), read books on weather, and do school projects on climate topics.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground/90">🎓 College Exploration (Bachelor’s)</h4>
                    <p>Take electives in Atmospheric Science or Remote Sensing, join science clubs, and do mini-projects using open weather APIs.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground/90">🔬 Hands-On Exposure (Internships)</h4>
                    <p>Seek summer training at IMD or internships at IITM Pune/ISRO. Take online courses on NPTEL or Coursera.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground/90">🚀 Advanced Exploration (Masters/Research)</h4>
                    <p>Work on climate models using Python/MATLAB, join research projects, and attend conferences by the Indian Meteorological Society.</p>
                </div>
                 <div>
                    <h4 className="font-semibold text-foreground/90">🌍 Beyond Academics</h4>
                    <p>Volunteer with environmental NGOs, explore private weather companies (e.g., Skymet), and follow global organizations like the WMO.</p>
                </div>
            </div>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Public Service:</span> Directly contribute to public safety through accurate weather warnings.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Intellectually Stimulating:</span> The work is challenging and involves solving complex scientific problems.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Job Security:</span> Government jobs, particularly with the IMD, offer high job security.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High-Pressure Environment:</span> Can be very stressful, especially during severe weather events where forecasts have life-or-death implications.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Irregular Hours:</span> Weather is a 24/7 phenomenon, so shift work, including nights and weekends, is common.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Limited Private Sector Jobs:</span> While growing, job opportunities outside of government and research are still limited in India.</span></li>
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
                <li><span className="font-semibold text-foreground/90">Computer Expertise:</span> Proficiency in programming (Python) and data modeling for forecasting.</li>
                <li><span className="font-semibold text-foreground/90">Communication Skills:</span> Ability to clearly communicate complex weather information to the public.</li>
                <li><span className="font-semibold text-foreground/90">Attention to Detail:</span> Precision is vital for accurate forecasting and research.</li>
            </ul>
        </InfoCard>
      </CardContent>
    </Card>
  );
}

    