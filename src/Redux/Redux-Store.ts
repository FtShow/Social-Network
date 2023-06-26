import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReduce";
import {MessagesReducer} from "./MessagesReduce";
import {UsersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    userPage: UsersReducer,
    auth: authReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof reducers>
//@ts-ignore
window.store = store