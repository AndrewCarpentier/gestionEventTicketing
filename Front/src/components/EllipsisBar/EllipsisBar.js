import style from './EllipsisBar.module.scss';

function EllipsisBar(){
    return (
        <div className={`${style.container}`}>
            <div className={`${style.item} ${style.item_top} d-flex align-items-center justify-content-center`}>Apparence</div>
            <div className={`${style.item} ${style.item_bottom} d-flex align-items-center justify-content-center`}>Langue</div>
        </div>
    )
}

export default EllipsisBar;