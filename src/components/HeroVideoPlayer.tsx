import React, { useState } from "react";
import { Play } from "lucide-react";

interface HeroVideoPlayerProps {
  thumbnailUrl?: string;
  videoUrl?: string;
}

const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({
  thumbnailUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop",
  videoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoUrl) {
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative z-30 mx-auto w-full max-w-5xl px-4 -mt-16 mb-[-180px]">
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
        {/* Video/Thumbnail Container */}
        <div className="relative aspect-video w-full overflow-hidden">
          {isPlaying && videoUrl ? (
            <iframe
              src={videoUrl}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Thumbnail */}
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="h-full w-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Play Button */}
              <button
                onClick={handlePlay}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
              >
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </button>

              {/* Hover Badge */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-900 backdrop-blur-sm">
                <Play className="h-4 w-4" />
                <span>Watch demo</span>
              </div>

              {/* Content Preview */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L2 5V11L8 14L14 11V5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white/90">LOVABLE</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  See Lovable in action
                </h3>
                <p className="text-white/70 text-sm">
                  Watch how teams build full-stack apps in minutes
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroVideoPlayer;
