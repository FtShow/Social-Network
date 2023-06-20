import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9075fb11-bbe8-406e-883a-30df5808daaa"
    }
})

export const getUsers = (currentPage: number = 1, pageSize: number = 15) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}
export const requestFollow = (id: number) => {
    return instance.post(`follow/${id}`, { } )
}

export const requestUnFollow = (id: number) => {
    return instance.delete(`follow/${id}`)
}