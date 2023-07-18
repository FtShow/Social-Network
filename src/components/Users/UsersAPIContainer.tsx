import React from "react";
import {UsersStateItemType2} from "../../Redux/UsersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../../Redux/Redux-Store";

type UsersType = {
    users: UsersStateItemType2[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setTotalUserCount: (count: number) => void
    setUsers: (users: UsersStateItemType2[]) => void
    setIsFetching: (isFetching: boolean) => void
    isFetching: boolean
    followingInProgress: boolean
    setFollowingInProgress: (v: boolean)=>void
    getUsersThunkCreator: (v1: number, v2: number) => ThunkAction<void, RootStateType, unknown, any>
    followTC: (userId: number) => ThunkAction<void, RootStateType, unknown, any>
    unFollowTC: (userId: number) => ThunkAction<void, RootStateType, unknown, any>
}

export class UsersApiContainer extends React.Component<UsersType, any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    render() {
        let pages = []
        for (let i = 1; i <= 30; i++) {
            pages.push(i)
        }
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Users users={this.props.users}
                           onPageChanged={this.onPageChanged}
                           pages={pages}
                           currentPage={this.props.currentPage}
                           setCurrentPage={this.props.setCurrentPage}
                           followCallback={this.props.follow}
                           unFollowCallback={this.props.unFollow}
                           followingInProgress={this.props.followingInProgress}
                           setFollowingInProgress={this.props.setFollowingInProgress}
                           followTC={this.props.followTC}
                           unFollowTC={this.props.unFollowTC}

                    />}
            </>
        );
    }
}
