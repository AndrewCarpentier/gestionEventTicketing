const API_EVENT = "http://localhost:8000/api/event";

export async function getEvents(id){
    const response = await fetch(`${API_EVENT}/getAll?id=${id}`);
    const backResponse = await response.json();
    if(response.ok){
        return backResponse;
    }else{
        if(backResponse){
            throw backResponse;
        }else{
            throw new Error('Error api');
        }
    }
}

export async function getEventById(idEvent){
    const response = await fetch(`${API_EVENT}/getEvent/${idEvent}`);
    const backResponse = await response.json();
    if(response.ok){
        return backResponse;
    }else{
        if(backResponse){
            throw backResponse;
        }else{
            throw new Error('Error api');
        }
    }
}

export async function getBookmarkEvents(id){
    const response = await fetch(`${API_EVENT}/getBookmarkEvents?id=${id}`);
    const backResponse = await response.json();
    if(response.ok){
        return backResponse;
    }else{
        if(backResponse){
            throw backResponse;
        }else{
            throw new Error('Error api');
        }
    }
}

export async function getCategory(){
    const response = await fetch(`${API_EVENT}/getCategory`);
    const backResponse = await response.json();
    if(response.ok){
        return backResponse;
    }else{
        if(backResponse){
            throw backResponse;
        }else{
            throw new Error('Error api')
        }
    }
}

export async function CreateEvent(event){
    const data = new FormData();
    data.append('image', event.file);
    data.append('event', JSON.stringify(event));
    const response = await fetch(`${API_EVENT}/create`,{
        method: "POST",
        body: data,
    });
    const backResponse = await response.json();
    if(response.ok){
        return backResponse;
    }else{
        if(backResponse){
            throw backResponse;
        }else{
            throw new Error('Error api');
        }
    }
}