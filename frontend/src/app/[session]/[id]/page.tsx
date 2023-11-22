"use client"

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <div>
            <div>
                <h1>Página com Upload de Vídeo</h1>
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{
                        border: "2px dashed #ddd",
                        padding: "20px",
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                >
                    Arraste e solte vídeos aqui
                </div>
                <input type="file" accept="video/*" onChange={handleFileChange} multiple />
            </div>

            <div>
                <h2>Vídeos Inseridos</h2>
                <ul>
                    {videos.map((video, index) => (
                        <li key={index}>{video.name}</li>
                    ))}
                </ul>
            </div>

            <div>
                <button onClick={() => router.push(`/${params.session}/${params.id}/data`)}>contar</button>
            </div>
        </div>
    );
};

export default Page;
