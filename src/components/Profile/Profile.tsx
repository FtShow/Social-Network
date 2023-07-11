import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./Posts/ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/Posts-Container";
import {Redirect} from "react-router-dom";

type ProfileType = {
    profile: any,
    setUserProfile?: (profile: any) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>

    )
}
//