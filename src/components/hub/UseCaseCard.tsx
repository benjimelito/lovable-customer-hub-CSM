import React, { useState } from "react";
import { Check, Clock, Sparkles, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface UseCaseSuggestion {
  id: string;
  title: string;
  description: string;
  industry: string;
  role: string;
  complexity: "simple" | "medium" | "complex";
  estimatedDemoTime: string;
  tags: string[];
  selected?: boolean;
}

interface UseCaseCardProps {
  suggestion: UseCaseSuggestion;
  onSelect: (id: string, selected: boolean) => void;
  onCustomize: (suggestion: UseCaseSuggestion) => void;
}

const complexityConfig = {
  simple: { label: "Simple", color: "bg-[#D4F9E4] text-[#2B8A4B] border-[#4AE88A]/30" },
  medium: { label: "Medium", color: "bg-[#FEF3C7] text-[#92400E] border-amber-200" },
  complex: { label: "Complex", color: "bg-[#E4D4F9] text-[#7C3AED] border-[#C9A4FF]" },
};

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  suggestion,
  onSelect,
  onCustomize,
}) => {
  const complexity = complexityConfig[suggestion.complexity];

  return (
    <div
      className={cn(
        "relative bg-[#F7F4ED] dark:bg-card border-2 rounded-2xl p-5 transition-all duration-300",
        suggestion.selected
          ? "border-primary shadow-lg scale-[1.02]"
          : "border-[#D8D6CF] dark:border-border hover:border-primary/50"
      )}
    >
      {/* Selection Checkbox */}
      <div className="absolute top-4 right-4">
        <Checkbox
          checked={suggestion.selected}
          onCheckedChange={(checked) => onSelect(suggestion.id, !!checked)}
          className="h-5 w-5"
        />
      </div>

      {/* Header */}
      <div className="flex items-start gap-3 mb-3 pr-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-foreground leading-tight">{suggestion.title}</h4>
          <p className="text-xs text-muted-foreground mt-1">{suggestion.role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {suggestion.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="outline" className={cn("text-xs", complexity.color)}>
          {complexity.label}
        </Badge>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          {suggestion.estimatedDemoTime}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {suggestion.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-background/50 border border-border/50 rounded-full text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <button
        onClick={() => onCustomize(suggestion)}
        className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
      >
        Customize this idea →
      </button>

      {/* Selected indicator */}
      {suggestion.selected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
    </div>
  );
};

export default UseCaseCard;
