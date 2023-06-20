import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReduce";
import {MessagesReducer} from "./MessagesReduce";
import {UsersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    userPage: UsersReducer,
    auth: authReducer,
})

export let store = createStore(reducers)
//@ts-ignore
window.store = store