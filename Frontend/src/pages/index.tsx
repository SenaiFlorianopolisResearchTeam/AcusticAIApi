import Image from "next/image"
import { FC } from "react"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Comfortaa } from 'next/font/google'
import { motion } from 'framer-motion'
import Navbar from "@/components/Navbar"
import Car from "@/svgs/car"
import Style from "../scss/home.module.scss"

const comfortaa = Comfortaa({ subsets: ['latin'] })

const Home: FC = () => {

  const {t} = useTranslation('home')

  return (
    <main className={Style.home}>
      <Navbar/>
      <motion.section 
        className={Style.cont1} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Image 
          src="/img1home.png" 
          width={1920} 
          height={960} 
          alt={t('altimg1')}
          quality={100} 
        />
      </motion.section>
      <div className={Style.content}>
        <motion.section
          className={Style.sec1}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={comfortaa.className}>{t('impact')}</h2>
        </motion.section>
        <motion.section 
            className={Style.sec2}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          <div className={Style.titlecard}>
            <p className={comfortaa.className}>{t('titlecard')}</p>
          </div>
          <div className={Style.contentcard}>
            <Car/>
            <p className={comfortaa.className}>{t('contcard')}</p>
          </div>
        </motion.section>
      </div>
    </main>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home'
      ])),
    },
  };
}

export default Home;
