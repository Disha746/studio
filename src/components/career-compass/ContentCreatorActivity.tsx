
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle, Film, Lightbulb, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import InfoCard from "./InfoCard";

type ContentCreatorActivityProps = {
    onBack: () => void;
};

export default function ContentCreatorActivity({ onBack }: ContentCreatorActivityProps) {
    const { toast } = useToast();
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) { // 10MB limit
                 toast({
                    variant: "destructive",
                    title: "File Too Large",
                    description: "Please upload a video smaller than 10MB.",
                });
                return;
            }
            if (!file.type.startsWith('video/')) {
                 toast({
                    variant: "destructive",
                    title: "Invalid File Type",
                    description: "Please upload a valid video file.",
                });
                return;
            }
            setVideoFile(file);
        }
    }

    const handleSubmit = () => {
        if (!videoFile) {
            toast({
                variant: "destructive",
                title: "No Video Selected",
                description: "Please select a video to upload.",
            });
            return;
        }
        setIsSubmitted(true);
    }
    
    const handleFeedbackSubmit = () => {
        toast({
            title: "Feedback Submitted!",
            description: "Thank you for your valuable insights.",
        });
        onBack();
    }
    
    if (isSubmitted) {
        return (
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl sm:text-3xl">Your Creator Experience</CardTitle>
                    <CardDescription>Now that you've completed your 30-second hook video, how did you feel about the process?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label>How engaging did you find creating this video?</Label>
                         <RadioGroup className="flex">
                            {[1,2,3,4,5].map(i => <div key={i} className="flex items-center space-x-2"><RadioGroupItem value={String(i)} id={`engaging-${i}`}/><Label htmlFor={`engaging-${i}`}>{i}</Label></div>)}
                        </RadioGroup>
                    </div>
                     <div className="space-y-2">
                        <Label>How much did you enjoy the creative process?</Label>
                        <RadioGroup className="flex">
                            {[1,2,3,4,5].map(i => <div key={i} className="flex items-center space-x-2"><RadioGroupItem value={String(i)} id={`enjoy-${i}`}/><Label htmlFor={`enjoy-${i}`}>{i}</Label></div>)}
                        </RadioGroup>
                    </div>
                     <div className="space-y-2">
                        <Label>Did this activity give you a better understanding of what a content creator does?</Label>
                        <RadioGroup>
                            <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="yes"/><Label htmlFor="yes">Yes</Label></div>
                            <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="no"/><Label htmlFor="no">No</Label></div>
                             <div className="flex items-center space-x-2"><RadioGroupItem value="somewhat" id="somewhat"/><Label htmlFor="somewhat">Somewhat</Label></div>
                        </RadioGroup>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleFeedbackSubmit} className="w-full">
                        Submit Feedback & Continue
                    </Button>
                </CardFooter>
            </Card>
        )
    }


  return (
    <Card>
      <CardHeader>
        <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft />
            Back
        </Button>
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Film className="text-primary"/>The 30-Second Hook Challenge</CardTitle>
        <CardDescription>Every great piece of content starts with a captivating hook. In this quick challenge, you'll step into the shoes of a content creator and craft a 30-second video designed to grab attention and make viewers want more!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <h3 className="font-headline text-xl">Your 30-Second Spotlight</h3>
            <p className="text-muted-foreground">Your task is to create a 30-second video introducing a topic you're passionate about. It could be anything: your favorite hobby, a book you love, a travel destination, or a skill you're learning. The goal is to make people want to know more!</p>
        </div>

        <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Tips for a Great Hook">
            <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span>Start with a question or surprising fact.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span>Show, don't just tell (visuals matter!).</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span>Speak with energy and passion.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span>Keep it concise.</span></li>
            </ul>
        </InfoCard>

        <div className="space-y-2">
            <Label htmlFor="video-upload" className="font-headline text-lg">Record & Upload Your Video</Label>
            <Input id="video-upload" type="file" accept="video/*" onChange={handleFileChange} className="file:text-primary"/>
            {videoFile && <p className="text-sm text-muted-foreground">Selected: {videoFile.name}</p>}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">
            Submit Your Video
            <Upload />
        </Button>
      </CardFooter>
    </Card>
  );
}
