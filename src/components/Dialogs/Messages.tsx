import React from 'react';
import s from "../../styledComponents/Dialogs/Dialogs.module.css";
import state from "../../redux/state/state";


type MessageType = {
    message: string,
    id: number
}
const Messages: React.FC <MessageType> = ({message, id}) => {
    return (
            <div className={s.message}>
                <div>{message}</div>
                <div>{id}</div>
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

export default Messages;