import { useContext, useState } from "react";
import style from "./UserBar.module.scss";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

function UserBar() {
  const { user, signout } = useContext(AuthContext);

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
          <div className={`${style.item_top_change} d-flex align-items-center`}>
            <i
              onClick={handleClickChangeLangage}
              className="fas fa-arrow-left"
            />
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
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            Profile
          </div>
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            <Link onClick={signout} to="/signin">
              Se déconnecter
            </Link>
          </div>
          <div className={style.separate} />
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            Intérêts
          </div>
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            Carte de crédit
          </div>
          <div
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            Donnée personnel
          </div>
          <div className={style.separate} />
          <div
            onClick={handleClickChangeApparence}
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            Apparence
          </div>
          <div
            onClick={handleClickChangeLangage}
            className={`${style.item} d-flex align-items-center justify-content-start`}
          >
            Langue
          </div>
          <div className={style.separate} />
          <div
            className={`${style.item} ${style.item_bottom} d-flex align-items-center justify-content-start`}
          >
            Contact
          </div>
        </div>
      )}
    </>
  );
}

export default UserBar;
