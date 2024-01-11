import React from 'react';
import s from '../../styledComponents/Dialogs/Dialogs.module.css'
import {message} from "antd";
import {NavLink} from "react-router-dom";
import Messages from "./Messages";
import state from "../../redux/state/state";

type DialogsType = {
    name: string,
    id: number
}


const Dialogs: React.FC<DialogsType> = ({name, id}) => {
    let pathDialogs = '/dialogs/' + id
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <NavLink to= {pathDialogs} className={s.dialog + '' + s.active}>{name}</NavLink>
            </div>
            <div>
                {state.dialogsPage.messages.map(el=> {
                    return (
                        <Messages
                            key={el.id}
                            message={el.messages}
                            id={el.id}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;