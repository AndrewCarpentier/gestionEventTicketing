import { useEffect } from "react";
import style from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

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
          Accueil
        </div>
      </Link>
      <Link to="/ticket">
        <div
          className={`${style.item} d-flex justify-content-center align-items-center`}
        >
          Billet
        </div>
      </Link>
      <Link to="/history">
        <div
          className={`${style.item} d-flex justify-content-center align-items-center`}
        >
          Historique
        </div>
      </Link>
      <Link to="/bookmark">
        <div
          id="bookmark"
          className={`${style.item} d-flex justify-content-center align-items-center`}
        >
          Marque page
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
