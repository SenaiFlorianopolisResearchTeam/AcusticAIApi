/* eslint-disable react/no-unescaped-entities */
import { useRegisterContext } from '@/context/resgister'
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
    name: z.string().min(1,"Must contain 8 characters"),
    email: z.string().email('Invalid email format').min(8,"Must contain 8 characters"),
    password: z.string().min(8,"Must contain 8 characters"),
    rpassword: z.string().min(8,"Must contain 8 characters"),
});

type FormData = z.infer<typeof schema>;

const SignupForm = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [postdata, setPostdata] = useState<any>({
        name: '',
        email: '',
        password: '',
        rpassword: '',
    })
    const { updateState } = useRegisterContext()

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        const validationResult = schema.safeParse(data);
        if (validationResult.success) {
            setPostdata(data)

            const response = await fetch('http://localhost:4000/users', {
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
            updateState('login')
        } else {
            const errorMessage = validationResult.error.errors[0].message;
            const field = validationResult.error.errors[0].path[0];
            alert(`Error: ${errorMessage}\nField: ${field}`);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
             <p>Signup</p>
            </div>
            <div>
                <input type="text" {...register("name")} placeholder="name"/>
                <input type="email "{...register("email")} placeholder="email"/>
                <input type="password" {...register("password")} placeholder="password"/>
                <input type="password" {...register("rpassword")} placeholder="repeat password"/>
            </div>
            <button type="submit">Continue</button>
        </form>
    );
};

export default SignupForm;