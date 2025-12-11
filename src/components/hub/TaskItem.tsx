import React from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Sparkles } from "lucide-react";

interface Task {
  id: string;
  category: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  completedAt?: string;
  link?: string;
  priority: "required" | "recommended" | "optional";
  estimatedTime?: string;
  externalUrl?: string;
  unlockMessage?: string;
}

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
  index: number;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, index }) => {
  const priorityStyles = {
    required: "bg-rose-100 text-rose-700 border-rose-200",
    recommended: "bg-amber-100 text-amber-700 border-amber-200",
    optional: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-[#F7F4ED] border border-[#D8D6CF] rounded-2xl p-5 transition-all duration-300 hover:shadow-md ${
        task.completed ? "opacity-75" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <div className="pt-1">
          <Checkbox
            id={task.id}
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
            className="h-5 w-5 border-2 border-[#D8D6CF] data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3
              className={`font-medium text-foreground leading-tight ${
                task.completed ? "line-through text-muted-foreground" : ""
              }`}
            >
              {task.title}
            </h3>
            <Badge
              variant="outline"
              className={`shrink-0 text-xs ${priorityStyles[task.priority]}`}
            >
              {task.priority}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {task.description}
          </p>

          {/* Unlock message */}
          {task.unlockMessage && !task.completed && (
            <div className="flex items-center gap-2 text-xs text-primary mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{task.unlockMessage}</span>
            </div>
          )}

          {/* Meta row */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              {task.estimatedTime && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{task.estimatedTime}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-medium text-primary">
                  +{task.points} pts
                </span>
              </div>
            </div>

            {(task.link || task.externalUrl) && !task.completed && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href={task.externalUrl || task.link}
                  target={task.externalUrl ? "_blank" : undefined}
                  rel={task.externalUrl ? "noopener noreferrer" : undefined}
                >
                  {task.externalUrl ? "Open" : "Go"}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            )}
          </div>

          {/* Completed timestamp */}
          {task.completed && task.completedAt && (
            <p className="text-xs text-muted-foreground mt-2">
              Completed {new Date(task.completedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>

      {/* Completion overlay animation */}
      {task.completed && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3"
        >
          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TaskItem;
