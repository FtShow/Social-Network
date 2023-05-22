import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUserAC, unFollowAC, UsersStateItemType} from "../../Redux/UsersReducer";

const mapStateToProps = (state: any) => {
    return {
        users: state.userPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        followCallback: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollowCallback: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UsersStateItemType[]) => {
            dispatch(setUserAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
