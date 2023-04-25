import { getCurrentUser } from "../apis/Auth";

export async function userLoader(){
    return getCurrentUser()
}