import React from 'react';
import  s from '../../styledComponents/Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <div><img className={s.main} src={'https://gas-kvas.com/uploads/posts/2023-02/1675485246_gas-kvas-com-p-fonovie-risunki-na-rabochii-stol-visokogo-22.jpg'}/></div>
            </div>
            <MyPosts text={'Hello! How are you?'} post={'Hi, friends!'} like={'Like'} nameButton={'Add'} message={'Hello! How are you?'}/>
        </div>
    );
};

export default Profile;