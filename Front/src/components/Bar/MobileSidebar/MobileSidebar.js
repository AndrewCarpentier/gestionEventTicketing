import { Link } from "react-router-dom";
import style from "./MobileSidebar.module.scss";

function MobileSidebar() {
  return (
    <div className={`d-flex align-items-center mobileSidebar`}>
      <Link className={`${style.item}`}>
        <div>
          <i className="fas fa-house" />
        </div>
      </Link>
      <Link className={`${style.item}`}>
        <div>
          <i className="fas fa-bookmark" />
        </div>
      </Link>
      <Link className={`${style.item}`}>
        <div>
          <i className="fas fa-ticket" />
        </div>
      </Link>
      <Link className={`${style.item}`}>
        <div>
          <i className="fas fa-clock-rotate-left" />
        </div>
      </Link>
    </div>
  );
}

export default MobileSidebar;
