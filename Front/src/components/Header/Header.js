import style from './Header.module.scss';

function Header(){
    return(
        <div className={`${style.header} d-flex`}>
            <div className={`${style.start} d-flex`}>
                <i className='fas fa-bars'/>
                <h1 className='d-flex align-items-center'>EventMaster</h1>
            </div>
            <div className={`${style.center} d-flex align-items-center justify-content-center`}>
                <input placeholder='search'/>
            </div>
            <div className={`${style.end} mr10 d-flex align-items-center justify-content-end`}>
                <button className="btn btn-primary"><i className='fas fa-user mr10'/>Se connecter</button>
            </div>
        </div>
    );
}

export default Header;