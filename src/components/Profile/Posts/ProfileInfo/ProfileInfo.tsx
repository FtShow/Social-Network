import s from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {
    return (<>
            <div className={s.topBanner}>
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
                    alt=""/>
            </div>
            <div className={s.userInfo}>
                <img
                    src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"
                    alt=""/>
                <div className={s.userInfoData}>
                    <h3>Name</h3>
                    <span>Info</span>
                </div>
            </div>
        </>
    )
}
