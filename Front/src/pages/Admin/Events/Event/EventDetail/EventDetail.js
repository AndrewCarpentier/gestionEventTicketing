import styles from "./EventDetail.module.scss";
import { useEffect, useState } from "react";
import { getCategoryById, getSubCategoryById } from "../../../../../apis/Event";
import * as moment from "moment-timezone";

function EventDetail({ event, setUpdate }) {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    getCategoryById(event.id_category).then((res) => setCategory(res[0].name));
    getSubCategoryById(event.id_subCategory).then((res) =>
      setSubCategory(res[0].name)
    );
  }, []);

  return (
    <div>
      <button className={`btn btn-primary ${styles.updateBtn}`} onClick={()=> setUpdate(true)}>
        Modifier
      </button>
      <div>
        Date de creation :{" "}
        {moment.tz(event.creationDate, "europe/paris").format("LLLL")}
      </div>
      <div>Category : {category}</div>
      <div>SubCategory : {subCategory}</div>
      <div>
        Start Date : {moment.tz(event.startDate, "europe/paris").format("LLLL")}
      </div>
      <div>
        End Date : {moment.tz(event.endDate, "europe/paris").format("LLLL")}
      </div>
      <div>
        Information :<br /> {event.information}
      </div>
      {event.localisation !== "" ? (
        <div>Localisation : {event.localisation}</div>
      ) : (
        <div>Online link : {event.linkOnlineEvent}</div>
      )}
      <div>
        Publish Date :{" "}
        {moment.tz(event.publishDate, "europe/paris").format("LLLL")}
      </div>
      <div>
        {event.public === 1
          ? "Cette evenement est public"
          : "Cette evenement est privée le mot de passe pour y acceder est " +
            event.password}
      </div>
    </div>
  );
}

export default EventDetail;
