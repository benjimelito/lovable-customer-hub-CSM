import React from "react";
import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStageProps {
  id: string;
  label: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  completedDate?: string;
  isLast?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
}

const TimelineStage: React.FC<TimelineStageProps> = ({
  label,
  description,
  status,
  completedDate,
  isLast = false,
  onClick,
  isSelected = false,
}) => {
  return (
    <div 
      className={cn(
        "flex items-start gap-4 cursor-pointer group transition-all duration-300",
        onClick && "hover:opacity-80"
      )}
      onClick={onClick}
    >
      {/* Timeline Node */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
            status === "completed" && "bg-success-primary border-success-primary",
            status === "current" && "bg-accent-primary border-accent-primary animate-pulse",
            status === "upcoming" && "bg-transparent border-muted-foreground/30",
            isSelected && status !== "upcoming" && "ring-2 ring-offset-2 ring-accent-primary"
          )}
        >
          {status === "completed" ? (
            <Check className="w-5 h-5 text-success-primary-foreground" />
          ) : status === "current" ? (
            <Circle className="w-4 h-4 fill-accent-primary-foreground text-accent-primary-foreground" />
          ) : (
            <Circle className="w-4 h-4 text-muted-foreground/50" />
          )}
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-0.5 h-16 mt-2 transition-all duration-300",
              status === "completed" ? "bg-success-primary" : "bg-border"
            )}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-2">
          <h4
            className={cn(
              "text-base font-medium transition-colors",
              status === "upcoming" ? "text-muted-foreground" : "text-foreground"
            )}
          >
            {label}
          </h4>
          {status === "current" && (
            <span className="text-xs px-2 py-0.5 bg-accent-primary text-accent-primary-foreground rounded-full">
              Current
            </span>
          )}
        </div>
        <p
          className={cn(
            "text-sm mt-1",
            status === "upcoming" ? "text-muted-foreground/60" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
        {completedDate && status === "completed" && (
          <p className="text-xs text-muted-foreground mt-1">
            Completed {completedDate}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimelineStage;
