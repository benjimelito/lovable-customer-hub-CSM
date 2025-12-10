# AI Research Insights PRD

## Overview

The AI Research Insights page (`/research`) provides AI-generated company-specific analysis, pain points identification, and pre-call research questions. This page leverages Lovable AI (Lovable Cloud) for dynamic content generation.

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Card component styles
- Animation configurations
- Color scheme and design tokens
- Typography scales

## Features

### 1. Company AI Strategy Section

Display AI-analyzed information about the prospect's company:

```typescript
interface CompanyStrategy {
  summary: string;
  aiInitiatives: string[];
  technologyFocus: string[];
  marketPosition: string;
  competitiveAdvantages: string[];
}
```

Content sections:
- Executive summary
- Current AI initiatives
- Technology focus areas
- Market positioning

### 2. Pain Points Analysis

AI-identified pain points from public sources:

```typescript
interface PainPoint {
  id: string;
  category: 'engineering' | 'product' | 'operations' | 'cost';
  title: string;
  description: string;
  source: string; // "Earnings call Q3 2024", "Job postings", etc.
  relevanceScore: number; // 0-100
}
```

Display:
- Card per pain point
- Category badge
- Source citation
- Relevance indicator

### 3. Pre-Call Research Questions

Suggested questions for the sales call:

```typescript
interface ResearchQuestion {
  id: string;
  question: string;
  context: string;
  category: 'technical' | 'business' | 'adoption';
}
```

Features:
- Grouped by category
- Copy to clipboard button
- Expand for context

### 4. AI Generation Integration

**Using Lovable AI (Lovable Cloud):**

Edge function: `supabase/functions/generate-research/index.ts`

```typescript
// Request
{
  companyName: string;
  industry: string;
  additionalContext?: string;
}

// Response
{
  strategy: CompanyStrategy;
  painPoints: PainPoint[];
  questions: ResearchQuestion[];
}
```

### 5. Loading States

During AI generation:
- Skeleton cards
- "Analyzing {companyName}..." message
- Progress indicator
- Estimated time remaining

### 6. Refresh/Regenerate

- "Regenerate" button to get fresh insights
- Confirm dialog before regenerating
- Show "Last generated: {timestamp}"
- Cache results in localStorage

## Component Structure

```
src/pages/ResearchInsights.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title
│   │   ├── Last Updated
│   │   └── Regenerate Button
│   ├── Company Strategy Section
│   │   ├── Summary Card
│   │   └── Initiatives Grid
│   ├── Pain Points Section
│   │   └── PainPointCard (xN)
│   └── Research Questions Section
│       └── QuestionCard (xN)
```

## Mock Data (Fallback)

```typescript
// src/data/research.ts
export const mockResearch = {
  strategy: {
    summary: "Acme Corp is a technology leader...",
    aiInitiatives: ["ML-powered recommendations", "Automated testing"],
    // ...
  },
  painPoints: [
    {
      id: '1',
      category: 'engineering',
      title: 'Slow development cycles',
      description: 'Engineering velocity mentioned as key challenge...',
      source: 'Q3 2024 Earnings Call',
      relevanceScore: 85
    },
    // ...
  ],
  questions: [
    {
      id: '1',
      question: 'How are you currently handling rapid prototyping?',
      context: 'Based on job postings for frontend developers...',
      category: 'technical'
    },
    // ...
  ]
};
```

## Error Handling

- Network error: Show cached data with warning
- API error: Fall back to mock data
- Rate limit: Show retry timer
- Empty response: Show "No insights available" state

## Animations

1. **Page load:** BlurFade on sections
2. **Generation:** Typing effect for summary
3. **Cards:** Staggered entry animation
4. **Regenerate:** Fade out old, fade in new

## Integration

- CustomerContext for company info
- ProgressContext for tracking engagement
- RewardsContext for points on first view

## Responsive Behavior

- Desktop: 3-column pain points grid
- Tablet: 2-column grid
- Mobile: Single column stack
