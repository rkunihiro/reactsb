import React from "react";

import { MessageContextProvider } from "./context/MessageContext";

import { MessageInput } from "./component/MessageInput";
import { MessageView } from "./component/MessageView";

function App() {
    return (
        <>
            <MessageContextProvider>
                <MessageInput />
                <MessageView />
            </MessageContextProvider>
        </>
    );
}

export default App;
