import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import '../scss/webcam.scss';

const WebcamC = () => {
  const webcamRef = useRef(null);

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
    </div>
  );
};

export default WebcamC;