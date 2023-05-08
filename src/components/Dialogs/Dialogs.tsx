import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessageText} from "./Messages/Messages";
import {
    addPostActionCreator,
    changeNewTextMessageActionCreator, clearPostActionCreator,
    dialogsItemType,
    messagesPageTypeProps, sendNewMessageActionCreator,
    textMessageItemType
} from "../../Redux/Store";


export const Dialogs: React.FC<messagesPageTypeProps> = (props) => {
    let {dialogs, textMessage, newMessageBody} = props.messagesPage

    const dialogsList = dialogs.map((elem: dialogsItemType) => (
        <DialogItem id={elem.id} avatar={elem.avatar} name={elem.name}/>))
    const messageList = textMessage.map((elem: textMessageItemType) => (
        <MessageText id={elem.id} text={elem.text} yourMessage={elem.yourMessage}/>))

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        props.dispatch(changeNewTextMessageActionCreator(e.currentTarget.value))
    }
    const onclickHandler = () => {

        props.dispatch(sendNewMessageActionCreator())
    }
    return (

        <div className={s.dialogWindow}>
            <div className={s.dialogsListNav}>
                <ul className={s.dialogsList}>

                    {dialogsList}
                </ul>
            </div>
            <div className={s.messages}>

                {messageList}
                <div className={s.messageArea}>
                    <input onChange={onChangeHandler} type="text"/>
                    <button onClick={onclickHandler}>send</button>
                </div>

            </div>
        </div>
    )
}