// Lib deps
import { FC } from "react";

// Types
interface PopupHomeProps {
  content: number | null;
}

const PopupHome: FC<PopupHomeProps> = ({ content }) => {
  const getContentText = () => {
    switch (content) {
      case 0:
        return (
          <>
            <p>Sponsors</p>
          </>
        );
      case 1:
        return (
          <>
            <p>Porpose</p>
          </>
        );
      case 2:
        return (
          <>
            <p>Contact</p>
          </>
        );
    }
  };

  return (
    <div className="popup-container">
      {getContentText()}
    </div>
  );
};

export default PopupHome;
