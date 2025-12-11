import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TypingIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarImage src="/images/lovable-logo-text-light.svg" alt="Lovable" />
        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
          L
        </AvatarFallback>
      </Avatar>

      <div className="bg-[#F7F4ED] border border-[#D8D6CF] rounded-2xl rounded-tl-md px-4 py-3">
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-muted-foreground/50"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">Lovable is typing...</p>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
