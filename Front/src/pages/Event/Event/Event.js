import { addBookmark, deleteBookmark } from "../../../apis/Bookmark";
import style from "./Event.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

function Event({ event }) {
  const date = new Date(event.startDate);
  const [bookmark, setBookmark] = useState(event.bookmark);
  const { user } = useContext(AuthContext);

  useState(() => {
    if (!user) {
      setBookmark(false);
    }
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
    <Link to={`/${event.id}`}>
      <div className={`${style.card}`}>
        <img src={event.urlImg} alt="" />
        <h2>
          <span className={`${style.title}`}>{event.name}</span>
          <i
            onClick={HandleClick}
            className={`fas fa-bookmark ${bookmark ? style.bookmarkYes : ""}`}
          />
        </h2>
        <p className={`${style.date}`}>{date.toLocaleDateString("fr")}</p>
        <p className={`${style.localisation}`}>{event.localisation}</p>
      </div>
    </Link>
  );
}

export default Event;
