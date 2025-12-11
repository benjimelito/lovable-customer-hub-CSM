import React, { useState } from "react";
import HubLayout from "@/components/hub/HubLayout";
import Timeline from "@/components/hub/Timeline";
import StageContent from "@/components/hub/StageContent";
import PreCallAgenda from "@/components/hub/PreCallAgenda";
import { BlurFade } from "@/components/ui/blur-fade";
import { useCustomer } from "@/contexts/CustomerContext";
import { dealStages, mockAgenda } from "@/data/mockData";
import { ArrowRight } from "lucide-react";

const SalesProcess: React.FC = () => {
  const { profile } = useCustomer();
  const currentStage = dealStages.find(s => s.status === "current") || dealStages[0];
  const [selectedStageId, setSelectedStageId] = useState(currentStage.id);

  const selectedStage = dealStages.find(s => s.id === selectedStageId) || currentStage;

  return (
    <HubLayout sectionId="process" showBackground={false}>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16 space-y-10">
          {/* Page Header */}
          <BlurFade delay={0.05}>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">
                Partnership Journey
              </p>
              <h1 className="text-[36px] md:text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Where We Are
              </h1>
              <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                Complete transparency in our process. Here's the current state of our partnership with {profile.companyName}.
              </p>
            </div>
          </BlurFade>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Timeline - Left Side */}
            <div className="lg:col-span-5">
              <BlurFade delay={0.1}>
                <Timeline
                  stages={dealStages}
                  currentStageId={currentStage.id}
                  selectedStageId={selectedStageId}
                  onStageClick={setSelectedStageId}
                />
              </BlurFade>
            </div>

            {/* Stage Content - Right Side */}
            <div className="lg:col-span-7">
              <StageContent stage={selectedStage} />
            </div>
          </div>

          {/* Pre-Call Agenda */}
          {currentStage.status === "current" && (
            <PreCallAgenda items={mockAgenda} />
          )}

          {/* What Lovable Delivers */}
          <BlurFade delay={0.2}>
            <div className="p-6 border border-border rounded-2xl bg-card">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wide mb-6">
                What We Deliver at Each Stage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">During Evaluation</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      Dedicated technical support
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      POC environment setup
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      Integration guidance
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">At Close</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      Custom onboarding plan
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      Team training sessions
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      Success manager assigned
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Ongoing</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      Quarterly business reviews
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      Priority feature requests
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      24/7 enterprise support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* CTA Section */}
          <BlurFade delay={0.25}>
            <div className="p-8 border border-border rounded-2xl bg-card text-center">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Questions About the Process?
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
                We believe in complete transparency. If anything is unclear, let's discuss it.
              </p>
              <a 
                href="/faq" 
                className="inline-flex items-center justify-center px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View FAQ
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </HubLayout>
  );
};

export default SalesProcess;
