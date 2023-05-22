import React from "react";
import {UsersStateItemType} from "../../Redux/UsersReducer";
import us from './Users.module.css'

type UsersType = {
    users: UsersStateItemType[],
    followCallback: (userID: number) => void
    unFollowCallback: (userID: number) => void
    setUsers: (users: UsersStateItemType[]) => void
}

export const Users: React.FC<UsersType> = ({users, followCallback, unFollowCallback, setUsers}) => {
    if (users.length === 0){setUsers([        {
        id: 1,
        fullName: "John Smith",
        status: "Web Developer",
        photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
        followed: true,
        location: {
            city: "New York",
            country: "USA"
        }
    },
        {
            id: 2,
            fullName: "Jane Doe",
            status: "UX Designer",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: true,
            location: {
                city: "San Francisco",
                country: "USA"
            }
        },
        {
            id: 3,
            fullName: "Alex Johnson",
            status: "Software Engineer",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: false,
            location: {
                city: "London",
                country: "UK"
            }
        },
        {
            id: 4,
            fullName: "Maria Rodriguez",
            status: "Sales Manager",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: false,
            location: {
                city: "Madrid",
                country: "Spain"
            }
        },
        {
            id: 5,
            fullName: "Andrea Rossi",
            status: "Marketing Specialist",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: true,
            location: {
                city: "Rome",
                country: "Italy"
            }
        },
        {
            id: 6,
            fullName: "Takashi Yamada",
            status: "Product Manager",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: true,
            location: {
                city: "Tokyo",
                country: "Japan"
            }
        },
        {
            id: 7,
            fullName: "Anna Koval",
            status: "Graphic Designer",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: true,
            location: {
                city: "Kyiv",
                country: "Ukraine"
            }
        },
        {
            id: 8,
            fullName: "Peter Müller",
            status: "Front-end Developer",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: false,
            location: {
                city: "Berlin",
                country: "Germany"
            }
        },
        {
            id: 9,
            fullName: "Sophie Dubois",
            status: "Account Manager",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: true,
            location: {
                city: "Paris",
                country: "France"
            }
        },
        {
            id: 10,
            fullName: "Chen Wei",
            status: "Data Scientist",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: false,
            location: {
                city: "Shanghai",
                country: "China"
            }
        },
        {
            id: 11,
            fullName: "Mikhail Ivanov",
            status: "Back-end Developer",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: true,
            location: {
                city: "Moscow",
                country: "Russia"
            }
        },
        {
            id: 12,
            fullName: "Lucia Gomez",
            status: "Social Media Manager",
            photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
            followed: false,
            location: {
                city: "Buenos Aires",
                country: "Argentina"
            }
        }])}
    const usersList = users.map(user => {
        return (

            <div key={user.id}>
                <div>
                    <img className={us.asa} src={user.photo} alt={""}/>
                    <br/>
                    {user.followed
                        ? <button onClick={()=>{unFollowCallback(user.id)}}>FOLLOW</button>
                        : <button  onClick={()=>{followCallback(user.id)}}>UNLLOW</button>}
                </div>
                <div>
                    <div>
                        <span>{user.fullName}</span>
                        <br/>
                        <span>{user.status}</span>
                    </div>
                    <div>
                        <span>{user.location.country}</span>
                        <span> {user.location.city}</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>

            {usersList}
        </div>
    );
};
