import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import AdminRoutes from '../../../routes/AdminRoutes';
// import DrawerList from './DrawerList'
import Navbar from '../../../admin seller/components/navbar/Navbar';
import AdminDrawerList from '../../components/DrawerList';
import { Alert, Snackbar } from '@mui/material';
import { useAppSelector } from '../../../Redux Toolkit/Store';
const AdminDashboard = () => {
    const { deal, admin } = useAppSelector(store => store);
    const [snackbarOpen, setOpenSnackbar] = useState(false);
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    useEffect(() => {
        if (deal.dealCreated || deal.dealUpdated || deal.error || admin.categoryUpdated) {
            setOpenSnackbar(true);
        }
    }, [deal.dealCreated, deal.dealUpdated, deal.error, admin.categoryUpdated]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "min-h-screen", children: [_jsx(Navbar, { DrawerList: AdminDrawerList }), _jsxs("section", { className: "lg:flex lg:h-[90vh]", children: [_jsx("div", { className: "hidden lg:block h-full", children: _jsx(AdminDrawerList, {}) }), _jsx("div", { className: "p-10 w-full lg:w-[80%]  overflow-y-auto", children: _jsx(AdminRoutes, {}) })] })] }), _jsx(Snackbar, { anchorOrigin: { vertical: "top", horizontal: "right" }, open: snackbarOpen, autoHideDuration: 6000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: deal.error ? "error" : "success", variant: "filled", sx: { width: '100%' }, children: deal.error ? deal.error : deal.dealCreated ? "Deal created successfully" : deal.dealUpdated ? "deal updated successfully" : admin.categoryUpdated ? "Category Updated successfully" : "" }) })] }));
};
export default AdminDashboard;
