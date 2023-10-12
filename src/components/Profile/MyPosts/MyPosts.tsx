import React from 'react';
import s from "../../../styledComponents/Profile/Posts.module.css";
import {Post} from "./Post";

export const MyPosts = () => {
    return (
        <div>
    <div className={s.posts}>My post</div>
    <Post/>
        </div>
    );
};

