'use client'

import City from "@/components/city"
import { NextComponentType } from "next"
import Styles from "../../scss/login.module.scss"
import { useForm } from "react-hook-form"
import Link from "next/link"

const Login: NextComponentType = () => {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data: any) => {

  }

  return (
    <main className={Styles.loginContainer}>
      <div className={Styles.loginForm}>
        <h1 className={Styles.title}>AcustticAI</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="exemple@gmail.com" {...register("email")}/>
          <input placeholder="password" {...register("password")}/>
          <input className={Styles.submitButton} type="submit" value="Login"/>
        </form>
        <hr/>
        <Link href="/signup">Don't have an account? Sign up, click here to register</Link>
      </div>
      <City />
    </main>
  )
}

export default Login