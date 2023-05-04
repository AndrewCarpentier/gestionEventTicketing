import { Link } from "react-router-dom";
import style from "./MobileSidebar.module.scss";

function MobileSidebar() {
  return (
    <div className={`d-flex align-items-center mobileSidebar`}>
      <Link to="/" className={`${style.item}`}>
        <div>
          <i className="fas fa-house" />
        </div>
      </Link>
      <Link to="/bookmark" className={`${style.item}`}>
        <div>
          <i className="fas fa-bookmark" />
        </div>
      </Link>
      <Link to="/createEvent/step1" className={`${style.item}`}>
        <div>
          <i className="fas fa-plus" />
        </div>
      </Link>
      <Link to="/ticket" className={`${style.item}`}>
        <div>
          <i className="fas fa-ticket" />
        </div>
      </Link>
      <Link to="/history" className={`${style.item}`}>
        <div>
          <i className="fas fa-clock-rotate-left" />
        </div>
      </Link>
    </div>
  );
}

export default MobileSidebar;
