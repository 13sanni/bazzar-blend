import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Button, Snackbar } from "@mui/material";
import { useState, useEffect } from "react";
import SellerAccountForm from "./SellerAccountForm";
import SellerLoginForm from "./SellerLoginForm";
import { useAppSelector } from "../../../Redux Toolkit/Store";
const BecomeSeller = () => {
    const [isLoginPage, setIsLoginPage] = useState(false);
    const { sellerAuth } = useAppSelector(store => store);
    const handleCloseSnackbar = () => setSnackbarOpen(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    useEffect(() => {
        if (sellerAuth.sellerCreated || sellerAuth.error || sellerAuth.otpSent) {
            setSnackbarOpen(true);
            console.log("store ", sellerAuth.error);
        }
    }, [sellerAuth.sellerCreated, sellerAuth.error, sellerAuth.otpSent]);
    return (_jsxs("div", { className: "grid md:gap-10 grid-cols-3 min-h-screen ", children: [_jsxs("section", { className: "lg:col-span-1 md:col-span-2 col-span-3  p-10 shadow-lg rounded-b-md", children: [!isLoginPage ?
                        _jsx(SellerAccountForm, {}) :
                        _jsx(SellerLoginForm, {}), _jsxs("div", { className: 'mt-10 space-y-2', children: [_jsxs("h1", { className: 'text-center text-sm font-medium', children: [isLoginPage && "Don't", " have account ? "] }), _jsx(Button, { onClick: () => setIsLoginPage(!isLoginPage), fullWidth: true, sx: { py: "11px" }, variant: 'outlined', children: isLoginPage ? "Register" : "Login" })] })] }), _jsx("section", { className: " hidden md:col-span-1 md:flex  lg:col-span-2  justify-center items-center", children: _jsxs("div", { className: "lg:w-[70%] px-5 space-y-10", children: [_jsxs("div", { className: "borderr rounded-md space-y-2 font-bold text-center", children: [_jsx("p", { className: " text-2xl", children: "Join the Marketplace Revolution" }), _jsx("p", { className: "text-lg text-teal-500", children: " Boost Your Sales Today" })] }), _jsx("img", { className: "", src: "/seller.jpg", alt: "" })] }) }), _jsx(Snackbar, { anchorOrigin: { vertical: "top", horizontal: "right" }, open: snackbarOpen, autoHideDuration: 6000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: sellerAuth.error ? "error" : "success", variant: "filled", sx: { width: '100%' }, children: sellerAuth.error ? sellerAuth.error : sellerAuth.sellerCreated ? sellerAuth.sellerCreated : " otp sent to your email!" }) })] }));
};
export default BecomeSeller;
