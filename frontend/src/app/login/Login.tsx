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
import getUser from "../../fetchs/getUser"

interface UserResponse {
  message: string;
  user?: {
    id: number;
    email: string;
  };
}

const Login: NextComponentType = () => {

  type UserType = z.infer<typeof LogUser>;

  const {
    register, 
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserType>({resolver: zodResolver(LogUser)})

  const onSubmit: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await getUser({ email: data.email });
  
      const user: UserResponse = JSON.parse(response.trim());
      if (user && user.message === "User found.") {
        logUser({email: data.email, password: data.password})
      } else {
        console.log("User not found.");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }  

  return (
    <main className={Styles.loginContainer}>
      <div className={Styles.loginForm}>
        <h1 className={Styles.title}>AcustticAI</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="exemple@gmail.com" {...register("email")}/>
          <input type="password" placeholder="password" {...register("password")}/>
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