import Styles from "../../scss/components/navbar.module.scss"
import { NavbarProvider } from "../../context/navbar";
import HomeC from "./home";
import SessionC from "./sessions";
import UserC from "./user";

interface Props { 
    onCreateSession: () => void;
}

const Navbar: React.FC<Props> = (props: Props) => {
    return (
        <div className={Styles.navbar}>
            <NavbarProvider>
                <HomeC/>
                <SessionC onCreateSession={props.onCreateSession}/>
                <UserC/>
            </NavbarProvider>
        </div>
    )
}

export default Navbar