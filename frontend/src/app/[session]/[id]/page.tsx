"use client"

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Styles from '../../../scss/session.module.scss';
interface Props {
    params: {
        id: number;
        session: string;
    };
}

const Page: NextPage<Props> = ({ params }) => {
    const [videos, setVideos] = useState<File[]>([]);
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;

        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            setVideos([...videos, ...filesArray]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;

        if (droppedFiles) {
            const filesArray = Array.from(droppedFiles);
            setVideos([...videos, ...filesArray]);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                <h1>Página com Upload de Vídeo</h1>
            </div>

            <div
                className={Styles.dropZone}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                Arraste e solte vídeos aqui
            </div>
            <input type="file" accept="video/*" onChange={handleFileChange} multiple />

            <div className={Styles.videoList}>
                <h2>Vídeos Inseridos</h2>
                <ul>
                    {videos.map((video, index) => (
                        <li key={index}>{video.name}</li>
                    ))}
                </ul>
            </div>

            <div className={Styles.buttonContainer}>
                <button onClick={() => router.push(`/${params.session}/${params.id}/data`)}>
                    Contar
                </button>
            </div>
        </div>
    );
};

export default Page;
