import {combineReducers, createStore} from "redux";
import { ProfileReducer} from "./ProfileReduce";
import {MessagesReducer} from "./MessagesReduce";
import {useReducer} from "react";
import {UsersReducer} from "./UsersReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    userPage: UsersReducer
})

export let store = createStore(reducers)