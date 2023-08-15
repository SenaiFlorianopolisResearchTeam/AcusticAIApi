import Style from "../scss/components/cardSession.module.scss"
import { NextComponentType } from "next";

interface Props { 
    readonly id: string;
    readonly name: string;
    readonly data: Data<number>;
}

type Data<T> = [
    horas: T,
    videos: T,
    veiculos: T,
    carros: T,
    onibus: T,
    moto: T,
]

const CardSession = (props: Props) => {

    return (
        <section className={Style.cardSessionContainer}>
            <div className={Style.graphContainer}>
                <div className={Style.session}>
                    <p className={Style.sessionTitle}>{props.name}</p>
                    <p className={Style.graphText}>Total de veiculos reconhecidos</p>
                </div>
                <div className={Style.graph}>
                    {/* grafico */}
                </div>
            </div>
            <div className={Style.dataContainer}>
                <div className={Style.data}>
                    <p className={Style.dataTitle}>horas</p>
                    <p className={Style.dataNumber}>{props.data[0]}</p>
                </div>
                <div className={Style.data}>
                    <p className={Style.dataTitle}>videos</p>
                    <p className={Style.dataNumber}>{props.data[1]}</p>
                </div>
                <div className={Style.data}>
                    <p className={Style.dataTitle}>veiculos</p>
                    <p className={Style.dataNumber}>{props.data[2]}</p>
                </div>
                <div className={Style.data}>
                    <p className={Style.dataTitle}>carros</p>
                    <p className={Style.dataNumber}>{props.data[3]}</p>
                </div>
                <div className={Style.data}>
                    <p className={Style.dataTitle}>onibus</p>
                    <p className={Style.dataNumber}>{props.data[4]}</p>
                </div>
                <div className={Style.data}>
                    <p className={Style.dataTitle}>moto</p>
                    <p className={Style.dataNumber}>{props.data[5]}</p>
                </div>
                <div>
                    <button>deletar</button>
                    {/* botar imagem */}
                </div>
            </div>
        </section>
    );
}

export default CardSession;