import React from 'react';
import s from "../../../styledComponents/Profile/Post.module.css";

type PostPropsType = {
    message: string,
    like: number
}

export const Post: React.FC <PostPropsType> = ({message, like}) => {
    return (
        <div className={s.post}>
            <div><img src={'https://kartinkin.net/uploads/posts/2022-02/1645500423_11-kartinkin-net-p-kvadratnie-kartinki-11.jpg'}/></div>
            {message}
            <div>
                <span>{like}</span>
            </div>
        </div>
    );
};

