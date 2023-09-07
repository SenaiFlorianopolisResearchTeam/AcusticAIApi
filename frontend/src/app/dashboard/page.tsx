'use client'

import CardSession from "../../components/cardSession"
import { NextPage } from "next"
import Styles from "../../scss/dashboard.module.scss"
import CreateSession from "../../components/createSession"
import { usePage } from "../../context/navbar"
import { useEffect } from "react"

const Dashboard: NextPage = () => {

    const { setPage, page } = usePage()

    useEffect( () => {
        setPage("dashboard")       
    }, [])

    return (
        <main className={Styles.dashboard}>
            <div className={Styles.cards}>
                <div className={Styles.noneCard}>
                    <p>Create your firts AI traffic session</p>
                    <button onClick={() => alert(`${page}`)}>Create</button>
                </div>
            </div>
            <CreateSession/>
        </main>
    )
}

export default Dashboard