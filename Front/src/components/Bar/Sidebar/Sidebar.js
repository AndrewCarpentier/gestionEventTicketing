import { useEffect } from "react";
import style from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const location = useLocation();
  const {t} = useTranslation();
  useEffect(() => {
    function reset(){
      document.getElementById('home').classList.remove("active");
      document.getElementById('bookmark').classList.remove("active");
    }

    if (location.pathname === "/") {
      reset();
      document.getElementById('home').classList.add("active")
    } else if (location.pathname === "/bookmark") {
      reset();
      document.getElementById('bookmark').classList.add("active")
    }
  }, [location]);
  return (
    <div className="sidebar">
      <Link to="/">
        <div
          id="home"
          className={`${style.item} active d-flex justify-content-center align-items-center`}
        >
          {t('home')}
        </div>
      </Link>
      <Link to="/ticket">
        <div
          className={`${style.item} d-flex justify-content-center align-items-center`}
        >
          {t('ticket')}
        </div>
      </Link>
      <Link to="/history">
        <div
          className={`${style.item} d-flex justify-content-center align-items-center`}
        >
          {t('history')}
        </div>
      </Link>
      <Link to="/bookmark">
        <div
          id="bookmark"
          className={`${style.item} d-flex justify-content-center align-items-center`}
        >
          {t('bookmark')}
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
