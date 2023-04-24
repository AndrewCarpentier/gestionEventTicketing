import styles from './Signup.module.scss';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { createUser } from '../../apis/Users';
import { useState } from 'react';

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
        <div className={`flex-fill d-flex align-items-center justify-content-center`}>
            <form onSubmit={submit} className={`d-flex flex-column card ${styles.form}`}>
                <h2 className="mb10 m10">S'inscrire'</h2>
                <div className="mb10 m10 d-flex flex-column">
                    <label htmlFor="email">Mail</label>
                    <input type="email" name="email" {...register("mail")}/>
                    {errors.email && <p className='form-error'>{errors.email.message}</p>}
                </div>
                <div className="mb10 m10 d-flex flex-column">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" {...register("lastname")}/>
                    {errors.lastname && <p className='form-error'>{errors.lastname.message}</p>}
                </div>
                <div className="mb10 m10 d-flex flex-column">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" {...register("firstname")}/>
                    {errors.firstname && <p className='form-error'>{errors.firstname.message}</p>}
                </div>
                <div className="mb10 m10 d-flex flex-column">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" {...register("password")}/>
                    {errors.password && <p className='form-error'>{errors.password.message}</p>}
                </div>
                <div className="mb10 m10 d-flex flex-column">
                    <label htmlFor="passwordConfirm">Confirmation de mot de passe</label>
                    <input type="password" name="passwordConfirm" {...register("passwordConfirm")}/>
                    {errors.passwordConfirm && <p className='form-error'>{errors.passwordConfirm.message}</p>}
                </div>
                <div className='ml10'>
                    {errors.generic && (
                        <p className='form-error'>{errors.generic.message}</p>
                    )}
                </div>
                <div className="m10 d-flex justify-content-center">
                    <button disabled={isSubmitting} className="btn btn-primary">S'inscrire'</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;