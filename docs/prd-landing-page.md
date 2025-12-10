# Landing Page PRD

## Overview

The landing page serves as the central hub for the Customer Hub application. It welcomes prospects with a personalized greeting and provides navigation to all 8 hub sections through an interactive card grid.

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Existing hero section styling
- Card component styles
- Animation configurations
- Color scheme and design tokens
- Video player component

## Features

### 1. Personalized Hero Section

**Current:** Generic hero with company branding
**Updated:** Dynamic greeting using CustomerContext

```tsx
// Example usage
const { companyName, contactName } = useCustomer();
// "Welcome, {contactName} from {companyName}"
```

### 2. Hub Section Cards Grid

Replace current feature cards with 8 hub section cards:

| Card | Title | Icon | Route | Description |
|------|-------|------|-------|-------------|
| 1 | Watch Demo | Play | /demo | See Lovable in action |
| 2 | Usage Dashboard | BarChart3 | /usage | Your project metrics |
| 3 | Sales Process | GitBranch | /process | Deal timeline & next steps |
| 4 | AI Research | Brain | /research | Company-specific insights |
| 5 | Social Proof | Users | /social | Companies like you |
| 6 | Action Items | CheckSquare | /actions | Pre-call checklist |
| 7 | FAQ & Chat | MessageCircle | /faq | Questions answered |
| 8 | Earn Swag | Gift | /swag | Redeem your rewards |

### 3. Video Player Integration

Keep existing video player component, update to use demo video content.

### 4. Progress Indicator

Show overall engagement progress in hero section:
- Sections visited
- Actions completed
- Points earned

## Component Structure

```
src/pages/Home.tsx
├── Hero Section
│   ├── Personalized Greeting
│   ├── Progress Badge
│   └── Video Player
├── Hub Cards Grid
│   └── HubCard (x8)
└── Footer CTA
```

## Mock Data Required

```typescript
// src/data/customer.ts
export const mockCustomer = {
  companyName: "Acme Corp",
  contactName: "John",
  industry: "Technology",
  dealStage: "evaluation",
  // ...
};
```

## Navigation

Each HubCard should:
1. Navigate to respective route on click
2. Show visited state if section was previously accessed
3. Display locked state if prerequisites not met (optional)

## Responsive Behavior

- Desktop: 4-column grid
- Tablet: 2-column grid
- Mobile: 1-column stack

## Dependencies

- CustomerContext for personalization
- ProgressContext for visited states
- RewardsContext for points display
