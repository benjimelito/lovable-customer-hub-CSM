# Customer Hub - Implementation Tasks

> **Reference PRDs:** All tasks reference their corresponding PRD files in `/docs/`

> **⚠️ ENGAGEMENT GOALS:** Before implementing each phase, review the Engagement Goals section in the corresponding PRD. Every feature should be designed to trigger the specified THINK and FEEL outcomes. See `prd-customer-hub-overview.md` for the master framework.

---

## Engagement Goals Quick Reference

| Page       | THINK          | FEEL                | Key Question to Ask                                         |
| ---------- | -------------- | ------------------- | ----------------------------------------------------------- |
| Landing    | Impact, Future | Inspired, Trust     | "Does this make them feel like they're seeing the future?"  |
| Usage      | Speed, Unlock  | FOMO, Enabled       | "Does this create urgency by revealing hidden usage?"       |
| Process    | Future         | Trust, Future-proof | "Does this feel like partnership, not a transaction?"       |
| Research   | Impact, Unlock | Inspired, Trust     | "Does this demonstrate AI capability while building trust?" |
| Social     | Speed          | FOMO, Future-proof  | "Does this make them feel like they're falling behind?"     |
| Actions    | Unlock         | Enabled             | "Is every task clearly removing a constraint?"              |
| FAQ        | All            | Trust, Enabled      | "Does this remove objections and build confidence?"         |
| Swag       | -              | Inspired, Enabled   | "Does this feel like a gift, not a gimmick?"                |
| Demo Ideas | Impact, Unlock | Inspired, Enabled   | "Does this make them excited about what's possible?"        |

## Phase 0: Foundation Setup ✅ COMPLETED

**PRD Reference:** `prd-customer-hub-overview.md`

- [x] Create `src/data/` folder for mock data files
- [x] Create `src/data/customer.ts` with mock customer data (consolidated in mockData.ts)
- [x] Create `src/data/metrics.ts` with mock usage metrics (consolidated in mockData.ts)
- [x] Create `src/data/stages.ts` with mock sales stages (consolidated in mockData.ts)
- [x] Create `src/data/companies.ts` with mock matched companies (consolidated in mockData.ts)
- [x] Create `src/data/tasks.ts` with mock action items (consolidated in mockData.ts)
- [x] Create `src/data/faq.ts` with mock FAQ content (consolidated in mockData.ts)
- [x] Create `src/data/swag.ts` with mock swag catalog (consolidated in mockData.ts)
- [x] Create `src/contexts/CustomerContext.tsx`
- [x] Create `src/contexts/RewardsContext.tsx`
- [x] Create `src/contexts/ProgressContext.tsx`
- [x] Create `src/components/hub/HubLayout.tsx` wrapper component
- [x] Update `src/App.tsx` with all new routes
- [x] Wrap App with context providers

---

## Phase 1: Landing Page Transformation ✅ COMPLETED

**PRD Reference:** `prd-landing-page.md`

- [x] Create `src/components/hub/HubCard.tsx` component
- [x] Update `src/pages/Home.tsx` hero with dynamic company name (created CustomerHubHome.tsx)
- [x] Replace feature cards with 8 hub section cards
- [x] Add navigation links to each hub section
- [x] Add progress indicator to hero section (ProgressBadge component)
- [x] Test responsive layout (4-col → 2-col → 1-col)

### Phase 1.5: Landing Page Enhancements ✅ COMPLETED

**PRD Reference:** `prd-landing-page.md` (updated)

- [x] Create `src/components/hub/AEInfoCard.tsx` (Account Executive card)
- [x] Add AE information section with contact buttons
- [x] Add mock data for AE (in mockData.ts)
- [x] Add "Book a call" Calendly integration (link)

---

## Phase 2: Usage Dashboard (/usage) ✅ COMPLETED

**PRD Reference:** `prd-usage-dashboard.md`

### Core Features

