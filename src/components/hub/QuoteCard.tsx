import { Quote, Phone, MessageSquare, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface QuoteCardProps {
  quote: string;
  author: string;
  authorPhotoUrl?: string;
  role: string;
  source: "call" | "interview" | "feedback";
  impactArea: string;
  date?: string;
}

const QuoteCard = ({
  quote,
  author,
  authorPhotoUrl,
  role,
  source,
  impactArea,
  date,
}: QuoteCardProps) => {
  const sourceConfig = {
    call: { icon: Phone, label: "Call Transcript", color: "bg-blue-500/10 text-blue-500" },
    interview: { icon: MessageSquare, label: "Interview", color: "bg-green-500/10 text-green-500" },
    feedback: { icon: FileText, label: "Direct Feedback", color: "bg-purple-500/10 text-purple-500" },
  };

  const { icon: SourceIcon, label: sourceLabel, color: sourceColor } = sourceConfig[source];

  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-border transition-colors">
      <div className="flex items-start gap-3 mb-4">
        <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
        <p className="text-foreground italic leading-relaxed">"{quote}"</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {authorPhotoUrl ? (
            <img 
              src={authorPhotoUrl} 
              alt={author} 
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-medium text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <Badge variant="secondary" className="text-xs">
            {impactArea}
          </Badge>
          <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${sourceColor}`}>
            <SourceIcon className="w-3 h-3" />
            {sourceLabel}
          </div>
        </div>
      </div>

      {date && (
        <p className="text-xs text-muted-foreground mt-3">
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      )}
    </div>
  );
};

export default QuoteCard;
