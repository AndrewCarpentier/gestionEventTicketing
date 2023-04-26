import style from './ContactDetail.module.scss';
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function ContactDetail(){
    const {user} = useContext(AuthContext);

    const validationSchema = yup.object({
        lastname: yup
        .string()
        .required('Ce champ doit être saisi'),
        firstname: yup
        .string()
        .required('Ce champ doit être saisi'),
    });
    const initialValues = {
        lastname: "",
        firstname: "",
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
            alert();
        } catch (message) {
            setError("generic", {type: 'generic', message});
        }
    })

    return(
        <div className="m20">
            <h3 className='mb20'>Coordonnée</h3>
            <div className={`d-flex flex-fill align-items-center justify-content-center m30 mt50`}>
            <form onSubmit={submit}>
                <div className={style.group}>
                    <input  type="text" id="lastname" value={user.lastname} required {...register('lastname')}/>
                    <span className={style.bar}></span>
                    <label htmlFor="lastname">Nom</label>
                </div>
                <div className="d-flex flex-row">
                    <div className={style.group}>
                        <input type="text" id="firstname" value={user.firstname} required {...register('firstname')}/>
                        <span className={style.bar}></span>
                        <label htmlFor="firstname">Prénom</label>
                    </div>
                </div>
                <ul className="errors-message d-flex flex-column mb20">
                    {errors?.mail && <li className='error-message'>{errors.lastname.message}</li>}
                    {errors?.password && <li className='error-message'>{errors.firstname.message}</li>}
                    {errors.generic && <li className='error-message'>{errors.generic.message}</li>}
                </ul>
                <div className='d-flex justify-content-end'>
                    <button disabled={isSubmitting} className={`btn btn-primary ${style.btnSubmit}`}>Se connecter</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default ContactDetail;