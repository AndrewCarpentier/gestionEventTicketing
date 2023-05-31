import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import EllipsisBar from "../Bar/EllipsisBar/EllipsisBar";
import UserBar from "../Bar/UserBar/UserBar";
import { useTranslation } from "react-i18next";

function Header() {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  const [showEllipsisBar, setShowEllipsisBar] = useState(false);
  const [showUserBar, setShowUserBar] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      if (e.target.id === "userBar") {
        setShowUserBar(true);
      } else {
        setShowUserBar(false);
      }

      if (e.target.id === "ellipsisBar") {
        setShowEllipsisBar(true);
      } else {
        setShowEllipsisBar(false);
      }
    };
  }, []);

  function handleClickEllipsis() {
    setShowEllipsisBar(!showEllipsisBar);
  }

  function handleClickUserBar() {
    setShowUserBar(!showUserBar);
  }

  return (
    <div className={`${style.header} d-flex`}>
      <div className={`${style.start} d-flex`}>
        <h1 className={`d-flex align-items-center ml20`}>
          <Link to="/">EventMaster</Link>
        </h1>
      </div>
      <div
        className={`${style.center} d-flex align-items-center justify-content-center`}
      >
        <label htmlFor="search"></label>
        <input
          className={style.search}
          name="search"
          placeholder={t("search")}
        />
      </div>

      <div
        className={`${style.end} mr10 d-flex align-items-center justify-content-end`}
      >
        {user ? (
          <>
            {user.role === "admin" && <Link to="/admin">{t("youAreAdmin")}</Link>}
            <Link to="/createEvent/step1" className={`${style.createEvent}`}>
              <i className={`fas fa-plus  `} />
            </Link>
            <i className={`fas fa-magnifying-glass ${style.searchMobile}`} />
            <i
              onClick={handleClickUserBar}
              className={`fas fa-circle-user`}
              id="userBar"
            />
          </>
        ) : (
          <>
            <i
              className={`fas fa-magnifying-glass ${style.searchMobileNotConnected}`}
            />
            <i
              id="ellipsisBar"
              onClick={handleClickEllipsis}
              className={`fas fa-ellipsis-vertical ${style.ellipsis}`}
            />
            <button className="btn btn-primary">
              <Link to="/signin">{t("signin")}</Link>
            </button>
          </>
        )}
      </div>
      {showEllipsisBar && !user ? <EllipsisBar /> : ""}
      {showUserBar && user ? (
        <div id="userBar">
          <UserBar />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
