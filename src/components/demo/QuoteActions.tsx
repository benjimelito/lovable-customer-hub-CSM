import React, { useState } from "react";
import { Copy, Share2, Calendar, Check, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { toast } from "sonner";
import { QuoteParams, encodeQuoteParams, formatCurrency } from "@/lib/pricing";
import { useCustomer } from "@/contexts/CustomerContext";
import { mockAccountExecutive } from "@/data/mockData";

interface QuoteActionsProps {
  quoteParams: QuoteParams;
  totalAnnual: number;
}

const QuoteActions: React.FC<QuoteActionsProps> = ({ quoteParams, totalAnnual }) => {
  const [copied, setCopied] = useState(false);
  const { profile } = useCustomer();

  const getQuoteUrl = () => {
    const encoded = encodeQuoteParams(quoteParams);
    return `${window.location.origin}/demo?${encoded}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getQuoteUrl());
      setCopied(true);
      toast.success("Quote link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const handleShare = async () => {
    const shareText = `Check out this Lovable Enterprise quote for ${profile.companyName}:\n\nTotal Annual: ${formatCurrency(totalAnnual)}\n\n${getQuoteUrl()}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Lovable Enterprise Quote - ${profile.companyName}`,
          text: shareText,
          url: getQuoteUrl(),
        });
      } catch (err) {
        // User cancelled or share failed, copy to clipboard instead
        await navigator.clipboard.writeText(shareText);
        toast.success("Quote details copied to clipboard!");
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      toast.success("Quote details copied to clipboard!");
    }
  };

  const handleBookCall = () => {
    window.open(mockAccountExecutive.calendlyUrl, "_blank");
  };

  return (
    <BlurFade delay={0.55}>
      <div className="bg-[#F7F4ED] dark:bg-card border border-[#D8D6CF] dark:border-border rounded-3xl p-6">
        <h3 className="text-xl font-medium text-foreground mb-4">Next Steps</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Button
            variant="outline"
            className="w-full h-auto py-4 flex flex-col items-center gap-2 bg-background/50 hover:bg-background border-border/50"
            onClick={handleCopyLink}
          >
            {copied ? (
              <Check className="w-5 h-5 text-[#2B8A4B]" />
            ) : (
              <Link2 className="w-5 h-5 text-muted-foreground" />
            )}
            <span className="text-sm font-medium">
              {copied ? "Copied!" : "Copy Quote Link"}
            </span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-auto py-4 flex flex-col items-center gap-2 bg-background/50 hover:bg-background border-border/50"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium">Share with Team</span>
          </Button>

          <Button
            className="w-full h-auto py-4 flex flex-col items-center gap-2"
            onClick={handleBookCall}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Book a Call</span>
          </Button>
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          Your dedicated Account Executive: <span className="font-medium text-foreground">{mockAccountExecutive.name}</span>
        </p>
      </div>
    </BlurFade>
  );
};

export default QuoteActions;
