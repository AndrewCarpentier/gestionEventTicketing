import { useContext, useState } from "react";
import style from "./UserBar.module.scss";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import i18n from 'i18next';
import {useTranslation} from 'react-i18next';

function UserBar() {
  const { user, signout } = useContext(AuthContext);
  const {t} = useTranslation();
  const [showChangeApparence, setShowChangeApparence] = useState(false);
  const [showChangeLangage, setShowChangeLangage] = useState(false);

  function handleClickChangeApparence() {
    setShowChangeApparence(!showChangeApparence);
  }

  function handleClickChangeLangage() {
    setShowChangeLangage(!showChangeLangage);
  }

  function darkMode() {
    localStorage.setItem('mode', 'dark');
    document.documentElement.setAttribute("data-theme", "dark");
  }

  function lightMode() {
    localStorage.setItem('mode', '');
    document.documentElement.setAttribute("data-theme", "");
  }

  function changeLangage(x){
    localStorage.setItem('lng', x);
    i18n.changeLanguage(x);
  }

  return (
    <>
      {showChangeApparence ? (
        <div className={style.container}>
          <div className={`${style.item_top_change} d-flex align-items-center`}>
            <i
              onClick={handleClickChangeApparence}
              className="fas fa-arrow-left"
            />
          </div>
          <div
            onClick={lightMode}
            className={`${style.item} d-flex align-items-center`}
          >
            {t('lightMode')}
          </div>
          <div
            onClick={darkMode}
            className={`${style.item} d-flex align-items-center`}
          >
            {t('darkMode')}
          </div>
        </div>
      ) : showChangeLangage ? (
        <div className={style.container}>
          <div className={`${style.item_top_change} d-flex align-items-center`}>
            <i
              onClick={handleClickChangeLangage}
              className="fas fa-arrow-left"
            />
          </div>
          <div onClick={()=>changeLangage('fr')} className={`${style.item} d-flex align-items-center`}>
          {t('french')}
          </div>
          <div onClick={()=>changeLangage('en')} className={`${style.item} d-flex align-items-center`}>
          {t('english')}
          </div>
        </div>
      ) : (
        <div className={`${style.container}`}>
          <div className={`${style.item_top} d-flex align-items-center`}>
            <img
              className={style.userIcon}
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
            <div className="ml10">
              <div>
                {user.firstname} {user.lastname}
              </div>
              <div>
                <Link to="/profile/information" className={style.link}>
                {t('manageYourAccount')}
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            {t('profil')}
          </div>
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            <Link onClick={signout} to="/signin">
            {t('signout')} 
            </Link>
          </div>
          <div className={style.separate} />
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            {t('interest')}
          </div>
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            {t('creditCard')}
          </div>
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            {t('personalData')}
          </div>
          <div className={style.separate} />
          <div
            onClick={handleClickChangeApparence}
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            {t('appearance')}
          </div>
          <div
            onClick={handleClickChangeLangage}
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            {t('language')}
          </div>
          <div className={style.separate} />
          <div
            className={`${style.item} ${style.item_bottom} d-flex align-items-center justify-content-start`}
          >
            {t('contact')}
          </div>
        </div>
      )}
    </>
  );
}

export default UserBar;
