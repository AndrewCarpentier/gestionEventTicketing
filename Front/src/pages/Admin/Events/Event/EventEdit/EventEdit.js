import styles from "./EventEdit.module.scss";
import { useContext, useEffect, useState } from "react";
import {
  UpdateEvent,
  getCategoryById,
  getSubCategoryById,
} from "../../../../../apis/Event";
import * as moment from "moment-timezone";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AdminContext } from "../../../../../context/AdminContext";

function EventEdit({ event, setUpdate }) {
  var hours = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];
  const { setShowEditAlertSuccess } = useContext(AdminContext);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startHour, setStartHour] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endHour, setEndHour] = useState(null);
  const [publishDate, setPublishDate] = useState(null);
  const [publishHour, setPublishHour] = useState(null);

  useEffect(() => {
    getCategoryById(event.id_category).then((res) => setCategory(res[0].name));
    getSubCategoryById(event.id_subCategory).then((res) =>
      setSubCategory(res[0].name)
    );

    function getDateString(date) {
      const sDate = new Date(date);
      const dY = sDate.getFullYear().toString();
      const dM = sDate.getMonth().toString();
      const dD = sDate.getDate().toString();
      return (
        dY +
        `-${dM.length === 1 ? "0" : ""}` +
        dM +
        `-${dD.length === 1 ? "0" : ""}` +
        dD
      );
    }

    function getHourString(date) {
      const sdate = new Date(date);
      const dH = sdate.getHours().toString();
      const dMin = sdate.getMinutes().toString();
      return (
        `${dH.length === 1 ? "0" : ""}` +
        dH +
        `:${dMin.length === 1 ? "0" : ""}` +
        dMin
      );
    }

    setStartDate(getDateString(event.startDate));
    setStartHour(getHourString(event.startDate));
    setEndDate(getDateString(event.endDate));
    setEndHour(getHourString(event.endDate));
    setPublishDate(getDateString(event.publishDate));
    setPublishHour(getHourString(event.publishDate));
  }, [event]);

  const validationSchema = yup.object({
    information: yup.string().required(),
    location: yup.string(),
    linkOnlineEvent: yup.string(),
  });

  const initialValues = {
    information: event.information,
    location: event.localisation,
    linkOnlineEvent: event.linkOnlineEvent,
  };

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
    event.startDate = moment
      .tz(values.startDate + "T" + values.startHour, "Europe/Paris")
      .utc()
      .format();
    event.endDate = moment
      .tz(values.endDate + "T" + values.endHour, "Europe/Paris")
      .utc()
      .format();
    event.publishDate = moment
      .tz(values.publishDate + "T" + values.publishHour, "Europe/Paris")
      .utc()
      .format();
    if (await UpdateEvent(event)) {
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
          Start Date :
          {startDate !== null && (
            <span>
              <input
                className={styles.input}
                type="date"
                defaultValue={startDate}
                {...register("startDate")}
              />
              <select className={styles.hourSelect} {...register("startHour")}>
                {hours.map((h) => (
                  <>
                    {h === startHour ? (
                      <option selected>{h}</option>
                    ) : (
                      <option>{h}</option>
                    )}
                  </>
                ))}
              </select>
            </span>
          )}
        </div>
        <div>
          End Date :
          {endDate !== null && (
            <span>
              <input
                className={styles.input}
                type="date"
                defaultValue={endDate}
                {...register("endDate")}
              />
              <select className={styles.hourSelect} {...register("endHour")}>
                {hours.map((h) => (
                  <>
                    {h === endHour ? (
                      <option selected>{h}</option>
                    ) : (
                      <option>{h}</option>
                    )}
                  </>
                ))}
              </select>
            </span>
          )}
        </div>
        <div>
          Information :<br />{" "}
          <textarea
            className={`${styles.textarea}`}
            defaultValue={event.information}
            {...register("information")}
          />
        </div>
        {event.localisation !== "" ? (
          <div>
            Localisation :{" "}
            <input
              className={styles.localisation}
              defaultValue={event.localisation}
              {...register("location")}
            />
          </div>
        ) : (
          <div>
            Online link :{" "}
            <input
              className={styles.onlineLink}
              defaultValue={event.linkOnlineEvent}
              {...register("linkOnlineEvent")}
            />
          </div>
        )}
        <div>
          Publish Date :
          {publishDate !== null && (
            <span>
              <input
                className={styles.input}
                type="date"
                defaultValue={publishDate}
                {...register("publishDate")}
              />
              <select className={styles.hourSelect} {...register("publishHour")}>
                {hours.map((h) => (
                  <>
                    {h === publishHour ? (
                      <option selected>{h}</option>
                    ) : (
                      <option>{h}</option>
                    )}
                  </>
                ))}
              </select>
            </span>
          )}
        </div>
        <div>
          {event.public === 1
            ? "Cette evenement est public"
            : "Cette evenement est privée le mot de passe pour y acceder est " +
              event.password}
        </div>
      </div>
      <div className="d-flex justify-content-center mb10">
        <button className="btn btn-primary-reverse" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="btn btn-primary"
          disabled={isSubmitting}
          onClick={onSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EventEdit;
