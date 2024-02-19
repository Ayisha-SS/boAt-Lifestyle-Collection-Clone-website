import React, { useRef } from 'react';

const TrulyYours= () => {
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div>
      <video ref={videoRef} controls width="500" height="300">
        <source src="src\assets\images\Video\video1.mp4" type="video/mp4" />
      </video>
      <button onClick={togglePlay}>Play/Pause</button>
    </div>
  );
};

export default TrulyYours