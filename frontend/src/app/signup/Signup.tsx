"use client"

import City from "@/components/city"
import { NextComponentType } from "next"
import Styles from "../../scss/signup.module.scss"
import { useForm } from "react-hook-form"
import Link from "next/link"

const Signup: NextComponentType = () => {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data: any) => {

  }

  return (
    <main className={Styles.signupContainer}>
      <div className={Styles.signupForm}>
        <h1 className={Styles.title}>AcustticAI</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name" {...register("name")}/>
          <input placeholder="exemple@gmail.com" {...register("email")}/>
          <input placeholder="password" {...register("password")}/>
          <input placeholder="repeat password" {...register("rpassword")}/>
          <input className={Styles.submitButton} type="submit" value="Signup"/>
        </form>
        <hr/>
        <Link href="/login">Have an account? Log in in here to register</Link>
      </div>
      <City />
    </main>
  )
}

export default Signup