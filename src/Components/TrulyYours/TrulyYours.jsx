import React, { useRef } from 'react';

const TrulyYours= () => {
  // Ref to access the video element
  const videoRef = useRef(null);

  // Function to play or pause the video
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
      {/* Video element with controls */}
      <video ref={videoRef} controls width="500" height="300">
        {/* Source(s) of the video */}
        <source src="src\assets\images\Video\video1.mp4" type="video/mp4" />
        {/* Add more source elements for different video formats if needed */}
        {/* Your browser does not support the video tag. */}
      </video>

      {/* Button to play/pause the video */}
      <button onClick={togglePlay}>Play/Pause</button>
    </div>
  );
};

// export default VideoPlayer;


export default TrulyYours