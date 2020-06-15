import React, { useState } from "react";

export type MessageContextValue = {
    message: string,
    setMessage: (value: string) => void,
};

const defaultValue = {
    message: "",
    setMessage: (value: string) => undefined,
};

export const MessageContext = React.createContext<MessageContextValue>(defaultValue);

export const MessageContextProvider: React.FC = ({ children }) => {
    const [message, setMessage] = useState<string>("Hello");
    return (
        <MessageContext.Provider value={{
            message,
            setMessage,
        }}>
            {children}
        </MessageContext.Provider>
    );
};
