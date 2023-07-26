import {RootStateType} from "../Redux-Store";
import {createSelector} from "reselect";

export const getUsers = (state: RootStateType)=>{
    return state.userPage.users
}

export const getPageSize = (state: RootStateType)=>{
    return state.userPage.pageSize
}

export const getTotalUsersCount= (state: RootStateType)=>{
    return state.userPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType)=>{
    return state.userPage.currentPage
}

export const getIsFetching = (state: RootStateType)=>{
    return state.userPage.isFetching
}

export const getFollowingInProgress = (state: RootStateType)=>{
    return state.userPage.followingInProgress
}