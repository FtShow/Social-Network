import {getAuthUserDataTC} from "./AuthReducer";

const SET_INITIALIZED = "SET_INITIALIZED"
type initStateType = {
    initialized: boolean
}

const initState = {
    initialized: false
}

export const AppReducer = (state: initStateType = initState, action: combineActionType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state

    }
}

export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED
    } as const
}

type combineActionType =
    | ReturnType<typeof initializedSuccess>

export const initializedApp = () => (dispatch: any)=>{
    Promise.all([dispatch(getAuthUserDataTC())])
        .then(()=> {
            dispatch(initializedSuccess())
        })
}