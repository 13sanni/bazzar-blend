import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import { Alert, Button, Snackbar } from '@mui/material';
import SignupForm from './SignupForm';
import { useAppSelector } from '../../../Redux Toolkit/Store';
const Auth = () => {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const handleCloseSnackbar = () => setSnackbarOpen(false);
    const { auth } = useAppSelector(store => store);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    useEffect(() => {
        if (auth.otpSent || auth.error) {
            setSnackbarOpen(true);
            console.log("store ", auth.error);
        }
    }, [auth.otpSent, auth.error]);
    return (_jsxs("div", { className: 'flex justify-center h-[90vh] items-center', children: [_jsxs("div", { className: 'max-w-md h-[85vh] rounded-md border shadow-lg ', children: [_jsx("img", { className: 'w-full rounded-t-md', src: "/login_banner.png", alt: "" }), _jsxs("div", { className: 'mt-8 px-10', children: [isLoginPage ? _jsx(LoginForm, {}) : _jsx(SignupForm, {}), _jsxs("div", { className: 'flex items-center gap-1 justify-center mt-5', children: [_jsxs("p", { children: [isLoginPage && "Don't", " have Account ?"] }), _jsx(Button, { onClick: () => setIsLoginPage(!isLoginPage), size: 'small', children: isLoginPage ? "create account" : "login" })] })] })] }), _jsx(Snackbar, { anchorOrigin: { vertical: "top", horizontal: "right" }, open: snackbarOpen, autoHideDuration: 6000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: auth.error ? "error" : "success", variant: "filled", sx: { width: '100%' }, children: auth.error ? auth.error : " otp sent to your email!" }) })] }));
};
export default Auth;
