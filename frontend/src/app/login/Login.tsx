'use client'

import City from "../../components/city"
import { NextComponentType } from "next"
import Styles from "../../scss/login.module.scss"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link"
import { LogUser } from "../../models/user"
import { z } from "zod"
import logUser from "../../fetchs/logUser"

const Login: NextComponentType = () => {

  type UserType = z.infer<typeof LogUser>;

  const {
    register, 
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserType>({resolver: zodResolver(LogUser)})

  const onSubmit: SubmitHandler<UserType> = (data) => {
    logUser({
      email: data.email,
      password: data.password
    })
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
        <Link href="/signup">Dont have an account? Sign up, click here to register</Link>
      </div>
      <City />
    </main>
  )
}

export default Login