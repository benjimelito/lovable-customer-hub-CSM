import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface AgendaItemProps {
  id: string;
  title: string;
  duration: string;
  description: string;
  presenter: "prospect" | "lovable" | "both";
  details?: string[];
}

const AgendaItem: React.FC<AgendaItemProps> = ({
  title,
  duration,
  description,
  presenter,
  details,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getPresenterLabel = () => {
    switch (presenter) {
      case "prospect":
        return "You";
      case "lovable":
        return "Lovable";
      case "both":
        return "Collaborative";
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="border border-border rounded-xl bg-background transition-all duration-200 hover:border-foreground/20">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <div className="flex items-center gap-3 flex-1 text-left">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-medium text-foreground">{title}</h4>
                  <span className="text-[10px] px-2 py-0.5 bg-muted rounded text-muted-foreground uppercase tracking-wide">
                    {duration}
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    {getPresenterLabel()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</p>
              </div>
            </div>
            {details && details.length > 0 && (
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0",
                  isOpen && "rotate-180"
                )}
              />
            )}
          </div>
        </CollapsibleTrigger>

        {details && details.length > 0 && (
          <CollapsibleContent>
            <div className="px-4 pb-4 pt-1 border-t border-border">
              <ul className="space-y-1.5 mt-3">
                {details.map((detail, index) => (
                  <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-muted-foreground/40">—</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
};

export default AgendaItem;
