import React from "react";
import {UsersStateItemType2} from "../../Redux/UsersReducer";
import us from "./Users.module.css"
import {NavLink} from "react-router-dom";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "../../Redux/Redux-Store";


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
    followTC: (userId: number) => ThunkAction<void, RootStateType, unknown, any>
    unFollowTC: (userId: number) => ThunkAction<void, RootStateType, unknown, any>

}

export const Users = (props: UsersType) => {
    props.setFollowingInProgress(true)

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

                                props.followTC(user.id)

                            }}>FOLLOW</button>
                        ) : (
                            <button disabled={props.followingInProgress} onClick={() => {
                              props.unFollowTC(user.id)


                            }}>UNFOLLOW</button>
                        )}
                    </div>
                    <div>
                        <div>
                            <span>{user.name}</span>
                            <br/>
                            <span>status: { user.status}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
