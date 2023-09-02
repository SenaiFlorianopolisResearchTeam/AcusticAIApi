import Plus from "../svgs/plus"
import Home from "../svgs/home"
import Styles from "../scss/components/navbar.module.scss"
import { NextComponentType } from "next"

type Props = {
    page: string
}

const Navbar: React.FC<Props> = (props: Props) => {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.homeContainer}>
                <Home page={props.page}/>
                <hr />
            </div>
            <div className={Styles.sessionContainer}>
                <Plus />
            </div>
        </div>
    )
}

export default Navbar