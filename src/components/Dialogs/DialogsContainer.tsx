import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessageText} from "./Messages/Messages";
import {
    changeNewTextMessageActionCreator,
    dialogsItemType, messagesContainerTypeProps,
    messagesPageTypeProps,
    sendNewMessageActionCreator,
    textMessageItemType
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