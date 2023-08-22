"use client"

import City from "../../components/city"
import { NextComponentType } from "next"
import Styles from "../../scss/signup.module.scss"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link"
import User from "../../models/user"
import { z } from "zod"
import createUser from "../../fetchs/createUser"

const Signup: NextComponentType = () => {

  type UserType = z.infer<typeof User>;

  const {
    register, 
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserType>({resolver: zodResolver(User)})

  const onSubmit: SubmitHandler<UserType> = (data) => {
    if(data.password === data.rpassword) {
      alert("foi")
      createUser({
        name: data.name,
        email: data.email,
        password: data.password
      })
    }
  }
  
  return (
    <main className={Styles.signupContainer}>
      <div className={Styles.signupForm}>
        <h1 className={Styles.title}>AcustticAI</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name" {...register("name")}/>
          <input type="email" placeholder="exemple@gmail.com" {...register("email")}/>
          <input type="password" placeholder="password" {...register("password")}/>
          <input type="password" placeholder="repeat password" {...register("rpassword")}/>
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