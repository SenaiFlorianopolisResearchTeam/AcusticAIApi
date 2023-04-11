import { createContext, useState } from "react";
import axios from 'axios';

export const DragdropContext = createContext<any>(()=>{})

export const DragdropProvider = ({ children }: any) => {

    const [droppedImage, setDroppedImage] = useState<string>("");

    return(
        <DragdropContext.Provider value={{
            droppedImage,
            setDroppedImage,
            }}> 
            {children}
        </DragdropContext.Provider>
    )
}