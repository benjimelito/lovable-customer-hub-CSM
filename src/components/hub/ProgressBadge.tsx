import React from "react";
import { useProgress } from "@/contexts/ProgressContext";
import { useRewards } from "@/contexts/RewardsContext";

const ProgressBadge: React.FC = () => {
  const { getCompletionPercentage, getSectionsVisited } = useProgress();
  const { points, maxPoints } = useRewards();
  const overallProgress = getCompletionPercentage();
  const sectionsVisited = getSectionsVisited();
  
  // Calculate progress based on points earned
  const pointsProgress = maxPoints > 0 ? Math.round((points / maxPoints) * 100) : 0;
  
  return (
    <div className="inline-flex items-center gap-4 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
      {/* Progress */}
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8">
          <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-muted/30"
            />
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={`${pointsProgress * 0.88} 88`}
              strokeLinecap="round"
              className="text-primary transition-all duration-500"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-foreground">
            {pointsProgress}%
          </span>
        </div>
        <span className="text-sm text-muted-foreground hidden sm:inline">Progress</span>
      </div>

      <div className="w-px h-4 bg-border" />

      {/* Sections */}
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium text-foreground">{sectionsVisited}/8</span>
        <span className="text-sm text-muted-foreground hidden sm:inline">Sections</span>
      </div>

      <div className="w-px h-4 bg-border" />

      {/* Points */}
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium text-primary">{points}/{maxPoints}</span>
        <span className="text-sm text-muted-foreground hidden sm:inline">Points</span>
      </div>
    </div>
  );
};

export default ProgressBadge;
