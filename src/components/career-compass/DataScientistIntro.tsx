"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, BarChart, CheckCircle, XCircle, Rocket, DollarSign, Clock, Wrench } from "lucide-react";

type DataScientistIntroProps = {
    onBack?: () => void;
    onProceed?: () => void;
    showProceed?: boolean;
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

export default function DataScientistIntro({ onBack, onProceed, showProceed = false }: DataScientistIntroProps) {
  return (
    <Card>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><BarChart className="text-primary"/>A Career in Data Science</CardTitle>
        <CardDescription>An overview of what it means to be a Data Scientist.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">A career as a data scientist is a highly sought-after and rapidly growing profession that involves using algorithms, machine learning, and statistics to interpret vast amounts of data. This field is crucial for helping businesses make informed, data-driven decisions and solve complex real-world problems.</p>
        </div>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Scope 📈">
            <p className="text-muted-foreground">The demand for data scientists is strong and continues to grow across various industries, including finance, healthcare, e-commerce, and technology. The career path for a data scientist is often a clear progression. You might start as a Data Analyst or Junior Data Scientist, then advance to a Senior Data Scientist or Lead Data Scientist, and eventually, you can aim for a Chief Data Scientist or Director of Data Science role.</p>
        </InfoCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Demand and Salary:</span> Data science is consistently ranked among the highest-paying and most in-demand jobs globally.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Versatility:</span> The skills are applicable across diverse industries, offering a wide range of career opportunities and excellent job mobility.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Problem-Solving:</span> The work is intellectually stimulating, challenging, and directly impacts business outcomes and real-world issues.</span></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Continuous Learning:</span> The field is dynamic, providing opportunities for continuous learning and skill development in emerging technologies.</span></li>
                </ul>
            </InfoCard>
            <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                <ul className="list-none space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Expectations:</span> There's often pressure to deliver accurate, valuable insights and solutions, which can be stressful.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Data Quality Issues:</span> You may spend a significant amount of time on data cleaning and preparation, as data is often messy, incomplete, or unstructured.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Constant Learning:</span> The rapid evolution of technologies and methodologies requires constant effort to stay current with the latest tools and techniques.</span></li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Ethical Concerns:</span> You must be mindful of data privacy and the ethical implications of using data and algorithms, such as algorithmic bias.</span></li>
                </ul>
            </InfoCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Cost">
                <p className="text-muted-foreground">The cost of a formal degree can range widely. In India, a bachelor's program can cost between ₹3.25 lakh to ₹22 lakh, while a master's can range from ₹1 lakh to ₹5 lakh. Online courses and certifications are a more affordable option, with costs ranging from ₹5,000 to ₹2 lakh.</p>
            </InfoCard>
            <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Years to Become">
                 <p className="text-muted-foreground">A bachelor's degree typically takes 3-4 years, while a master's degree can take an additional 1-2 years. Shorter alternatives like online certification courses and bootcamps can take anywhere from a few months to a year.</p>
            </InfoCard>
        </div>
        
        <InfoCard icon={<Wrench className="w-5 h-5 text-accent"/>} title="Required Skills">
            <h4 className="font-semibold text-foreground/90 mt-2">Technical Skills</h4>
            <ul className="list-disc list-inside text-muted-foreground mt-1 mb-3">
                <li><span className="font-semibold text-foreground/90">Programming Languages:</span> Proficiency in Python and R is essential. You'll also need to know SQL for working with databases.</li>
                <li><span className="font-semibold text-foreground/90">Statistics and Mathematics:</span> A strong foundation in statistical concepts (e.g., probability, regression analysis) and mathematics (e.g., linear algebra) is crucial for developing and applying algorithms.</li>
                <li><span className="font-semibold text-foreground/90">Machine Learning and Deep Learning:</span> You must understand various machine learning algorithms, model building, and their practical application in solving problems.</li>
                <li><span className="font-semibold text-foreground/90">Data Wrangling:</span> The ability to clean, transform, and structure raw, messy data into a usable format.</li>
                <li><span className="font-semibold text-foreground/90">Data Visualization:</span> The skill to effectively communicate complex data insights using tools like Tableau or Power BI to create visual reports and dashboards.</li>
            </ul>
             <h4 className="font-semibold text-foreground/90">Non-Technical Skills</h4>
            <ul className="list-disc list-inside text-muted-foreground mt-1">
                 <li><span className="font-semibold text-foreground/90">Business Acumen:</span> Understanding business problems and how data can be used to solve them.</li>
                <li><span className="font-semibold text-foreground/90">Communication:</span> The ability to clearly and effectively present complex findings to both technical and non-technical stakeholders.</li>
                <li><span className="font-semibold text-foreground/90">Problem-Solving:</span> A critical and analytical mindset to identify problems and develop data-driven solutions.</li>
                <li><span className="font-semibold text-foreground/90">Curiosity:</span> A strong desire to explore data, ask questions, and discover new insights.</li>
            </ul>
        </InfoCard>

      </CardContent>
    </Card>
  );
}
