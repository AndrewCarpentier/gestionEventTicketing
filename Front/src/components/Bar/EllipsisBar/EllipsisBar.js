import { useState } from "react";
import style from "./EllipsisBar.module.scss";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

function EllipsisBar() {
  const { t } = useTranslation();

  const [showChangeApparence, setShowChangeApparence] = useState(false);
  const [showChangeLangage, setShowChangeLangage] = useState(false);

  function handleClickChangeApparence() {
    setShowChangeApparence(!showChangeApparence);
  }

  function handleClickChangeLangage() {
    setShowChangeLangage(!showChangeLangage);
  }

  function darkMode() {
    localStorage.setItem("mode", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }

  function lightMode() {
    localStorage.setItem("mode", "");
    document.documentElement.setAttribute("data-theme", "");
  }

  function changeLangage(x) {
    localStorage.setItem("lng", x);
    i18n.changeLanguage(x);
  }

  return (
    <div id="ellipsisBar">
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
            {t("lightMode")}
          </div>
          <div
            onClick={darkMode}
            className={`${style.item} d-flex align-items-center`}
          >
            {t("darkMode")}
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
          <div
            onClick={() => changeLangage("fr")}
            className={`${style.item} d-flex align-items-center`}
          >
            {t("french")}
          </div>
          <div
            onClick={() => changeLangage("en")}
            className={`${style.item} d-flex align-items-center`}
          >
            {t("english")}
          </div>
        </div>
      ) : (
        <div className={`${style.container}`} id="ellipsisBar">
          <div
            onClick={handleClickChangeApparence}
            className={`${style.item} ${style.item_top} d-flex align-items-center justify-content-center`}
            id="ellipsisBar"
          >
            {t("appearance")}
          </div>
          <div
            onClick={handleClickChangeLangage}
            className={`${style.item} d-flex align-items-center justify-content-center`}
            id="ellipsisBar"
          >
            {t("language")} 
          </div>
        </div>
      )}
    </div>
  );
}

export default EllipsisBar;
