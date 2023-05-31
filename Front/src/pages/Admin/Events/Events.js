import style from "./Events.module.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getEvents } from "../../../apis/Event";
import Event from "./Event/Event.";

function Events() {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((res) => setEvents(res));
  }, []);

  return (
    <div>
      {!events.length ? (
        <div>{t("loading")}</div>
      ) : (
        <div>
          <div>
            <div
              className={`${style.title} d-flex justify-content-center align-items-center`}
            >
              {t("name")}
            </div>
          </div>
          {events.map((event, i) => (
            <div className={`${i % 2 !== 0 ? style.gray : ""}`} key={event.id}>
              <Event event={event} setEvents={setEvents} events={events} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
