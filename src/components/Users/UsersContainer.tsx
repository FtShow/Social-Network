import React from "react";
import {connect} from "react-redux";
import {
    follow,
    followTC,
    getUsersThunkCreator,
    setCurrentPage,
    setFollowingInProgress,
    setIsFetching,
    setTotalUserCount,
    setUsers,
    unFollow,
    unFollowTC
} from "../../Redux/UsersReducer";
import {UsersApiContainer} from "./UsersAPIContainer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelectors/usersSelectors";

// const mapStateToProps = (state: any) => {
//     return {
//         users: state.userPage.users,
//         pageSize: state.userPage.pageSize,
//         totalUsersCount: state.userPage.totalUsersCount,
//         currentPage: state.userPage.currentPage,
//         isFetching: state.userPage.isFetching,
//         followingInProgress: state.userPage.followingInProgress
//     }
// }
const mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.FC>(
    withAuthRedirect,
    connect(mapStateToProps,
        {follow,
            unFollow,
            setUsers,
            setCurrentPage,
            setTotalUserCount,
            setIsFetching,
            setFollowingInProgress,
            getUsersThunkCreator,
            followTC,
            unFollowTC,
        }))
(UsersApiContainer)