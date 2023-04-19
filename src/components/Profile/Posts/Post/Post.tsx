import s from "./Post.module.css";
import React, {FC} from "react";
import {postsItemType} from "../../../../Redux/State";



export const Post: FC<postsItemType> = (props) => {
    const {id, post, likes} = props
    return (
        <div key={id} className={s.publishedPost}>
            <div className={s.microAvatar}><img
                src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"
                alt=""/></div>
            <div className={s.postContainer}>
                <div><span
                    className={s.textPost}>{post}</span>
                </div>
                <div>
                    <button>Like</button>
                    <span>{likes}</span></div>
            </div>
        </div>
    )
}