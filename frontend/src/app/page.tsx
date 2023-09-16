import { NextPage } from "next"
import Styles from '../scss/home.module.scss'
import MouseScroll from "../components/mouseScroll"
import LandingBar from "../components/landingBar"
import Code from "../svgs/code"
import Article from "../svgs/article"

const Home: NextPage = () => {

  return (
    <>
      <LandingBar page="home"/>
      <section className={Styles.container}>
        <section className={Styles.home}>
          <div className={Styles.space}/>
          <h1 className={Styles.title}>AcustticAI</h1>
          <MouseScroll />
        </section>

        <section className={Styles.about}>
          <img className={Styles.logo} src="/logo.webp" alt="logo" />
          <p className={Styles.aboutText}>This project is maintained by Gabriel Pelizzaro (Fullzer4), a member of the Sesi Florianopolis Scientific Initiation team. It was created to streamline the counting and classification of cars, along with the interactive analysis of this data.</p>
        </section>

        <section className={Styles.members}>
          <h2 className={Styles.membersTitle}>Members</h2>
          <div className={Styles.photos}>
            <div className={Styles.photoContainer}>
              <img className={Styles.photo} src="/fullzer4.jpg" alt="fullzer4" />
              <p className={Styles.name}>Nome</p>
            </div>
            <div className={Styles.photoContainer}>
              <img className={Styles.photo} src="/fullzer4.jpg" alt="lucas" />
              <p className={Styles.name}>Nome</p>            
            </div>
            <div className={Styles.photoContainer}>
              <img className={Styles.photo} src="/fullzer4.jpg" alt="wagner" />
              <p className={Styles.name}>Nome</p>
            </div>
          </div>
        </section>

        <section className={Styles.links}>
          <h3>Links</h3>
          <div className={Styles.container}>
            <a className={Styles.card} href="https://github.com/fullzer4/AcustticAI">
                <div className={Styles.img}>
                    <Code/>
                </div>
                <p>Code Respositoy</p>
            </a>
            <a className={Styles.card} href="">
                <Article/>
                <p>Article Link</p>
            </a>
          </div>
        </section>
      </section>
    </>
  )
}

export default Home