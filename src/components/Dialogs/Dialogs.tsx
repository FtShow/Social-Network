import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessageText} from "./Messages/Messages";
import {dialogsItemType, messagesPageTypeProps, textMessageItemType} from "../../Redux/State";


export const Dialogs: React.FC<messagesPageTypeProps> = (props) => {
    let {dialogs, textMessage} = props.messagesPage
    console.log(textMessage)

    console.log(textMessage)
    const dialogsList = dialogs.map((elem: dialogsItemType) => (
        <DialogItem id={elem.id} avatar={elem.avatar} name={elem.name}/>))
    const messageList = textMessage.map((elem: textMessageItemType) => (
        <MessageText id={elem.id} text={elem.text} yourMessage={elem.yourMessage}/>))
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
                    <input type="text"/>
                    <button>send</button>
                </div>

            </div>
        </div>
    )
}