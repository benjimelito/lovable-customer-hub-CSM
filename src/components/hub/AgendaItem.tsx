import React, { useState } from "react";
import { ChevronDown, User, Users } from "lucide-react";
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

  const getPresenterInfo = () => {
    switch (presenter) {
      case "prospect":
        return { label: "You", icon: User, color: "text-brand-sapphire-primary" };
      case "lovable":
        return { label: "Lovable", icon: User, color: "text-brand-twilight-primary" };
      case "both":
        return { label: "Collaborative", icon: Users, color: "text-brand-bubblegum-primary" };
    }
  };

  const presenterInfo = getPresenterInfo();
  const PresenterIcon = presenterInfo.icon;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="p-4 bg-[#F7F4ED] rounded-2xl border border-[#ECEAE4] transition-all duration-300 hover:border-border">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1 text-left">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                  <PresenterIcon className={cn("w-4 h-4", presenterInfo.color)} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-medium text-foreground">{title}</h4>
                  <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                    {duration}
                  </span>
                  <span className={cn("text-xs", presenterInfo.color)}>
                    {presenterInfo.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
              </div>
            </div>
            {details && details.length > 0 && (
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0",
                  isOpen && "rotate-180"
                )}
              />
            )}
          </div>
        </CollapsibleTrigger>

        {details && details.length > 0 && (
          <CollapsibleContent>
            <div className="mt-4 pt-4 border-t border-border">
              <ul className="space-y-2 pl-11">
                {details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-muted-foreground/50">•</span>
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
