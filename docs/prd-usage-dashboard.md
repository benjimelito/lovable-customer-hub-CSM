# Usage Dashboard PRD

## Overview

The Usage Dashboard (`/usage`) displays project statistics and account metrics with animated counters and trend visualizations. It showcases the value Lovable has delivered to the prospect's organization.

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Card component styles
- Animation configurations
- Color scheme and design tokens
- Typography scales

## Features

### 1. Animated Stat Counters

Display key metrics with count-up animations:

| Metric | Label | Mock Value | Format |
|--------|-------|------------|--------|
| accounts | Team Accounts | 12 | number |
| projects | Projects Built | 47 | number |
| activeUsers | Active Users | 89 | number |
| deployments | Deployments | 234 | number |
| codeGenerated | Code Generated | 1.2M | abbreviated |

### 2. AnimatedCounter Component

```typescript
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  format?: 'number' | 'abbreviated' | 'percentage';
  prefix?: string;
  suffix?: string;
}
```

Animation specs:
- Duration: 2 seconds
- Easing: easeOut
- Trigger: on viewport entry
- Decimals: 0 for counts, 1 for percentages

### 3. Stats Cards Grid

Each stat displayed in a card with:
- Icon (top left)
- Metric value (large, animated)
- Label (below value)
- Trend indicator (optional, +/- percentage)

Layout: 5 cards in responsive grid

### 4. Trend Charts Section

Using Recharts (already installed):

**Chart 1: Projects Over Time**
- Line chart
- Last 6 months
- Show growth trajectory

**Chart 2: Deployment Frequency**
- Bar chart
- Weekly breakdown
- Last 4 weeks

**Chart 3: User Adoption**
- Area chart
- Daily active users
- Last 30 days

## Component Structure

```
src/pages/UsageDashboard.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title: "Usage Dashboard"
│   │   └── Subtitle: "Your Lovable metrics at a glance"
│   ├── Stats Cards Grid
│   │   └── StatCard (x5)
│   │       └── AnimatedCounter
│   └── Charts Section
│       ├── ProjectsChart
│       ├── DeploymentsChart
│       └── UsersChart
```

## Mock Data

```typescript
// src/data/metrics.ts
export const mockMetrics = {
  accounts: 12,
  projects: 47,
  activeUsers: 89,
  deployments: 234,
  codeGenerated: 1200000,
  trends: {
    projects: [/* monthly data */],
    deployments: [/* weekly data */],
    users: [/* daily data */],
  }
};
```

## Animations

1. **Page entry:** BlurFade on all elements
2. **Counter animation:** Triggered when card enters viewport
3. **Chart animation:** Lines/bars animate on load

## Loading States

- Skeleton cards while "loading" metrics
- Simulate 500ms delay for realism

## Responsive Behavior

- Desktop: 5-column stats grid, charts side by side
- Tablet: 3-column stats, charts stacked
- Mobile: 2-column stats, charts full width
