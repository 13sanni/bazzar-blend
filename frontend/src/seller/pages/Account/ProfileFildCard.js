import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from '@mui/material';
import React from 'react';
const ProfileFildCard = ({ value, keys }) => {
    return (_jsxs("div", { className: 'p-5 flex items-center bg-slate-50 ', children: [_jsx("p", { className: 'w-20 lg:w-36 pr-5', children: keys }), _jsx(Divider, { orientation: "vertical", flexItem: true }), _jsx("p", { className: 'pl-4 lg:pl-10 font-semibold lg:text-lg', children: value })] }));
};
export default ProfileFildCard;
