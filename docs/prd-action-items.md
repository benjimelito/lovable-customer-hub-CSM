# Action Items PRD

## Overview

The Action Items page (`/actions`) provides a task checklist for pre-call preparation. It gamifies the onboarding process by tracking completion and integrating with the rewards system.

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Card component styles
- Checkbox component styles
- Animation configurations
- Color scheme and design tokens

## Features

### 1. Task Checklist

Categorized tasks for prospect preparation:

```typescript
interface Task {
  id: string;
  category: 'setup' | 'integration' | 'team' | 'content';
  title: string;
  description: string;
  points: number;
  completed: boolean;
  completedAt?: string;
  link?: string;
  priority: 'required' | 'recommended' | 'optional';
}
```

### 2. Task Categories

| Category | Label | Tasks |
|----------|-------|-------|
| setup | Getting Started | Design system setup, Account configuration |
| integration | Integrations | Data integrations, API connections |
| team | Team Setup | Enterprise account, Team invitations |
| content | Content | Review documentation, Watch demo |

### 3. Task List Component

```typescript
interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (taskId: string) => void;
  category?: string;
}
```

Each task shows:
- Checkbox
- Title
- Description (expandable)
- Points value
- Priority badge
- Link button (if applicable)
- Completion timestamp

### 4. Checkbox Completion Tracking

- Persist completion state in localStorage
- Sync with ProgressContext
- Award points via RewardsContext
- Show toast on completion

### 5. Progress Indicator

Overall progress section:
- Circular progress ring
- "X of Y tasks completed"
- Points earned display
- Category breakdown

```typescript
interface ProgressIndicatorProps {
  completed: number;
  total: number;
  points: number;
  maxPoints: number;
}
```

### 6. Category Tabs/Filters

- All tasks view
- Filter by category
- Filter by priority
- Show/hide completed

## Component Structure

```
src/pages/ActionItems.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title: "Action Items"
│   │   └── Subtitle: "Complete these tasks before your call"
│   ├── Progress Section
│   │   ├── ProgressRing
│   │   ├── Stats Summary
│   │   └── Points Display
│   ├── Category Tabs
│   │   └── Tab (x4)
│   └── Task List
│       └── TaskItem (xN)
```

## Mock Data

```typescript
// src/data/tasks.ts
export const mockTasks: Task[] = [
  {
    id: '1',
    category: 'setup',
    title: 'Review the Design System',
    description: 'Explore Lovable\'s design tokens and component library',
    points: 10,
    completed: false,
    priority: 'required',
    link: '/design-system'
  },
  {
    id: '2',
    category: 'integration',
    title: 'Connect Data Sources',
    description: 'Set up integrations with your existing data systems',
    points: 20,
    completed: false,
    priority: 'recommended',
    link: '/integrations'
  },
  {
    id: '3',
    category: 'team',
    title: 'Set Up Enterprise Account',
    description: 'Configure your enterprise workspace settings',
    points: 15,
    completed: false,
    priority: 'required'
  },
  {
    id: '4',
    category: 'team',
    title: 'Invite Team Members',
    description: 'Add colleagues who will be joining the call',
    points: 10,
    completed: false,
    priority: 'recommended'
  },
  {
    id: '5',
    category: 'content',
    title: 'Watch Product Demo',
    description: 'See Lovable in action with a guided demo',
    points: 15,
    completed: false,
    priority: 'required',
    link: '/demo'
  },
  // ... more tasks
];
```

## Rewards Integration

On task completion:
1. Update task state
2. Call `addPoints(task.points, task.title)`
3. Check for achievements:
   - "First Task" - Complete first task
   - "Quick Start" - Complete all setup tasks
   - "Team Player" - Complete all team tasks
   - "Overachiever" - Complete all tasks

## Persistence

```typescript
// localStorage structure
{
  "customer-hub-tasks": {
    "1": { completed: true, completedAt: "2024-01-20T10:30:00Z" },
    "2": { completed: false },
    // ...
  }
}
```

## Animations

1. **Page entry:** BlurFade on sections
2. **Task completion:** Checkmark animation
3. **Progress ring:** Animated fill
4. **Points earned:** Counter animation
5. **Category switch:** Fade transition

## Responsive Behavior

- Desktop: Full task list with side progress
- Tablet: Stacked layout
- Mobile: Compact cards, progress at top
