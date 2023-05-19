import React, {ChangeEvent} from "react";
import {addPostActionCreator, changeNewPostTextActionCreator, clearPostActionCreator} from "../../../Redux/Store";
import {Posts} from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state: any) => {
    return {
        dataForPosts: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPostCallback: () => {
            dispatch(addPostActionCreator())
            dispatch(clearPostActionCreator())
        },
        onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewPostTextActionCreator(e.currentTarget.value))
        }
    }
}
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)