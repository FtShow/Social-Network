import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFollowingInProgress,
    setIsFetching,
    setTotalUserCount,
    setUsers,
    unFollow
} from "../../Redux/UsersReducer";
import {UsersApiContainer} from "./UsersAPIContainer";

const mapStateToProps = (state: any) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress

    }
}


export const UsersContainer = connect(mapStateToProps,
    {follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUserCount,
        setIsFetching,
        setFollowingInProgress}
)(UsersApiContainer)




