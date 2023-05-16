import { addBookmark, deleteBookmark } from "../../../apis/Bookmark";
import style from "./Event.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import * as moment from 'moment-timezone';

function Event({ event }) {
  const date = new Date(event.startDate);
  const [bookmark, setBookmark] = useState(event.bookmark);
  const { user } = useContext(AuthContext);
  const [img, setImg] = useState(null);
  useState(() => {
    if (!user) {
      setBookmark(false);
    }
    fetch(`http://localhost:8000/api/image/${event.urlImg}`).then(res => setImg(res.url));

  }, []);

  function HandleClick() {
    if (user !== "null") {
      if (bookmark) {
        if (deleteBookmark(user.id, event.id)) {
          setBookmark(!bookmark);
        }
      } else {
        if (addBookmark(user.id, event.id)) {
          setBookmark(!bookmark);
        }
      }
    }
  }

  return (
    <div className={`${style.card}`}>
      <Link to={`/${event.id}`}>
        <img src={img} alt="" />
      </Link>
      <h2>
        <Link to={`/${event.id}`}>
          <span className={`${style.title}`}>{event.name}</span>
        </Link>
        <i
          onClick={HandleClick}
          className={`fas fa-bookmark ${bookmark ? style.bookmarkYes : ""}`}
        />
      </h2>
      <Link to={`/${event.id}`}>
        <p className={`${style.date}`}>{moment.tz(event.startDate, 'europe/paris').format('LLLL')}</p>
        <p className={`${style.localisation}`}>{event.localisation != "" ? event.localisation : "online"}</p>
      </Link>
    </div>
  );
}

export default Event;
