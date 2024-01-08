// Lib deps 
import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

// Style
import Style from "../scss/home.module.scss"

// Components
import PopupHome from "@/components/popupHome";
import ClientPortal from "@/components/clientPortal";
import Wave from "@/svgs/wave";

// Types
enum EContents {
  Sponsors,
  Porpose,
  Contanct,
}

interface IContent {
  (Content: number): void;
}

const Home: FC = () => {

  const {t} = useTranslation('home')

  const [popupState, setPopupState] = useState<boolean>(false)
  const [currentContent, setCurrentContent] = useState<EContents | null>(null)

  const showContent: IContent = (Content: number) => {
    if (Content === currentContent) {
      setPopupState(false);
      setCurrentContent(null);
    } else {
      setPopupState(true);
      setCurrentContent(Content);
    }
  };

  return (
    <>
      <main className={Style.home}>
        <nav>
          <div className={Style.link1}>
            <p onClick={() => showContent(EContents.Sponsors)}>{t('sponsors')}</p>
            <p onClick={() => showContent(EContents.Porpose)}>{t('porpose')}</p>
          </div>
          <div className={Style.logo}>
            <Image src="/logo.png" width={1000} height={500} alt="Picture of the author"/>
          </div>
          <div className={Style.link2}>
            <p onClick={() => showContent(EContents.Contanct)}>{t('contact')}</p>
            <Link href="/signup">{t('signup')}</Link>
          </div>
        </nav>
        <section>
          <p>{t('impact')}</p>
          <Link href="/trynow">{t('trynow')}</Link>
        </section>
        <>
          <Wave />
        </>
        <ClientPortal
          selector="popupPortal"
          show={popupState}
        >
          <PopupHome content={currentContent!} />
        </ClientPortal>
      </main>
    </>
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
