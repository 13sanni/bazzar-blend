import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Modal, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UpdateHomeCategoryForm from "./UpdateHomeCategoryForm";
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
function HomeCategoryTable({ categories }) {
    const [selectedCategory, setSelectedCategory] = React.useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = (category) => () => {
        setSelectedCategory(category);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    return (_jsxs(_Fragment, { children: [_jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 700 }, "aria-label": "customized table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { children: "No" }), _jsx(StyledTableCell, { children: "Id" }), _jsx(StyledTableCell, { children: "image" }), _jsx(StyledTableCell, { align: "right", children: "category" }), _jsx(StyledTableCell, { align: "right", children: "Name" })] }) }), _jsx(TableBody, { children: categories?.map((category, index) => (_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: index + 1 }), _jsx(StyledTableCell, { component: "th", scope: "row", children: category._id }), _jsx(StyledTableCell, { component: "th", scope: "row", children: _jsx("img", { className: "w-20 rounded-md", src: category.image, alt: "" }) }), _jsx(StyledTableCell, { align: "right", component: "th", scope: "row", children: category.categoryId }), _jsx(StyledTableCell, { align: "right", children: _jsx(IconButton, { onClick: handleOpen(category), children: _jsx(EditIcon, { className: "text-orange-400 cursor-pointer" }) }) })] }, category._id))) })] }) }), _jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsx(Box, { sx: style, children: _jsx(UpdateHomeCategoryForm, { category: selectedCategory, handleClose: handleClose }) }) })] }));
}
export default HomeCategoryTable;
