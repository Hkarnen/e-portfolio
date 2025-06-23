import React from "react";

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc?: string;
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  posterSrc,
  title
}) => {
  return (
    <div className="aspect-video relative overflow-hidden rounded-lg">
      <video 
        controls
        className="w-full h-full object-cover"
        poster={posterSrc}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-3">
          {title}
        </div>
      )}
    </div>
  );
};
