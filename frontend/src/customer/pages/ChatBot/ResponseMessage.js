import { jsx as _jsx } from "react/jsx-runtime";
import "./ResponseMessage.css";
import ReactMarkdown from "react-markdown";
const ResponseMessage = ({ message }) => {
    return (_jsx("div", { className: "response-message px-3 py-4 bg-opacity-50 bg-slate-100 rounded-md", children: _jsx(ReactMarkdown, { children: message }) }));
};
export default ResponseMessage;
