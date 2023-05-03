import { useTranslation, Trans } from "react-i18next";
import style from "./Step1.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getCategory } from "../../../apis/Event";
import { useContext, useEffect, useState } from "react";
import { CreateEventContext } from "../../../context/CreateEventContext";

function Step1() {
  const { t } = useTranslation();
  const { step1 } = useContext(CreateEventContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [categoryChooseId, setCategoryChooseId] = useState(0);
  const [subCategoryChooseId, setSubCategoryChooseId] = useState(0);
  const [chooseLocation, setChooseLocation] = useState(true);

  useEffect(() => {
    getCategory().then((c) => {
      setCategory(c.category);
      setSubCategory(c.subCategory);
    });
  }, []);

  const validationSchema = yup.object({
    eventName: yup.string().required(<Trans>fieldRequired</Trans>),
    location: chooseLocation
      ? yup.string().required(<Trans>fieldRequired</Trans>)
      : yup.string(),
    onlineLink: !chooseLocation
      ? yup.string().required(<Trans>fieldRequired</Trans>)
      : yup.string(),
  });
  const initialValues = {
    eventName: "",
    location: "",
    category: "",
    onlineLink: "",
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      clearErrors();
      let x = await step1({
        value: values,
        category: categoryChooseId,
        subCategory: subCategoryChooseId,
      });
      console.log(x);
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  function changeCategory(e) {
    if (e.target.value !== "Categorie") {
      setCategoryChooseId(e.target.value);
    } else {
      setCategoryChooseId(0);
    }
  }

  function changeSubCategory(e) {
    if (e.target.value !== "SubCategorie") {
      setSubCategoryChooseId(e.target.value);
    } else {
      setSubCategoryChooseId(0);
    }
  }

  function changeLocation(e) {
    if (e === "online") {
      document.getElementById("online").classList.remove("btn-primary-reverse");
      document.getElementById("online").classList.add("btn-primary");
      document.getElementById("location").classList.add("btn-primary-reverse");
      document.getElementById("location").classList.remove("btn-primary");
      setChooseLocation(false);
    } else if (e === "location") {
      document
        .getElementById("location")
        .classList.remove("btn-primary-reverse");
      document.getElementById("location").classList.add("btn-primary");
      document.getElementById("online").classList.add("btn-primary-reverse");
      document.getElementById("online").classList.remove("btn-primary");
      setChooseLocation(true);
    }
  }

  return (
    <div
      className={`d-flex flex-fill align-items-center justify-content-center ${style.appContainer}`}
    >
      <form onSubmit={submit}>
        <h2 className="mb10">Info de base</h2>
        <div className={`${style.group} mb20 mt20`}>
          <input
            type="text"
            id="eventName"
            required
            {...register("eventName")}
          />
          <span className={style.bar}></span>
          <label htmlFor="eventName">Event name</label>
        </div>
        <select onChange={changeCategory}>
          <option>Categorie</option>
          {category.length
            ? category.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))
            : ""}
        </select>

        {categoryChooseId !== 0 ? (
          <select onChange={changeSubCategory}>
            <option>SubCategorie</option>
            {subCategory.length
              ? subCategory
                  .filter(
                    (c) =>
                      c.id_category.toString() === categoryChooseId.toString()
                  )
                  .map((c) => (
                    <option value={c.id} key={c.id}>
                      {c.name}
                    </option>
                  ))
              : ""}
          </select>
        ) : (
          ""
        )}

        <h2 className="mb10">Lieu</h2>
        <button
          onClick={() => changeLocation("location")}
          id="location"
          type="button"
          className="btn btn-primary"
        >
          Lieu
        </button>
        <button
          onClick={() => changeLocation("online")}
          id="online"
          type="button"
          className="btn btn-primary-reverse"
        >
          Online event
        </button>
        {chooseLocation ? (
          <div className={`${style.group} mb20 mt20`}>
            <input
              type="text"
              id="location"
              required
              {...register("location")}
            />
            <span className={style.bar}></span>
            <label htmlFor="location">Lieu ou adresse</label>
          </div>
        ) : (
          ""
        )}
        {!chooseLocation ? (
          <div className={`${style.group} mb20 mt20`}>
            <input
              type="text"
              id="onlineLink"
              required
              {...register("onlineLink")}
            />
            <span className={style.bar}></span>
            <label htmlFor="onlineLink">Link</label>
          </div>
        ) : (
          ""
        )}

        <h2 className="mb10">Date et heure</h2>
        <div className="d-flex">
          <div className={`${style.group} mb20 mt20`}>
            <input
              type="date"
              id="location"
              required
              {...register("startDate")}
            />
            <span className={style.bar}></span>
            <label htmlFor="location"></label>
          </div>
          <select {...register("startHour")}>
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
        <div className="d-flex">
          <div className={`${style.group} mb20 mt20`}>
            <input
              type="date"
              id="location"
              required
              {...register("endDate")}
            />
            <span className={style.bar}></span>
            <label htmlFor="location"></label>
          </div>
          <select {...register("endHour")}>
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
        <ul className="errors-message d-flex flex-column mb20">
          {errors?.eventName && (
            <li className="error-message">{errors.eventName.message}</li>
          )}
          {errors?.password && (
            <li className="error-message">{errors.password.message}</li>
          )}
          {/* {errors.generic && (
            <li className="error-message">{errors.generic.message}</li>
          )} */}
        </ul>
        <button
          disabled={isSubmitting}
          className={`btn btn-primary ${style.btnSubmit}`}
        >
          {t("save")}
        </button>
      </form>
    </div>
  );
}

export default Step1;
