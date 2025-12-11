import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Calendar, Clock } from "lucide-react";
import AgendaItem from "./AgendaItem";

interface AgendaItemData {
  id: string;
  title: string;
  duration: string;
  description: string;
  presenter: "prospect" | "lovable" | "both";
  details?: string[];
}

interface PreCallAgendaProps {
  items: AgendaItemData[];
  callDate?: string;
  callTime?: string;
}

const PreCallAgenda: React.FC<PreCallAgendaProps> = ({ 
  items, 
  callDate = "Thursday, Dec 14",
  callTime = "2:00 PM EST"
}) => {
  const totalDuration = items.reduce((acc, item) => {
    const minutes = parseInt(item.duration);
    return acc + (isNaN(minutes) ? 0 : minutes);
  }, 0);

  return (
    <BlurFade delay={0.15}>
      <div className="p-6 border border-border rounded-2xl bg-card">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wide">
              Pre-Call Agenda
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              A collaborative conversation, not a sales pitch
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{callDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{callTime}</span>
            </div>
            <span className="px-2 py-1 bg-muted rounded-full">
              ~{totalDuration} min
            </span>
          </div>
        </div>

        {/* Agenda Items */}
        <div className="space-y-2">
          {items.map((item, index) => (
            <BlurFade key={item.id} delay={0.1 + index * 0.03}>
              <AgendaItem {...item} />
            </BlurFade>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Come with questions — this is a conversation about your needs, not a pitch.
          </p>
        </div>
      </div>
    </BlurFade>
  );
};

export default PreCallAgenda;
