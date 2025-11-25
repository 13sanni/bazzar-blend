import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import HomePage from '../seller/pages/SellerDashboard/HomePage';
import Products from '../seller/pages/Products/Products';
import ProductForm from '../seller/pages/Products/AddProductForm';
import Orders from '../seller/pages/Orders/Orders';
import Profile from '../seller/pages/Account/Profile';
import Payment from '../seller/pages/Payment/Payment';
import TransactionTable from '../seller/pages/Payment/TransactionTable';
const SellerRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/products', element: _jsx(Products, {}) }), _jsx(Route, { path: '/add-product', element: _jsx(ProductForm, {}) }), _jsx(Route, { path: '/orders', element: _jsx(Orders, {}) }), _jsx(Route, { path: '/account', element: _jsx(Profile, {}) }), _jsx(Route, { path: '/payment', element: _jsx(Payment, {}) }), _jsx(Route, { path: '/transaction', element: _jsx(TransactionTable, {}) })] }));
};
export default SellerRoutes;
