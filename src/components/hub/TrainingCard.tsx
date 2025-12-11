import { ExternalLink, LucideIcon, Clock, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LearningPath {
  name: string;
  duration: string;
  modules: number;
}

interface CommunityStats {
  members: string;
  posts: string;
  templates: string;
}

interface TrainingCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  type: "office-hours" | "learning-path" | "community" | "ambassador";
  link: string;
  schedule?: string;
  nextSession?: string;
  paths?: LearningPath[];
  stats?: CommunityStats;
  benefits?: string[];
}

const TrainingCard = ({
  title,
  description,
  icon: Icon,
  type,
  link,
  schedule,
  nextSession,
  paths,
  stats,
  benefits,
}: TrainingCardProps) => {
  const typeColors = {
    "office-hours": "bg-orange-500/10 border-orange-500/20 text-orange-500",
    "learning-path": "bg-blue-500/10 border-blue-500/20 text-blue-500",
    community: "bg-green-500/10 border-green-500/20 text-green-500",
    ambassador: "bg-yellow-500/10 border-yellow-500/20 text-yellow-500",
  };

  const formatNextSession = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
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

      <div className="flex-1">
        {/* Office Hours */}
        {type === "office-hours" && schedule && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{schedule}</span>
            </div>
            {nextSession && (
              <Badge variant="secondary" className="text-xs">
                Next: {formatNextSession(nextSession)}
              </Badge>
            )}
          </div>
        )}

        {/* Learning Paths */}
        {type === "learning-path" && paths && (
          <div className="space-y-2">
            {paths.map((path, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm p-2 rounded-lg bg-muted/30"
              >
                <span className="text-foreground">{path.name}</span>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Clock className="w-3 h-3" />
                  {path.duration}
                  <BookOpen className="w-3 h-3 ml-1" />
                  {path.modules} modules
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Community Stats */}
        {type === "community" && stats && (
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 rounded-lg bg-muted/30">
              <div className="text-lg font-semibold text-foreground">{stats.members}</div>
              <div className="text-xs text-muted-foreground">Members</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-muted/30">
              <div className="text-lg font-semibold text-foreground">{stats.posts}</div>
              <div className="text-xs text-muted-foreground">Posts</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-muted/30">
              <div className="text-lg font-semibold text-foreground">{stats.templates}</div>
              <div className="text-xs text-muted-foreground">Templates</div>
            </div>
          </div>
        )}

        {/* Ambassador Benefits */}
        {type === "ambassador" && benefits && (
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-yellow-500 mt-1">★</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button
        variant="outline"
        size="sm"
        className="gap-2 w-full mt-4"
        onClick={() => window.open(link, "_blank")}
      >
        <ExternalLink className="w-4 h-4" />
        {type === "office-hours"
          ? "Sign Up"
          : type === "learning-path"
          ? "Start Learning"
          : type === "community"
          ? "Join Community"
          : "Apply Now"}
      </Button>
    </div>
  );
};

export default TrainingCard;
