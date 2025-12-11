import { LucideIcon } from "lucide-react";

interface AchievementCardProps {
  title: string;
  description: string;
  user: string;
  team: string;
  date: string;
  badge: LucideIcon;
  color: string;
}

const AchievementCard = ({
  title,
  description,
  user,
  team,
  date,
  badge: Badge,
  color,
}: AchievementCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-border transition-colors">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl bg-muted/50 ${color}`}>
          <Badge className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                {user.charAt(0)}
              </div>
              <span className="text-sm font-medium text-foreground">{user}</span>
            </div>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{team}</span>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2">
            Achieved on {formatDate(date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
