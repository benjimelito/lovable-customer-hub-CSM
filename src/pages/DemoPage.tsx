import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import HubLayout from "@/components/hub/HubLayout";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  DemoIntro,
  UsageEstimator,
  CommitmentSelector,
  PlatformFeeSlider,
  PricingModelToggle,
  QuoteSummary,
  CostBreakdown,
  ROICalculator,
  QuoteActions,
} from "@/components/demo";
import { useCustomer } from "@/contexts/CustomerContext";
import { useRewards } from "@/contexts/RewardsContext";
import {
  PRICING,
  CommitmentTier,
  UserBreakdown,
  calculateMonthlyCredits,
  calculateAnnualCredits,
  calculateEffectiveCreditCost,
  calculateSavings,
  findOptimalCommitment,
  calculatePerUserPricing,
  decodeQuoteParams,
  QuoteParams,
} from "@/lib/pricing";

const DemoPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { profile } = useCustomer();
  const { addPoints } = useRewards();
  const [hasGeneratedQuote, setHasGeneratedQuote] = useState(false);

  // Initialize from URL params or defaults
  const initialParams = useMemo(() => {
    if (searchParams.toString()) {
      return decodeQuoteParams(searchParams.toString());
    }
    return null;
  }, [searchParams]);

  // State
  const [mode, setMode] = useState<"simple" | "advanced">(initialParams?.mode || "simple");
  const [users, setUsers] = useState(initialParams?.users || 100);
  const [breakdown, setBreakdown] = useState<UserBreakdown>({
    power: initialParams?.powerUsers || 10,
    normal: initialParams?.normalUsers || 50,
    casual: initialParams?.casualUsers || 40,
  });
  const [commitment, setCommitment] = useState<CommitmentTier>(initialParams?.commitment || 0);
  const [platformFee, setPlatformFee] = useState(initialParams?.platformFee || PRICING.platformFee.default);
  const [enablePerUser, setEnablePerUser] = useState(initialParams?.enablePerUser || false);

  // Calculate credits
  const monthlyCredits = calculateMonthlyCredits(users, mode, breakdown);
  const annualCredits = calculateAnnualCredits(monthlyCredits);

  // Calculate costs
  const { effectiveCost: creditCost, projectedUsage, usesFullCommitment } = 
    calculateEffectiveCreditCost(annualCredits, commitment);
  const savings = calculateSavings(annualCredits, commitment);
  const totalAnnual = platformFee + creditCost;
  const monthlyEquivalent = Math.round(totalAnnual / 12);
  
  const totalUsers = mode === "simple" ? users : breakdown.power + breakdown.normal + breakdown.casual;
  const costPerUser = totalUsers > 0 ? monthlyEquivalent / totalUsers : 0;

  // Find optimal tier
  const optimalResult = findOptimalCommitment(annualCredits, commitment);
  const optimalSavings = optimalResult.currentSavingsIfSwitched;
  const optimalTierLabel = optimalResult.optimalLabel;
  const optimalTier = optimalResult.optimalTier;

  // Per-user pricing
  const perUserPricing = calculatePerUserPricing(totalUsers);

  // Award points for generating a quote (once)
  useEffect(() => {
    if (!hasGeneratedQuote && (users !== 100 || commitment !== 0 || platformFee !== PRICING.platformFee.default)) {
      setHasGeneratedQuote(true);
      addPoints(15);
    }
  }, [users, commitment, platformFee, hasGeneratedQuote, addPoints]);

  // Build quote params for sharing
  const quoteParams: QuoteParams = {
    company: profile.companyName,
    domain: undefined, // CustomerProfile doesn't have domain
    platformFee,
    mode,
    users: mode === "simple" ? users : undefined,
    powerUsers: mode === "advanced" ? breakdown.power : undefined,
    normalUsers: mode === "advanced" ? breakdown.normal : undefined,
    casualUsers: mode === "advanced" ? breakdown.casual : undefined,
    enablePerUser,
    commitment,
  };

  return (
    <HubLayout sectionId="demo" showBackground={false}>
      <section className="bg-background rounded-3xl pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Page Header */}
          <BlurFade delay={0}>
            <div className="text-center mb-12">
              <h1 className="text-[40px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground mb-4">
                Enterprise Quote Generator
              </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore pricing options and generate a custom quote for {profile.companyName}
            </p>
          </div>
        </BlurFade>

          {/* Demo Intro */}
          <div className="mb-8">
            <DemoIntro />
          </div>

          {/* Main Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Inputs */}
            <div className="lg:col-span-2 space-y-6">
              <UsageEstimator
                mode={mode}
                onModeChange={setMode}
                users={users}
                onUsersChange={setUsers}
                breakdown={breakdown}
                onBreakdownChange={setBreakdown}
                monthlyCredits={monthlyCredits}
                annualCredits={annualCredits}
              />

              <CommitmentSelector
                commitment={commitment}
                onCommitmentChange={setCommitment}
                optimalTier={optimalTier}
              />

              <PlatformFeeSlider
                platformFee={platformFee}
                onPlatformFeeChange={setPlatformFee}
              />

              <PricingModelToggle
                enablePerUser={enablePerUser}
                onToggle={setEnablePerUser}
                totalUsers={totalUsers}
              />
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <QuoteSummary
                platformFee={platformFee}
                creditCost={creditCost}
                totalAnnual={totalAnnual}
                monthlyEquivalent={monthlyEquivalent}
                costPerUser={costPerUser}
                savings={savings}
                optimalSavings={optimalSavings}
                optimalTierLabel={optimalTierLabel}
                usesFullCommitment={usesFullCommitment}
                enablePerUser={enablePerUser}
                perUserAnnual={perUserPricing.annual}
              />
            </div>
          </div>

          {/* Additional Sections */}
          <div className="mt-8 space-y-6">
            <CostBreakdown
              mode={mode}
              users={users}
              breakdown={breakdown}
              monthlyCredits={monthlyCredits}
              annualCredits={annualCredits}
              commitment={commitment}
              creditCost={creditCost}
              projectedUsage={projectedUsage}
              usesFullCommitment={usesFullCommitment}
            />

            <ROICalculator commitment={commitment} />

            <QuoteActions
              quoteParams={quoteParams}
              totalAnnual={enablePerUser ? perUserPricing.annual : totalAnnual}
            />
          </div>
        </div>
      </section>
    </HubLayout>
  );
};

export default DemoPage;
