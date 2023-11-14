import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login, password) => {
    const {data} = await $host.post('api/users/registration', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (login, password) => {
    const {data} = await $host.post('api/users/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/users/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
 