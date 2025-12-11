import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import TimelineStage from "./TimelineStage";

interface Stage {
  id: string;
  name: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  completedDate?: string;
}

interface TimelineProps {
  stages: Stage[];
  currentStageId: string;
  onStageClick?: (stageId: string) => void;
  selectedStageId?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  stages,
  currentStageId,
  onStageClick,
  selectedStageId,
}) => {
  return (
    <div className="p-6 border border-border rounded-2xl bg-card">
      <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-6">
        Deal Progress
      </h3>
      <div className="space-y-0">
        {stages.map((stage, index) => (
          <BlurFade key={stage.id} delay={0.1 + index * 0.03}>
            <TimelineStage
              id={stage.id}
              label={stage.name}
              description={stage.description}
              status={stage.status}
              completedDate={stage.completedDate}
              isLast={index === stages.length - 1}
              onClick={() => onStageClick?.(stage.id)}
              isSelected={selectedStageId === stage.id}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
