const API_AUTH = "http://localhost:8000/api/auth";

export async function signin(credential){
    const response = await fetch(`${API_AUTH}`,{
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credential),
        headers: {"Content-Type" : "application/json"}
    });

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

export async function getCurrentUser(){
    const response = await fetch(`${API_AUTH}/current`,{
        method: "GET",
        credentials: "include"
    });
    return response.json();
}

export async function signout(){
    await fetch(`${API_AUTH}`,{
        method: "DELETE",
        credentials: "include"
    });

}