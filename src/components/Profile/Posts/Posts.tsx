import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {profilePageType} from "../../../Redux/Store";
import {addPostActionCreator, clearPostActionCreator, setUserProfile} from "../../../Redux/ProfileReduce";
import {store} from "../../../Redux/Redux-Store";

export type PostPageProsType = {
    dataForPosts: profilePageType;
    addPostActionCreator: (newPost: any) => void
    clearPostActionCreator: () => void
    changeNewPostTextActionCreator: (e: string) => void
}

export const Posts: React.FC<PostPageProsType> = (props) => {
    const onChangeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeNewPostTextActionCreator(e.currentTarget.value)
    }
    const onClickHandler = () => {

        console.log(addPostActionCreator(props.dataForPosts.newPosts))
        store.dispatch(addPostActionCreator(props.dataForPosts.newPosts))
    }
    const newPostLists = props.dataForPosts.posts.map(elem => <Post key={elem.id} id={elem.id} post={elem.post}
                                                                    likes={elem.likes}/>)

    return (
        <>
            <div className={s.newPost}>
                <h2>My Post</h2>
                <input onChange={onChangeTextHandler} value={props.dataForPosts.newPosts} type="text"/>
                <button onClick={onClickHandler}> Send</button>
            </div>
            {newPostLists.reverse()}
        </>
    )
}