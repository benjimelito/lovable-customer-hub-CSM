import { Mail, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberCardProps {
  name: string;
  title: string;
  email: string;
  photo: string;
  calendlyUrl?: string;
  linkedInUrl?: string;
  bio?: string;
  showBooking?: boolean;
}

const TeamMemberCard = ({
  name,
  title,
  email,
  photo,
  calendlyUrl,
  linkedInUrl,
  bio,
  showBooking = false,
}: TeamMemberCardProps) => {
  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-border transition-colors">
      <div className="flex items-start gap-4">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          {bio && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{bio}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => window.open(`mailto:${email}`, "_blank")}
        >
          <Mail className="w-4 h-4" />
          Email
        </Button>
        
        {linkedInUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open(linkedInUrl, "_blank")}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        )}
        
        {showBooking && calendlyUrl && (
          <Button
            size="sm"
            className="gap-2"
            onClick={() => window.open(calendlyUrl, "_blank")}
          >
            <Calendar className="w-4 h-4" />
            Book Meeting
          </Button>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
