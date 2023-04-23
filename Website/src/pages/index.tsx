import Head from 'next/head'
import { NextPage } from 'next'
import LoginForm from '@/components/loginForm'
import BackgroundForm from '@/components/backgroundForm'

const Home : NextPage = () => {

  return (
    <>
      <Head>
        <title>AcustticAI - Login</title>
      </Head>
      <main>
        <LoginForm/>
        <BackgroundForm/>
      </main>
    </>
  )
}

export default Home
