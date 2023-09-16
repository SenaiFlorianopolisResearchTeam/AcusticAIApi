import { useState } from 'react';
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
          <div>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            <button onClick={handleEdit}><Edit /></button>
          </div>
          <div>
            <p> Total: </p>
            <div>
              <div>
                <div><Video /><p>12</p></div>
                <div><Time /><p>12</p></div>
              </div>
              <div>
                <div><Car /><p>12</p></div>
                <button onClick={() => props.onDeleteSession(Number(props.id))}><p>deletar</p><Trash /></button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={Style.cardSessionContainer}>
          {/*Link  href={`/${props.jwt}/${props.id}`} */}
          <div className={Style.cardTitleContainer}>
            <h2>{name}</h2>
            <button onClick={toggleEdit}><Edit /></button>
          </div>
          <div>
            <p> Total: </p>
            <div>
              <div>
                <div><Video /><p>12</p></div>
                <div><Time /><p>12</p></div>
              </div>
              <div>
                <div><Car /><p>12</p></div>
                <button onClick={() => props.onDeleteSession(Number(props.id))}><p>deletar</p><Trash /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardSession;