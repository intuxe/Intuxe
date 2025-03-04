"use client";

import React, { useRef, useEffect } from 'react';

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            videoRef.current?.play();  // Safe with optional chaining
          } else {
            videoRef.current?.pause();  // Safe with optional chaining
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="/Videos/video.mp4"
        loop
        controls={false}
        muted={false}
        className="w-3/4 h-auto rounded-3xl"
      />
    </div>
  );
};

export default VideoComponent;
