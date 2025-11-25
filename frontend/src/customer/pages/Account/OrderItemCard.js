import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Avatar } from '@mui/material';
import { teal } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../util/fomateDate';
const OrderItemCard = ({ item, order }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { onClick: () => navigate(`/account/orders/${order._id}/item/${item._id}`), className: 'text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer', children: [_jsxs("div", { className: 'flex items-center gap-3', children: [_jsx("div", { children: _jsx(Avatar, { sizes: 'small', sx: { bgcolor: teal[500] }, children: _jsx(ElectricBoltIcon, {}) }) }), _jsxs("div", { children: [_jsx("h1", { className: 'font-bold text-teal-600', children: order.orderStatus }), _jsxs("p", { children: ["Arriving by ", formatDate(order.deliverDate)] })] })] }), _jsxs("div", { className: 'p-5 bg-teal-50 flex gap-3 ', children: [_jsx("div", { className: '', children: _jsx("img", { className: 'w-[70px]', src: item.product?.images[0], alt: "" }) }), _jsxs("div", { className: 'w-full space-y-2', children: [_jsx("h1", { className: 'font-bold', children: item.product?.seller?.businessDetails?.businessName }), _jsx("p", { children: item.product.title }), _jsxs("p", { children: [_jsx("strong", { children: "size : " }), "FREE"] })] })] })] }));
};
export default OrderItemCard;
