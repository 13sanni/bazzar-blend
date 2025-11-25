import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Menu, MenuItem, styled } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchSellerOrders, updateOrderStatus } from '../../../Redux Toolkit/Seller/sellerOrderSlice';
import {} from '../../../types/orderTypes';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const orderStatus = [
    { color: '#FFA500', label: 'PENDING' },
    { color: '#F5BCBA', label: 'PLACED' },
    { color: '#F5BCBA', label: 'CONFIRMED' },
    { color: '#1E90FF', label: 'SHIPPED' },
    { color: '#32CD32', label: 'DELIVERED' },
    { color: '#FF0000', label: 'CANCELLED' },
];
const orderStatusColor = {
    PENDING: { color: '#FFA500', label: 'PENDING' }, // Orange
    CONFIRMED: { color: '#F5BCBA', label: 'CONFIRMED' },
    PLACED: { color: '#F5BCBA', label: 'PLACED' },
    SHIPPED: { color: '#1E90FF', label: 'SHIPPED' }, // DodgerBlue
    DELIVERED: { color: '#32CD32', label: 'DELIVERED' }, // LimeGreen
    CANCELLED: { color: '#FF0000', label: 'CANCELLED' } // Red
};
export default function OrderTable() {
    const { sellerOrder } = useAppSelector(store => store);
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = React.useState({});
    const handleClick = (event, orderId) => {
        setAnchorEl((prev) => ({ ...prev, [orderId]: event.currentTarget }));
    };
    const handleClose = (orderId) => {
        setAnchorEl((prev) => ({ ...prev, [orderId]: null }));
    };
    React.useEffect(() => {
        dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""));
    }, [dispatch]);
    const handleUpdateOrder = (orderId, orderStatus) => {
        dispatch(updateOrderStatus({
            jwt: localStorage.getItem("jwt") || "",
            orderId,
            orderStatus,
        }));
        handleClose(orderId);
    };
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: 'pb-5 font-bold text-xl', children: "All Orders" }), _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { children: "Order Id" }), _jsx(StyledTableCell, { children: "Products" }), _jsx(StyledTableCell, { children: "Shipping Address" }), _jsx(StyledTableCell, { align: "right", children: "Order Status" }), _jsx(StyledTableCell, { align: "right", children: "Update" })] }) }), _jsx(TableBody, { children: sellerOrder.orders.map((item) => (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { align: "left", children: item._id }), _jsx(StyledTableCell, { component: "th", scope: "row", children: _jsx("div", { className: 'flex gap-1 flex-wrap', children: item.orderItems.map((orderItem) => _jsxs("div", { className: 'flex gap-5', children: [_jsx("img", { className: 'w-20 rounded-md', src: orderItem.product.images[0], alt: "" }), _jsxs("div", { className: 'flex flex-col justify-between py-2', children: [_jsxs("h1", { children: ["Title: ", orderItem.product.title] }), _jsxs("h1", { children: ["Price: Rs.", orderItem.product.sellingPrice] }), _jsxs("h1", { children: ["Color: ", orderItem.product.color] }), _jsxs("h1", { children: ["Size: ", orderItem.size] })] })] }, orderItem._id)) }) }), _jsx(StyledTableCell, { children: _jsxs("div", { className: 'flex flex-col gap-y-2', children: [_jsx("h1", { children: item.shippingAddress.name }), _jsxs("h1", { children: [item.shippingAddress.address, ", ", item.shippingAddress.city] }), _jsxs("h1", { children: [item.shippingAddress.state, " - ", item.shippingAddress.pinCode] }), _jsxs("h1", { children: [_jsx("strong", { children: "Mobile:" }), " ", item.shippingAddress.mobile] })] }) }), _jsxs(StyledTableCell, { sx: { color: orderStatusColor[item.orderStatus].color }, align: "center", children: [" ", _jsx(Box, { sx: { borderColor: orderStatusColor[item.orderStatus].color }, className: `border px-2 py-1 rounded-full text-xs`, children: item.orderStatus })] }), _jsxs(StyledTableCell, { align: "right", children: [_jsx(Button, { size: 'small', onClick: (e) => handleClick(e, item._id), color: 'primary', className: 'bg-primary-color', children: "Status" }), _jsx(Menu, { id: `status-menu ${item._id}`, anchorEl: anchorEl[item._id], open: Boolean(anchorEl[item._id]), onClose: () => handleClose(item._id), MenuListProps: {
                                                    'aria-labelledby': `status-menu ${item._id}`,
                                                }, children: orderStatus.map((status) => _jsx(MenuItem, { onClick: () => handleUpdateOrder(item._id, status.label), children: status.label }, status.label)) })] })] }, item._id))) })] }) })] }));
}
