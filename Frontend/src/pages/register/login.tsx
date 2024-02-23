/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useRegisterContext } from '@/context/resgister';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/router';
import { useCookies } from '@/hooks/useCookies';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({ subsets: ['latin'] })

const schema = z.object({
    email: z.string().email('Invalid email format').min(8, "Must contain 8 characters"),
    password: z.string().min(8, "Must contain 8 characters")
})

type FormData = z.infer<typeof schema>

const Login = () => {
    const { setCookie } = useCookies()
    const { register, handleSubmit } = useForm<FormData>();
    const [postdata, setPostdata] = useState<any>({
        email: '',
        password: ''
    })
    const { updateState } = useRegisterContext()

    const router = useRouter()

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        const validationResult = schema.safeParse(data);
        if (validationResult.success) {
          setPostdata(data)
          try {
            const response = await fetch('http://localhost:4000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(postdata),
            });

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            await setCookie("auth", responseData?.accessToken)
            router.push('/dashboard')
          } catch (err){
            console.error('Error:', err);
          }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className={comfortaa.className}>Login</p>
            <div>
                <div>
                    <input className={comfortaa.className} {...register("email")} placeholder="email" />
                    <input className={comfortaa.className} type="password" {...register("password")} placeholder="password" />
                    
                </div>
                <button className={comfortaa.className} type="submit">Continue</button>
            </div>
            <section>
                <div>
                    <hr />
                    <p className={comfortaa.className}>or continue with</p>
                    <hr />
                </div>
                <div>
                    <button />
                    <button />
                    <button />
                </div>
            </section>
            <p className={comfortaa.className} onClick={() => updateState("signup")}>Don't have an account? Register now here.</p>
        </form>
    )
}

export default Login;
