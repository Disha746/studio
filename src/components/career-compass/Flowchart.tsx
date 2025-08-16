"use client";

import type { CareerPathStep } from "@/lib/types";

type FlowchartProps = {
  path: CareerPathStep[];
};

export default function Flowchart({ path }: FlowchartProps) {
  if (!path || path.length === 0) {
    return <p>No career path information available.</p>;
  }

  return (
    <div className="relative pl-6">
      {path.map((item, index) => (
        <div key={item.step} className="relative pb-8">
          {index < path.length - 1 && (
            <div className="absolute left-[1px] top-4 h-full w-0.5 bg-border -translate-x-1/2" />
          )}
          <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary -translate-x-1/2" />
          <div className="pl-4">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
