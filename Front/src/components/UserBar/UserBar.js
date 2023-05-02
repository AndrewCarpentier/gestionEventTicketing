import { useContext } from "react";
import style from "./UserBar.module.scss";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function UserBar() {
  const { user, signout } = useContext(AuthContext);
  return (
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
        onClick={signout}
        className={`${style.item} d-flex align-items-center justify-content-start`}
      >
        Se déconnecter
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
        className={`${style.item} d-flex align-items-center justify-content-start`}
      >
        Apparence
      </div>
      <div
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
  );
}

export default UserBar;
