import React, {ChangeEvent} from "react";
import {
    changeNewTextMessageActionCreator,
    messagesContainerTypeProps,
    sendNewMessageActionCreator
} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";


export const DialogsContainer: React.FC<messagesContainerTypeProps> = (props) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeNewTextMessageActionCreator(e.currentTarget.value))
    }

    const onclickHandler = () => {
        props.dispatch(sendNewMessageActionCreator())
    }

    return (



<Dialogs messagesPage={props.messagesPage}
         addMessageCallback={onclickHandler}
         onChangeCallback={onChangeHandler}/>

    )
}