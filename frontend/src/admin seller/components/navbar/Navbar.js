import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ DrawerList }) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (_jsxs("div", { className: 'h-[10vh] flex items-center px-5 border-b', children: [_jsxs("div", { className: 'flex items-center gap-3 ', children: [_jsx(IconButton, { onClick: toggleDrawer(true), color: 'primary', children: _jsx(MenuIcon, { color: 'primary' }) }), _jsx("h1", { onClick: () => navigate("/"), className: 'logo text-xl cursor-pointer', children: "Bazzar Blend" })] }), _jsx(Drawer, { open: open, onClose: toggleDrawer(false), children: _jsx(DrawerList, { toggleDrawer: toggleDrawer }) })] }));
};
export default Navbar;
