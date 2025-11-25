import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import {} from "../../../types/orderTypes";
import { fetchPayoutsBySeller } from "../../../Redux Toolkit/Seller/payoutSlice";
const PayoutsTable = () => {
    const { sellerOrder } = useAppSelector((store) => store);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(fetchPayoutsBySeller(localStorage.getItem("jwt") || ""));
    }, [dispatch]);
    return (_jsx("div", { children: _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Date" }), _jsx(TableCell, { children: "Amount" }), _jsx(TableCell, { align: "right", children: "Status" })] }) }), _jsx(TableBody, { children: sellerOrder.orders.map((item) => (_jsxs(TableRow, { children: [_jsx(TableCell, { align: "left", children: item._id }), _jsx(TableCell, { component: "th", scope: "row", children: _jsx("div", { className: "flex gap-1 flex-wrap", children: item.orderItems.map((orderItem) => (_jsxs("div", { className: "flex gap-5", children: [_jsx("img", { className: "w-20 rounded-md", src: orderItem.product.images[0], alt: "" }), _jsxs("div", { className: "flex flex-col justify-between py-2", children: [_jsxs("h1", { children: ["Title: ", orderItem.product.title] }), _jsxs("h1", { children: ["Price: Rs.", orderItem.product.sellingPrice] }), _jsxs("h1", { children: ["Color: ", orderItem.product.color] }), _jsxs("h1", { children: ["Size: ", orderItem.size] })] })] }, orderItem._id))) }) })] }, item._id))) })] }) }) }));
};
export default PayoutsTable;
