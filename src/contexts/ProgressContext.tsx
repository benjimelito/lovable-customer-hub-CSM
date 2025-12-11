import React, { createContext, useContext, useState, ReactNode } from "react";

interface FeatureProgress {
  id: string;
  name: string;
  completed: boolean;
  completedAt?: Date;
}

interface HubSection {
  id: string;
  name: string;
  path: string;
  visited: boolean;
  visitedAt?: Date;
}

interface ProgressContextType {
  features: FeatureProgress[];
  sections: HubSection[];
  completeFeature: (featureId: string) => void;
  visitSection: (sectionId: string) => void;
  getCompletionPercentage: () => number;
  getSectionsVisited: () => number;
  isFeatureCompleted: (featureId: string) => boolean;
  isSectionVisited: (sectionId: string) => boolean;
}

const defaultFeatures: FeatureProgress[] = [
  { id: "design_system", name: "Review Design System", completed: false },
  { id: "data_integrations", name: "Set Up Data Integrations", completed: false },
  { id: "enterprise_account", name: "Create Enterprise Account", completed: false },
  { id: "team_invitations", name: "Send Team Invitations", completed: false },
  { id: "watch_demo", name: "Watch Product Demo", completed: false },
  { id: "schedule_call", name: "Schedule Discovery Call", completed: false },
];

const defaultSections: HubSection[] = [
  { id: "home", name: "Hub Home", path: "/", visited: false },
  { id: "usage", name: "Usage Dashboard", path: "/usage", visited: false },
  { id: "process", name: "Sales Process", path: "/process", visited: false },
  { id: "research", name: "AI Research", path: "/research", visited: false },
  { id: "social", name: "Social Proof", path: "/social", visited: false },
  { id: "actions", name: "Action Items", path: "/actions", visited: false },
  { id: "faq", name: "FAQ & Support", path: "/faq", visited: false },
  { id: "swag", name: "Swag Redemption", path: "/swag", visited: false },
];

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [features, setFeatures] = useState<FeatureProgress[]>(defaultFeatures);
  const [sections, setSections] = useState<HubSection[]>(defaultSections);

  const completeFeature = (featureId: string) => {
    setFeatures((prev) =>
      prev.map((f) =>
        f.id === featureId && !f.completed
          ? { ...f, completed: true, completedAt: new Date() }
          : f
      )
    );
  };

  const visitSection = (sectionId: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId && !s.visited
          ? { ...s, visited: true, visitedAt: new Date() }
          : s
      )
    );
  };

  const getCompletionPercentage = () => {
    const completed = features.filter((f) => f.completed).length;
    return Math.round((completed / features.length) * 100);
  };

  const getSectionsVisited = () => {
    return sections.filter((s) => s.visited).length;
  };

  const isFeatureCompleted = (featureId: string) => {
    return features.find((f) => f.id === featureId)?.completed ?? false;
  };

  const isSectionVisited = (sectionId: string) => {
    return sections.find((s) => s.id === sectionId)?.visited ?? false;
  };

  return (
    <ProgressContext.Provider
      value={{
        features,
        sections,
        completeFeature,
        visitSection,
        getCompletionPercentage,
        getSectionsVisited,
        isFeatureCompleted,
        isSectionVisited,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};

export default ProgressContext;
