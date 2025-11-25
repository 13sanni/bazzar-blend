import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import CouponTable from './CouponTable';
import { useAppDispatch } from '../../../Redux Toolkit/Store';
import { fetchAllCoupons } from '../../../Redux Toolkit/Admin/AdminCouponSlice';
const Coupon = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAllCoupons(localStorage.getItem("jwt") || ""));
    }, []);
    return (_jsx("div", { children: _jsx(CouponTable, {}) }));
};
export default Coupon;
