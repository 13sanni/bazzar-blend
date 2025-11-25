import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, CircularProgress, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import OTPInput from '../../components/OtpFild/OTPInput';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { useNavigate } from 'react-router-dom';
import { sendLoginSignupOtp, signup } from '../../../Redux Toolkit/Customer/AuthSlice';
import { useFormik } from 'formik';
const SignupForm = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(30); // Timer state
    const [isTimerActive, setIsTimerActive] = useState(false);
    const dispatch = useAppDispatch();
    const { auth } = useAppSelector(store => store);
    const formik = useFormik({
        initialValues: {
            email: '',
            otp: '',
            name: ""
        },
        onSubmit: (values) => {
            // Handle form submission
            dispatch(signup({ fullName: values.name, email: values.email, otp, navigate }));
            console.log('Form data:', values);
        }
    });
    const handleOtpChange = (otp) => {
        setOtp(otp);
    };
    const handleResendOTP = () => {
        // Implement OTP resend logic
        dispatch(sendLoginSignupOtp({ email: formik.values.email }));
        console.log('Resend OTP');
        setTimer(30);
        setIsTimerActive(true);
    };
    const handleSentOtp = () => {
        handleResendOTP();
    };
    const handleLogin = () => {
        formik.handleSubmit();
    };
    useEffect(() => {
        let interval;
        if (isTimerActive) {
            interval = setInterval(() => {
                setTimer(prev => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsTimerActive(false);
                        return 30; // Reset timer for next OTP request
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (interval)
                clearInterval(interval);
        };
    }, [isTimerActive]);
    return (_jsxs("div", { children: [_jsx("h1", { className: 'text-center font-bold text-xl text-primary-color pb-5', children: "Signup" }), _jsxs("form", { className: "space-y-5", children: [_jsx(TextField, { fullWidth: true, name: "email", label: "Enter Your Email", value: formik.values.email, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email ? formik.errors.email : undefined }), auth.otpSent && _jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "font-medium text-sm", children: "* Enter OTP sent to your mobile number" }), _jsx(OTPInput, { length: 6, onChange: handleOtpChange, error: false }), _jsx("p", { className: "text-xs space-x-2", children: isTimerActive ? (_jsxs("span", { children: ["Resend OTP in ", timer, " seconds"] })) : (_jsxs(_Fragment, { children: ["Didn\u2019t receive OTP?", " ", _jsx("span", { onClick: handleResendOTP, className: "text-teal-600 cursor-pointer hover:text-teal-800 font-semibold", children: "Resend OTP" })] })) }), formik.touched.otp && formik.errors.otp && _jsx("p", { children: formik.errors.otp })] }), auth.otpSent && _jsx(TextField, { fullWidth: true, name: "name", label: "Enter Your Name", value: formik.values.name, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.name && Boolean(formik.errors.name), helperText: formik.touched.name ? formik.errors.name : undefined }), auth.otpSent && _jsx("div", { children: _jsxs(Button, { disabled: auth.loading, onClick: handleLogin, fullWidth: true, variant: 'contained', sx: { py: "11px" }, children: [" ", auth.loading ? _jsx(CircularProgress, { size: "small", sx: { width: "27px", height: "27px" } }) : " Signup ", "  "] }) }), !auth.otpSent && _jsx(Button, { fullWidth: true, variant: 'contained', onClick: handleSentOtp, disabled: auth.loading, sx: { py: "11px" }, children: auth.loading ? _jsx(CircularProgress, { size: "small", sx: { width: "27px", height: "27px" } }) : "sent otp" })] })] }));
};
export default SignupForm;
