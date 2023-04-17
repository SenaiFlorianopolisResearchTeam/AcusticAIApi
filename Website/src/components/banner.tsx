import { NextComponentType } from "next";
import Style from "@/scss/banner.module.scss"

const Banner:NextComponentType = () => {
    return(
        <div className={Style.banner}>
            <div className={Style.TextBox}>
                <h1>AcustticAI</h1>
                <p>Simplificando a vida de nossos usuarios retornando dados prontos para analise e automatizando processos na area de ruido rodoviario </p>
            </div>
            <div className={Style.LogoBox}>

            </div>
        </div>
    )
}

export default Banner