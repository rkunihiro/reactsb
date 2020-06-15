import React, { useContext } from "react";

import { MessageContext } from "../context/MessageContext";

export type MessageInputProps = {};

export const MessageInput: React.FC<MessageInputProps> = () => {
    const { message, setMessage } = useContext(MessageContext);
    return (
        <div>
            <input
                type="text"
                value={message ?? ""}
                onChange={({ target: { value } }) => setMessage(value)}
            />
        </div>
    );
};
