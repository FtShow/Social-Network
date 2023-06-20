import React from "react";
import {UsersStateItemType2} from "../../Redux/UsersReducer";
import us from "./Users.module.css"
import {NavLink} from "react-router-dom";
import {requestFollow, requestUnFollow} from "../../Redux/Api";


type UsersType = {
    users: UsersStateItemType2[],
    pages: number[]
    currentPage: number
    onPageChanged: (v: number) => void
    setCurrentPage: (page: number) => void
    followCallback: (userID: number) => void
    unFollowCallback: (userID: number) => void
    followingInProgress: boolean
    setFollowingInProgress: (v: boolean)=>void

}

export const Users = (props: UsersType) => {

    return (
        <div className={us.usersContainer}>
            <div className={us.pageNum}>
                {props.pages.map((num: number, index: number) => <span key={index}
                                                                       onClick={() => props.onPageChanged(num)}
                                                                       className={props.currentPage === num ? us.active : ""}> {num} </span>
                )}
            </div>
            {props.users.map((user: any, index: number) => (
                <div key={index} className={us.userContauner}>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={us.asa}
                                 src={user.photos.small ?? "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"}
                                 alt=""/>
                        </NavLink>
                        <br/>
                        {user.followed ? (
                            <button disabled={props.followingInProgress} onClick={() => {

                                props.setFollowingInProgress(true)
                                requestUnFollow(user.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollowCallback(user.id);
                                        }
                                        props.setFollowingInProgress(false)
                                    });


                            }}>FOLLOW</button>
                        ) : (
                            <button disabled={props.followingInProgress} onClick={() => {
                                props.setFollowingInProgress(true)
                                requestFollow(user.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.followCallback(user.id);
                                        }
                                        props.setFollowingInProgress(false)
                                    });


                            }}>UNFOLLOW</button>
                        )}
                    </div>
                    <div>
                        <div>
                            <span>{user.name}</span>
                            <br/>
                            <span>{user.status}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}
