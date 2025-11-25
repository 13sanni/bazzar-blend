import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, styled } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchSellerProducts, updateProduct, deleteProduct } from '../../../Redux Toolkit/Seller/sellerProductSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import AddProductForm from './AddProductForm';
import {} from '../../../types/productTypes';
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
export default function ProductTable() {
    const { sellerProduct } = useAppSelector(store => store);
    const dispatch = useAppDispatch();
    const [editDialogOpen, setEditDialogOpen] = React.useState(false);
    const [editProduct, setEditProduct] = React.useState(null);
    React.useEffect(() => {
        dispatch(fetchSellerProducts(localStorage.getItem("jwt")));
    }, []);
    const handleEditClick = (product) => {
        setEditProduct(product);
        setEditDialogOpen(true);
    };
    const handleEditDialogClose = () => {
        setEditDialogOpen(false);
        setEditProduct(null);
    };
    const handleEditSubmit = (values) => {
        if (editProduct && editProduct._id) {
            dispatch(updateProduct({ productId: editProduct._id, product: values }));
            setEditDialogOpen(false);
            setEditProduct(null);
        }
    };
    const handleDeleteClick = (productId) => {
        if (typeof productId === 'string') {
            const numId = Number(productId);
            if (!isNaN(numId)) {
                dispatch(deleteProduct(numId));
            }
        }
        else {
            dispatch(deleteProduct(productId));
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: 'pb-5 font-bold text-xl', children: "Products" }), _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { children: "Images" }), _jsx(StyledTableCell, { align: "right", children: "Title" }), _jsx(StyledTableCell, { align: "right", children: "MRP" }), _jsx(StyledTableCell, { align: "right", children: "Selling Price" }), _jsx(StyledTableCell, { align: "right", children: "Color" }), _jsx(StyledTableCell, { align: "right", children: "Update Stock" }), _jsx(StyledTableCell, { align: "right", children: "Update" }), _jsx(StyledTableCell, { align: "right", children: "Delete" })] }) }), _jsx(TableBody, { children: sellerProduct.products.map((item) => (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: _jsx("div", { className: 'flex gap-1 flex-wrap', children: item.images.map((image) => _jsx("img", { className: 'w-20 rounded-md', src: image, alt: "" })) }) }), _jsx(StyledTableCell, { align: "right", children: item.title }), _jsxs(StyledTableCell, { align: "right", children: [" \u20B9", item.mrpPrice, ".0"] }), _jsxs(StyledTableCell, { align: "right", children: [" \u20B9", item.sellingPrice, ".0"] }), _jsx(StyledTableCell, { align: "right", children: item.color }), _jsxs(StyledTableCell, { align: "right", children: [" ", _jsx(Button, { size: 'small', children: "in_stock" })] }), _jsx(StyledTableCell, { align: "right", children: _jsx(IconButton, { color: 'primary', className: 'bg-primary-color', onClick: () => handleEditClick(item), children: _jsx(EditIcon, {}) }) }), _jsx(StyledTableCell, { align: "right", children: _jsx(IconButton, { color: 'error', onClick: () => item._id && handleDeleteClick(item._id), children: _jsx(DeleteIcon, {}) }) })] }, item._id))) })] }) }), _jsx(Dialog, { open: editDialogOpen, onClose: handleEditDialogClose, maxWidth: "md", fullWidth: true, children: editProduct && (_jsx(AddProductForm, { initialValues: { ...editProduct, images: editProduct.images || [] }, mode: "edit", onSubmit: handleEditSubmit, onClose: handleEditDialogClose })) })] }));
}
