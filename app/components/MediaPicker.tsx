import React from "react";
import { ImageCarousel, type CarouselImage } from "./ImageCarousel";
import { VideoPlayer } from "./VideoPlayer";


interface MediaItem {
  type: 'video' | 'images';
  videoSrc?: string;
  posterSrc?: string;
  images?: CarouselImage[];
  title?: string;
  linkUrl?: string; // Optional external link
}

interface MediaPickerProps {
  media: MediaItem;
}

export const MediaPicker: React.FC<MediaPickerProps> = ({ media }) => {
  const content = (() => {
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
  })();

  // If there's a link, wrap the content in an anchor tag
  if (media.linkUrl) {
    return (
      <a
        href={media.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity relative group"
      >
        {content}
        {/* Overlay indicator for external link */}
        <div className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </a>
    );
  }

  return content;
};

export type {MediaItem};