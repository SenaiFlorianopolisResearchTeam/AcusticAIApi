import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import '../scss/webcam.scss';

const WebcamC = () => {
  const webcamRef = useRef(null);
  const [multipleCameras, setMultipleCameras] = useState(false);
  const [facingMode, setFacingMode] = useState('user');

  useEffect(() => {
    const getMediaDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        setMultipleCameras(videoDevices.length > 1);
      } catch (error) {
        console.error('Erro ao obter dispositivos de mídia:', error);
      }
    };

    getMediaDevices();
  }, []);

  const switchCamera = () => {
    console.log("ativou")
    setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
  };

  const videoConstraints = {
    facingMode: { exact: facingMode },
  };

  return (
    <div className="webcam-container">
      {multipleCameras && (
        <button onClick={switchCamera}>
          Alternar câmera
        </button>
      )}
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
        className="webcam"
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default WebcamC;