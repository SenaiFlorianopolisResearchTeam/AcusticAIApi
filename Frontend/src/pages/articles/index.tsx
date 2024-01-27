import Navbar from "@/components/Navbar";
import { FC } from "react";
import Style from "@/scss/articles.module.scss"

const articles: FC = () => {
    return(
        <main className={Style.articles}>
            <Navbar/>
        </main>
    )
}

export default articles