import style from "./Signup.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../apis/Users";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

function Signup() {
  const { t } = useTranslation();
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const validationSchema = yup.object({
    mail: yup
      .string()
      .required(<Trans>fieldRequired</Trans>)
      .email(<Trans>fieldMail</Trans>),
    lastname: yup.string().required(<Trans>fieldRequired</Trans>),
    firstname: yup.string().required(<Trans>fieldRequired</Trans>),
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
    mail: "",
    lastname: "",
    firstname: "",
    password: "",
    passwordConfirm: "",
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      if (await createUser(values)) {
        setRegisterSuccess(true);
      }
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });
  return (
    <div
      className={`d-flex flex-fill justify-content-center align-items-center ${style.appContainer}`}
    >
      {registerSuccess ? <Navigate to="/signin" /> : <></>}
      <form onSubmit={submit}>
        <h2 className="mb10">{t("signup")}</h2>
        <div className={`${style.group} mb20 mt20`}>
          <label htmlFor="mail">E-Mail</label>
          <input type="text" id="mail" required {...register("mail")} />
          <span className={style.bar}></span>
        </div>
        <div className={`${style.group} mb20 mt20`}>
          <label htmlFor="lastname">{t("lastname")}</label>
          <input type="text" id="lastname" required {...register("lastname")} />
          <span className={style.bar}></span>
        </div>
        <div className={`${style.group} mb20 mt20`}>
          <label htmlFor="firstname">{t("firstname")}</label>
          <input
            type="text"
            id="firstname"
            required
            {...register("firstname")}
          />
          <span className={style.bar}></span>
        </div>
        <div>
          <div className={`${style.group} mb20 mt20`}>
            <label htmlFor="password">{t("password")}</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              {...register("password")}
            />
            <span className={style.bar}></span>
          </div>
        </div>
        <div className={style.group}>
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
          {errors?.firstname && (
            <li className="error-message">{errors.firstname.message}</li>
          )}
          {errors?.lastname && (
            <li className="error-message">{errors.lastname.message}</li>
          )}
          {errors?.password && (
            <li className="error-message">{errors.password.message}</li>
          )}
          {errors?.confirmPassword && (
            <li className="error-message">{errors.confirmPassword.message}</li>
          )}
          {errors.generic && (
            <li className="error-message">{errors.generic.message}</li>
          )}
        </ul>
        <button
          disabled={isSubmitting}
          className={`btn btn-primary ${style.btnSubmit}`}
        >
          {t("signup")}
        </button>
        <Link
          to="/signin"
          className={`${style.login} d-flex justify-content-center my20`}
        >
          {t("alreadyRegistered")}
        </Link>
      </form>
    </div>
  );
}

export default Signup;
