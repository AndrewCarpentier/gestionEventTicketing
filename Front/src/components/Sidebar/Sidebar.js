import style from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <div
          className={`${style.item} d-flex justify-content-center align-items-center`}
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
          className={`${style.item} d-flex justify-content-center align-items-center`}
        >
          Marque page
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
