import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, IconButton, Modal, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import {Deal} from '../../../types/dealTypes';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import EditIcon from '@mui/icons-material/Edit';
import { deleteDeal, getAllDeals } from '../../../Redux Toolkit/Admin/DealSlice';
import UpdateDealForm from './UpdateDealForm';
import CreateDealForm from './CreateDealForm';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '@mui/icons-material';
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
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};
const DealsTable = () => {
    const { homePage, deal } = useAppSelector(store => store);
    const [selectedDealId, setSelectedDealId] = useState();
    const [open, setOpen] = React.useState(false);
    // const [openCreateDealForm, setOpenCreateDealForm] = React.useState(false);
    const dispatch = useAppDispatch();
    const handleOpen = (id) => () => {
        setSelectedDealId(id);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const handleDelete = (id) => () => {
        dispatch(deleteDeal(id));
    };
    useEffect(() => {
        dispatch(getAllDeals());
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { children: "No" }), _jsx(StyledTableCell, { children: "image" }), _jsx(StyledTableCell, { children: "category" }), _jsx(StyledTableCell, { children: "Discount" }), _jsx(StyledTableCell, { align: "right", children: "Edit" }), _jsx(StyledTableCell, { align: "right", children: "Delete" })] }) }), _jsx(TableBody, { children: deal.deals.map((deal, index) => (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: index + 1 }), _jsx(StyledTableCell, { component: "th", scope: "row", children: _jsx("img", { className: "w-20 rounded-md", src: deal.category.image, alt: "" }) }), _jsx(StyledTableCell, { component: "th", scope: "row", children: deal.category.categoryId }), _jsxs(StyledTableCell, { component: "th", scope: "row", children: [deal.discount, "%"] }), _jsx(StyledTableCell, { align: "right", children: _jsx(IconButton, { onClick: handleOpen(deal._id), children: _jsx(EditIcon, { className: "text-orange-400 cursor-pointer" }) }) }), _jsx(StyledTableCell, { align: "right", children: _jsx(IconButton, { onClick: handleDelete(deal._id), children: _jsx(Delete, { className: "text-red-600 cursor-pointer" }) }) })] }, deal._id))) })] }) }), selectedDealId && _jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsx(Box, { sx: style, children: _jsx(UpdateDealForm, { id: selectedDealId }) }) })] }));
};
export default DealsTable;
