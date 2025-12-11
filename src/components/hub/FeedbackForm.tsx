import { useState } from "react";
import { Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface FeedbackFormProps {
  onSubmit?: (feedback: { name: string; feedback: string; type: string }) => void;
}

const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const feedbackTypes = [
    { id: "general", label: "General Feedback" },
    { id: "feature", label: "Feature Request" },
    { id: "improvement", label: "Improvement Suggestion" },
    { id: "issue", label: "Report an Issue" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      toast({
        title: "Feedback required",
        description: "Please enter your feedback before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSubmit?.({ name, feedback, type: feedbackType });
    
    toast({
      title: "Feedback submitted",
      description: "Thank you for sharing your thoughts with us!",
    });

    // Reset form
    setName("");
    setFeedback("");
    setFeedbackType("general");
    setIsSubmitting(false);
  };

  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-primary/10">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Share Your Feedback</h3>
          <p className="text-sm text-muted-foreground">
            We value both positive feedback and constructive suggestions
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1">
            Your Name (optional)
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="bg-background/50"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-2">
            Feedback Type
          </label>
          <div className="flex flex-wrap gap-2">
            {feedbackTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setFeedbackType(type.id)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  feedbackType === type.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="feedback" className="text-sm font-medium text-foreground block mb-1">
            Your Feedback
          </label>
          <Textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts, ideas, or suggestions..."
            className="min-h-[120px] bg-background/50"
          />
        </div>

        <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
          <Send className="w-4 h-4" />
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
