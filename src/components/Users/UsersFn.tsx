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

export const UsersFn: React.FC<UsersType> = ({users, followCallback, unFollowCallback, setUsers}) => {
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


    // if (users.length === 0){setUsers([
    //     {
    //     id: 1,
    //     fullName: "John Smith",
    //     status: "Web Developer",
    //     photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //     followed: true,
    //     location: {
    //         city: "New York",
    //         country: "USA"
    //     }
    // },
    //     {
    //         id: 2,
    //         fullName: "Jane Doe",
    //         status: "UX Designer",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: true,
    //         location: {
    //             city: "San Francisco",
    //             country: "USA"
    //         }
    //     },
    //     {
    //         id: 3,
    //         fullName: "Alex Johnson",
    //         status: "Software Engineer",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: false,
    //         location: {
    //             city: "London",
    //             country: "UK"
    //         }
    //     },
    //     {
    //         id: 4,
    //         fullName: "Maria Rodriguez",
    //         status: "Sales Manager",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: false,
    //         location: {
    //             city: "Madrid",
    //             country: "Spain"
    //         }
    //     },
    //     {
    //         id: 5,
    //         fullName: "Andrea Rossi",
    //         status: "Marketing Specialist",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: true,
    //         location: {
    //             city: "Rome",
    //             country: "Italy"
    //         }
    //     },
    //     {
    //         id: 6,
    //         fullName: "Takashi Yamada",
    //         status: "Product Manager",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: true,
    //         location: {
    //             city: "Tokyo",
    //             country: "Japan"
    //         }
    //     },
    //     {
    //         id: 7,
    //         fullName: "Anna Koval",
    //         status: "Graphic Designer",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: true,
    //         location: {
    //             city: "Kyiv",
    //             country: "Ukraine"
    //         }
    //     },
    //     {
    //         id: 8,
    //         fullName: "Peter Müller",
    //         status: "Front-end Developer",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: false,
    //         location: {
    //             city: "Berlin",
    //             country: "Germany"
    //         }
    //     },
    //     {
    //         id: 9,
    //         fullName: "Sophie Dubois",
    //         status: "Account Manager",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: true,
    //         location: {
    //             city: "Paris",
    //             country: "France"
    //         }
    //     },
    //     {
    //         id: 10,
    //         fullName: "Chen Wei",
    //         status: "Data Scientist",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: false,
    //         location: {
    //             city: "Shanghai",
    //             country: "China"
    //         }
    //     },
    //     {
    //         id: 11,
    //         fullName: "Mikhail Ivanov",
    //         status: "Back-end Developer",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: true,
    //         location: {
    //             city: "Moscow",
    //             country: "Russia"
    //         }
    //     },
    //     {
    //         id: 12,
    //         fullName: "Lucia Gomez",
    //         status: "Social Media Manager",
    //         photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
    //         followed: false,
    //         location: {
    //             city: "Buenos Aires",
    //             country: "Argentina"
    //         }
    //     }])}
    const usersList = users.map((user, index) => {
        return (
            <div key={index} className={us.userContauner}>
                <div>
                    <img className={us.asa} src={user.photos.small ?? 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'} alt={""}/>
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
