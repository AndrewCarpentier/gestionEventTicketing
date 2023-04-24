const API_USERS = "http://localhost:8000/api/auth";

export async function signin(credential){
    const response = await fetch(API_USERS, {
        method: "POST",
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