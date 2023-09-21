"use client"

import Styles from "../../scss/components/navbar.module.scss"
import Plus from "../../svgs/plus"
import { usePage } from "../../context/navbar"
import { FC } from "react";

interface Props { 
    onCreateSession?: () => void;
}

const SessionC: FC<Props> = (props: Props) => {

    const { page } = usePage()
    
    return (
        <div className={Styles.sessionContainer}>
            <Plus onCreateSession={props.onCreateSession}/>
        </div>
    )
}

export default SessionC