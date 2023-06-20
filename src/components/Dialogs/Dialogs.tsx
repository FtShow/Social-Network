import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessageText} from "./Messages/Messages";
import {dialogsItemType, messagesPageTypeProps, textMessageItemType} from "../../Redux/Store";


export const Dialogs: React.FC<messagesPageTypeProps> = (props) => {
    let {dialogs, textMessage, newMessageBody} = props.messagesPage

    const dialogsList = dialogs.map((elem: dialogsItemType) => (
        <DialogItem key={elem.id} id={elem.id} avatar={elem.avatar} name={elem.name}/>))
    const messageList = textMessage.map((elem: textMessageItemType) => (
        <MessageText key={elem.id} id={elem.id} text={elem.text} yourMessage={elem.yourMessage}/>))

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
                    <input onChange={props.onChangeCallback} type="text"/>
                    <button onClick={props.addMessageCallback}>send</button>
                </div>

            </div>
        </div>
    )
}