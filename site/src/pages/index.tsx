import Head from 'next/head'
import { NextPage } from 'next'
import Navbar from '@/components/navbar'

const Home : NextPage = () => {

  return (
    <>
      <Head>
        <title>AcustticAI - Home</title>
      </Head>
      <main>
        <Navbar/>
        <div>
          <h1>AcustticAI</h1>
          <p>Simplificando a vida de nossos usuarios retornando dados prontos para analise e automatizando processos na area de ruido rodoviario </p>
        </div>
      </main>
    </>
  )
}

export default Home
