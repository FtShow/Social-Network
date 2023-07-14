import React from "react";
// import {profilePageTypeProps} from "../../Redux/Store";
import {Profile} from "./Profile";
import {getUserProfileTC} from "../../Redux/ProfileReduce";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType, store} from "../../Redux/Redux-Store";
import {UserAPI} from "../../Redux/Api";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type ProfileType = {
    profile: any,
    getUserProfileTC: (profile: any) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userId = store.getState().auth.userId
        this.props.getUserProfileTC(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
})

export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfileTC}),
    withAuthRedirect
)(ProfileContainer)
