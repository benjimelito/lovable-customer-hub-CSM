import { Trophy, Star, Quote, MessageSquare, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HubLayout from "@/components/hub/HubLayout";
import { BlurFade } from "@/components/ui/blur-fade";
import AchievementCard from "@/components/hub/AchievementCard";
import QuoteCard from "@/components/hub/QuoteCard";
import SuccessStoryCard from "@/components/hub/SuccessStoryCard";
import FeedbackForm from "@/components/hub/FeedbackForm";
import {
  mockAchievements,
  mockCustomerQuotes,
  mockInternalSuccessStories,
} from "@/data/mockData";

const OutcomesSuccess = () => {
  return (
    <HubLayout sectionId="outcomes-success">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-500">Outcomes & Success</span>
            </div>
            <h1 className="text-[48px] font-semibold tracking-[-0.03em] text-foreground mb-4">
              Outcomes & Success Stories
            </h1>
            <p className="text-xl text-muted-foreground">
              Real impact, testimonials, and wins from your teams using Lovable.
            </p>
          </div>
        </BlurFade>

        {/* User & Team Highlights (Hall of Fame) */}
        <section>
          <BlurFade delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-yellow-500/10">
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Lovable Hall of Fame</h2>
                <p className="text-sm text-muted-foreground">
                  Recognizing outstanding achievements from your teams
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockAchievements.map((achievement, index) => (
              <BlurFade key={achievement.id} delay={0.25 + index * 0.05}>
                <AchievementCard
                  title={achievement.title}
                  description={achievement.description}
                  user={achievement.user}
                  userPhotoUrl={achievement.userPhotoUrl}
                  team={achievement.team}
                  date={achievement.date}
                  badge={achievement.badge}
                  color={achievement.color}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Customer Testimonials & Quotes */}
        <section>
          <BlurFade delay={0.5}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10">
                <Quote className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Testimonials & Quotes
                </h2>
                <p className="text-sm text-muted-foreground">
                  What your stakeholders are saying about Lovable
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockCustomerQuotes.map((quote, index) => (
              <BlurFade key={quote.id} delay={0.55 + index * 0.05}>
                <QuoteCard
                  quote={quote.quote}
                  author={quote.author}
                  authorPhotoUrl={quote.authorPhotoUrl}
                  role={quote.role}
                  source={quote.source}
                  impactArea={quote.impactArea}
                  date={quote.date}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Internal Team Success Stories */}
        <section>
          <BlurFade delay={0.8}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-green-500/10">
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Internal Team Success Stories
                </h2>
                <p className="text-sm text-muted-foreground">
                  How teams across your organization are leveraging Lovable
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockInternalSuccessStories.map((story, index) => (
              <BlurFade key={story.id} delay={0.85 + index * 0.05}>
                <SuccessStoryCard
                  projectName={story.projectName}
                  leader={story.leader}
                  estimatedActiveUsers={story.estimatedActiveUsers}
                  userType={story.userType}
                  primaryUseCases={story.primaryUseCases}
                  keyMetrics={story.keyMetrics}
                  nextUp={story.nextUp}
                  image={story.image}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Stakeholder Feedback Collection */}
        <section>
          <BlurFade delay={1.0}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-purple-500/10">
                <MessageSquare className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Share Your Feedback
                </h2>
                <p className="text-sm text-muted-foreground">
                  Help us improve by sharing your thoughts and suggestions
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={1.05}>
            <div className="max-w-2xl">
              <FeedbackForm />
            </div>
          </BlurFade>
        </section>
      </div>
    </HubLayout>
  );
};

export default OutcomesSuccess;
