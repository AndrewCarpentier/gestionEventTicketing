import style from "./Event.module.scss";
import { useState } from "react";
import EventDetail from "./EventDetail/EventDetail";
import { DeleteEvent } from "../../../../apis/Event";

function Event({ event, setEvents, events }) {
  const [showDetail, setShowDetail] = useState(false);

  function onDetail() {
    setShowDetail(!showDetail);
  }

  function onDelete() {
    if (DeleteEvent(event.id)) {
      setEvents(events.filter((e) => e.id !== event.id));
    }
  }

  return (
    <div>
      <div className={`${style.item} d-flex`}>
        <div className={`${style.name}`}>{event.name}</div>
        <div className={`${style.detail}`} onClick={onDetail}>
          {showDetail ? "Voir moins de details" : "Voir plus de details"}
        </div>
        <div onClick={onDelete} className={`${style.delete} ml20`}>
          Delete
        </div>
      </div>
      {showDetail && (
        <div>
          <EventDetail event={event} />
        </div>
      )}
    </div>
  );
}

export default Event;
