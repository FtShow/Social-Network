import React from "react";
// import {profilePageTypeProps} from "../../Redux/Store";
import {Profile} from "./Profile";
import {getUserProfileTC} from "../../Redux/ProfileReduce";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {RootStateType, store} from "../../Redux/Redux-Store";
import {UserAPI} from "../../Redux/Api";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type ProfileType = {
    profile: any,
    getUserProfileTC: (profile: any) => void
    isAuth: boolean
}

export class ProfileContainer extends React.Component<ProfileType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userId = store.getState().auth.userId
        this.props.getUserProfileTC(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
})
export default connect(mapStateToProps, {getUserProfileTC})(AuthRedirectComponent);

