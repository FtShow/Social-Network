import {Action, profilePageType} from "./Store";



const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_TEST = "CHANGE-NEW-POST-TEXT";

const initialState = {
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
        newPosts: ""

    }

export const ProfileReducer = (state: profilePageType = initialState, action: Action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                post: action.textPost,
                likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        case "CLEAR-POST":
            return {
                ...state,
                newPosts: "",
            };

        case CHANGE_NEW_POST_TEST:
            return {
                ...state,
                newPosts: action.newTextPost,
            };

        default:
            return state;
    }
};