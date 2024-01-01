// Lib deps 
import Link from "next/link";
import { FC, useState } from "react";

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
    <main className={Style.home}>
      <nav>
        <div>
          <p onClick={() => showContent(EContents.Sponsors)}>Sponsors</p>
          <p onClick={() => showContent(EContents.Porpose)}>Porpose</p>
        </div>
        <div>
        </div>
        <div>
          <p onClick={() => showContent(EContents.Contanct)}>Contact</p>
          <Link href="/signup"> Singup </Link>
        </div>
      </nav>
      <section>
        <button> Try Now </button>
      </section>
      <footer>
        <Wave />
      </footer>
      <ClientPortal
        selector="popupPortal"
        show={popupState}
      >
        <PopupHome content={currentContent!} />
      </ClientPortal>
    </main>
  )
}

export default Home;
