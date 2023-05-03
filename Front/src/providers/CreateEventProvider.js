import { useState } from 'react';
import {CreateEventContext} from '../context/CreateEventContext';

function CreateEventProvider({children}){
    const [event, setEvent] = useState({
        eventName : null,
        location : null,
        onlineLink : null,
        category : null,
        subCategory : null,
        startDate : null,
        endDate : null,
        startHour : null,
        endHour : null,
    })
    async function step1(values){
        await setEvent({
            eventName : values.value.eventName,
            location : values.value.location,
            onlineLink : values.value.onlineLink,
            category : values.category,
            subCategory : values.subCategory,
            startDate : values.value.startDate,
            endDate : values.value.endDate,
            startHour : values.value.startHour,
            endHour : values.value.endHour,
        });
        return event;
    }

    return(
        <CreateEventContext.Provider value={{step1}}>{children}</CreateEventContext.Provider>
    )
};

export default CreateEventProvider;