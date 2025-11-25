import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import AdminLoginForm from './AdminLogin';
const AdminAuth = () => {
    return (_jsx("div", { className: 'flex justify-center items-center h-screen', children: _jsx("div", { className: 'max-w-4xl border rounded-md px-5 py-20', children: _jsx(AdminLoginForm, {}) }) }));
};
export default AdminAuth;
