import {AuthAPI} from "./Api";

const SET_USER_DATA = "SET_USER_DATA"
type initStateType = {
    userId: number | string | null,
    email: string | null,
    login: string | null
    isAuth: boolean

}

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initStateType = initState, action: combineActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: action.isAuth}
        default:
            return state

    }
}

type combineActionType = setUserDataACType
type setUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: string | number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        },
        isAuth

    } as const
}

export const getAuthUserDataTC = () => (dispatch: any) => {
    AuthAPI.me()
        .then(response => {

            console.log(response.data)
            let {id, email, login} = response.data.data
            response.data.resultCode === 0 ? dispatch(setAuthUserData(id, email, login, true)) : console.log("NOT")
        });
}
export const login = (email: string, password: string, rememberMe: boolean = false) => (dispatch: any) => {
    AuthAPI.login(email, password, rememberMe)
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {

                dispatch(getAuthUserDataTC())
            }
        });
}
export const logout = () => (dispatch: any) => {
    AuthAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}