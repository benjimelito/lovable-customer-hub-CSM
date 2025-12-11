import React from "react";
import { Check } from "lucide-react";
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
        "flex items-start gap-4 cursor-pointer group transition-all duration-200",
        onClick && "hover:opacity-80"
      )}
      onClick={onClick}
    >
      {/* Timeline Node */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200",
            status === "completed" && "bg-foreground border-foreground",
            status === "current" && "bg-foreground border-foreground",
            status === "upcoming" && "bg-transparent border-muted-foreground/30",
            isSelected && "ring-2 ring-offset-2 ring-offset-background ring-foreground/20"
          )}
        >
          {status === "completed" ? (
            <Check className="w-4 h-4 text-background" />
          ) : status === "current" ? (
            <div className="w-2 h-2 rounded-full bg-background" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          )}
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-px h-14 mt-2 transition-all duration-200",
              status === "completed" ? "bg-foreground" : "bg-border"
            )}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6">
        <div className="flex items-center gap-3">
          <h4
            className={cn(
              "text-sm font-medium transition-colors",
              status === "upcoming" ? "text-muted-foreground" : "text-foreground"
            )}
          >
            {label}
          </h4>
          {status === "current" && (
            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-foreground text-background rounded font-medium">
              Current
            </span>
          )}
        </div>
        <p
          className={cn(
            "text-xs mt-1 leading-relaxed",
            status === "upcoming" ? "text-muted-foreground/50" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
        {completedDate && status === "completed" && (
          <p className="text-[10px] text-muted-foreground/60 mt-1.5 uppercase tracking-wide">
            {completedDate}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimelineStage;
