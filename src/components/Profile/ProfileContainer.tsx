import React from "react";
// import {profilePageTypeProps} from "../../Redux/Store";
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/ProfileReduce";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {store} from "../../Redux/Redux-Store";

type ProfileType = {
    profile: any,
    setUserProfile: (profile: any) => void
}

export class ProfileContainer extends React.Component<ProfileType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userId = this.props.match.params.userId ?? store.getState().auth.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)
let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
})
export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainer);
