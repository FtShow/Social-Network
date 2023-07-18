import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {sendNewMessage} from "../../Redux/DialogsReduce";


let mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage,
    }
}


let AuthRedirectComponent = withAuthRedirect(Dialogs)
export default compose<React.FC>(
    connect(mapStateToProps, {sendNewMessage}),
    withAuthRedirect)
(Dialogs)
