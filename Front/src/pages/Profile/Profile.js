import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';

function Profile(){
    const {user} = useContext(AuthContext);
    return(
        <div>
            <div>mail : {user.mail}</div>
            <div>firstname : {user.firstname}</div>
            <div>lastname : {user.lastname}</div>
        </div>
    );
};

export default Profile;