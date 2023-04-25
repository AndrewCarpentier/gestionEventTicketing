import styles from './Signin.module.scss';
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
        <div className={`flex-fill d-flex align-items-center justify-content-center`}>
            <form onSubmit={submit} className={`d-flex flex-column card ${styles.form}`}>
                <h2 className="mb10 m10">Se connecter</h2>
                <div className="mb10 m10 d-flex flex-column">
                    <label htmlFor="email">Mail</label>
                    <input type="email" name="email" {...register("mail")}/>
                    {errors.email && <p className='form-error'>{errors.email.message}</p>}
                </div>
                <div className="mb10 m10 d-flex flex-column">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" {...register("password")}/>
                    {errors.password && <p className='form-error'>{errors.password.message}</p>}
                </div>
                <div className='ml10'>
                    {errors.generic && (
                        <p className='form-error'>{errors.generic.message}</p>
                    )}
                </div>
                <div className="m10 d-flex justify-content-center">
                    <button disabled={isSubmitting} className="btn btn-primary">Se connecter</button>
                </div>
                <div className="m10 d-flex justify-content-center">
                        <Link to="/signup">S'inscrire</Link>
                </div>
            </form>
        </div>
    );
};

export default Signin;