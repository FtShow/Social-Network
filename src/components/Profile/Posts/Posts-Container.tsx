import React, {ChangeEvent} from "react";
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
    clearPostActionCreator,
    PostsContainerProsType
} from "../../../Redux/Store";
import {Posts} from "./Posts";


export const PostsContainer: React.FC<PostsContainerProsType> = (props) => {


    const addPostCallback = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(clearPostActionCreator())
    }
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeNewPostTextActionCreator(e.currentTarget.value))
    }


    return (
        <Posts dataForPosts={props.dataForPostsContainer}
               addPostCallback={addPostCallback}
               onChangeCallback={onChangeCallback}
        />

    )
}