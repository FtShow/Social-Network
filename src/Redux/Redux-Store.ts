import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReduce";
import {MessagesReducer} from "./DialogsReduce";
import {UsersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    userPage: UsersReducer,
    auth: authReducer,
    form: formReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))
export type RootStateType = ReturnType<typeof reducers>
//@ts-ignore
window.store = store