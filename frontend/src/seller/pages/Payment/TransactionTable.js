import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchTransactionsBySeller } from '../../../Redux Toolkit/Seller/transactionSlice';
import {} from '../../../types/Transaction';
import { redableDateTime } from '../../../util/redableDateTime';
export default function TransactionTable() {
    const { transaction } = useAppSelector(store => store);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(fetchTransactionsBySeller(localStorage.getItem("jwt") || ""));
    }, [dispatch]);
    return (_jsx(_Fragment, { children: _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Date" }), _jsx(TableCell, { children: "Customer Details" }), _jsx(TableCell, { children: "Order" }), _jsx(TableCell, { align: "right", children: "Amount" })] }) }), _jsx(TableBody, { children: transaction.transactions.map((item) => (_jsxs(TableRow, { children: [_jsx(TableCell, { align: "left", children: _jsxs("div", { className: 'space-y-1', children: [_jsx("h1", { className: 'font-medium', children: redableDateTime(item.date).split("at")[0] }), _jsx("h1", { className: 'text-xs text-gray-600 font-semibold', children: redableDateTime(item.date).split("at")[1] })] }) }), _jsx(TableCell, { component: "th", scope: "row", children: _jsxs("div", { className: 'space-y-2', children: [_jsx("h1", { children: item.customer.fullName }), _jsx("h1", { className: 'font-semibold', children: item.customer.email }), _jsx("h1", { className: 'font-bold text-gray-600', children: item.customer.mobile })] }) }), _jsxs(TableCell, { children: ["Order Id : ", _jsxs("strong", { children: [" ", item.order._id, " "] })] }), _jsxs(TableCell, { align: "right", children: ["\u20B9", item.order.totalSellingPrice] })] }, item._id))) })] }) }) }));
}
