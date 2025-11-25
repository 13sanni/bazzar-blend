import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ReportCard.css";
const ReportCard = ({ value, title, icon }) => {
    return (_jsxs("div", { className: "flex gap-5 items-center p-5 w-full border rounded-md h-[75px] css-1nj0gs7", children: [_jsx("div", { className: "rounded-md p-2 bg-[#000025]", children: icon }), _jsxs("div", { children: [_jsx("p", { className: "font-bold text-lg", children: value }), _jsx("p", { className: "font-medium", children: title })] })] }));
};
export default ReportCard;
