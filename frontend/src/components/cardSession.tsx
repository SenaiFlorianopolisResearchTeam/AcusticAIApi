import React, { useState } from 'react';
import editSessionName from '../fetchs/editSessionName';
import Style from '../scss/components/cardSession.module.scss';
import Link from 'next/link';

interface Props {
  jwt: string;
  userId: number;
  id: number;
  name: string;
  tmin: number;
  data: Data<number>;
  onDeleteSession: (sessionId: string) => void;
}

type Data<T> = [
  videos: T,
  caminhaog: T,
  caminhaop: T,
  carro: T,
  moto: T,
  onibus: T,
  tuktuk: T,
  van: T
];

const CardSession: React.FC<Props> = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);



  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = async () => {
    try {
      await editSessionName({ id: Number(props.userId), name: name, sessionId: props.id });
      toggleEdit();
    } catch (err) {
      console.error(err);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Link href="/" className={Style.cardSessionContainer}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <button onClick={handleEdit}>Salvar</button>
        </div>
      ) : (
        <div>
          <h2>{name}</h2>
          <button onClick={toggleEdit}>Editar</button>
        </div>
      )}
    </Link>
  );
};

export default CardSession;