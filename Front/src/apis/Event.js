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
            throw new Error('Error api create user');
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
            throw new Error('Error api create user');
        }
    }
}