- [x] Create `src/pages/UsageDashboard.tsx`
- [x] Create `src/components/hub/AnimatedCounter.tsx`
- [x] Create `src/components/hub/UsageStatCard.tsx`
- [x] Create `src/components/hub/TrendChart.tsx` using Recharts
- [x] Build stats cards grid (5 metrics)
- [x] Add trend charts section (3 charts)
- [x] Add loading skeleton states
- [x] Wrap with HubLayout
- [x] Test responsive behavior

### Internal Usage Discovery

- [x] Create `src/components/hub/OrganizationUsage.tsx`
- [x] Create `src/components/hub/DepartmentBreakdown.tsx`
- [x] Create `src/components/hub/TopProjectsGrid.tsx`
- [x] Create `src/components/hub/ProjectPreviewCard.tsx`
- [x] Add organization usage summary card (workspaces, users, ARR)
- [x] Add department breakdown visualization
- [x] Add top projects by department grid
- [x] Add "Remix this project" functionality
- [x] Add mock data for organization usage

---

## Phase 3: GTM Sales Process (/process)

**PRD Reference:** `prd-gtm-sales-process.md`

- [ ] Create `src/pages/SalesProcess.tsx`
- [ ] Create `src/components/hub/Timeline.tsx`
- [ ] Create `src/components/hub/TimelineStage.tsx`
- [ ] Create `src/components/hub/StageContent.tsx`
- [ ] Create `src/components/hub/AgendaItem.tsx`
- [ ] Add current stage highlighting with pulse animation
- [ ] Add expandable step details
- [ ] Add pre-call agenda section
- [ ] Connect to CustomerContext for deal stage
- [ ] Test responsive behavior (horizontal → vertical)

---

## Phase 4: AI Research Insights (/research)

**PRD Reference:** `prd-ai-research-insights.md`

### Core Features

- [ ] Enable Lovable Cloud (if not already enabled)
- [ ] Create `supabase/functions/generate-research/index.ts`
- [ ] Create `src/pages/ResearchInsights.tsx`
- [ ] Create `src/components/hub/StrategyCard.tsx`
- [ ] Create `src/components/hub/PainPointCard.tsx`
- [ ] Create `src/components/hub/QuestionCard.tsx`
- [ ] Add AI generation with loading states
- [ ] Add regenerate functionality
- [ ] Add localStorage caching
- [ ] Add mock data fallback
- [ ] Test responsive behavior

### Research Transparency (NEW)

- [ ] Create `src/components/hub/ResearchSourcesList.tsx`
- [ ] Create `src/components/hub/ConfidenceIndicator.tsx`
- [ ] Add "How this was generated" expandable section
- [ ] Add source citations with links (earnings calls, job postings, etc.)
- [ ] Add methodology explanation
- [ ] Add confidence score display
- [ ] Add "last generated" timestamp
- [ ] Add mock data for research metadata

---

## Phase 5: Social Proof (/social)

**PRD Reference:** `prd-social-proof.md`

### Core Features

- [ ] Create `src/pages/SocialProof.tsx`
- [ ] Create `src/components/hub/CompanyCard.tsx`
- [ ] Create `src/components/hub/AIMatchedBadge.tsx`
- [ ] Create `src/components/hub/CaseStudyCard.tsx`
- [ ] Create `src/components/hub/TestimonialCarousel.tsx`
- [ ] Build "Companies like you" section
- [ ] Add match score display
- [ ] Add case study previews
- [ ] Test responsive behavior

### FOMO Messaging (NEW)

- [ ] Add AI-generated transparency callout
- [ ] Add dynamic FOMO messaging ("X similar companies chose Lovable this quarter")
- [ ] Add personalized badge with company name
- [ ] Add pulsing animation on AI-matched badge

---

## Phase 6: Action Items (/actions)

**PRD Reference:** `prd-action-items.md`

### Core Features

