import { NextComponentType } from "next";
import Styles from "@/scss/login.module.scss"
import { useMutation } from "@apollo/client";
import { SAY_HELLO } from "@/graphql/mutations";
import Link from "next/link";

const SignupForm: NextComponentType = () => {

    const [sayHello, { data, loading, error }] = useMutation(SAY_HELLO);

    const send = async (e: any) => {
        e.preventDefault();
        const name = "rodrigo"
        const result = await sayHello({ variables: { name } });
        console.log(result.data.sayHello.message);
    }

    return(
        <div className={Styles.Login}>
            <h1>AcustiicAI</h1>
            <form onSubmit={(e) => send(e)}>
                <div>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <input type="password" id="password1" name="password1" required />
                </div>
                <div>
                    <input type="password" id="password2" name="password2" required />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            <hr/>
            <Link href="/">Caso ja tenha uma conta, clique aqui para entrar!</Link>
        </div>
    )
}

export default SignupForm