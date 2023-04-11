import Head from 'next/head'
import { NextPage } from 'next'
import Navbar from '@/components/navbar'

const Login : NextPage = () => {

  return (
    <>
      <Head>
        <title>AcustticAI - Login</title>
      </Head>
      <main>
        <Navbar/>
        <div>
          <h1>AcustticAI</h1>
          <form>
            <input/>
            <input/>
            <button>Singup</button>
            <button>Login</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Login