- [ ] Create `src/pages/ActionItems.tsx`
- [ ] Create `src/components/hub/TaskItem.tsx`
- [ ] Create `src/components/hub/TaskList.tsx`
- [ ] Create `src/components/hub/ProgressRing.tsx`
- [ ] Create `src/components/hub/CategoryTabs.tsx`
- [ ] Implement checkbox completion with localStorage
- [ ] Add progress indicator section
- [ ] Integrate with RewardsContext for points
- [ ] Add category filtering
- [ ] Add completion animations
- [ ] Test responsive behavior

### High-Value Enterprise Tasks (NEW)

- [ ] Add "Upload Design System" task with Figma link
- [ ] Add "Connect Data Sources" task with upload flow
- [ ] Add "Configure SSO" task
- [ ] Add "Submit Demo Ideas" task (links to /demo-ideas)
- [ ] Add time estimates to task cards
- [ ] Add external URL support for tasks

---

## Phase 7: FAQ with AI Chatbot (/faq)

**PRD Reference:** `prd-faq-chatbot.md`

- [ ] Create `src/pages/FAQPage.tsx`
- [ ] Create `src/components/hub/FAQAccordion.tsx` (extract from existing)
- [ ] Create `src/components/hub/ChatBot.tsx`
- [ ] Create `src/components/hub/MessageBubble.tsx`
- [ ] Create `src/components/hub/TypingIndicator.tsx`
- [ ] Create `src/components/hub/SuggestedQuestions.tsx`
- [ ] Create `supabase/functions/faq-chat/index.ts`
- [ ] Build message list with scroll
- [ ] Add typing indicator
- [ ] Add suggested questions feature
- [ ] Add error handling and fallbacks
- [ ] Test responsive behavior (side-by-side → tabbed)

---

## Phase 8: Swag Redemption (/swag)

**PRD Reference:** `prd-swag-redemption.md`

### Core Features

- [ ] Create `src/pages/SwagRedemption.tsx`
- [ ] Create `src/components/hub/SwagCard.tsx`
- [ ] Create `src/components/hub/SwagGrid.tsx`
- [ ] Create `src/components/hub/RedemptionForm.tsx`
- [ ] Create `src/components/hub/ConfirmationModal.tsx`
- [ ] Create `src/components/hub/PointsBalance.tsx`
- [ ] Build swag catalog grid
- [ ] Add category filters
- [ ] Build redemption flow with form
- [ ] Add confirmation animation
- [ ] Integrate with RewardsContext
- [ ] Add insufficient points states
- [ ] Test responsive behavior

### Proactive Reward Notifications (NEW)

- [ ] Create `src/components/hub/RewardToast.tsx`
- [ ] Add first-login reward notification ("Welcome! Claim your free gift")
- [ ] Add milestone notifications (100 points, etc.)
- [ ] Add task completion reward notifications
- [ ] Add notification persistence (localStorage)
- [ ] Integrate with Sonner toast system

---

## Phase 8.5: AI Demo Ideas (/demo-ideas) (NEW)

**PRD Reference:** `prd-demo-ideas.md`

- [ ] Create `src/pages/DemoIdeas.tsx`
- [ ] Create `src/components/hub/UseCaseSuggestionCard.tsx`
- [ ] Create `src/components/hub/DemoIdeaForm.tsx`
- [ ] Create `src/components/hub/IdeasSummary.tsx`
- [ ] Create `supabase/functions/generate-use-cases/index.ts`
- [ ] Build AI-generated suggestions grid
- [ ] Build custom idea submission form (1-3 ideas)
- [ ] Add idea validation (min 1, max 3)
- [ ] Add AI enhancement for submitted ideas
- [ ] Add submission confirmation flow
- [ ] Integrate with RewardsContext for points
- [ ] Add mock data for use case suggestions
- [ ] Test responsive behavior

---

## Phase 9: Integration & Polish

**PRD Reference:** `prd-customer-hub-overview.md`

- [ ] Connect all contexts across pages
- [ ] Implement gamification points system fully
- [ ] Add achievement unlocks
- [ ] Test all navigation flows
- [ ] Verify mobile responsiveness on all pages
- [ ] Add toast notifications for all actions
- [ ] Test context persistence (localStorage)
- [ ] Performance optimization
- [ ] Final cross-browser testing
- [ ] Documentation update

