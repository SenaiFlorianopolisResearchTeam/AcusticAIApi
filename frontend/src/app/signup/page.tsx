import City from "@/components/city"
import { NextComponentType } from "next"
import type { Metadata } from 'next'
import Styles from "../../scss/signup.module.scss"
import Link from "next/link"
import FormSignup from "@/components/formSignup"

export const metadata: Metadata = {
  title: 'AcustticAI - Signup',
  description: '...',
}

const Signup: NextComponentType = () => {

  return (
    <main className={Styles.signupContainer}>
      <div className={Styles.signupForm}>
        <h1 className={Styles.title}>AcustticAI</h1>
        <FormSignup styles={Styles} />
        <hr/>
        <Link href="/login">Have an account? Log in in here to register</Link>
      </div>
      <City />
    </main>
  )
}

export default Signup