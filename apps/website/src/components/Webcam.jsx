import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import '../scss/webcam.scss';

const WebcamC = () => {
  const webcamRef = useRef(null);
  const [multipleCameras, setMultipleCameras] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [videoDevices, setVideoDevices] = useState([]);

  useEffect(() => {
    const getMediaDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        setVideoDevices(videoDevices);
        setMultipleCameras(videoDevices.length > 1);
        setSelectedCamera(videoDevices[0]?.deviceId); // Seleciona a primeira câmera como padrão
      } catch (error) {
        console.error('Erro ao obter dispositivos de mídia:', error);
      }
    };

    getMediaDevices();
  }, []);

  const switchCamera = () => {
    setSelectedCamera(prevCamera => {
      const currentIndex = videoDevices.findIndex(device => device.deviceId === prevCamera);
      const nextIndex = (currentIndex + 1) % videoDevices.length;
      return videoDevices[nextIndex]?.deviceId || null;
    });
  };

  const videoConstraints = {
    deviceId: selectedCamera ? { exact: selectedCamera } : undefined,
  };

  return (
    <>
      {multipleCameras && (
        <button onClick={switchCamera} className="botao">
          Alternar câmera
        </button>
      )}
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          mirrored={true}
          screenshotFormat="image/jpeg"
          className="webcam"
          videoConstraints={videoConstraints}
        />
      </div>
    </>
  );
};

export default WebcamC;