import Styles from "../../scss/components/navbar.module.scss"
import { NavbarProvider } from "../../context/navbar";
import HomeC from "./home";
import SessionC from "./sessions";
import UserC from "./user";

const Navbar: React.FC = () => {
    return (
        <div className={Styles.navbar}>
            <NavbarProvider>
                <HomeC/>
                <SessionC/>
                <UserC/>
            </NavbarProvider>
        </div>
    )
}

export default Navbar