import style from './Signup.module.scss';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { createUser } from '../../apis/Users';
import { useState } from 'react';
import {Link, Navigate} from 'react-router-dom';

function Signup(){
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const validationSchema = yup.object({
        mail: yup
        .string()
        .required('Ce champ doit être saisi')
        .email('Email non valide'),
        lastname: yup
        .string()
        .required('Ce champ doit être saisi'),
        firstname: yup
        .string()
        .required('Ce champ doit être saisi'),
        password: yup
        .string()
        .required('Ce champ doit être saisi')
        .min(6, 'Au moins six caractères'),
        passwordConfirm: yup
        .string()
        .required('Ce champ doit être saisi')
        .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre')
    });
    const initialValues = {
        mail: "",
        lastname: "",
        firstname: "",
        password: "",
        passwordConfirm: ""
    }
    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
        setError,
    } = useForm({
        initialValues,
        resolver: yupResolver(validationSchema)
    });

    const submit = handleSubmit(async(values)=>{
        try {
            if(await createUser(values)){
                setRegisterSuccess(true);
            }
        } catch (message) {
            setError("generic", {type: 'generic', message});
        }
    })
    return(
        <div className={`d-flex flex-fill justify-content-center align-items-center ${style.appContainer}`}>
            {registerSuccess? <Navigate to="/signin"/> : <></>}
            <form onSubmit={submit}>
                <div className={style.group}>
                    <input type="text" id="mail" required {...register('mail')}/>
                    <span className={style.bar}></span>
                    <label htmlFor="mail">E-Mail</label>
                </div>
                <div className={style.group}>
                    <input type="text" id="lastname" required {...register('lastname')}/>
                    <span className={style.bar}></span>
                    <label htmlFor="lastname">Nom</label>
                </div>
                <div className={style.group}>
                    <input type="text" id="firstname" required {...register('firstname')}/>
                    <span className={style.bar}></span>
                    <label htmlFor="firstname">Prénom</label>
                </div>
                <div className='d-flex flex-row'>
                    <div className={style.group}>
                        <input type="password" name="password" id="password" required {...register('password')}/>
                        <span className={style.bar}></span>
                        <label htmlFor="password">Mot de passe</label>
                    </div>
                </div>
                <div className={style.group}>
                    <input type="password" id="passwordConfirm" required {...register('passwordConfirm')}/>
                    <span className={style.bar}></span>
                    <label htmlFor="passwordConfirm">Confirmation de mot de passe</label>
                </div>
                <ul className="errors-message d-flex flex-column mb20">
                    {errors?.mail && <li className='error-message'>{errors.mail.message}</li>}
                    {errors?.firstname && <li className='error-message'>{errors.firstname.message}</li>}
                    {errors?.lastname && <li className='error-message'>{errors.lastname.message}</li>}
                    {errors?.password && <li className='error-message'>{errors.password.message}</li>}
                    {errors?.confirmPassword && <li className='error-message'>{errors.confirmPassword.message}</li>}
                    {errors.generic && <li className='error-message'>{errors.generic.message}</li>}
                </ul>
                <button disabled={isSubmitting} className={`btn btn-primary ${style.btnSubmit}`}>S'inscrire</button>
                <Link to='/signin' className={`${style.login} d-flex justify-content-center my20`}>Déjà inscrit</Link>
            </form>
        </div>
    )
}

export default Signup;