import styles from './EventEdit.module.scss';
import { useContext, useEffect, useState } from "react";
import { UpdateEvent, getCategoryById, getSubCategoryById } from "../../../../../apis/Event";
import * as moment from "moment-timezone";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AdminContext } from '../../../../../context/AdminContext';

function EventEdit({ event, setUpdate }) {
  const {setShowEditAlertSuccess} = useContext(AdminContext);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    getCategoryById(event.id_category).then((res) => setCategory(res[0].name));
    getSubCategoryById(event.id_subCategory).then((res) =>
      setSubCategory(res[0].name)
    );
  }, []);

  const validationSchema = yup.object({
    information : yup.string().required(),
    location : yup.string(),
    linkOnlineEvent : yup.string()
  })

  const initialValues = {
    information : event.information,
    location : event.localisation,
    linkOnlineEvent : event.linkOnlineEvent,
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({ initialValues, resolver: yupResolver(validationSchema) });

  const onSubmit = handleSubmit(async (values) => {
    event.information = values.information;
    event.location = values.location;
    if(await UpdateEvent(event)){
      setUpdate(false);
      setShowEditAlertSuccess(true);
    }
  });

  function onCancel() {
    setUpdate(false);
  }
  return (
    <div>
      <div>
        <div>
          Date de creation :{" "}
          {moment.tz(event.creationDate, "europe/paris").format("LLLL")}
        </div>
        <div>Category : {category}</div>
        <div>SubCategory : {subCategory}</div>
        <div>
          Start Date :{" "}
          {moment.tz(event.startDate, "europe/paris").format("LLLL")}
        </div>
        <div>
          End Date : {moment.tz(event.endDate, "europe/paris").format("LLLL")}
        </div>
        <div>
          Information :<br /> <textarea className={`${styles.textarea}`} defaultValue={event.information} {...register("information")}/>
        </div>
        {event.localisation !== "" ? (
          <div>Localisation : <input className={styles.localisation} defaultValue={event.localisation} {...register("location")} /></div>
        ) : (
          <div>Online link : <input className={styles.onlineLink} defaultValue={event.linkOnlineEvent} {...register("linkOnlineEvent")} /></div>
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
      <div className="d-flex justify-content-center mb10">
        <button className="btn btn-primary-reverse" onClick={onCancel}>Cancel</button>
        <button className="btn btn-primary" disabled={isSubmitting} onClick={onSubmit}>Save</button>
      </div>
    </div>
  );
}

export default EventEdit;
