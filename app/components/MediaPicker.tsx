import React from "react";
import { ImageCarousel, type CarouselImage } from "./ImageCarousel";
import { VideoPlayer } from "./VideoPlayer";


interface MediaItem {
  type: 'video' | 'images';
  videoSrc?: string;
  posterSrc?: string;
  images?: CarouselImage[];
  title?: string;
}

interface MediaPickerProps {
  media: MediaItem;
}

export const MediaPicker: React.FC<MediaPickerProps> = ({ media }) => {
  if (media.type === 'video' && media.videoSrc) {
    return (
      <VideoPlayer
        videoSrc={media.videoSrc}
        posterSrc={media.posterSrc}
        title={media.title}
      />
    );
  }

  if (media.type === 'images' && media.images) {
    return <ImageCarousel images={media.images} />;
  }

  return (
    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
      <p className="text-gray-500 dark:text-gray-400">No media available</p>
    </div>
  );
};

export type {MediaItem};