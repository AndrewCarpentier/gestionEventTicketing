import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { CreateEventContext } from "../../../../context/CreateEventContext";
import { Navigate } from "react-router-dom";
import style from "./Step2.module.scss";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

function Step2() {
  const { t } = useTranslation();
  const { step2 } = useContext(CreateEventContext);
  const [step2Success, setStep2Success] = useState(false);
  const [img, setImg] = useState();

  useEffect(() => {
    ReactGA.send({hitType : "pageview", page : "create event step 2"})
  }, []);

  const validationSchema = yup.object({
    information: yup.string().required(),
  });

  const initialValues = {
    information: "",
  };

  const {
    handleSubmit,
    register,
    formState: { error, isSubmitting },
    setError,
    clearErrors,
  } = useForm({ initialValues, resolver: yupResolver(validationSchema) });

  const submit = handleSubmit(async (values) => {
    try {
      setStep2Success(await step2({...values, file : img}));
      clearErrors();
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  const displayImage = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
      var reader = new FileReader();
      reader.onload = function (e) {
        document.querySelector("#img").setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      {step2Success ? <Navigate to="/createEvent/step3" /> : ""}
      <form onSubmit={submit}>
        <h2 className="mb10">{t("mediaEvent")}</h2>
        <div className="mb10">
          <h3 className="mb10">{t("image")}</h3>
          <img id="img" src="" />
          <input type="file" accept="image/*" onChange={displayImage} />
        </div>
        <div className="mb10">
          <h3 className="mb10">{t("information")}</h3>
          <textarea
            className={`${style.information}`}
            {...register("information")}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" disabled={isSubmitting}>
            {t("save")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step2;
