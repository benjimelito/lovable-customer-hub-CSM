# Customer Hub - Overview PRD

## Project Overview

The Customer Hub is a personalized, interactive portal designed for Enterprise sales prospects. It serves as a central destination where potential customers can explore Lovable's capabilities, track their engagement, and prepare for sales conversations.

## Goals

1. Provide a personalized experience for each prospect
2. Showcase Lovable's capabilities through interactive demos
3. Streamline the pre-sales process with actionable content
4. Gamify the experience to increase engagement
5. Enable self-service research and discovery

## Target User Persona

- **Role:** Enterprise decision-maker (CTO, VP Engineering, Head of Product)
- **Company Size:** 500+ employees
- **Pain Points:** Slow development cycles, high engineering costs, difficulty scaling
- **Goals:** Evaluate Lovable for enterprise adoption

## Information Architecture

```
/                   → Landing Page (Hub Overview)
/usage              → Usage Dashboard
/process            → GTM Sales Process
/research           → AI Research Insights
/social             → Social Proof
/actions            → Action Items
/faq                → FAQ with AI Chatbot
/swag               → Swag Redemption
```

## Global Context Providers

### CustomerContext
```typescript
interface CustomerContext {
  companyName: string;
  industry: string;
  dealStage: 'discovery' | 'evaluation' | 'proposal' | 'negotiation' | 'closed';
  contactName: string;
  contactEmail: string;
  companySize: string;
  profile: {
    techStack: string[];
    painPoints: string[];
    interests: string[];
  };
}
```

### RewardsContext
```typescript
interface RewardsContext {
  points: number;
  level: number;
  achievements: Achievement[];
  unlockedSwag: SwagItem[];
  addPoints: (amount: number, reason: string) => void;
  checkAchievement: (id: string) => boolean;
}
```

### ProgressContext
```typescript
interface ProgressContext {
  visitedSections: string[];
  completedActions: string[];
  overallProgress: number;
  markVisited: (section: string) => void;
  markCompleted: (action: string) => void;
}
```

## HubLayout Wrapper

All hub pages will use a consistent HubLayout wrapper that includes:
- Navigation header with back button
- Page title and description
- Progress indicator
- Consistent padding and max-width
- Footer with navigation to other sections

## Mock Data Structure

All mock data will be stored in `src/data/` folder:
- `customer.ts` - Customer profile and company data
- `metrics.ts` - Usage dashboard metrics
- `stages.ts` - Sales process stages and content
- `companies.ts` - Similar companies for social proof
- `tasks.ts` - Action items and checklist
- `faq.ts` - FAQ questions and answers
- `swag.ts` - Swag catalog items

## Technology Stack

- React + TypeScript + Vite
- Tailwind CSS with existing design tokens
- Framer Motion for animations
- shadcn/ui components
- lucide-react icons
- react-router-dom for routing
- sonner for toast notifications
- Recharts for charts (already installed)
- Lovable AI for AI features (Lovable Cloud)
