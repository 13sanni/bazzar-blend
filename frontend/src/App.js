import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import CustomerRoutes from './routes/CustomerRoutes';
import AdminDashboard from './admin/pages/Dashboard/Dashboard';
import SellerAccountVerification from './seller/pages/SellerAccountVerification';
import SellerAccountVerified from './seller/pages/SellerAccountVerified';
import { useAppDispatch, useAppSelector } from './Redux Toolkit/Store';
import { useEffect } from 'react';
import { fetchSellerProfile } from './Redux Toolkit/Seller/sellerSlice';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import AdminAuth from './admin/pages/Auth/AdminAuth';
import { fetchUserProfile } from './Redux Toolkit/Customer/UserSlice';
import { createHomeCategories } from './Redux Toolkit/Customer/Customer/AsyncThunk';
import { homeCategories } from './data/homeCategories';
function App() {
    const dispatch = useAppDispatch();
    const { auth, sellerAuth, sellers, user } = useAppSelector(store => store);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("jwt")) {
            dispatch(fetchUserProfile({ jwt: localStorage.getItem("jwt") || auth.jwt || "", navigate }));
            dispatch(fetchSellerProfile(localStorage.getItem("jwt") || sellerAuth.jwt));
        }
    }, [auth.jwt, sellerAuth.jwt]);
    useEffect(() => {
        dispatch(createHomeCategories(homeCategories));
        // dispatch(fetchHomePageData())
    }, [dispatch]);
    return (_jsx(ThemeProvider, { theme: customeTheme, children: _jsx("div", { className: 'App', children: _jsxs(Routes, { children: [sellers.profile && _jsx(Route, { path: '/seller/*', element: _jsx(SellerDashboard, {}) }), user.user?.role === "ROLE_ADMIN" && _jsx(Route, { path: '/admin/*', element: _jsx(AdminDashboard, {}) }), _jsx(Route, { path: '/verify-seller/:otp', element: _jsx(SellerAccountVerification, {}) }), _jsx(Route, { path: '/seller-account-verified', element: _jsx(SellerAccountVerified, {}) }), _jsx(Route, { path: '/become-seller', element: _jsx(BecomeSeller, {}) }), _jsx(Route, { path: '/admin-login', element: _jsx(AdminAuth, {}) }), _jsx(Route, { path: '*', element: _jsx(CustomerRoutes, {}) })] }) }) }));
}
export default App;
