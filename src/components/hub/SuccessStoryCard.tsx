import { Users, ArrowRight, TrendingUp } from "lucide-react";

interface KeyMetric {
  label: string;
  before?: string;
  after?: string;
  value?: string;
  improvement?: string;
}

interface SuccessStoryCardProps {
  projectName: string;
  leader: {
    name: string;
    title: string;
    photoUrl?: string;
  };
  estimatedActiveUsers: number;
  userType: string;
  primaryUseCases: string[];
  keyMetrics: KeyMetric[];
  nextUp: string;
  image?: string;
}

const SuccessStoryCard = ({
  projectName,
  leader,
  estimatedActiveUsers,
  userType,
  primaryUseCases,
  keyMetrics,
  nextUp,
  image,
}: SuccessStoryCardProps) => {
  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-border transition-colors">
      {image && (
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={projectName}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{projectName}</h3>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            {leader.photoUrl ? (
              <img 
                src={leader.photoUrl} 
                alt={leader.name} 
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                {leader.name.charAt(0)}
              </div>
            )}
            <span>{leader.name}</span>
          </div>
          <span>•</span>
          <span>{leader.title}</span>
        </div>

        <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            ~{estimatedActiveUsers} {userType}
          </span>
        </div>

        {/* Primary Use Cases */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-2">Primary Use Cases</h4>
          <ul className="space-y-1">
            {primaryUseCases.map((useCase, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary mt-0.5">•</span>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Metrics */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-2">Key Results</h4>
          <div className="space-y-2">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg bg-muted/30"
              >
                <span className="text-sm text-muted-foreground">{metric.label}</span>
                {metric.before && metric.after ? (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground line-through">{metric.before}</span>
                    <ArrowRight className="w-3 h-3 text-green-500" />
                    <span className="font-medium text-green-500">{metric.after}</span>
                  </div>
                ) : metric.improvement ? (
                  <div className="flex items-center gap-1 text-sm font-medium text-green-500">
                    <TrendingUp className="w-3 h-3" />
                    {metric.improvement}
                  </div>
                ) : (
                  <span className="text-sm font-medium text-foreground">{metric.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Next Up */}
        <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
          <h4 className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1">
            Next Up
          </h4>
          <p className="text-sm text-foreground">{nextUp}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
