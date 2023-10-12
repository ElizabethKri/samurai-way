import React from 'react';
import  s from   '../styledComponents/Profile.module.css'

export const Profile = () => {
    return (

            <div className={s.content}>
                <div><img className={s.main} src={'https://gas-kvas.com/uploads/posts/2023-02/1675485246_gas-kvas-com-p-fonovie-risunki-na-rabochii-stol-visokogo-22.jpg'}/></div>

                <div><img className={s.profile} src={'https://kartinkin.net/uploads/posts/2022-02/1645500423_11-kartinkin-net-p-kvadratnie-kartinki-11.jpg'}/></div>
                <div>
                    <div>My post</div>
                    <div>New post</div>
                </div>
                <div className={s.posts}>
                    <div className={s.post}>post 1</div>
                    <div className={s.post}>post 2</div>
                    <div className={s.post}>post 3</div>
                </div>

            </div>

    );
};

export default Profile;