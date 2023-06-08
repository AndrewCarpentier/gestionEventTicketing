import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { CreateEventContext } from "../../../../context/CreateEventContext";
import { AuthContext } from "../../../../context/AuthContext";
import { Navigate } from "react-router-dom";
import style from "./Step4.module.scss";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

function Step4() {
  const {t} = useTranslation();
  const { step4 } = useContext(CreateEventContext);
  const { user } = useContext(AuthContext);
  const [step4Success, setStep4Success] = useState(false);

  useEffect(() => {
    ReactGA.send({hitType : "pageview", page : "create event step 4"})
  }, []);

  const validationSchema = yup.object({
    publishDate: yup.string().required(),
  });

  const initialValues = {};

  const {
    handleSubmit,
    register,
    formState: { error, isSubmitting },
    setError,
    clearErrors,
  } = useForm({ initialValues, resolver: yupResolver(validationSchema) });

  const submit = handleSubmit(async (values) => {
    if (await step4({ values, user })) {
      setStep4Success(true);
    }
  });

  return (
    <div>
      {step4Success ? <Navigate to="/" /> : ""}
      <form onSubmit={submit}>
        <h2 className="mb10">{t("publishYourEvent")}</h2>
        <div className="mb10">
          <input
            defaultChecked
            type="radio"
            id="public"
            name="visibility"
            {...register("public")}
          />
          <label htmlFor="public">{t("public")}</label>
          <input
            type="radio"
            id="private"
            name="visibility"
            {...register("private")}
          />
          <label htmlFor="private">{t("private")}</label>
        </div>
        <div>{t("publishDate")}</div>
        <div className="d-flex mb10">
          <div className={`${style.group}`}>
            <input
              id="publishDate"
              type="date"
              {...register("publishDate")}
            />
          </div>
          <span className={style.bar}></span>
          <label htmlFor="publishdate"></label>
          <select {...register("publishHour")}>
            <option>00:00</option>
            <option>00:30</option>
            <option>01:00</option>
            <option>01:30</option>
            <option>02:00</option>
            <option>02:30</option>
            <option>03:00</option>
            <option>03:30</option>
            <option>04:00</option>
            <option>04:30</option>
            <option>05:00</option>
            <option>05:30</option>
            <option>06:00</option>
            <option>06:30</option>
            <option>07:00</option>
            <option>07:30</option>
            <option>08:00</option>
            <option>08:30</option>
            <option>09:00</option>
            <option>09:30</option>
            <option>10:00</option>
            <option>10:30</option>
            <option>11:00</option>
            <option>11:30</option>
            <option>12:00</option>
            <option>12:30</option>
            <option>13:00</option>
            <option>13:30</option>
            <option>14:00</option>
            <option>14:30</option>
            <option>15:00</option>
            <option>15:30</option>
            <option>16:00</option>
            <option>16:30</option>
            <option>17:00</option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
            <option>21:00</option>
            <option>21:30</option>
            <option>22:00</option>
            <option>22:30</option>
            <option>23:00</option>
            <option>23:30</option>
          </select>
        </div>
        <button className={`btn btn-primary ${style.btnSubmit}`} disabled={isSubmitting}>{t("publish")}</button>
      </form>
    </div>
  );
}

export default Step4;
