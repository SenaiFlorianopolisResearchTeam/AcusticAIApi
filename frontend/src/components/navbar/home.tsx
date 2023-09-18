"use client"

import Home from "../../svgs/home"
import Styles from "../../scss/components/navbar.module.scss"
import { usePage } from "../../context/navbar"

const HomeC: FC = () => {

    const { page } = usePage()
    
    return (
        <div className={Styles.homeContainer}>
            <Home page={page} />
            <hr />
        </div>
    )
}

export default HomeC