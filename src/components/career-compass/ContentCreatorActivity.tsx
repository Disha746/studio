
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle, Film, Lightbulb, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ContentCreatorActivityProps = {
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

export default function ContentCreatorActivity({ onBack }: ContentCreatorActivityProps) {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const { toast } = useToast();

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
        // Placeholder for actual upload logic
        toast({
            title: "Upload Successful!",
            description: `Your video "${videoFile.name}" has been submitted.`,
        });
        onBack();
    }


  return (
    <Card>
      <CardHeader>
        <Button onClick={onBack} variant="ghost" className="justify-start p-0 h-auto mb-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft />
            Back
        </Button>
        <CardTitle className="font-headline text-2xl sm:text-3xl flex items-center gap-2"><Film className="text-primary"/>The 30-Second Hook Challenge</CardTitle>
        <CardDescription>Create a short, attention-grabbing video to practice your content creation skills.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <p className="text-muted-foreground">One of the most crucial skills for a content creator is capturing your audience's attention from the very first second. Your task is to create a 30-second video introducing a topic you're passionate about. It could be anything: your favorite hobby, a book you love, a travel destination, or a skill you're learning. The goal is to make people want to know more!</p>
        </div>

        <InfoCard icon={<Lightbulb className="w-5 h-5 text-accent"/>} title="Key Elements to Include">
            <ul className="list-none space-y-2 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Catchy Opening:</span> A question, a surprising fact, or a strong visual.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Clear Topic:</span> What are you talking about?</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Intriguing Teaser:</span> What will they learn or see if they watch more?</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0"/><span><span className="font-semibold text-foreground/90">Visuals & Audio:</span> Think about what you'll show and ensure your voice is clear.</span></li>
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
