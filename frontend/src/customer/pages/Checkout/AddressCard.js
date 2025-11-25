import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Radio } from '@mui/material';
import React from 'react';
const AddressCard = ({ value, selectedValue, handleChange, item }) => {
    return (_jsxs("div", { className: 'p-5 border rounded-md flex ', children: [_jsx("div", { children: _jsx(Radio, { checked: value == selectedValue, onChange: handleChange, value: value, name: "radio-buttons", inputProps: { 'aria-label': 'B' } }) }), _jsxs("div", { className: 'space-y-3 pt-3', children: [_jsx("h1", { children: item.name }), _jsxs("p", { className: 'w-[320px]', children: [item.address, ",", item.locality, ",", item.city, ",", item.state, " - ", item.pinCode] }), _jsxs("p", { children: [_jsx("strong", { children: "Mobile : " }), " ", item.mobile] })] })] }));
};
export default AddressCard;
