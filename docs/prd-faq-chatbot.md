# FAQ with AI Chatbot PRD

## Overview

The FAQ page (`/faq`) combines a traditional FAQ accordion with an AI-powered chatbot. Users can browse common questions or ask the chatbot for personalized answers.

## Design Constraints

⚠️ **DO NOT MODIFY:**
- Existing FAQ accordion styles
- Card component styles
- Animation configurations
- Color scheme and design tokens

## Features

### 1. FAQ Accordion Section

Reuse existing FAQ component with updated content:

```typescript
interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
```

Categories:
- Getting Started
- Enterprise Features
- Pricing & Plans
- Security & Compliance
- Integrations
- Support

### 2. AI Chatbot Component

Powered by Lovable AI (Lovable Cloud):

```typescript
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  initialMessages?: Message[];
  suggestedQuestions?: string[];
  onSendMessage: (message: string) => Promise<string>;
}
```

### 3. Message Bubbles UI

User messages:
- Right-aligned
- Brand color background
- White text
- Timestamp below

Assistant messages:
- Left-aligned
- Muted background
- Dark text
- Lovable avatar
- Timestamp below

### 4. Typing Indicator

When AI is generating:
- Three-dot animation
- "Lovable is typing..."
- Left-aligned like assistant message

### 5. Suggested Questions

Quick-start questions:
- Display as pills/chips
- Click to auto-send
- Update based on conversation context

```typescript
const suggestedQuestions = [
  "What's included in the Enterprise plan?",
  "How does Lovable handle security?",
  "Can I integrate with my existing tools?",
  "What support options are available?",
];
```

### 6. Knowledge Base

Chatbot context includes:
- Lovable documentation
- Enterprise-specific content
- Pricing information
- Security & compliance details
- FAQ content (for consistency)

## Component Structure

```
src/pages/FAQPage.tsx
├── HubLayout
│   ├── Page Header
│   │   ├── Title: "FAQ & Support"
│   │   └── Subtitle: "Get answers to your questions"
│   ├── Layout (Split or Tabbed)
│   │   ├── FAQ Section
│   │   │   ├── Category Filter
│   │   │   └── Accordion
│   │   │       └── FAQItem (xN)
│   │   └── Chatbot Section
│   │       ├── Message List
│   │       │   └── MessageBubble (xN)
│   │       ├── TypingIndicator
│   │       ├── Suggested Questions
│   │       └── Input Area
```

## Edge Function

`supabase/functions/faq-chat/index.ts`

```typescript
// Request
{
  messages: Message[];
  context: {
    companyName: string;
    industry: string;
    dealStage: string;
  };
}

// Response (streaming)
{
  content: string;
  suggestedFollowUp?: string[];
}
```

System prompt includes:
- Lovable product knowledge
- Enterprise features
- Pricing details
- Professional, helpful tone
- Awareness of customer context

## Mock Data

```typescript
// src/data/faq.ts
export const mockFAQs: FAQItem[] = [
  {
    id: '1',
    category: 'Getting Started',
    question: 'How do I get started with Lovable?',
    answer: 'Getting started with Lovable is simple...'
  },
  {
    id: '2',
    category: 'Enterprise Features',
    question: 'What enterprise features are available?',
    answer: 'Our Enterprise plan includes SSO, advanced security...'
  },
  // ... more FAQs
];
```

## UI States

### Empty State
- Welcome message
- Suggested questions prominent
- "Ask me anything about Lovable"

### Loading State
- Typing indicator
- Input disabled
- Scroll to bottom

### Error State
- Error message in chat
- Retry button
- Fall back to FAQ

## Animations

1. **Page entry:** BlurFade on sections
2. **Message send:** Slide up animation
3. **Message receive:** Fade in from left
4. **Typing indicator:** Pulsing dots
5. **Accordion:** Smooth expand/collapse

## Integration

- CustomerContext for personalization
- ProgressContext for tracking
- RewardsContext for engagement points

## Responsive Behavior

- Desktop: Side-by-side FAQ and chatbot
- Tablet: Tabbed view (FAQ | Chat)
- Mobile: Tabbed view, full-width chat

## Accessibility

- Keyboard navigation for accordion
- Screen reader support for chat
- Focus management in input
- ARIA labels for interactive elements
