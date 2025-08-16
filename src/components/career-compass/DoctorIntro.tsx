"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Stethoscope, CheckCircle, XCircle, Rocket, DollarSign, Clock, Wrench, ArrowRight } from "lucide-react";

type DoctorIntroProps = {
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

export default function DoctorIntro({ onBack }: DoctorIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Stethoscope className="text-primary"/>A Career as a Doctor</CardTitle>
        <CardDescription>An overview of what it means to be a Doctor.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">Becoming a doctor is a highly respected and challenging career with a diverse range of opportunities. It requires a significant commitment to education and training. The journey to becoming a doctor is a multi-stage process that typically spans over a decade. In India, the first step is to complete a Bachelor of Medicine, Bachelor of Surgery (MBBS) degree.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope 📈">
            <p className="text-muted-foreground mb-4">The scope for a doctor extends far beyond traditional clinical practice. While patient care is a primary role, doctors can also pursue careers in:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li><span className="font-semibold text-foreground/90">Clinical Practice:</span> Working as a general physician or a specialist in hospitals, clinics, or private practice.</li>
                <li><span className="font-semibold text-foreground/90">Medical Research:</span> Conducting research to develop new treatments, drugs, and medical technologies.</li>
                <li><span className="font-semibold text-foreground/90">Hospital Administration:</span> Managing the business and operational aspects of healthcare facilities.</li>
                <li><span className="font-semibold text-foreground/90">Public Health:</span> Working with government agencies or NGOs to promote community health and prevent disease outbreaks.</li>
                <li><span className="font-semibold text-foreground/90">Academics:</span> Teaching and training the next generation of medical professionals in medical colleges.</li>
                <li><span className="font-semibold text-foreground/90">Telemedicine:</span> Providing online consultations and medical advice.</li>
            </ul>
        </InfoCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Job Security and Stability:</span> There is a constant and growing demand for healthcare professionals globally.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Earning Potential:</span> Doctors have the potential to earn a very high salary, especially with specialization.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Prestige and Respect:</span> The medical profession is highly regarded and brings immense social respect.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Personal Fulfillment:</span> The ability to save lives and make a tangible, positive impact on people's health and well-being is deeply rewarding.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Extensive Education and High Costs:</span> The path to becoming a doctor is long, expensive, and demanding.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Demanding Work Hours:</span> Doctors often work long, unpredictable hours and may be on call, leading to a challenging work-life balance.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Emotional and Mental Toll:</span> Dealing with illness, suffering, and death on a regular basis can be emotionally draining and lead to burnout.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Responsibility and Legal Risks:</span> Doctors are responsible for human lives, and the high-stakes nature of the job comes with the risk of medical malpractice lawsuits.</span></li>
                </ul>
            </InfoCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost">
                <p className="text-muted-foreground">The cost of an MBBS degree varies significantly. Government Colleges: ₹10,000 - ₹50,000 per year. Private Colleges: ₹3 Lakh - ₹25 Lakh per year.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Become">
                 <p className="text-muted-foreground">The MBBS program is 5.5 years long (4.5 years of academic study and a one-year internship). A postgraduate degree (MD or MS) adds another 3-5 years.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<Wrench className="w-5 h-5 text-accent"/>} title="Required Skills">
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><span className="font-semibold text-foreground/90">Strong Communication Skills:</span> Ability to communicate clearly and empathetically with patients and colleagues.</li>
                <li><span className="font-semibold text-foreground/90">Problem-Solving & Decision-Making:</span> Think critically and make quick, accurate decisions under pressure.</li>
                <li><span className="font-semibold text-foreground/90">Empathy and Compassion:</span> Understand and respond to the emotional needs of patients.</li>
                <li><span className="font-semibold text-foreground/90">Teamwork:</span> Collaborate effectively with nurses, technicians, and other specialists.</li>
                <li><span className="font-semibold text-foreground/90">Attention to Detail:</span> Meticulousness is vital for accurate diagnosis and treatment.</li>
                <li><span className="font-semibold text-foreground/90">Resilience & Time Management:</span> Handle long hours, high stress, and emotionally taxing situations.</li>
            </ul>
        </InfoCard>

      </CardContent>
    </Card>
  );
}
