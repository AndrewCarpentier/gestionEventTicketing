import { useState } from "react";
import style from "./EllipsisBar.module.scss";

function EllipsisBar() {
  const [showChangeApparence, setShowChangeApparence] = useState(false);
  const [showChangeLangage, setShowChangeLangage] = useState(false);

  function handleClickChangeApparence() {
    setShowChangeApparence(!showChangeApparence);
  }

  function handleClickChangeLangage() {
    setShowChangeLangage(!showChangeLangage);
  }

  function darkMode() {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  function lightMode() {
    document.documentElement.setAttribute("data-theme", "");
  }

  return (
    <>
      {showChangeApparence ? (
        <div className={style.container}>
          <div
            onClick={handleClickChangeApparence}
            className={`${style.item_top_change} d-flex align-items-center`}
          >
            <i className="fas fa-arrow-left" />
          </div>
          <div
            onClick={lightMode}
            className={`${style.item} d-flex align-items-center`}
          >
            Thème clair
          </div>
          <div
            onClick={darkMode}
            className={`${style.item} d-flex align-items-center`}
          >
            Thème sombre
          </div>
        </div>
      ) : showChangeLangage ? (
        <div className={style.container}>
          <div
            onClick={handleClickChangeLangage}
            className={`${style.item_top_change} d-flex align-items-center`}
          >
            <i className="fas fa-arrow-left" />
          </div>
          <div className={`${style.item} d-flex align-items-center`}>
            Français
          </div>
          <div className={`${style.item} d-flex align-items-center`}>
            Anglais
          </div>
        </div>
      ) : (
        <div className={`${style.container}`}>
          <div
            onClick={handleClickChangeApparence}
            className={`${style.item} ${style.item_top} d-flex align-items-center justify-content-center`}
          >
            Apparence
          </div>
          <div
            onClick={handleClickChangeLangage}
            className={`${style.item} d-flex align-items-center justify-content-center`}
          >
            Langue
          </div>
        </div>
      )}
    </>
  );
}

export default EllipsisBar;
