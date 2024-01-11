import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfileType = {
    text: string,
    post: string,
    like: number,
    nameButton: string,
    message: string,
}

export const Profile: React.FC <ProfileType> = ({text, post, like, nameButton, message}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts text={text} post={post} like={like} nameButton={nameButton} message={message}/>
        </div>
    );
};

export default Profile;