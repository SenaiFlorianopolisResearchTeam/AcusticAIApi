"use client"

import Styles from "../../scss/components/navbar.module.scss"
import Plus from "../../svgs/plus"

const SessionC: React.FC = () => {
    return (
        <div className={Styles.sessionContainer}>
            <Plus />
        </div>
    )
}

export default SessionC