
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Code, CheckCircle, Rocket, Sparkles, GraduationCap, ArrowRight } from "lucide-react";
import InfoCard from "./InfoCard";


type SoftwareDeveloperIntroProps = {
    onBack?: () => void;
};

const RoadmapContent = ({ onBack }: { onBack: () => void; }) => (
    <>
        <CardHeader>
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
            <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Rocket className="text-primary"/>Roadmap to a Software Career</CardTitle>
            <CardDescription>A step-by-step guide to becoming a Software Developer in India.</CardDescription>
        </CardHeader>
        <CardContent>
             <InfoCard icon={<Rocket className="w-5 h-5 text-accent" />} title="Step-by-Step Path">
                <div className="space-y-4 text-muted-foreground">
                    <div>
                        <h4 className="font-semibold text-foreground/90">Step 1: Foundation (Class 11–12 / Early stage)</h4>
                        <ul className="list-disc list-inside pl-2">
                            <li>Focus on Maths + Logical Thinking.</li>
                            <li>Start with a beginner-friendly language: Python.</li>
                            <li>Learn basic programming concepts: variables, loops, functions, arrays, OOP.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Step 2: Core Computer Science Skills (1st–2nd Year of College or Self-study)</h4>
                        <ul className="list-disc list-inside pl-2">
                            <li>Languages: C++, Java, Python.</li>
                            <li>DSA (Data Structures & Algorithms) – crucial for placements.</li>
                            <li>CS Fundamentals: OS, DBMS, Networks, OOP.</li>
                        </ul>
                        <p className="font-semibold mt-1">Resources: GeeksforGeeks, CS50, NPTEL, LeetCode.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Step 3: Development Skills (2nd–3rd Year)</h4>
                        <ul className="list-disc list-inside pl-2">
                            <li>Learn Web/App Development (e.g., HTML/CSS/JS, React, Node.js, Flutter).</li>
                            <li>Understand Version Control (Git & GitHub).</li>
                            <li>Work on projects (portfolio website, blog, to-do app).</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Step 4: Specialization (3rd–4th Year or After Basics)</h4>
                        <ul className="list-disc list-inside pl-2">
                            <li>Choose a specialization: AI/ML, Full Stack, Data Engineering, Cybersecurity, etc.</li>
                            <li>Build 2–3 strong projects (e.g., AI chatbot, SaaS product).</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Step 5: Industry Preparation</h4>
                        <ul className="list-disc list-inside pl-2">
                            <li>Internships (start from 2nd/3rd year).</li>
                            <li>Competitive programming (Codeforces, CodeChef, LeetCode).</li>
                            <li>Participate in hackathons & build your LinkedIn/GitHub profile.</li>
                            <li>Practice mock interviews.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Step 6: Placement / Job</h4>
                        <p>Target service-based (Infosys, TCS), product-based (Google, Microsoft), or startups (CRED, Razorpay) based on your skills and preparation.</p>
                    </div>
                </div>
            </InfoCard>
            
            <InfoCard icon={<GraduationCap className="w-5 h-5 text-accent"/>} title="Good Colleges in India for AI / Software Career">
                <div className="space-y-3 text-muted-foreground">
                    <div>
                        <h4 className="font-semibold text-foreground/90">Tier 1 – Top IITs & IIITs</h4>
                        <p>IIT Bombay, IIT Delhi, IIT Madras, IIIT Hyderabad.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Tier 2 – NITs & BITS</h4>
                        <p>NIT Trichy, NIT Surathkal, BITS Pilani.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Tier 3 – Private Universities with Strong CS/AI</h4>
                        <p>VIT Vellore, SRM University, PES University, Manipal Institute of Technology.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground/90">Tier 4 – Rising AI-focused Colleges</h4>
                        <p>Ashoka University, Shiv Nadar University, UPES Dehradun.</p>
                    </div>
                </div>
            </InfoCard>
        </CardContent>
    </>
);

const IntroContent = ({ onBack, onProceed }: { onBack?: () => void; onProceed: () => void; }) => (
     <>
      <CardHeader>
        {onBack && (
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back
            </Button>
        )}
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Code className="text-primary"/>A Career in Software Development</CardTitle>
        <CardDescription>An overview of what it means to be a Software Developer.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">A software developer is a professional who designs, develops, and maintains software applications. They are problem-solvers who use programming languages and tools to create everything from mobile apps and websites to complex enterprise systems and AI models. It's a field that blends creativity with logic, requiring both technical expertise and innovative thinking.</p>
        </div>

        <InfoCard icon={<Sparkles className="w-5 h-5 text-accent"/>} title="Why Choose This Field? 🤔">
            <p className="text-muted-foreground mb-4">Choosing a career in software development means entering a dynamic and constantly evolving industry. You get to build tangible products that can be used by millions of people, solving real-world problems and driving technological advancement. This profession is appealing because of:</p>
            <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">High Impact:</span> You have the power to create tools that can change industries and improve people's lives.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Continuous Learning:</span> Technology is always changing, which means you'll constantly be learning new skills and staying at the forefront of innovation.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Strong Demand:</span> Skilled software developers are in high demand across virtually every industry, leading to excellent job security and competitive salaries.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Flexible Work:</span> The nature of the work often allows for remote and flexible work arrangements.</span></li>
            </ul>
        </InfoCard>

        <InfoCard icon={<Rocket className="w-5 h-5 text-accent"/>} title="Career Perspective & Scope 🚀">
            <p className="text-muted-foreground mb-4">The career path for a software developer is rich with opportunities for growth. Many start in junior roles, writing code and fixing bugs under supervision. As they gain experience, they can advance to senior, lead, or architect positions, where they design systems and mentor other developers. Specializations are abundant, allowing developers to focus on areas like AI/Machine Learning, Cybersecurity, Mobile Development, or Game Design.</p>
            <p className="text-muted-foreground font-semibold">The scope of work includes:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
                <li><span className="font-semibold text-foreground/90">Front-End Development:</span> Building the user interface and experience of a website or app.</li>
                <li><span className="font-semibold text-foreground/90">Back-End Development:</span> Creating the server-side logic, databases, and APIs that power the application.</li>
                <li><span className="font-semibold text-foreground/90">Full-Stack Development:</span> Working on both the front-end and back-end of an application.</li>
                <li><span className="font-semibold text-foreground/90">DevOps & Infrastructure:</span> Managing the deployment, scaling, and reliability of software systems.</li>
            </ul>
        </InfoCard>

      </CardContent>
       <CardFooter>
            <Button onClick={onProceed} className="w-full">
                View Roadmap
                <ArrowRight />
            </Button>
        </CardFooter>
    </>
);


export default function SoftwareDeveloperIntro({ onBack }: SoftwareDeveloperIntroProps) {
  const [view, setView] = useState<'intro' | 'roadmap'>('intro');

  if (view === 'roadmap') {
    return (
        <Card>
            <RoadmapContent onBack={() => setView('intro')} />
        </Card>
    )
  }

  return (
    <Card>
      <IntroContent onBack={onBack} onProceed={() => setView('roadmap')} />
    </Card>
  );
}
