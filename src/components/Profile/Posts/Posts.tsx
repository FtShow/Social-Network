import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent, useRef} from "react";
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
    clearPostActionCreator,
    PostPageProsType
} from "../../../Redux/Store";


export const Posts: React.FC<PostPageProsType> = (props) => {

    const newpostLists = props.dataForPosts.posts.map(elem => <Post key={elem.id} id={elem.id} post={elem.post} likes={elem.likes}/>)

    return (
        <>
            <div className={s.newPost}>
                <h2>My Post</h2>
                <input onChange={props.onChangeCallback} value={props.dataForPosts.newPosts} type="text"/>
                <button onClick={props.addPostCallback}> Send</button>
            </div>
            {newpostLists.reverse()}
        </>
    )
}