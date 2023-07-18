import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./Posts/ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/Posts-Container";

type ProfileType = {
    profile: any,
    setUserProfile?: (profile: any) => void
    status?: string
    updateStatus: (newStatus: string)=>void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status || 'default status'} updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>

    )
}
//