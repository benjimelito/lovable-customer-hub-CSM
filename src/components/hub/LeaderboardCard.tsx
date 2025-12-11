import React from "react";
import { Trophy, Crown, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  photoUrl?: string;
  team: string;
  prototypesPublished: number;
}

interface LeaderboardCardProps {
  entries: LeaderboardEntry[];
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-5 h-5 text-yellow-500" />;
    case 2:
      return <Medal className="w-5 h-5 text-gray-400" />;
    case 3:
      return <Medal className="w-5 h-5 text-amber-600" />;
    default:
      return null;
  }
};

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-yellow-500/10 border-yellow-500/30";
    case 2:
      return "bg-gray-500/10 border-gray-500/30";
    case 3:
      return "bg-amber-600/10 border-amber-600/30";
    default:
      return "bg-muted/50 border-border";
  }
};

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ entries }) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-yellow-500/10">
          <Trophy className="w-5 h-5 text-yellow-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Prototypes Leaderboard</h3>
          <p className="text-sm text-muted-foreground">Top publishers this quarter</p>
        </div>
      </div>

      <div className="space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl border transition-all hover:scale-[1.01]",
              getRankStyle(entry.rank)
            )}
          >
            {/* Rank */}
            <div className="flex items-center justify-center w-8 h-8 shrink-0">
              {getRankIcon(entry.rank) || (
                <span className="text-sm font-bold text-muted-foreground">
                  {entry.rank}
                </span>
              )}
            </div>

            {/* Avatar */}
            <div className="relative shrink-0">
              {entry.photoUrl ? (
                <img
                  src={entry.photoUrl}
                  alt={entry.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-background"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background">
                  <span className="text-sm font-semibold text-primary">
                    {entry.name.charAt(0)}
                  </span>
                </div>
              )}
              {entry.rank === 1 && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px]">👑</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{entry.name}</p>
              <p className="text-sm text-muted-foreground truncate">{entry.team}</p>
            </div>

            {/* Stats */}
            <div className="text-right shrink-0">
              <p className="text-2xl font-bold text-foreground">{entry.prototypesPublished}</p>
              <p className="text-xs text-muted-foreground">prototypes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardCard;
