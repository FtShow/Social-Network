import React from "react";
import s from "./Profile.module.css";
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./Posts/ProfileInfo/ProfileInfo";
import {messagesPageTypeProps, profilePageTypeProps} from "../../Redux/State";



export const Profile:React.FC<profilePageTypeProps> = (props) => {
props.getState()
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <Posts addPost={props.addPost.bind(props)}
                   posts={props.profilePage.posts}
                   newMessage={props.profilePage.newPosts}
                   changeNewPostText={props.changeNewPostText.bind(props)}
            />
        </div>

    )
}