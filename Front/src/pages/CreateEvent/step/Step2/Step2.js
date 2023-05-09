import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { CreateEventContext } from "../../../../context/CreateEventContext";
import { Navigate } from "react-router-dom";
import style from "./Step2.module.scss";
import { useTranslation } from "react-i18next";

function Step2() {

  const {t} = useTranslation();
  const { step2 } = useContext(CreateEventContext);
  const [step2Success, setStep2Success] = useState(false);

  const validationSchema = yup.object({
    file: yup.mixed().required(),
    information: yup.string().required(),
  });

  const initialValues = {
    file: "",
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
      if (values.file.length == 1) {
        setStep2Success(await step2(values));
      } else {
      }
      clearErrors();
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div>
      {step2Success ? <Navigate to="/createEvent/step3" /> : ""}
      <form onSubmit={submit}>
        <h2 className="mb10">{t("mediaEvent")}</h2>
        <div className="mb10">
          <h3 className="mb10">{t("image")}</h3>
          <input type="file" accept="image/*" {...register("file")} />
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
