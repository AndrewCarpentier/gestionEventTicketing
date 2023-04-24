const API_USERS = "http://localhost:8000/api/user"

export async function createUser(newUser){
    const response = await fetch(API_USERS, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {'Content-Type' : 'Application/json'}
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