import { useContext, useState } from 'react';
import Image from 'next/image';
import { NextComponentType } from 'next';
import { useMutation } from '@apollo/client';
import { PREDICT_IMAGE } from '@/graphql/mutations';
import { DragdropContext } from '@/context/dragdrop';

const ImagePreview = ({ image }: { image: string }) => (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image src={image} layout="fill" objectFit="contain" alt="Imagem" />
    </div>
);

const DragAndDrop: NextComponentType = () => {

  const {droppedImage, setDroppedImage} = useContext(DragdropContext)

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files);
    const images = files.filter((file) => file.type.startsWith('image/'))
    const droppedImages = images.map((image) => URL.createObjectURL(image))
    setDroppedImage(droppedImages[0])
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ width: 300, height: 300, border: '1px solid black' }}
    >
      {droppedImage ? <ImagePreview image={droppedImage} /> : 'Arraste e solte uma imagem aqui'}
    </div>
  );
};

export default DragAndDrop;