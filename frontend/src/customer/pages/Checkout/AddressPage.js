import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import PricingCard from '../Cart/PricingCard';
import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material';
import AddressForm from './AddresssForm';
import AddressCard from './AddressCard';
import AddIcon from '@mui/icons-material/Add';
import { createOrder } from '../../../Redux Toolkit/Customer/OrderSlice';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const paymentGatwayList = [
    {
        value: "RAZORPAY",
        image: "https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png",
        label: "Razarpay"
    },
    {
        value: "STRIPE",
        image: "/stripe_logo.png",
        label: "Stripe"
    }
];
const AddressPage = () => {
    const [value, setValue] = React.useState(0);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(store => store);
    const [paymentGateway, setPaymentGateway] = useState(paymentGatwayList[0].value);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => {
        console.log("-----", event.target.value);
        setValue(event.target.value);
    };
    const handleCreateOrder = () => {
        if (user.user?.addresses)
            dispatch(createOrder({
                paymentGateway,
                address: user.user?.addresses[value],
                jwt: localStorage.getItem('jwt') || ""
            }));
    };
    const handlePaymentChange = (event) => {
        setPaymentGateway(event.target.value);
    };
    return (_jsxs("div", { className: 'pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen ', children: [_jsxs("div", { className: 'space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9 ', children: [_jsxs("div", { className: "col-span-2 space-y-5", children: [_jsxs("div", { className: 'flex justify-between items-center', children: [_jsx("span", { className: 'font-semibold', children: "Select Dilivery Address" }), _jsx(Button, { onClick: handleOpen, variant: 'outlined', children: "Add New Address" })] }), _jsxs("div", { className: 'text-xs font-medium space-y-5', children: [_jsx("p", { children: "Saved Addreses" }), _jsx("div", { className: 'space-y-3', children: user.user?.addresses?.map((item, index) => _jsx(AddressCard, { item: item, selectedValue: value, value: index, handleChange: handleChange }, item._id)) })] }), _jsx("div", { className: 'py-4 px-5 rounded-md border', children: _jsx(Button, { onClick: handleOpen, startIcon: _jsx(AddIcon, {}), children: "Add New Address" }) })] }), _jsxs("div", { className: "col-span-1 text-sm space-y-3 ", children: [_jsxs("section", { className: 'space-y-3 border p-5 rounded-md', children: [_jsx("h1", { className: 'text-primary-color font-medium pb-2 text-center', children: "Chose Payment Gatway" }), _jsx(RadioGroup, { row: true, "aria-labelledby": "demo-row-radio-buttons-group-label", name: "row-radio-buttons-group", className: 'flex justify-between pr-0', onChange: handlePaymentChange, value: paymentGateway, children: paymentGatwayList.map((item) => _jsx(FormControlLabel, { className: `border w-[45%] flex justify-center rounded-md pr-2 ${paymentGateway === item.value ? "border-primary-color" : ""}`, value: item.value, control: _jsx(Radio, {}), label: _jsx("div", { children: _jsx("img", { className: `${item.value == "stripe" ? "w-14" : ""} object-cover`, src: item.image, alt: item.label }) }) })) })] }), _jsxs("section", { className: 'border rounded-md', children: [_jsx(PricingCard, {}), _jsx("div", { className: 'p-5', children: _jsx(Button, { onClick: handleCreateOrder, sx: { py: "11px" }, variant: 'contained', fullWidth: true, children: "Checkout" }) })] })] })] }), _jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsx(Box, { sx: style, children: _jsx(AddressForm, { paymentGateway: paymentGateway, handleClose: handleClose }) }) })] }));
};
export default AddressPage;
