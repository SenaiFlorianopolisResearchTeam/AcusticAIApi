import { FC, useState } from 'react';
import editSessionName from '../fetchs/editSessionName';
import Style from '../scss/components/cardSession.module.scss';
import Link from 'next/link';
import Edit from '../svgs/edit';
import Video from '../svgs/video';
import Time from '../svgs/time';
import Car from '../svgs/car';
import Trash from '../svgs/trash';

interface Props {
  jwt: string;
  userId: number;
  id: number;
  name: string;
  tmin: number;
  data: Data<number>;
  onDeleteSession: (sessionId: number) => void;
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

const CardSession: FC<Props> = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const calculateTotalVehicles = (data: typeof props.data) => {
    return data.slice(1, 8).reduce((total, value) => total + value, 0);
  };
  const vehicles = calculateTotalVehicles(props.data)
  
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
    <>
      {isEditing ? (
        <div className={Style.cardSessionContainer}>
          <div className={Style.cardTitleContainer}>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            <button onClick={handleEdit}><Edit /></button>
          </div>
          <div className={Style.cardDataContainer}>
            <p> Total: </p>
            <div className={Style.dataContainer}>
            <div className={Style.data}>
                <div className={Style.datalabels}><Video /><p>{props.data[0]}</p></div>
                <div className={Style.datalabels}><Time /><p>{props.tmin}</p></div>
              </div>
              <div className={Style.data}>
                <div className={Style.datalabels}><Car /><p>{vehicles}</p></div>
                <button onClick={() => props.onDeleteSession(Number(props.id))}><p>deletar</p><Trash /></button>
              </div>
            </div>
          </div>
          <hr></hr>
          <Link className={Style.open} href={`/${props.jwt}/${props.id}`}>Open Session</Link>
        </div>
      ) : (
        <div className={Style.cardSessionContainer}>
          <div className={Style.cardTitleContainer}>
            <h2>{name}</h2>
            <button onClick={toggleEdit}><Edit /></button>
          </div>
          <div className={Style.cardDataContainer}>
            <p> Total: </p>
            <div className={Style.dataContainer}>
              <div className={Style.data}>
                <div className={Style.datalabels}><Video /><p>{props.data[0]}</p></div>
                <div className={Style.datalabels}><Time /><p>{props.tmin}</p></div>
              </div>
              <div className={Style.data}>
                <div className={Style.datalabels}><Car /><p>{vehicles}</p></div>
                <button onClick={() => props.onDeleteSession(Number(props.id))}><p>deletar</p><Trash /></button>
              </div>
            </div>
          </div>
          <hr></hr>
          <Link className={Style.open} href={`/${props.jwt}/${props.id}`}>Open Session</Link>
        </div>
      )}
    </>
  );
};

export default CardSession;