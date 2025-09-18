"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Compass } from "lucide-react";

export default function LoadingStep() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 min-h-[400px]">
      <div className="animate-pulse mb-8">
        <Compass className="h-24 w-24 text-primary" />
      </div>

      <div className="w-full max-w-xs space-y-4">
        <p style={{ color: '#455A64', fontFamily: 'Poppins, sans-serif' }} className="text-lg">
          Getting your path ready...
        </p>
        <Progress value={progress} className="h-1.5 bg-teal-100 [&>div]:bg-teal-400" />
        <p style={{ color: '#78909C', fontFamily: 'Poppins, sans-serif' }} className="text-sm">
          Your future is loading ✨
        </p>
      </div>
    </div>
  );
}
