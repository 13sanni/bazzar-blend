import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import SellersTable from '../admin/pages/sellers/SellersTable';
import Coupon from '../admin/pages/Coupon/Coupon';
import CouponForm from '../admin/pages/Coupon/CreateCouponForm';
import GridTable from '../admin/pages/Home Page/GridTable';
import ElectronicsTable from '../admin/pages/Home Page/ElectronicsTable';
import ShopByCategoryTable from '../admin/pages/Home Page/ShopByCategoryTable';
import Deal from '../admin/pages/Home Page/Deal';
const AdminRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(SellersTable, {}) }), _jsx(Route, { path: '/coupon', element: _jsx(Coupon, {}) }), _jsx(Route, { path: '/add-coupon', element: _jsx(CouponForm, {}) }), _jsx(Route, { path: '/home-grid', element: _jsx(GridTable, {}) }), _jsx(Route, { path: '/electronics-category', element: _jsx(ElectronicsTable, {}) }), _jsx(Route, { path: '/shop-by-category', element: _jsx(ShopByCategoryTable, {}) }), _jsx(Route, { path: '/deals', element: _jsx(Deal, {}) })] }));
};
export default AdminRoutes;
