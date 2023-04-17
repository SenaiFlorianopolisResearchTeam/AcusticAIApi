import Head from 'next/head'
import { NextPage } from 'next'
import Navbar from '@/components/navbar'
import Banner from '@/components/banner'

const Home : NextPage = () => {

  return (
    <>
      <Head>
        <title>AcustticAI - Home</title>
      </Head>
      <main>
        <Navbar/>
        <Banner/>
      </main>
    </>
  )
}

export default Home
