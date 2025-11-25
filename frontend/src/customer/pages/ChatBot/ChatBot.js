import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { askProductQuestion } from "../../../Redux Toolkit/Customer/AiChatBotSlice";
import { Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PromptMessage from "./PromptMessage";
import ResponseMessage from "./ResponseMessage";
import CloseIcon from '@mui/icons-material/Close';
const ChatBot = ({ handleClose, productId }) => {
    const dispatch = useAppDispatch();
    const [prompt, setPrompt] = useState("");
    const chatContainerRef = useRef(null);
    const { aiChatBot } = useAppSelector(store => store);
    console.log("ai chat Bot", aiChatBot);
    const handleGivePrompt = (e) => {
        e.stopPropagation();
        // dispatch(chatBot({ prompt: { prompt }, productId, userId: null }));
        dispatch(askProductQuestion({
            productId,
            question: prompt
        }));
        setPrompt("");
        console.log("prompt ", productId, prompt);
    };
    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [aiChatBot.messages]);
    // console.log(aiChatBot)
    return (_jsx("div", { className: "rounded-lg", children: _jsxs("div", { className: "w-full lg:w-[40vw] h-[82vh] shadow-2xl bg-white z-50 rounded-lg", children: [_jsxs("div", { className: " h-[12%] flex justify-between items-center px-5 bg-slate-100 rounded-t-lg", children: [_jsxs("div", { className: "flex items-center gap-3 ", children: [_jsx("h1", { className: "logo", children: "Zosh Bazzar" }), _jsx("p", { children: "Assitant" })] }), _jsx("div", { children: _jsx(IconButton, { onClick: handleClose, color: "primary", children: _jsx(CloseIcon, {}) }) })] }), _jsxs("div", { className: "h-[78%] p-5 flex flex-col py-5 px-5 overflow-y-auto  custom-scrollbar", children: [_jsxs("p", { children: ["welcome to zosh bazzar Ai Assistant, you can", productId ? ` Query About this Product : ${productId}` : "   Query about your cart, and order history here"] }), aiChatBot.messages.map((item, index) => item.role == "user" ? (_jsxs("div", { ref: chatContainerRef, className: "self-end", children: [_jsx(PromptMessage, { message: item.message, index: index }), aiChatBot.loading && _jsx("h1", { className: " font-bold", children: "Thinking ..." })] }, index)) : (_jsx("div", { ref: chatContainerRef, className: "self-start", children: _jsx(ResponseMessage, { message: item.message }) }, index))), aiChatBot.loading && _jsx("p", { children: "fetching data..." })] }), _jsxs("div", { className: " h-[10%] flex items-center", children: [_jsx("input", { onChange: handlePromptChange, value: prompt, type: "text", placeholder: "give your prompt", className: "rounded-bl-lg pl-5 h-full w-full bg-slate-100 border-none outline-none" }), _jsx(Button, { sx: { borderRadius: "0 0 0.5rem 0" }, className: "h-full ", onClick: handleGivePrompt, variant: "contained", children: _jsx(SendIcon, {}) })] })] }) }));
};
export default ChatBot;
