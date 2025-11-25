import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import OrderItemCard from './OrderItemCard';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchUserOrderHistory } from '../../../Redux Toolkit/Customer/OrderSlice';
const Order = () => {
    const dispatch = useAppDispatch();
    const { auth, orders } = useAppSelector(store => store);
    useEffect(() => {
        dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""));
    }, [auth.jwt]);
    return (_jsxs("div", { className: 'text-sm min-h-screen', children: [_jsxs("div", { className: 'pb-5', children: [_jsx("h1", { className: 'font-semibold', children: "All orders" }), _jsx("p", { children: "from anytime" })] }), _jsx("div", { className: 'space-y-2', children: orders?.orders?.map((order) => order?.orderItems.map((item) => _jsx(OrderItemCard, { item: item, order: order }, item._id))) })] }));
};
export default Order;
