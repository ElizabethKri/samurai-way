import React from 'react';
import  s from '../../styledComponents/Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div><img className={s.main} src={'https://gas-kvas.com/uploads/posts/2023-02/1675485246_gas-kvas-com-p-fonovie-risunki-na-rabochii-stol-visokogo-22.jpg'}/></div>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;