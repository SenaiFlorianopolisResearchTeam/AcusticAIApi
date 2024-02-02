import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import Style from "@/scss/navbar.module.scss"
import { Comfortaa } from 'next/font/google'
import { motion } from 'framer-motion';
import { useRegisterContext } from "@/context/resgister"

const comfortaa = Comfortaa({ subsets: ['latin'] })

const Navbar: FC = () => {

    const { updateState } = useRegisterContext()

    return (
        <nav className={Style.navbar}>
            <div className={Style.logodiv}>
                <Link href="/" className={Style.logobox}>
                    <motion.div
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }} 
                    >
                        <Image src="/logo.png" width={500} height={500} alt="Logo of the website"/>
                    </motion.div>
                </Link>
                <div className={Style.logotext}>
                    <h1 className={comfortaa.className}> AcustticAI </h1>
                    <hr/>
                    <p className={comfortaa.className}>innovation</p>
                </div>
            </div>
            <motion.div 
                className={Style.linksdiv}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }} 
            >
                <Link href="/articles" className={comfortaa.className}> ARTICLES </Link>
                <Link href="/register" onClick={() => updateState("login")} className={comfortaa.className}> LOGIN </Link>
                <Link href="/register" onClick={() => updateState("signup")} className={comfortaa.className}> SIGN UP </Link>
            </motion.div>
        </nav>
    )
}

export default Navbar