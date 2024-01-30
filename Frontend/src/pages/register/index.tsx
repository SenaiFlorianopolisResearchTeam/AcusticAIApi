import { FC } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Comfortaa } from 'next/font/google'
import { useRegisterContext } from "@/context/resgister"
import { motion } from 'framer-motion'
import Navbar from "@/components/Navbar"
import Style from "@/scss/home.module.scss"
import Team from "@/svgs/team";

const comfortaa = Comfortaa({ subsets: ['latin'] })

const Register: FC = () => {
    const { t } = useTranslation('home');
    const { state, updateState } = useRegisterContext();

    const renderForm = () => {
        switch (state) {
            case 'login':
                return (
                    <form>
                        <p>Login</p>
                        <input />
                        <input />
                        <button>Continue</button>
                    </form>
                );
            case 'signup':
                return (
                    <form>
                        <p>Register</p>
                        <input />
                        <input />
                        <input />
                        <button>Register</button>
                    </form>
                );
            case 'forgotPassword':
                return (
                    <form>
                        <p>Forgot Password</p>
                        <input />
                        <button>Reset Password</button>
                    </form>
                );
            default:
                return null
        }
    };

    return (
        <main className={Style.home}>
            <Navbar />
            <div>
                <section>
                    <p> ORGANIZE, PLAN & AMPLIFY </p>
                    <Team />
                </section>
                {renderForm()}
            </div>
        </main>
    );
};

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['home'])),
        },
    };
}

export default Register;