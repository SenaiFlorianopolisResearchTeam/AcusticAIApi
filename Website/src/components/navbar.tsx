import { NextComponentType } from "next";
import Link from "next/link";
import Style from "@/scss/navbar.module.scss"

const Navbar: NextComponentType = () => {

    return(
        <div className={Style.Navbar}>
            <div className={Style.pages}>
                <Link href="/">Home</Link>
                <Link href="/dashboard">Signup</Link>
                <a href="https://github.com/SenaiFlorianopolisResearchTeam/AcustticAIApis">Github</a>
            </div>
            <div className={Style.login}>
                <Link href="/login">Login</Link>
                <p>/</p>
                <Link href="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default Navbar