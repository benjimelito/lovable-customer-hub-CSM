import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FeedbackForm from "./FeedbackForm";

interface FeedbackModalProps {
  className?: string;
}

const FeedbackModal = ({ className }: FeedbackModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className={className}>
          <MessageSquare className="w-4 h-4 mr-2" />
          Share Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Share Your Feedback</DialogTitle>
        </DialogHeader>
        <FeedbackForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
