import React from "react";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    changeNewPostTextActionCreator,
    clearPostActionCreator, setUserProfile
} from "../../../Redux/ProfileReduce";


let mapStateToProps = (state: any) => {
    return {
        dataForPosts: state.profilePage
    }
}

export const PostsContainer = connect(mapStateToProps,
    {
        addPostActionCreator,
        clearPostActionCreator,
        changeNewPostTextActionCreator,
    })(Posts)