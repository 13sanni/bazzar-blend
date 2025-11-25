import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const UserAddressCard = ({ item }) => {
    return (_jsx("div", { className: 'p-5 border rounded-md ', children: _jsxs("div", { className: 'space-y-3', children: [_jsx("h1", { className: 'font-semibold', children: item.name }), _jsxs("p", { className: 'w-[320px]', children: [item.address, ",", item.locality, ",", item.city, ",", item.state, " - ", item.pinCode] }), _jsxs("p", { children: [_jsx("strong", { children: "Mobile : " }), " ", item.mobile] })] }) }));
};
export default UserAddressCard;
