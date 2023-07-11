import {UserAPI} from "./Api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"
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
export type UsersStateType2 = {
    users: UsersStateItemType2[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingInProgress: boolean

}
const initialState: UsersStateType2 = {
    users: [],
    pageSize: 14,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
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
                ...state, users: action.payload.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload.page
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUsersCount: action.payload.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }

        }
        case FOLLOWING_IN_PROGRESS:
            console.log(action.isFetching)
            return {...state, followingInProgress: action.isFetching}

        default:
            return state;
    }
};
type actionUserReducerType =
    followACType
    | unFollowACType
    | setUserType
    | setCurrentPageType
    | setTotalUserCountType
    | setIsFetchingType
    | setFollowingInProgressType

type followACType = ReturnType<typeof follow>
type unFollowACType = ReturnType<typeof unFollow>
type setUserType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUserCountType = ReturnType<typeof setTotalUserCount>
type setIsFetchingType = ReturnType<typeof setIsFetching>
type setFollowingInProgressType = ReturnType<typeof setFollowingInProgress>

export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}
export const unFollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}
export const setUsers = (users: any) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }

    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            page
        }

    } as const
}
export const setTotalUserCount = (count: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            count
        }

    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const

}
export const setFollowingInProgress = (isFetching: boolean) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isFetching

    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(setIsFetching(true));
    UserAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        });
}
export const followTC = (userId: number) => (dispatch: any) => {
    dispatch(setFollowingInProgress(true));
    UserAPI.requestUnFollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userId));
            }
            dispatch(setFollowingInProgress(false));
        });
}
export const unFollowTC = (userId: number) => (dispatch: any) => {
    dispatch(setFollowingInProgress(true));
    UserAPI.requestFollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(setFollowingInProgress(false));
        });
}

