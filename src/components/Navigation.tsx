import { Link, useLocation } from "react-router-dom";
import { StickyNavWrapper } from "./StickyNavWrapper";
import acmeLogo from "@/assets/acme-logo.png";
import { cn } from "@/lib/utils";

const hubPages = [
  { path: "/", title: "Home" },
  { path: "/demo", title: "Demo" },
  { path: "/demo-ideas", title: "Ideas" },
  { path: "/usage", title: "Dashboard" },
  { path: "/process", title: "Process" },
  { path: "/research", title: "Research" },
  { path: "/social", title: "Social Proof" },
  { path: "/actions", title: "Actions" },
  { path: "/faq", title: "FAQ" },
  { path: "/swag", title: "Swag" },
  { path: "/enablement-support", title: "Enablement" },
  { path: "/outcomes-success", title: "Hall of Fame" },
];

const Navigation = ({ className }: { className?: string }) => {
  const location = useLocation();

  return (
    <StickyNavWrapper className={className}>
      <div className="flex w-full items-center justify-between gap-4">
        {/* Logos */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={acmeLogo}
            alt="Acme"
            className="h-5 w-auto object-contain"
          />
          <span className="text-lg text-muted-foreground font-light">×</span>
          <img
            src="/images/lovable-logo-text-light.svg"
            alt="Lovable"
            className="h-5 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {hubPages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap",
                location.pathname === page.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {page.title}
            </Link>
          ))}
        </nav>
      </div>
    </StickyNavWrapper>
  );
};

export default Navigation;
