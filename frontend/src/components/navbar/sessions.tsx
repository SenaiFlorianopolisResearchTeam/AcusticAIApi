"use client"

import Styles from "../../scss/components/navbar.module.scss"
import Plus from "../../svgs/plus"
import { usePage } from "../../context/navbar"

const SessionC: React.FC = () => {

    const { page } = usePage()
    
    return (
        <div className={Styles.sessionContainer}>
            <Plus />
        </div>
    )
}

export default SessionC