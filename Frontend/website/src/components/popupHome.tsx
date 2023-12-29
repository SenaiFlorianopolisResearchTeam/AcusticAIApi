import { FC } from "react";

interface PopupHomeProps {
  content: number | null;
}

const PopupHome: FC<PopupHomeProps> = ({ content }) => {
  const getContentText = () => {
    switch (content) {
      case 0:
        return "Conteúdo para Sponsors";
      case 1:
        return "Conteúdo para Porpose";
      case 2:
        return "Conteúdo para Contact";
      default:
        return "Conteúdo padrão";
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button">
          Fechar
        </button>
        <h2>Popup Content</h2>
        <p>{getContentText()}</p>
      </div>
    </div>
  );
};

export default PopupHome;
