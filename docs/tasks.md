# Customer Hub - Implementation Tasks

> **Reference PRDs:** All tasks reference their corresponding PRD files in `/docs/`

---

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

---

## Phase 2: Usage Dashboard (/usage)
**PRD Reference:** `prd-usage-dashboard.md`

- [ ] Create `src/pages/UsageDashboard.tsx`
- [ ] Create `src/components/hub/AnimatedCounter.tsx`
- [ ] Create `src/components/hub/StatCard.tsx`
- [ ] Create `src/components/hub/TrendChart.tsx` using Recharts
- [ ] Build stats cards grid (5 metrics)
- [ ] Add trend charts section (3 charts)
- [ ] Add loading skeleton states
- [ ] Wrap with HubLayout
- [ ] Test responsive behavior

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

---

## Phase 5: Social Proof (/social)
**PRD Reference:** `prd-social-proof.md`

- [ ] Create `src/pages/SocialProof.tsx`
- [ ] Create `src/components/hub/CompanyCard.tsx`
- [ ] Create `src/components/hub/AIMatchedBadge.tsx`
- [ ] Create `src/components/hub/CaseStudyCard.tsx`
- [ ] Create `src/components/hub/TestimonialCarousel.tsx`
- [ ] Build "Companies like you" section
- [ ] Add match score display
- [ ] Add case study previews
- [ ] Test responsive behavior

---

## Phase 6: Action Items (/actions)
**PRD Reference:** `prd-action-items.md`

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
