import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from "@mui/material";
import { sumCartItemMrpPrice, sumCartItemSellingPrice, } from "../../../util/cartCalculator";
import { useAppSelector } from "../../../Redux Toolkit/Store";
const PricingCard = () => {
    const { cart } = useAppSelector((store) => store);
    return (_jsxs("div", { children: [_jsxs("div", { className: "space-y-3 p-5", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "Subtotal" }), _jsxs("span", { children: ["\u20B9 ", cart.cart?.totalMrpPrice] })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "Discount" }), _jsxs("span", { children: ["\u20B9", " ", sumCartItemMrpPrice(cart.cart?.cartItems || []) -
                                        sumCartItemSellingPrice(cart.cart?.cartItems || [])] })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "Shipping" }), _jsx("span", { children: "\u20B9 79" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "plateform fee" }), _jsx("span", { className: "text-teal-600", children: "Free" })] })] }), _jsx(Divider, {}), _jsxs("div", { className: "font-medium px-5 py-2 flex justify-between items-center", children: [_jsx("span", { children: "Total" }), _jsxs("span", { children: ["\u20B9 ", cart.cart?.totalSellingPrice] })] })] }));
};
export default PricingCard;
