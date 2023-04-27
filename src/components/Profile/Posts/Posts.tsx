import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent, useRef} from "react";
import {PostPageProsType} from "../../../Redux/State";


export const Posts:React.FC<PostPageProsType>= (props) => {

    const newPost =  useRef<HTMLInputElement>(null)


    const onclickHandler = () =>{
            let newpost: any = props.newMessage
            props.addPost(newpost)
            props.changeNewPostText('')

    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeNewPostText(e.currentTarget.value)
    }


    const newpostLists = props.posts.map(elem=> <Post key={elem.id} id={elem.id} post={elem.post} likes={elem.likes}/>)
    return (
        <>
            <div className={s.newPost}>
                <h2>My Post</h2>
                <input ref={newPost} onChange={onChangeHandler} value={props.newMessage} type="text"/>
                <button  onClick={onclickHandler}> Send</button>
            </div>
            {newpostLists.reverse()}
        </>
    )
}