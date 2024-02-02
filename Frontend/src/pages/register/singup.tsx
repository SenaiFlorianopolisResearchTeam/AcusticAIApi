/* eslint-disable react/no-unescaped-entities */
import { useRegisterContext } from '@/context/resgister'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
    email: z.string().email('Invalid email format').min(8,"Must contain 8 characters"),
    password: z.string().min(8,"Must contain 8 characters")
});

type FormData = z.infer<typeof schema>;

const Signup = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const { updateState } = useRegisterContext()

    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        const validationResult = schema.safeParse(data);
        if (validationResult.success) {
            console.log(data);
        } else {
            const errorMessage = validationResult.error.errors[0].message;
            const field = validationResult.error.errors[0].path[0];
            alert(`Error: ${errorMessage}\nField: ${field}`);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>Signup</p>
            <section>
                <button onClick={() => updateState("signupForm")}>Register with email</button>
                <div>
                    <hr />
                    <p>or continue with</p>
                    <hr />
                </div>
                <div>
                    <button/>
                    <button/>
                    <button/>
                </div>
            </section>
            <p onClick={() => updateState("login")}>Already have an continue</p>
        </form>
    );
};

export default Signup;