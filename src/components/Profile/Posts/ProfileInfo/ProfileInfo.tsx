import s from "./ProfileInfo.module.css";
import React from "react";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: {
        aboutMe: string
        contacts: any
        fullName: string
        lookingForAJob: boolean
        lookingForAJobDescription: string
        photos: {
            small: string,
            large: string
        }
        userId: number

    }
    status: string
    updateStatus: (newStatus: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (<>
            <div className={s.topBanner}>
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
                    alt=""/>
            </div>
            <div className={s.userInfo}>
                <img
                    src={profile.photos.large || "https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"}
                    alt=""/>
                <div className={s.userInfoData}>
                    <h3>{profile.fullName}</h3>
                    <span> About Me: {profile.aboutMe}</span>
                    <br/>
                    {"Status: "}<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <br/>
                    <span>Ищу работу: {profile.lookingForAJob ? 'Yes' : 'no'}</span>

                </div>

            </div>
        </>
    )
}
