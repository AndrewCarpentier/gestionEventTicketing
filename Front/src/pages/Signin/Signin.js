import style from './Signin.module.scss';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Signin(){
    const {signin} = useContext(AuthContext);

    const validationSchema = yup.object({
        mail: yup
        .string()
        .required('Ce champ doit être saisi')
        .email('Email non valide'),
        password: yup
        .string()
        .required('Ce champ doit être saisi')
        .min(6, 'Au moins six caractères'),
    });
    const initialValues = {
        mail: "",
        password: ""
    }
    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
        setError,
        clearErrors 
    } = useForm({
        initialValues,
        resolver: yupResolver(validationSchema)
    });

    const submit = handleSubmit(async(values)=>{
        try {
            clearErrors();
            await signin(values);
        } catch (message) {
            setError("generic", {type: 'generic', message});
        }
    })

    return(
        <div
      className={`d-flex flex-fill align-items-center justify-content-center ${style.appContainer}`}
    >
      <form onSubmit={submit}>
        <h2 className="mb10">Se connecter</h2>
        <div className={`${style.group} mb20 mt20`}>
          <input type="text" id="mail" required {...register("mail")} />
          <span className={style.bar}></span>
          <label htmlFor="mail">E-Mail</label>
        </div>
        <div className={style.group}>
          <input
            type="password"
            id="password"
            required
            {...register("password")}
          />
          <span className={style.bar}></span>
          <label htmlFor="password">Mot de passe</label>
          <div className="m10">
            <Link className={`${style.register}`} to="/passwordlost">Mot de passe oublié?</Link>
          </div>
        </div>
        <ul className="errors-message d-flex flex-column mb20">
          {errors?.mail && (
            <li className="error-message">{errors.mail.message}</li>
          )}
          {errors?.password && (
            <li className="error-message">{errors.password.message}</li>
          )}
          {errors.generic && (
            <li className="error-message">{errors.generic.message}</li>
          )}
        </ul>
        <button
          disabled={isSubmitting}
          className={`btn btn-primary ${style.btnSubmit}`}
        >
          Se connecter
        </button>
        <Link
          to="/signup"
          className={`${style.register} d-flex justify-content-center my20`}
        >
          S'inscrire
        </Link>
      </form>
    </div>
    );
};

export default Signin;