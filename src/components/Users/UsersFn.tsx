import React, {useEffect, useState} from "react";
import {UsersStateItemType, UsersStateItemType2} from "../../Redux/UsersReducer";
import us from "./Users.module.css"
import axios from "axios";


type UsersType = {
    users: UsersStateItemType2[],
    followCallback: (userID: number) => void
    unFollowCallback: (userID: number) => void
    setUsers: (users: UsersStateItemType2[]) => void
}

const UsersFn: React.FC<UsersType> = ({users, followCallback, unFollowCallback, setUsers}) => {
const getUsers = () =>{
    if (users.length === 0) {
        console.log(users)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                console.log(response.data.items)
                setUsers(response.data.items);
            });
    }
}

    const usersList = users.map((user, index) => {
        return (
            <div key={index} className={us.userContauner}>
                <div>
                    <img className={us.asa} src={user.photos.small ?? 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'} alt={""}/>
                    use
                    <br/>
                    {user.followed
                        ? <button onClick={()=>{unFollowCallback(user.id)}}>FOLLOW</button>
                        : <button  onClick={()=>{followCallback(user.id)}}>UNLLOW</button>}
                </div>
                <div>
                    <div>
                        <span>{user.name}</span>
                        <br/>
                        <span>{user.status}</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={us.usersContainer}>
            <button onClick={getUsers}>GET USERS </button>
            {usersList}
        </div>
    );
};
