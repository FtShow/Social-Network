import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./Posts/ProfileInfo/ProfileInfo";
import {profilePageTypeProps} from "../../Redux/Store";
import {PostsContainer} from "./Posts/Posts-Container";


export const Profile: React.FC<profilePageTypeProps> = (props) => {
    console.log(props)
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <PostsContainer dispatch={props.dispatch}
                            dataForPostsContainer={props.profilePage}

            />
        </div>

    )
}