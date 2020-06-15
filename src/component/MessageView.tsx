import React, {useContext} from "react";

import { MessageContext } from "../context/MessageContext";

export type MessageViewProps = {};

export const MessageView: React.FC<MessageViewProps> = () => {
    const { message } = useContext(MessageContext);
    return (
        <div>{message}</div>
    );
};
