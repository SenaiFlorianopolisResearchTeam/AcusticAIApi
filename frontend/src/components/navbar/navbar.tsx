import Plus from "../../svgs/plus"
import Home from "../../svgs/home"
import Styles from "../scss/components/navbar.module.scss"

const Navbar: React.FC = () => {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.homeContainer}>
                <Home page="dashboard"/>
                <hr />
            </div>
            <div className={Styles.sessionContainer}>
                <Plus />
            </div>
        </div>
    )
}

export default Navbar