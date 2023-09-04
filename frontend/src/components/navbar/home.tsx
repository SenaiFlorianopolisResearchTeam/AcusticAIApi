"use client"

import Home from "../../svgs/home"
import Styles from "../../scss/components/navbar.module.scss"

const HomeC: React.FC = () => {
    return (
        <div className={Styles.homeContainer}>
            <Home page="dashboard" />
            <hr />
        </div>
    )
}

export default HomeC