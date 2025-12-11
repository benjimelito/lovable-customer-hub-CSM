import { LifeBuoy, Users, BookOpen, Ticket, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HubLayout from "@/components/hub/HubLayout";
import { BlurFade } from "@/components/ui/blur-fade";
import TeamMemberCard from "@/components/hub/TeamMemberCard";
import ResourceCard from "@/components/hub/ResourceCard";
import TrainingCard from "@/components/hub/TrainingCard";
import { Button } from "@/components/ui/button";
import { mockLovableTeam, mockResources, mockTrainingPrograms } from "@/data/mockData";

const EnablementSupport = () => {
  return (
    <HubLayout sectionId="enablement-support">
      <div className="space-y-16">
        {/* Back Button */}
        <BlurFade delay={0.05}>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </Link>
        </BlurFade>

        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
              <LifeBuoy className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-medium text-teal-500">Enablement & Support</span>
            </div>
            <h1 className="text-[48px] font-semibold tracking-[-0.03em] text-foreground mb-4">
              Customer Enablement & Support
            </h1>
            <p className="text-xl text-muted-foreground">
              Resources, training, and your dedicated Lovable team—everything you need to succeed.
            </p>
          </div>
        </BlurFade>

        {/* Resources Section */}
        <section>
          <BlurFade delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Resources</h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockResources.map((resource, index) => (
              <BlurFade key={resource.id} delay={0.25 + index * 0.05}>
                <ResourceCard
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  link={resource.link}
                  items={resource.items}
                  type={resource.type}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Support Services Section */}
        <section>
          <BlurFade delay={0.4}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Meet Your Lovable Team</h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <BlurFade delay={0.45}>
              <TeamMemberCard
                {...mockLovableTeam.csm}
                showBooking={true}
              />
            </BlurFade>
            <BlurFade delay={0.5}>
              <TeamMemberCard
                {...mockLovableTeam.solutionsArchitect}
              />
            </BlurFade>
            <BlurFade delay={0.55}>
              <TeamMemberCard
                name={mockLovableTeam.accountExecutive.name}
                title={mockLovableTeam.accountExecutive.title}
                email={mockLovableTeam.accountExecutive.email}
                photo={mockLovableTeam.accountExecutive.photoUrl}
                calendlyUrl={mockLovableTeam.accountExecutive.calendlyUrl}
                linkedInUrl={mockLovableTeam.accountExecutive.linkedInUrl}
                bio={mockLovableTeam.accountExecutive.bio}
              />
            </BlurFade>
          </div>

          <BlurFade delay={0.6}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.open(mockLovableTeam.csm.calendlyUrl, "_blank")}
              >
                <Calendar className="w-4 h-4" />
                Book a Meeting with Your CSM
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => window.open("https://support.lovable.dev", "_blank")}
              >
                <Ticket className="w-4 h-4" />
                Submit a Technical Support Ticket
              </Button>
            </div>
          </BlurFade>
        </section>

        {/* Training, Education & Empowerment Section */}
        <section>
          <BlurFade delay={0.65}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Training, Education & Empowerment
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockTrainingPrograms.map((program, index) => (
              <BlurFade key={program.id} delay={0.7 + index * 0.05}>
                <TrainingCard
                  title={program.title}
                  description={program.description}
                  icon={program.icon}
                  type={program.type}
                  link={program.link}
                  schedule={program.schedule}
                  nextSession={program.nextSession}
                  paths={program.paths}
                  stats={program.stats}
                  benefits={program.benefits}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>
    </HubLayout>
  );
};

export default EnablementSupport;
