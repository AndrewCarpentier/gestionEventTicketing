import style from "./ResetPassword.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useParams } from "react-router-dom";
import {resetPassword} from '../../../apis/Auth';

function ResetPassword() {
  const { token } = useParams();
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Ce champ doit être saisi")
      .min(6, "Au moins six caractères"),
    passwordConfirm: yup
      .string()
      .required("Ce champ doit être saisi")
      .oneOf(
        [yup.ref("password"), null],
        "Les mots de passe doivent correspondre"
      ),
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
      resetPassword({
        token,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
      });
      clearErrors();
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div
      className={`d-flex flex-fill align-items-center justify-content-center ${style.appContainer}`}
    >
      <form onSubmit={submit}>
        <h2 className="mb10">Mot de passe oublier</h2>
        <div className={`${style.group} mb20 mt20`}>
          <input
            type="password"
            id="password"
            required
            {...register("password")}
          />
          <span className={style.bar}></span>
          <label htmlFor="password">Mot de passe</label>
        </div>
        <div className={`${style.group} mb20 mt20`}>
          <input
            type="password"
            id="passwordConfirm"
            required
            {...register("passwordConfirm")}
          />
          <span className={style.bar}></span>
          <label htmlFor="passwordConfirm">Confirmation de mot de passe</label>
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
          Sauvegarder
        </button>
        <Link
          to="/signin"
          className={`${style.connection} d-flex justify-content-center my20`}
        >
          Retour à la page de connexion
        </Link>
      </form>
    </div>
  );
}

export default ResetPassword;
