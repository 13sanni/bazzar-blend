import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { paymentSuccess } from "../../../Redux Toolkit/Customer/OrderSlice";
import { useLocation, useNavigate } from "react-router-dom";
const PaymentSuccessHandler = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { orders } = useAppSelector(store => store);
    const navigate = useNavigate();
    const getQueryParam = (key) => {
        const params = new URLSearchParams(location.search);
        return params.get(key);
    };
    const paymentId = getQueryParam("razorpay_payment_id");
    const paymentLinkId = getQueryParam("razorpay_payment_link_id");
    // const paymentId="cs_test_a1eU8pFuXZJlg3tiahN153QykvQl6LI5hLgSnUUh01alidIPrMU8KyDx67"
    useEffect(() => {
        if (paymentId) {
            dispatch(paymentSuccess({
                paymentId,
                paymentLinkId: paymentLinkId || "",
                jwt: localStorage.getItem("jwt") || "",
            }));
        }
    }, [paymentId]);
    return (_jsx("div", { className: "min-h-[90vh] flex justify-center items-center", children: orders ? _jsxs("div", { className: "bg-primary-color text-white p-8 w-[90%] lg:w-[25%] border rounded-md h-[40vh] flex flex-col gap-7 items-center justify-center", children: [_jsx("h1", { className: "text-3xl font-semibold", children: "Congratulations!" }), _jsx("h1", { className: "text-2xl font-semibold", children: "Your Order Get Success" }), _jsx("div", { children: _jsx(Button, { onClick: () => navigate("/"), color: "secondary", variant: "contained", children: "Shopping More" }) })] }) : _jsx(Backdrop, { sx: { color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }, open: true, children: _jsx(CircularProgress, { color: "inherit" }) }) }));
};
export default PaymentSuccessHandler;
