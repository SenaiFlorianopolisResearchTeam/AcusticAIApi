import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl"; 
import { useEffect, useState } from "react";

const App = () => {
  
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

  return (
    <>
      
    </>
  )
}

export default App
