import {combineReducers, createStore} from "redux";
import { ProfileReducer} from "./ProfileReduce";
import {MessagesReducer} from "./MessagesReduce";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,

})

export let store = createStore(reducers)