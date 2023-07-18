import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9075fb11-bbe8-406e-883a-30df5808daaa"
    }
})
export const UserAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    requestFollow(id: number) {
        return instance.post(`follow/${id}`, {})
    },

    requestUnFollow(id: number) {
        return instance.delete(`follow/${id}`)
    },



}

export const AuthAPI = {
    me () {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    },
    login (email:string, password: string, rememberMe:boolean=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }

}

export const ProfileAPI = {
    getProfile(userId: number | string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number | string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(newStatus: string){
        return instance.put(`profile/status`, {status: newStatus})
    },
}