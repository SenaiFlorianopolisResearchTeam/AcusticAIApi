import React, { useRef, useState, useEffect } from 'react';
import "../scss/webcam.scss"

const Webcam = () => {
  const videoRef = useRef(null);
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const getVideoDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter((device) => device.kind === 'videoinput');
    setCameras(videoDevices);
  };

  const initWebcam = async () => {
    try {
      const constraints = {
        video: {
          deviceId: selectedCamera ? { exact: selectedCamera } : undefined
        }
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      setIsRunning(true);
    } catch (error) {
      console.error('Erro ao inicializar a webcam:', error);
    }
  };

  const toggleCamera = () => {
    const currentIndex = cameras.findIndex((camera) => camera.deviceId === selectedCamera);
    const nextIndex = (currentIndex + 1) % cameras.length;
    setSelectedCamera(cameras[nextIndex].deviceId);
  };

  useEffect(() => {
    getVideoDevices();
  }, []);

  useEffect(() => {
    if (cameras.length > 0) {
      setSelectedCamera(cameras[0].deviceId);
    }
  }, [cameras]);

  useEffect(() => {
    if (selectedCamera) {
      initWebcam();
    }
  }, [selectedCamera]);

  return (
    <>
      <h1 className='title-w'>Webcam</h1>
      {isRunning && cameras.length > 1 && (
        <button className='change-w' onClick={toggleCamera}>Trocar de câmera</button>
      )}
      <video className='video-w' ref={videoRef} autoPlay></video>
    </>
  );
};

export default Webcam;
