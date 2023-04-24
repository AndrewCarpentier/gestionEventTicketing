import {useEffect, useState} from 'react';
import style from './Homepage.module.scss';
import Event from '../Event/Event/Event';
import { getEvents } from '../../apis/Event';


function Homepage(){
    const [eventList, setEventList] = useState([]);

    useEffect(()=>{
        //getEvents().then(response => setEventList(response));
    }, [eventList])

    return(
        <div>
            {
                !eventList.length?(
                    <div>Loading...</div>
                ) : (
                    <div className={`${style.container}`}>
                        {
                            eventList.map(e=>(
                                <Event key={e.id} event={e}/>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Homepage;