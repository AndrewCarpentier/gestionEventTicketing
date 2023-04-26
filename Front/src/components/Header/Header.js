import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthContext';

function Header(){
    const {user, signout} = useContext(AuthContext);
    return(
        <div className={`${style.header} d-flex`}>
            <div className={`${style.start} d-flex`}>
                <i className='fas fa-bars'/>
                <h1 className='d-flex align-items-center'><Link to="/">EventMaster</Link></h1>
            </div>
            <div className={`${style.center} d-flex align-items-center justify-content-center`}>
                <input placeholder='search'/>
            </div>
            <div className={`${style.end} mr10 d-flex align-items-center justify-content-end`}>
                {
                    user ? (
                        <>
                        <Link className='mr10' to="/profile/information">Profile</Link>
                        <button className="btn btn-primary"><Link onClick={()=>signout()}>Se déconnecter</Link></button>
                        </>
                    ) : (
                        <>
                        <i className={`fas fa-ellipsis-vertical ${style.ellipsis}`}/>
                        <button className="btn btn-primary"><Link to="/signin">Se connecter</Link></button>
                        </>
                    )
                }
                
            </div>
        </div>
    );
}

export default Header;