import style from "./SendLink.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import {sendLinkPasswordLost} from '../../../apis/Auth';

function SendLink(){
    const validationSchema = yup.object({
        mail: yup
          .string()
          .required("Ce champ doit être saisi")
          .email("Email non valide"),
      });
      const initialValues = {
        mail: "",
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
          await sendLinkPasswordLost(values);
        } catch (message) {
          setError("generic", { type: "generic", message });
        }
      });
    return(
        <div
      className={`d-flex flex-fill align-items-center justify-content-center ${style.appContainer}`}
    >
      <form onSubmit={submit}>
        <h2 className="mb10">Mot de passe oublier</h2>
        <div className={`${style.group} mb20 mt20`}>
          <input type="text" id="mail" required {...register("mail")} />
          <span className={style.bar}></span>
          <label htmlFor="mail">E-Mail</label>
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
          Recevoir le lien
        </button>
        <Link
          to="/signin"
          className={`${style.connection} d-flex justify-content-center my20`}
        >
          Retour à la page de connexion
        </Link>
      </form>
    </div>
    )
};

export default SendLink;