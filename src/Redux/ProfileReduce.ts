import {UserAPI} from "./Api";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
const CLEAR_POST = "CLEAR_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
export type postsItemType = {
    id: number,
    post: string | undefined
    likes: number
}


export type profilePageType = {
    posts: postsItemType[];
    newPosts: string | undefined
    profile: any

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
    profile: null
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

        default:
            return state;
    }
};


export const addPostActionCreator = (textPost: string) => {
       return {
        type: ADD_POST,
        textPost
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
export const getUserProfileTC = (userId: number | string) => (dispatch: any) =>{
    UserAPI.getProfile(userId)
        .then(res => dispatch(setUserProfile(res.data)))
}



type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type ClearPostActionType = ReturnType<typeof clearPostActionCreator>;
type ChangeNewPostTextActionType = ReturnType<typeof changeNewPostTextActionCreator>;
type setUserProfileType = ReturnType<typeof setUserProfile>;


type ProfileActionTypes =
    AddPostActionType
    | ClearPostActionType
    | ChangeNewPostTextActionType
    | setUserProfileType


