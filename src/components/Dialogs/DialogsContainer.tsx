import React, {ChangeEvent} from "react";
import {changeNewTextMessageActionCreator, sendNewMessageActionCreator} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)