import React from 'react';
import s from "../../../styledComponents/Profile/Post.module.css";

export const Post = () => {
    return (
        <div className={s.post}>
            <div><img src={'https://kartinkin.net/uploads/posts/2022-02/1645500423_11-kartinkin-net-p-kvadratnie-kartinki-11.jpg'}/></div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
                post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};
