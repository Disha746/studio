
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle, Rocket, DollarSign, Clock, BookOpen, Lightbulb } from "lucide-react";
import InfoCard from "./InfoCard";


type EdTechSpecialistIntroProps = {
    onBack?: () => void;
};

export default function EdTechSpecialistIntro({ onBack }: EdTechSpecialistIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Lightbulb className="text-primary"/>A Career as an EdTech Specialist</CardTitle>
        <CardDescription>An overview of becoming an Educational Technology Specialist.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">Educational Technology Specialists bridge the gap between learning and technology. They design, implement, and support the use of digital tools to enhance teaching and learning experiences. They play a vital role in making education more engaging, accessible, and effective in the digital age.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope & Roles">
            <p className="text-muted-foreground mb-4">The scope is broad and growing. EdTech Specialists work in schools, districts, higher education, or for EdTech companies. Key roles include:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li><span className="font-semibold text-foreground/90">Instructional Designer:</span> Creating digital learning materials and online courses.</li>
                <li><span className="font-semibold text-foreground/90">Teacher Trainer:</span> Leading professional development on using technology effectively.</li>
                <li><span className="font-semibold text-foreground/90">LMS Administrator:</span> Managing systems like Google Classroom, Canvas, or Moodle.</li>
                <li><span className="font-semibold text-foreground/90">Technology Integrator:</span> Assisting teachers in using specific software and tools in the classroom.</li>
                <li><span className="font-semibold text-foreground/90">EdTech Consultant:</span> Advising schools on technology strategy and implementation.</li>
            </ul>
        </InfoCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Impact:</span> Directly influence how students learn and teachers teach.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Innovative Field:</span> Work with cutting-edge technology and learning solutions.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Growing Demand:</span> High need for tech-savvy educators in all sectors.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Versatile Skills:</span> Skills are transferable across different educational institutions.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Rapidly Evolving:</span> Requires constant learning and adapting to new technologies.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Resistance to Change:</span> May face pushback from institutions slow to adopt new tech.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Technical Demands:</span> Often involves complex troubleshooting and support.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Potential Burnout:</span> The fast-paced environment can be demanding.</span></li>
                </ul>
            </InfoCard>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost of Education">
                <p className="text-muted-foreground">Costs are primarily for Bachelor's and often a Master's degree. Certifications in specific platforms are an additional, smaller cost.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Invest">
                <p className="text-muted-foreground">A Bachelor's degree (4 years) is the start. A Master's degree (1-2 years) is often preferred. Practical experience is also key.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<BookOpen className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Instructional Design:</span> Understanding of learning theories and how to design effective digital curriculum.</li>
                <li><span className="font-semibold text-foreground/90">Technical Proficiency:</span> Strong knowledge of learning management systems, software, and hardware.</li>
                <li><span className="font-semibold text-foreground/90">Communication & Training:</span> Ability to clearly explain complex technology to non-technical users.</li>
                <li><span className="font-semibold text-foreground/90">Problem-Solving:</span> Excellent analytical and troubleshooting skills.</li>
                <li><span className="font-semibold text-foreground/90">Collaboration:</span> Ability to work effectively with teachers, students, and administrators.</li>
            </ul>
        </InfoCard>
      </CardContent>
    </Card>
  );
}
