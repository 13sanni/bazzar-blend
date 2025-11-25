import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Alert, Button, IconButton, Snackbar, TextField, } from "@mui/material";
import { useEffect, useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { teal } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom";
import PricingCard from "./PricingCard";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchUserCart } from "../../../Redux Toolkit/Customer/CartSlice";
import { applyCoupon } from "../../../Redux Toolkit/Customer/CouponSlice";
import { Close } from "@mui/icons-material";
const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { cart, auth, coupone } = useAppSelector((store) => store);
    const [couponCode, setCouponCode] = useState("");
    const [snackbarOpen, setOpenSnackbar] = useState(false);
    useEffect(() => {
        dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
    }, [auth.jwt]);
    const handleChange = (e) => {
        setCouponCode(e.target.value);
    };
    const handleApllyCoupon = (apply) => {
        // console.log(couponCode,apply)
        var code = couponCode;
        if (apply == "false") {
            code = cart.cart?.couponCode || "";
        }
        dispatch(applyCoupon({
            apply,
            code,
            orderValue: cart.cart?.totalSellingPrice || 100,
            jwt: localStorage.getItem("jwt") || "",
        }));
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    useEffect(() => {
        if (coupone.couponApplied || coupone.error) {
            setOpenSnackbar(true);
            setCouponCode("");
        }
    }, [coupone.couponApplied, coupone.error]);
    console.log("cart ", coupone);
    return (_jsxs(_Fragment, { children: [cart.cart && cart.cart?.cartItems.length !== 0 ? (_jsx("div", { className: "pt-10 px-5 sm:px-10 md:px-60 lg:px-60 min-h-screen", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5 ", children: [_jsx("div", { className: "lg:col-span-2 space-y-3 ", children: cart.cart?.cartItems.map((item) => (_jsx(CartItemCard, { item: item }, item._id))) }), _jsxs("div", { className: "col-span-1  text-sm space-y-3", children: [_jsxs("div", { className: "border rounded-md px-5 py-3 space-y-5", children: [_jsx("div", { className: "", children: _jsxs("div", { className: "flex gap-3 text-sm items-center", children: [_jsx(LocalOfferIcon, { sx: { color: teal[600], fontSize: "17px" } }), _jsx("span", { children: "Apply Coupens" })] }) }), !cart.cart?.couponCode ? (_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(TextField, { value: couponCode, onChange: handleChange, placeholder: "coupon code", className: "", size: "small" }), _jsx(Button, { onClick: () => handleApllyCoupon("true"), disabled: couponCode ? false : true, size: "small", children: "Aplly" })] })) : (_jsx("div", { className: "flex", children: _jsxs("div", { className: "p-1 pl-5 pr-3 border rounded-full flex gap-2 items-center", children: [_jsxs("span", { className: "", children: [cart.cart.couponCode, " Applied"] }), _jsx(IconButton, { onClick: () => handleApllyCoupon("false"), size: "small", children: _jsx(Close, { className: "text-red-600" }) })] }) }))] }), _jsxs("section", { className: "border rounded-md", children: [_jsx(PricingCard, {}), _jsx("div", { className: "p-5", children: _jsx(Button, { onClick: () => navigate("/checkout/address"), sx: { py: "11px" }, variant: "contained", fullWidth: true, children: "BUY NOW" }) })] }), _jsxs("div", { className: "border rounded-md px-5 py-4 flex justify-between items-center cursor-pointer", children: [_jsx("span", { children: "Add From Whishlist" }), _jsx(FavoriteIcon, { sx: { color: teal[600], fontSize: "21px" } })] })] })] }) })) : (_jsxs("div", { className: "h-[85vh] flex justify-center items-center flex-col", children: [_jsxs("div", { className: "text-center py-5", children: [_jsx("h1", { className: "text-lg font-medium", children: "hay its feels so light!" }), _jsx("p", { className: "text-gray-500 text-sm", children: "there is nothing in your bag, lets add some items" })] }), _jsx(Button, { variant: "outlined", sx: { py: "11px" }, children: "Add Item From Wishlist" })] })), _jsx(Snackbar, { anchorOrigin: { vertical: "top", horizontal: "right" }, open: snackbarOpen, autoHideDuration: 6000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: coupone.error ? "error" : "success", variant: "filled", sx: { width: "100%" }, children: coupone.error ? coupone.error : "Coupon Applied successfully" }) })] }));
};
export default Cart;
