import style from "./Event.module.scss";
import { useContext, useState } from "react";
import EventDetail from "./EventDetail/EventDetail";
import { DeleteEvent } from "../../../../apis/Event";
import { AdminContext } from "../../../../context/AdminContext";
import EventEdit from './EventEdit/EventEdit';

function Event({ event, setEvents, events }) {
  const { setShowDelete, deleteAlertResponse, setDeleteAlertResponse } =
    useContext(AdminContext);
  const [showDetail, setShowDetail] = useState(false);
  const [updateEvent, setUpdateEvent] = useState(false);
  function onDetail() {
    setShowDetail(!showDetail);
  }

  function onShowDelete() {
    setShowDelete(true);
  }

  if (deleteAlertResponse) {
    if (DeleteEvent(event.id)) {
      setEvents(events.filter((e) => e.id !== event.id));
    }
    setDeleteAlertResponse(false);
  }

  return (
    <div>
      <div className={`${style.item} d-flex`}>
        <div className={`${style.name}`}>{event.name}</div>
        <div className="d-flex justify-content-center align-items-center">
          <div className={`${style.detail}`} onClick={onDetail}>
            {showDetail ? "Voir moins de details" : "Voir plus de details"}
          </div>
          <div onClick={onShowDelete} className={`${style.delete} ml20`}>
            Delete
          </div>
        </div>
      </div>
      {showDetail && (
        <div>{updateEvent ? <EventEdit event={event} setUpdate={setUpdateEvent}/> : <EventDetail event={event} setUpdate={setUpdateEvent} />}</div>
      )}
    </div>
  );
}

export default Event;
