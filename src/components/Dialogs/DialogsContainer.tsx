import React, {ChangeEvent} from "react";
import {changeNewTextMessageActionCreator, sendNewMessageActionCreator} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessageCallback: () => {
            dispatch(sendNewMessageActionCreator())
        },
        onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewTextMessageActionCreator(e.currentTarget.value))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)