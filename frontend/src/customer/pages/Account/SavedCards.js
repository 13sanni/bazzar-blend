import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AddCardIcon from '@mui/icons-material/AddCard';
import { teal } from '@mui/material/colors';
const SavedCards = () => {
    return (_jsxs("div", { className: 'flex flex-col justify-center items-center lg:min-h-[60vh] gap-6', children: [_jsx("div", { children: _jsx(AddCardIcon, { sx: { color: teal[400], fontSize: "150px" } }) }), _jsxs("div", { className: 'text-center w-full lg:w-[68%] space-y-4', children: [_jsx("h1", { className: 'font-bold text-lg textg', children: "SAVE YOUR CREDIT/DEBIT CARDS DURING PAYMENT" }), _jsx("p", { className: 'text-gray-700', children: "It's convenient to pay with saved cards. Your card information will be secure, we use 128-bit encryption" })] })] }));
};
export default SavedCards;
