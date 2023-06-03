import React, {useEffect, useState} from "react";
import {UsersStateItemType, UsersStateItemType2} from "../../Redux/UsersReducer";
import us from "./Users.module.css"
import axios from "axios";
import {UsersFn} from "./UsersFn";


type UsersType = {
    users: UsersStateItemType2[],
    followCallback: (userID: number) => void
    unFollowCallback: (userID: number) => void
    setUsers: (users: UsersStateItemType2[]) => void
}

export class Users extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        return (
            <div className={us.usersContainer}>
                {this.props.users.map((user: any, index: number) => (
                    <div key={index} className={us.userContauner}>
                        <div>
                            <img className={us.asa} src={user.photos.small ?? 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'} alt="" />
                            <br />
                            {user.followed ? (
                                <button onClick={() => { this.props.unFollowCallback(user.id); }}>FOLLOW</button>
                            ) : (
                                <button onClick={() => { this.props.followCallback(user.id); }}>UNFOLLOW</button>
                            )}
                        </div>
                        <div>
                            <div>
                                <span>{user.name}</span>
                                <br />
                                <span>{user.status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
