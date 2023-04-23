import { NextComponentType } from "next";
import Styles from "@/scss/login.module.scss"
import { useMutation } from "@apollo/client";
import { SAY_HELLO } from "@/graphql/mutations";
import Link from "next/link";

const LoginForm: NextComponentType = () => {

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
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Entrar</button>
            </form>
            <hr/>
            <Link href="/signup">Caso nao tenha uma conta ainda, clique aqui para cadastrar.</Link>
        </div>
    )
}

export default LoginForm