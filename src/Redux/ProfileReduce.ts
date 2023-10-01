import {ProfileAPI, UserAPI} from "./Api";

const ADD_POST = "social-network/profile/ADD_POST";
const CHANGE_NEW_POST_TEXT = "social-network/profile/CHANGE_NEW_POST_TEXT";
const CLEAR_POST = "social-network/profile/CLEAR_POST";
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE";
const SET_STATUS = "social-network/profile/SET_STATUS"
const UPDATE_STATUS = "social-network/profile/UPDATE_STATUS"
const DELETE_POST = "social-network/profile/DELETE_POST"
export type postsItemType = {
    id: number,
    post: string | undefined
    likes: number
}


export type profilePageType = {
    posts: postsItemType[];
    newPosts: string | undefined
    profile: any
    status: string

}

const initialState: profilePageType = {
    posts: [
        {id: 1, post: "First post", likes: 15},
        {id: 2, post: "Second post", likes: 3},
        {id: 3, post: "Third post", likes: 4},
        {id: 4, post: "Fourth post", likes: 12},
        {id: 5, post: "Fifth post", likes: 23},
        {id: 6, post: "Sixth post", likes: 253},
        {id: 7, post: "Seventh post", likes: 14},
        {id: 8, post: "Eighth post", likes: 3},
        {id: 9, post: "Ninth post", likes: 6},
        {id: 10, post: "Tenth post", likes: 12},
    ],
    newPosts: "",
    profile: null,
    status: ''
}

export const ProfileReducer = (state: profilePageType = initialState, action: ProfileActionTypes): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            console.log('PR')

            const newPost = {
                id: state.posts.length + 1,
                post: action.textPost,
                likes: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        case CLEAR_POST:
            return {
                ...state,
                newPosts: "",
            };

        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPosts: action.newTextPost
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.newStatus
            }
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        default:
            return state;
    }
};


export const addPostAC = (textPost: string) => {
    return {
        type: ADD_POST,
        textPost
    } as const
}
export const deletePostAC = (postId: number | string) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const updateStatus = (newStatus: string) => {
    return {
        type: UPDATE_STATUS,
        newStatus
    } as const
}
export const clearPostActionCreator = () => ({type: CLEAR_POST} as const)
export const changeNewPostTextActionCreator = (newTextPost: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newTextPost: newTextPost
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const getUserProfileTC = (userId: number | string) => async (dispatch: any) => {
    const res = await ProfileAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const setStatusTS = (userId: string | number) => async (dispatch: any) => {
    const res = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(res.data))

}

export const updateStatusTC = (newStatus: string) => async (dispatch: any) => {
    const res = await ProfileAPI.updateStatus(newStatus)
    if (res.data.resultCode === 0) {
        dispatch(updateStatus(newStatus))
    }

}


type AddPostActionType = ReturnType<typeof addPostAC>;
type ClearPostActionType = ReturnType<typeof clearPostActionCreator>;
type ChangeNewPostTextActionType = ReturnType<typeof changeNewPostTextActionCreator>;
type setUserProfileType = ReturnType<typeof setUserProfile>;
type setStatusType = ReturnType<typeof setStatus>;
type updateStatusType = ReturnType<typeof updateStatus>;
type deletePostType = ReturnType<typeof deletePostAC>;


type ProfileActionTypes =
    | AddPostActionType
    | ClearPostActionType
    | ChangeNewPostTextActionType
    | setUserProfileType
    | setStatusType
    | updateStatusType
    | deletePostType

