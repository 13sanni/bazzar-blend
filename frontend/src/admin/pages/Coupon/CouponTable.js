import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, styled } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteCoupon } from '../../../Redux Toolkit/Admin/AdminCouponSlice';
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
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default function CouponTable() {
    const { adminCoupon } = useAppSelector(store => store);
    const dispatch = useAppDispatch();
    const handleDeleteCoupon = (id) => () => {
        dispatch(deleteCoupon({ id, jwt: localStorage.getItem("jwt") || "" }));
    };
    return (_jsx(_Fragment, { children: _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { children: "Coupon Code" }), _jsx(StyledTableCell, { children: "Start Date" }), _jsx(StyledTableCell, { children: "End Date" }), _jsx(StyledTableCell, { children: "Min Order Value" }), _jsx(StyledTableCell, { children: "Discount %" }), _jsx(StyledTableCell, { align: "right", children: "Status" }), _jsx(StyledTableCell, { align: "right", children: "Delete" })] }) }), _jsx(TableBody, { children: adminCoupon.coupons?.map((coupon) => (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: coupon.code }), _jsx(StyledTableCell, { children: coupon.validityStartDate }), _jsx(StyledTableCell, { children: coupon.validityEndDate }), _jsx(StyledTableCell, { children: coupon.minimumOrderValue }), _jsx(StyledTableCell, { children: coupon.discountPercentage }), _jsx(StyledTableCell, { align: "right", children: coupon.active ? "Active" : "Deactive" }), _jsx(StyledTableCell, { align: "right", children: _jsx(IconButton, { onClick: handleDeleteCoupon(coupon._id), children: _jsx(DeleteOutlineIcon, { className: 'text-red-700 cursor-pointer' }) }) })] }, coupon._id))) })] }) }) }));
}
