import Navbar from "../../components/navbar"
import CardSession from "../../components/cardSession"
import { NextPage } from "next"
import Styles from "../../scss/dashboard.module.scss"

const Dashboard: NextPage = () => {
  return (
    <main className={Styles.dashboard}>
      <Navbar page="dashboard"/>
      <div className={Styles.cards}>
        <p>Create your firts AI traffic session</p>
        <button>Create</button>
      </div>
    </main>
  )
}

export default Dashboard