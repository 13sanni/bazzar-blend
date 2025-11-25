import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, Menu, MenuItem, Select, styled, TableFooter, TablePagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchSellers, selectSellers, updateSellerAccountStatus } from '../../../Redux Toolkit/Seller/sellerSlice';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
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
const accountStatuses = [
    { status: 'PENDING_VERIFICATION', title: 'Pending Verification', description: 'Account is created but not yet verified' },
    { status: 'ACTIVE', title: 'Active', description: 'Account is active and in good standing' },
    { status: 'SUSPENDED', title: 'Suspended', description: 'Account is temporarily suspended, possibly due to violations' },
    { status: 'DEACTIVATED', title: 'Deactivated', description: 'Account is deactivated, user may have chosen to deactivate it' },
    { status: 'BANNED', title: 'Banned', description: 'Account is permanently banned due to severe violations' },
    { status: 'CLOSED', title: 'Closed', description: 'Account is permanently closed, possibly at user request' }
];
export default function SellersTable() {
    const [page, setPage] = React.useState(0);
    const [accountStatus, setAccountStatus] = React.useState("ACTIVE");
    const { sellers } = useAppSelector(store => store);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(fetchSellers(accountStatus));
    }, [accountStatus]);
    const handleAccountStatusChange = (event) => {
        setAccountStatus(event.target.value);
    };
    const handleUpdateSellerAccountStatus = (id, status) => {
        dispatch(updateSellerAccountStatus({ id, status }));
    };
    const [anchorEl, setAnchorEl] = React.useState({});
    const handleClick = (event, sellerId) => {
        setAnchorEl((prev) => ({ ...prev, [sellerId]: event.currentTarget }));
    };
    const handleClose = (sellerId) => {
        setAnchorEl((prev) => ({ ...prev, [sellerId]: null }));
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'pb-5 w-60', children: _jsx(FormControl, { color: 'primary', fullWidth: true, children: _jsx(Select
                    //   labelId="demo-simple-select-label"
                    , { 
                        //   labelId="demo-simple-select-label"
                        id: "demo-simple-select", value: accountStatus, onChange: handleAccountStatusChange, color: 'primary', className: 'text-primary-color', children: accountStatuses.map((status) => _jsx(MenuItem, { value: status.status, children: status.title })) }) }) }), _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { children: "Seller Name" }), _jsx(StyledTableCell, { children: "Email" }), _jsx(StyledTableCell, { children: "Mobile" }), _jsx(StyledTableCell, { children: "GSTIN" }), _jsx(StyledTableCell, { children: "Bussiness Name" }), _jsx(StyledTableCell, { align: "right", children: "Account Status" }), _jsx(StyledTableCell, { align: "right", children: "Change Status" })] }) }), _jsx(TableBody, { children: sellers.sellers?.map((seller) => (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: seller.sellerName }), _jsx(StyledTableCell, { children: seller.email }), _jsx(StyledTableCell, { children: seller.mobile }), _jsx(StyledTableCell, { children: seller.GSTIN }), _jsx(StyledTableCell, { children: seller.businessDetails?.businessName }), _jsx(StyledTableCell, { align: "right", children: seller.accountStatus }), _jsxs(StyledTableCell, { align: "right", children: [_jsx(Button, { id: "basic-button" + seller._id, onClick: (e) => handleClick(e, seller._id), children: "Change Status" }), _jsx(Menu, { id: "basic-menus" + seller._id, anchorEl: anchorEl[seller._id || 1], open: Boolean(anchorEl[seller._id || 1]), onClose: () => handleClose(seller._id || 1), children: accountStatuses.map((status) => _jsx(MenuItem, { onClick: () => handleUpdateSellerAccountStatus(seller._id || 1, status.status), value: status.status, children: status.title })) })] })] }, seller.sellerName))) })] }) })] }));
}
