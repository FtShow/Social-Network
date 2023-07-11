import React from "react";
// import {profilePageTypeProps} from "../../Redux/Store";
import {Profile} from "./Profile";
import {getUserProfileTC} from "../../Redux/ProfileReduce";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {store} from "../../Redux/Redux-Store";
import {UserAPI} from "../../Redux/Api";

type ProfileType = {
    profile: any,
    getUserProfileTC: (profile: any) => void
    isAuth: boolean
}

export class ProfileContainer extends React.Component<ProfileType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userId = this.props.match.params.userId ?? store.getState().auth.userId
        this.props.getUserProfileTC(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile profile={this.props.profile}/>
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)
let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {getUserProfileTC})(WithRouterProfileContainer);
