import React from "react";
import {Profile} from "./Profile";
import {getUserProfileTC, setStatusTS, updateStatusTC} from "../../Redux/ProfileReduce";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type ProfileType = {
    profile: any,
    getUserProfileTC: (userID: string | number | null) => void
    setStatusTS: (userID: string | number | null) => void
    updateStatusTC: (newStatus: string)=>void
    status: string
    authorID: number
}

class ProfileContainer extends React.Component<ProfileType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authorID
        this.props.getUserProfileTC(userId)
        this.props.setStatusTS(userId)
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC} />
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorID: state.auth.userId
})

export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfileTC, setStatusTS, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
