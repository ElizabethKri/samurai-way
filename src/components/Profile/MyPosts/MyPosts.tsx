import React from 'react';
import s from "../../../styledComponents/Profile/Posts.module.css";
import {Post} from "./Post";

export const MyPosts = () => {
    return (
        <div className={s.posts}>
    <div >My post</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message={'Hi, how are you?'}/>
        </div>
    );
};

