const API_BOOKMARK = 'http://localhost:8000/api/bookmark';

export async function addBookmark(idUser, idEvent){
    const response = await fetch(`${API_BOOKMARK}/add`, {
        method: "POST",
        body : JSON.stringify({idUser, idEvent}),
        headers : {"Content-Type" : "application/json"}
    });
    return await response.json();
};

export async function deleteBookmark(idUser, idEvent){
    const response = await fetch(`${API_BOOKMARK}/delete`,{
        method: "POST",
        body : JSON.stringify({idUser, idEvent}),
        headers : {"Content-Type" : "application/json"}
    });
    return await response.json();
};