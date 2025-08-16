"use client";

import { useEffect, useState } from "react";
import type { OccupationDetails } from "@/lib/types";
import { getDetailsAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowLeft, CheckCircle, XCircle, Briefcase, DollarSign, Clock, TrendingUp, Sparkles } from "lucide-react";
import Flowchart from "./Flowchart";

type OccupationDetailsStepProps = {
  occupation: string;
  onBack: () => void;
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


export default function OccupationDetailsStep({
  occupation,
  onBack,
}: OccupationDetailsStepProps) {
  const [details, setDetails] = useState<OccupationDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const result = await getDetailsAction({ occupation });
      if (result.success && result.data) {
        setDetails(result.data);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
      }
      setIsLoading(false);
    };

    fetchDetails();
  }, [occupation, toast]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-12 space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="font-medium text-lg">Fetching career details...</p>
          <p className="text-muted-foreground">Gathering information for {occupation}.</p>
        </CardContent>
      </Card>
    );
  }

  if (!details) {
    return (
      <Card>
        <CardContent className="text-center p-12">
          <p className="mb-4">Could not load details for {occupation}.</p>
          <Button onClick={onBack}>
            <ArrowLeft />
            Back to Suggestions
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
        <CardHeader>
            <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft />
                Back to Suggestions
            </Button>
            <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Briefcase className="text-primary"/>{occupation}</CardTitle>
            <CardDescription>A detailed look into the career path.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard icon={<DollarSign className="w-5 h-5 text-accent"/>} title="Fees & Salary">
                    <p className="text-muted-foreground">{details.fees}</p>
                </InfoCard>
                <InfoCard icon={<Clock className="w-5 h-5 text-accent"/>} title="Time Investment">
                    <p className="text-muted-foreground">{details.timeInvestment}</p>
                </InfoCard>
            </div>
            
            <InfoCard icon={<Sparkles className="w-5 h-5 text-accent"/>} title="Skills Required">
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {details.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </InfoCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard icon={<CheckCircle className="w-5 h-5 text-green-500"/>} title="Advantages">
                    <ul className="list-none space-y-2 text-muted-foreground">
                        {details.advantages.map((adv, i) => <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span>{adv}</span></li>)}
                    </ul>
                </InfoCard>
                <InfoCard icon={<XCircle className="w-5 h-5 text-destructive"/>} title="Disadvantages">
                    <ul className="list-none space-y-2 text-muted-foreground">
                        {details.disadvantages.map((dis, i) => <li key={i} className="flex gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 shrink-0"/><span>{dis}</span></li>)}
                    </ul>
                </InfoCard>
            </div>
            
            <InfoCard icon={<TrendingUp className="w-5 h-5 text-accent"/>} title="Career Path">
                <Flowchart path={details.careerPath} />
            </InfoCard>
        </CardContent>
    </Card>
  );
}
