import React from 'react';
import s from "../../../styledComponents/Profile/Posts.module.css";
import {Post} from "./Post";
import {text} from "stream/consumers";


type MyPostsPropsType = {
    post: string,
    message: string,
    nameButton: string,
    text: string,
    like: string
}
export const MyPosts: React.FC <MyPostsPropsType> = ({post, message, nameButton, text, like}) => {
    return (
        <div className={s.posts}>
    <div >{post}</div>
            <div>
                <textarea>{text}</textarea>
                <button>{nameButton}</button>
            </div>
            <Post message={message} like={like}/>
        </div>
    );
};

