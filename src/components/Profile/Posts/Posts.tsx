import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React, {useRef} from "react";
import {PostPageProsType} from "../../../Redux/State";


export const Posts:React.FC<PostPageProsType>= (props) => {

    const newPost = useRef<HTMLInputElement>(null)

    // const [postLists, setpostLists] = useState(props.posts)
    const onclickHandler = () =>{
        let newpost: any = newPost.current?.value
        props.addPost(newpost)
        // setpostLists([...props.posts])

    }

    const newpostLists = props.posts.map(elem=> <Post id={elem.id} post={elem.post} likes={elem.likes}/>)
    return (
        <>
            <div className={s.newPost}>
                <h2>My Post</h2>
                <input ref={newPost} type="text"/>
                <button  onClick={onclickHandler}> Send</button>
            </div>
            {newpostLists.reverse()}
        </>
    )
}