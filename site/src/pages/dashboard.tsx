import Head from 'next/head'
import { NextPage } from 'next'
import { useMutation} from "@apollo/client"
import { SAY_HELLO } from '@/graphql/mutations'
import Navbar from '@/components/navbar'

const Dashboard : NextPage = () => {

    const [sayHello, { data, loading, error }] = useMutation(SAY_HELLO);

    const send = async (e: any) => {
        e.preventDefault();
        const name = "rodrigo"
        const result = await sayHello({ variables: { name } });
        console.log(result.data.sayHello.message);
    }

    return (
        <>
        <Head>
            <title>AcustticAI - Dashboard</title>
        </Head>
        <main>
            <Navbar/>
            <button onClick={(e) => send(e)}>Testar</button>
        </main>
        </>
    )
}

export default Dashboard
