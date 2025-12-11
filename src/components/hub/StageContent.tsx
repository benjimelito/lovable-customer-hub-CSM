import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowRight, FileText } from "lucide-react";

interface StageContentProps {
  stage: {
    id: string;
    name: string;
    description: string;
    status: "completed" | "current" | "upcoming";
    agendaItems: string[];
    milestones?: string[];
    resources?: { title: string; url: string }[];
  };
}

const StageContent: React.FC<StageContentProps> = ({ stage }) => {
  return (
    <BlurFade delay={0.1}>
      <div className="p-6 border border-border rounded-2xl bg-card h-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-medium text-foreground">{stage.name}</h3>
            {stage.status === "current" && (
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-foreground text-background rounded font-medium">
                Active
              </span>
            )}
            {stage.status === "completed" && (
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-muted text-muted-foreground rounded font-medium">
                Done
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
        </div>

        {/* What to Expect */}
        <div className="space-y-3">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            What to Expect
          </h4>
          <ul className="space-y-2">
            {stage.agendaItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Milestones */}
        {stage.milestones && stage.milestones.length > 0 && (
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
              Key Milestones
            </h4>
            <div className="flex flex-wrap gap-2">
              {stage.milestones.map((milestone, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1.5 bg-muted rounded-full text-muted-foreground"
                >
                  {milestone}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Resources */}
        {stage.resources && stage.resources.length > 0 && (
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
              Resources
            </h4>
            <div className="space-y-2">
              {stage.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </BlurFade>
  );
};

export default StageContent;
