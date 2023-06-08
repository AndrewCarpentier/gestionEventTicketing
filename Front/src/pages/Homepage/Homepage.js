import { useContext, useEffect, useState } from "react";
import style from "./Homepage.module.scss";
import Event from "../Event/Event/Event";
import { getBookmarkEvents, getEvents } from "../../apis/Event";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

function Homepage() {
  const { t } = useTranslation();
  const [eventList, setEventList] = useState([]);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      getEvents(user ? user.id : null).then((response) =>
        setEventList(response)
      );
      ReactGA.send({ hitType: "pageview", page: "homepage" });
    } else if (location.pathname === "/bookmark") {
      getBookmarkEvents(user.id).then((response) => setEventList(response));
      ReactGA.send({ hitType: "pageview", page: "bookmark" });
    }
  }, [user, location]);

  return (
    <div>
      {!eventList.length ? (
        <div className="d-flex justify-content-center align-items-center">
          {t("loading")}...
        </div>
      ) : (
        <div className={`${style.container} d-flex justify-content-center`}>
          {eventList.map((e) => (
            <Event key={e.id} event={e} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