---

## Design System & Component Mapping

### Critical Design Tokens (DO NOT CHANGE)

```
Cards:
  - Background: bg-[#F7F4ED] or bg-[#FCFBF8]
  - Border: border-[#D8D6CF] or border-[#ECEAE4]
  - Radius: rounded-3xl (24px)
  - Padding: p-6

Typography:
  - Page heading: text-[48px] font-semibold leading-[110%] tracking-[-0.03em]
  - Card heading: text-2xl font-medium leading-[110%] tracking-[-0.01em]
  - Body text: text-base leading-[22px] tracking-[-0.01em]
  - Muted text: text-muted-foreground

Icons:
  - Container: w-12 h-12 rounded-[9.6px]
  - With colored bg + border (e.g., bg-[#D4E0F9] border-[#9CAEFF])

Animations:
  - BlurFade for scroll reveal
  - transition-all duration-500 for state changes
  - hover:-translate-y-1 for card hover
```

### Component Mapping by Phase

| Phase                               | Reuse from `/showcase`                                          | Reuse from `/ui`                                |
| ----------------------------------- | --------------------------------------------------------------- | ----------------------------------------------- |
| **Phase 1.5: Landing Enhancements** | `FeatureShowcaseCard`                                           | `Avatar`, `Button`, `BlurFade`                  |
| **Phase 2: Usage Dashboard**        | `StatCard`, `FeatureShowcaseCard`, `SectionHeader`              | `BlurFade`, `Skeleton`                          |
| **Phase 3: Sales Process**          | `ExpandingCardsSection` pattern, `UseCaseCard` icon box pattern | `BlurFade`, `Collapsible`                       |
| **Phase 4: AI Research**            | `UseCaseCard`, `FeatureShowcaseCard`                            | `BlurFade`, `Skeleton`, `Button`, `Collapsible` |
| **Phase 5: Social Proof**           | `TestimonialCard` ✅, `UseCaseCard`, `ContentCarousel` pattern  | `BlurFade`, `Avatar`, `Badge`                   |
| **Phase 6: Action Items**           | `UseCaseCard` pattern                                           | `Checkbox`, `Progress`, `Tabs`, `Badge`         |
| **Phase 7: FAQ & Chatbot**          | `FAQSection` ✅ (direct reuse)                                  | `Accordion`, `ScrollArea`, `Input`              |
| **Phase 8: Swag Redemption**        | `FeatureShowcaseCard`                                           | `Dialog`, `Form`, `Button`, `Badge`             |
| **Phase 8.5: Demo Ideas**           | `UseCaseCard`, `FeatureShowcaseCard`                            | `Form`, `Checkbox`, `Badge`, `Textarea`         |

### Showcase Components Reference

Located in `src/components/showcase/`:

- **StatCard** - Large number display with description
- **UseCaseCard** - Icon box + title + description pattern
- **TestimonialCard** - Quote with avatar and attribution
- **FAQSection** - Split layout with accordion
- **FeatureShowcaseCard** - Image/gradient header + content + link
- **ContentCarousel** - Auto-rotating slides with navigation
- **ExpandingCardsSection** - Horizontal expanding cards with pagination
- **SectionHeader** - Page section title + subtitle

---

## Notes

### Implementation Order Rationale

1. **Phase 0** must be complete before any other phase
2. **Phase 1** provides navigation to all other pages
3. **Phases 2-3** are simpler, build momentum
4. **Phases 4 & 7** require Lovable Cloud (AI features)
5. **Phase 6 & 8** depend on RewardsContext working
6. **Phase 9** is final integration

### Design Constraint Reminder

⚠️ **DO NOT MODIFY** existing UI elements, colors, animations, or component styles. Focus ONLY on functionality.

### Mock Data Approach

All data is mock/configurable. No real APIs. Data files in `src/data/` can be easily swapped for real API calls later.
