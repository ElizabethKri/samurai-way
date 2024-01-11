import React from 'react';
import s from "../../../styledComponents/Profile/Posts.module.css";
import {Post} from "./Post";
import {text} from "stream/consumers";


type MyPostsPropsType = {
    post: string,
    message: string,
    nameButton: string,
    text: string,
    like: number
}
export const MyPosts: React.FC <MyPostsPropsType> = ({post, message, nameButton, text, like}) => {
    return (
        <div className={s.posts}>
    <div className={s.postsBlock}><h3>{post}</h3></div>
            <div>
                <div><textarea>{text}</textarea></div>
                <div><button>{nameButton}</button></div>
            </div>
            <div className={s.postsMessage}><Post message={message} like={like}/></div>
        </div>
    );
};

