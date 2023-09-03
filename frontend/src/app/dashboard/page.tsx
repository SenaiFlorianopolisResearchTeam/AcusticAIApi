import CardSession from "../../components/cardSession"
import { NextPage } from "next"
import Styles from "../../scss/dashboard.module.scss"
import CreateSession from "../../components/createSession"

const Dashboard: NextPage = () => {

    return (
        <main className={Styles.dashboard}>
            <div className={Styles.cards}>
                <div className={Styles.noneCard}>
                    <p>Create your firts AI traffic session</p>
                    <button>Create</button>
                </div>
            </div>
            <CreateSession/>
        </main>
    )
}

export default Dashboard