import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Divider, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Order from './Order';
import UserDetails from './UserDetails';
import SavedCards from './SavedCards';
import OrderDetails from './OrderDetails';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { performLogout } from '../../../Redux Toolkit/Customer/AuthSlice';
import Addresses from './Adresses';
const menu = [
    { name: "orders", path: "/account/orders" },
    { name: "profile", path: "/account/profile" },
    { name: "Saved Cards", path: "/account/saved-card" },
    { name: "Addresses", path: "/account/addresses" },
    { name: "Logout", path: "/" }
];
const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { user, orders } = useAppSelector(store => store);
    const [snackbarOpen, setOpenSnackbar] = useState(false);
    const handleLogout = () => {
        dispatch(performLogout());
        navigate("/");
    };
    const handleClick = (item) => {
        if (item.name === "Logout") {
            handleLogout();
        }
        else
            navigate(`${item.path}`);
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    useEffect(() => {
        if (user.profileUpdated || orders.orderCanceled || user.error) {
            setOpenSnackbar(true);
        }
    }, [user.profileUpdated, orders.orderCanceled]);
    return (_jsxs("div", { className: 'px-5 lg:px-52 min-h-screen mt-10 ', children: [_jsx("div", { children: _jsx("h1", { className: 'text-xl font-bold pb-5', children: user.user?.fullName }) }), _jsx(Divider, {}), _jsxs("div", { className: 'grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]', children: [_jsx("div", { className: "col-span-1 lg:border-r lg:pr-5 py-5 h-full  flex flex-row flex-wrap lg:flex-col gap-3", children: menu.map((item, index) => _jsx("div", { onClick: () => handleClick(item), className: `${menu.length - 1 !== index ? "border-b" : ""} ${item.path == location.pathname ? "bg-primary-color text-white" : ""} px-5 py-3 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer `, children: _jsx("p", { children: item.name }) })) }), _jsx("div", { className: 'lg:col-span-2 lg:pl-5 py-5', children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(UserDetails, {}) }), _jsx(Route, { path: '/orders', element: _jsx(Order, {}) }), _jsx(Route, { path: '/orders/:orderId/item/:orderItemId', element: _jsx(OrderDetails, {}) }), _jsx(Route, { path: '/profile', element: _jsx(UserDetails, {}) }), _jsx(Route, { path: '/saved-card', element: _jsx(SavedCards, {}) }), _jsx(Route, { path: '/addresses', element: _jsx(Addresses, {}) })] }) })] }), _jsx(Snackbar, { anchorOrigin: { vertical: "top", horizontal: "right" }, open: snackbarOpen, autoHideDuration: 6000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: user.error ? "error" : "success", variant: "filled", sx: { width: "100%" }, children: user.error ? user.error : orders.orderCanceled ? "order canceled successfully" : "success" }) })] }));
};
export default Profile;
