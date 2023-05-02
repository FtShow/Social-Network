import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent, useRef} from "react";
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
    clearPostActionCreator,
    PostPageProsType
} from "../../../Redux/State";


export const Posts: React.FC<PostPageProsType> = (props) => {

    const newPost = useRef<HTMLInputElement>(null)


    const onclickHandler = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(clearPostActionCreator())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeNewPostTextActionCreator(e.currentTarget.value))
    }


    const newpostLists = props.posts.map(elem => <Post key={elem.id} id={elem.id} post={elem.post} likes={elem.likes}/>)
    return (
        <>
            <div className={s.newPost}>
                <h2>My Post</h2>
                <input ref={newPost} onChange={onChangeHandler} value={props.newMessage} type="text"/>
                <button onClick={onclickHandler}> Send</button>
            </div>
            {newpostLists.reverse()}
        </>
    )
}