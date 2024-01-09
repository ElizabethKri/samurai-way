import React from 'react';
import s from '../../styledComponents/Dialogs/Dialogs.module.css'
import {message} from "antd";



type DialogsType = {
    message: string
}

const Dialogs: React.FC<DialogsType> = ({message}) => {
    return (
        <div >
            {message}
        </div>
    );
};

export default Dialogs;