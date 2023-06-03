import {Action, profilePageType} from "./Store";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
export type UsersStateItemType = {
    id: number
    photo: string
    fullName: string
    status: string
    followed: boolean
    location: {
        city: string
        country: string
    }
}

type UsersStateType = {
    users: UsersStateItemType[]
}
export type UsersStateItemType2 = {
    id: number
    name: string
    followed: boolean
    status: string | null
    photos: {
        large: string | null,
        small: string | null
    }
    uniqueUrlName: string | null
}
type UsersStateType2 = {
    users: UsersStateItemType2[]
}

// const initialState: UsersStateType = {
//     users: [
//         {
//             id: 1,
//             fullName: "John Smith",
//             status: "Web Developer",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: true,
//             location: {
//                 city: "New York",
//                 country: "USA"
//             }
//         },
//         {
//             id: 2,
//             fullName: "Jane Doe",
//             status: "UX Designer",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: true,
//             location: {
//                 city: "San Francisco",
//                 country: "USA"
//             }
//         },
//         {
//             id: 3,
//             fullName: "Alex Johnson",
//             status: "Software Engineer",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: false,
//             location: {
//                 city: "London",
//                 country: "UK"
//             }
//         },
//         {
//             id: 4,
//             fullName: "Maria Rodriguez",
//             status: "Sales Manager",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: false,
//             location: {
//                 city: "Madrid",
//                 country: "Spain"
//             }
//         },
//         {
//             id: 5,
//             fullName: "Andrea Rossi",
//             status: "Marketing Specialist",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: true,
//             location: {
//                 city: "Rome",
//                 country: "Italy"
//             }
//         },
//         {
//             id: 6,
//             fullName: "Takashi Yamada",
//             status: "Product Manager",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: true,
//             location: {
//                 city: "Tokyo",
//                 country: "Japan"
//             }
//         },
//         {
//             id: 7,
//             fullName: "Anna Koval",
//             status: "Graphic Designer",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: true,
//             location: {
//                 city: "Kyiv",
//                 country: "Ukraine"
//             }
//         },
//         {
//             id: 8,
//             fullName: "Peter Müller",
//             status: "Front-end Developer",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: false,
//             location: {
//                 city: "Berlin",
//                 country: "Germany"
//             }
//         },
//         {
//             id: 9,
//             fullName: "Sophie Dubois",
//             status: "Account Manager",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: true,
//             location: {
//                 city: "Paris",
//                 country: "France"
//             }
//         },
//         {
//             id: 10,
//             fullName: "Chen Wei",
//             status: "Data Scientist",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: false,
//             location: {
//                 city: "Shanghai",
//                 country: "China"
//             }
//         },
//         {
//             id: 11,
//             fullName: "Mikhail Ivanov",
//             status: "Back-end Developer",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: true,
//             location: {
//                 city: "Moscow",
//                 country: "Russia"
//             }
//         },
//         {
//             id: 12,
//             fullName: "Lucia Gomez",
//             status: "Social Media Manager",
//             photo: 'https://i.pinimg.com/originals/09/e1/7f/09e17f610a8a883fb6ecbe768ab72c39.png',
//             followed: false,
//             location: {
//                 city: "Buenos Aires",
//                 country: "Argentina"
//             }
//         }
//     ]
// }
const initialState: UsersStateType2 = {
    users: []
}

export const UsersReducer = (state: UsersStateType2 = initialState, action: actionUserReducerType): UsersStateType2 => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userID ? {...user, followed: true} : user)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userID ? {...user, followed: false} : user)
            }
        }
        case SET_USERS: {
            return {

                ...state, users: [...state.users, ...action.payload.users]
            }
        }

        default:
            return state;
    }
};
// export const UsersReducer = (state: UsersStateType = initialState, action: actionUserReducerType): UsersStateType => {
//     switch (action.type) {
//         case FOLLOW: {
//             return {
//                 ...state,
//                 users: state.users.map(user=> user.id === action.payload.userID ? {...user, followed: true} : user)
//             }
//         }
//         case UNFOLLOW: {
//             return {
//                 ...state,
//                 users: state.users.map(user=> user.id === action.payload.userID ? {...user, followed: false} : user)
//             }
//         }
//         case SET_USERS: {
//             return {
//                 ...state, users: [...state.users, action.payload.users]
//             }
//         }
//
//         default:
//             return state;
//     }
// };
type actionUserReducerType = followACType | unFollowACType | setUserAC
type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUserAC = ReturnType<typeof setUserAC>
export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}
export const setUserAC = (users: any) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }

    } as const
}