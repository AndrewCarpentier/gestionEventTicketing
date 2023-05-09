import style from "./ContactDetail.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUser } from "../../../../apis/Users";
import { useTranslation } from "react-i18next";

function ContactDetail() {
  const { t } = useTranslation();
  const { user, edit } = useContext(AuthContext);
  const [save, setSave] = useState(false);

  const validationSchema = yup.object({
    mail: yup
      .string()
      .required("Ce champ doit être saisi")
      .email("Email non valide"),
    lastname: yup.string().required("Ce champ doit être saisi"),
    firstname: yup.string().required("Ce champ doit être saisi"),
  });
  const initialValues = {
    mail: user.mail,
    lastname: user.lastname,
    firstname: user.firstname,
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
      if (
        await editUser({
          id: user.id,
          mail: values.mail,
          lastname: values.lastname,
          firstname: values.firstname,
        })
      ) {
        edit();
        setSave(true);
        setTimeout(() => {
          setSave(false);
        }, 1000);
      }
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className="m20">
      <h3 className="mb20">{t("contactDetail")}</h3>
      <div
        className={`d-flex flex-fill align-items-center justify-content-center m30 mt50`}
      >
        <form onSubmit={submit}>
          <div className={style.group}>
            <label htmlFor="mail">E-mail</label>
            <input
              type="text"
              id="mail"
              defaultValue={user.mail}
              required
              {...register("mail")}
            />
            <span className={style.bar}></span>
          </div>
          <div className={style.group}>
            <label htmlFor="lastname">{t("lastname")}</label>
            <input
              type="text"
              id="lastname"
              defaultValue={user.lastname}
              required
              {...register("lastname")}
            />
            <span className={style.bar}></span>
          </div>
          <div className="d-flex flex-row">
            <div className={style.group}>
              <label htmlFor="firstname">{t("firstname")}</label>
              <input
                type="text"
                id="firstname"
                defaultValue={user.firstname}
                required
                {...register("firstname")}
              />
              <span className={style.bar}></span>
            </div>
          </div>
          <ul className="errors-message d-flex flex-column mb20">
            {errors?.mail && (
              <li className="error-message">{errors.lastname.message}</li>
            )}
            {errors?.password && (
              <li className="error-message">{errors.firstname.message}</li>
            )}
            {errors.generic && (
              <li className="error-message">{errors.generic.message}</li>
            )}
            {save && <li>modification bien effectuer</li>}
          </ul>
          <div className="d-flex justify-content-end">
            <button
              disabled={isSubmitting}
              className={`btn btn-primary ${style.btnSubmit}`}
            >
              {t("save")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactDetail;
