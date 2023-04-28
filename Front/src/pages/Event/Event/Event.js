import { addBookmark, deleteBookmark } from "../../../apis/Bookmark";
import style from "./Event.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

function Event({ event }) {
  const date = new Date(event.startDate);
  const [bookmark, setBookmark] = useState(event.bookmark);
  const { user } = useContext(AuthContext);

  useState(()=>{
    if(!user){
        setBookmark(false);
    }
  }, [])

  function HandleClick() {
    if (user.id !== "null") {
      if (bookmark) {
        if(deleteBookmark(user.id, event.id)){
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
      <img src={event.urlThumbnail} alt="" />
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
  );
}

export default Event;
