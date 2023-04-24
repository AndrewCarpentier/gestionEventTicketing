import style from './Event.module.scss';

function Event({event}){
    const date = new Date(event.startDate);
    
    return (
        <div className={`${style.card}`} >
            <img src={event.urlThumbnail} alt=""/>
            <h2><span className={`${style.title}`}>{event.name}</span><i className="fas fa-bookmark"/></h2> 
            <p className={`${style.date}`}>{date.toLocaleDateString("fr")}</p>
            <p className={`${style.localisation}`}>{event.localisation}</p>
        </div>
    );
}

export default Event;