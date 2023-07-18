import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogsItem/DialogsItem";
import {MessageText} from "./Messages/Messages";
import {dialogsItemType, messagesPageType, textMessageItemType} from "../../Redux/Store";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormValues = {
    newMessageBody: string;
};
export type messagesPageTypeProps = {
    messagesPage: messagesPageType
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
    sendNewMessage: (newMessage: string) => void
    isAuth: boolean
}

export const Dialogs: React.FC<messagesPageTypeProps> = (props) => {
    let {dialogs, textMessage, newMessageBody} = props.messagesPage
    if (!props.isAuth) return <Redirect to={'/Login'}/>

    const addNewMessage = (values: FormValues)=>{
        console.log(props.sendNewMessage)
        props.sendNewMessage(values.newMessageBody)
    }


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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const AddMessageForm: React.FC<InjectedFormProps<FormValues>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messageArea}>
                <Field component={'input'} name={'newMessageBody'} type="text"/>
                <button>send</button>
            </div>
        </form>
    );
};
const AddMessageFormRedux = reduxForm<FormValues>({
    form: 'addMessageForm',
})(AddMessageForm)