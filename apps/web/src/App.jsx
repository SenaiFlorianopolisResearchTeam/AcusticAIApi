import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl"; 
import { useEffect, useState } from "react";
import Webcam from "./components/webcam";
import Video from "./components/video";

const App = () => {

  const [webcam, setWebcam] = useState(false)
  const [video, setVideo] = useState(false)
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  });

  useEffect(() => {
    tf.ready().then(async () => {
      const yolov8 = await tf.loadGraphModel(`${window.location.href}/model.json`);

      const dummyInput = tf.ones(yolov8.inputs[0].shape);
      const warmupResults = yolov8.execute(dummyInput);

      setModel({
        net: yolov8,
        inputShape: yolov8.inputs[0].shape,
      });

      tf.dispose([warmupResults, dummyInput]); 

      console.log("modelo carregado")
    });
  }, []);

  const changeWebcam = () => {
    if (video === false && webcam === true){
      return
    }
    resetAll()
    setWebcam(!webcam)
  }

  const changeVideo = () => {
    if (webcam === false && video === true){
      return
    }
    resetAll()
    setVideo(!video)
  }

  const resetAll = () => {
    setWebcam(false)
    setVideo(false)
  }

  return (
    <>
      <h1> teste modelo v5.2 </h1>
      <div className="modelo">
        { webcam && <Webcam/> }
        { video && <Video/> }
      </div>
      <div>
        <button onClick={() => changeWebcam()}>webcam</button>
        <button onClick={() => changeVideo()}>video</button>
      </div>
    </>
  )
}

export default App
