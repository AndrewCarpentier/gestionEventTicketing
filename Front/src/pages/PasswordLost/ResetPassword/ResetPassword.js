import style from "./ResetPassword.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Navigate, useParams } from "react-router-dom";
import { resetPassword } from "../../../apis/Auth";
import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

function ResetPassword() {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    ReactGA.send({hitType : "pageview", page : "password lost change password"})
  }, []);

  const { token } = useParams();
  const validationSchema = yup.object({
    password: yup
      .string()
      .required(<Trans>fieldRequired</Trans>)
      .min(6, <Trans>fieldMin6</Trans>),
    passwordConfirm: yup
      .string()
      .required(<Trans>fieldRequired</Trans>)
      .oneOf([yup.ref("password"), null], <Trans>fieldPasswordConfirm</Trans>),
  });
  const initialValues = {
    password: "",
    passwordConfirm: "",
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
      if (
        resetPassword({
          token,
          password: values.password,
          passwordConfirm: values.passwordConfirm,
        })
      ) {
        setSuccess(true);
      }
      clearErrors();
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div
      className={`d-flex flex-fill align-items-center justify-content-center ${style.appContainer}`}
    >
      {success ? <Navigate to="/" /> : ""}
      <form onSubmit={submit}>
        <h2 className="mb10">{t("passwordLost")}</h2>
        <div className={`${style.group} mb20 mt20`}>
          <label htmlFor="password">{t("password")}</label>
          <input
            type="password"
            id="password"
            required
            {...register("password")}
          />
          <span className={style.bar}></span>
        </div>
        <div className={`${style.group} mb20 mt20`}>
          <label htmlFor="passwordConfirm">{t("passwordConfirm")}</label>
          <input
            type="password"
            id="passwordConfirm"
            required
            {...register("passwordConfirm")}
          />
          <span className={style.bar}></span>
        </div>
        <ul className="errors-message d-flex flex-column mb20">
          {errors?.mail && (
            <li className="error-message">{errors.mail.message}</li>
          )}
          {errors.generic && (
            <li className="error-message">{errors.generic.message}</li>
          )}
        </ul>
        <button
          disabled={isSubmitting}
          className={`btn btn-primary ${style.btnSubmit}`}
        >
          {t("save")}
        </button>
        <Link
          to="/signin"
          className={`${style.connection} d-flex justify-content-center my20`}
        >
          {t("backToLoginPage")}
        </Link>
      </form>
    </div>
  );
}

export default ResetPassword;
