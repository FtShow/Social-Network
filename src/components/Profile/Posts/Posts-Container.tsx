import React from "react";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {
    addPostAC,
    changeNewPostTextActionCreator,
    clearPostActionCreator
} from "../../../Redux/ProfileReduce";


let mapStateToProps = (state: any) => {
    return {
        dataForPosts: state.profilePage
    }
}

export const PostsContainer = connect(mapStateToProps,
    {
        addPostActionCreator: addPostAC,
        clearPostActionCreator,
        changeNewPostTextActionCreator,
    })(Posts)