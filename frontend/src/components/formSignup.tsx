'use client'

import { useForm } from "react-hook-form"

interface Props {
    styles: any;
}

const FormSignup = (props: Props) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data: any) => {

    }
  
    <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="name" {...register("name")}/>
        <input placeholder="exemple@gmail.com" {...register("email")}/>
        <input placeholder="password" {...register("password")}/>
        <input placeholder="repeat password" {...register("rpassword")}/>
        <input className={props.styles} type="submit" value="Signup"/>
    </form>
}

export default FormSignup;