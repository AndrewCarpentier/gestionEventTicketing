import { Link, redirect } from 'react-router-dom';
import style from './Header.module.scss';

function Header(){
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
                <i className={`fas fa-ellipsis-vertical ${style.ellipsis}`}/>
                <button className="btn btn-primary"><Link to="/signin">Se connecter</Link></button>
            </div>
        </div>
    );
}

export default Header;