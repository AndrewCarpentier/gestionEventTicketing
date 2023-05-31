import { deleteUser } from '../../../../apis/Users';
import style from './User.module.scss';

function User({user, setIdUserEdit, users, setUsers}){

    function onEdit(){
        setIdUserEdit(user.id);
    }

    function onDelete(){
        if(deleteUser(user.id)){
            setUsers(users.filter(u => u.id !== user.id))
        }
    }

    return (
        <div className='d-flex'>
            <div className={`${style.px300} d-flex justify-content-center align-items-center`}>{user.lastname}</div>
            <div className={`${style.px300} d-flex justify-content-center align-items-center`}>{user.firstname}</div>
            <div className={`${style.px300} d-flex justify-content-center align-items-center`}>{user.mail}</div>
            <div className={`${style.edit} mr10`} onClick={onEdit}>Edit</div>
            <div className={`${style.delete}`} onClick={onDelete}>Delete</div>
        </div>
    )
};

export default User;