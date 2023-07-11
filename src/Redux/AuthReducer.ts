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
            return {...state, ...action.data, isAuth: true}
        default:
            return state

    }
}

type combineActionType = setUserDataACType
type setUserDataACType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: string | number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        } as const

    }
}

export const getAuthUserDataTC = () => (dispatch: any) =>{
    AuthAPI.me()
        .then(response => {
            let {id, email, login} = response.data.data
            response.data.resultCode === 0 ? dispatch(setAuthUserData(id, email, login)): console.log("NOT")
        });

}