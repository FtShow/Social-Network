import React from "react";
import {setFollowingInProgress, UsersStateItemType2} from "../../Redux/UsersReducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../Assets/Images/preloader.svg"
import {Preloader} from "../../Assets/Preloader";
import {getUsers} from "../../Redux/Api";

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
}

export class UsersApiContainer extends React.Component<UsersType, any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.setIsFetching(true)
        console.log(this.props.setFollowingInProgress)
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            });
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
            });
    }

    render() {
        let pages = []
        for (let i = 1; i <= 120; i++) {
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

                    />}
            </>
        );
    }
}
