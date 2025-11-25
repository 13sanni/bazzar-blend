import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../Redux Toolkit/Store";
import { performLogout } from "../../../Redux Toolkit/Customer/AuthSlice";
const DrawerList = ({ toggleDrawer, menu, menu2 }) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(performLogout());
    };
    const handleClick = (item) => () => {
        if (item.name === "Logout") {
            handleLogout();
        }
        navigate(item.path);
        if (toggleDrawer)
            toggleDrawer(false)();
    };
    return (_jsx("div", { className: "h-full", children: _jsxs("div", { className: "flex flex-col  justify-between  h-full w-[300px] border-r py-5", children: [_jsx("div", { children: _jsx("div", { className: "space-y-2", children: menu.map((item, index) => (_jsx("div", { onClick: handleClick(item), className: "pr-9 cursor-pointer", children: _jsxs("p", { className: `${item.path === location.pathname ? "bg-primary-color text-white " : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`, children: [_jsx(ListItemIcon, { children: location.pathname === item.path ? item.activeIcon : item.icon }), _jsx(ListItemText, { primary: item.name })] }) }, item.name))) }) }), _jsxs("div", { className: "space-y-4", children: [_jsx(Divider, {}), _jsx("div", { className: "space-y-2", children: menu2.map((item, index) => (_jsx("div", { onClick: handleClick(item), className: "pr-9 cursor-pointer", children: _jsxs("p", { className: `${item.path === location.pathname ? " bg-primary-color text-white " : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`, children: [_jsx(ListItemIcon, { children: location.pathname === item.path ? item.activeIcon : item.icon }), _jsx(ListItemText, { primary: item.name })] }) }, item.name))) })] })] }) }));
};
export default DrawerList;
