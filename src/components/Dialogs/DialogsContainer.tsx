import React, {ChangeEvent} from "react";
import {changeNewTextMessageActionCreator, sendNewMessageActionCreator} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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
export default compose<React.FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)
