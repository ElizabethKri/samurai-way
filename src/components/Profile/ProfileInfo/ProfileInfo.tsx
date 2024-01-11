import React from 'react';
import s from "../../../styledComponents/Profile/ProfileInfo.module.css";

const ProfileInfo = () => {
    return (

            <div>
                <div><img className={s.main} src={'https://gas-kvas.com/uploads/posts/2023-02/1675485246_gas-kvas-com-p-fonovie-risunki-na-rabochii-stol-visokogo-22.jpg'}/></div>
                <div className={s.descriptionBlock}>ava + discription</div>
            </div>
    );
};

export default ProfileInfo;