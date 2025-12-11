import { ExternalLink, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  items?: string[];
  type: "tips" | "prompt-guide" | "changelog";
}

const ResourceCard = ({
  title,
  description,
  icon: Icon,
  link,
  items,
  type,
}: ResourceCardProps) => {
  const typeColors = {
    tips: "bg-green-500/10 border-green-500/20 text-green-500",
    "prompt-guide": "bg-blue-500/10 border-blue-500/20 text-blue-500",
    changelog: "bg-purple-500/10 border-purple-500/20 text-purple-500",
  };

  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-border transition-colors h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl border ${typeColors[type]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {items && items.length > 0 && (
        <ul className="space-y-2 mb-4 flex-1">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Button
        variant="outline"
        size="sm"
        className="gap-2 w-full mt-auto"
        onClick={() => window.open(link, "_blank")}
      >
        <ExternalLink className="w-4 h-4" />
        View Resource
      </Button>
    </div>
  );
};

export default ResourceCard;
