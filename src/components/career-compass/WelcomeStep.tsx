
"use client";

import { Button } from "@/components/ui/button";
import { Compass, Book, GraduationCap, Rocket } from "lucide-react";

type WelcomeStepProps = {
  onSubmit: () => void;
};

export default function WelcomeStep({ onSubmit }: WelcomeStepProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="animate-fade-in mb-8">
        <Compass className="h-24 w-24 text-primary" />
      </div>

      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: '#0D47A1', fontFamily: 'Poppins, sans-serif' }}
        >
          Find Your Career Path with AI
        </h1>
        <p className="text-base mb-8" style={{ color: '#455A64', fontFamily: 'Poppins, sans-serif' }}>
          Discover careers, get guidance, and track your journey.
        </p>
      </div>
      
      <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
        <Button
          onClick={onSubmit}
          className="text-lg font-semibold text-white rounded-full shadow-lg"
          style={{
            backgroundColor: '#26A69A',
            padding: '14px 40px',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          Get Started
        </Button>
      </div>

      <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
        <div className="flex justify-center items-center gap-6 mb-2">
            <GraduationCap className="h-6 w-6 text-gray-500" />
            <Rocket className="h-6 w-6 text-gray-500" />
            <Book className="h-6 w-6 text-gray-500" />
        </div>
        <p className="text-xs" style={{ color: '#607D8B', fontFamily: 'Poppins, sans-serif' }}>
            Trusted by students to guide their future.
        </p>
      </div>
    </div>
  );
}
