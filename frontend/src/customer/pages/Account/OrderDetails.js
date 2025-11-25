import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Divider } from '@mui/material';
import { useEffect } from 'react';
import PaymentsIcon from '@mui/icons-material/Payments';
import OrderStepper from './OrderStepper';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { cancelOrder, fetchOrderById, fetchOrderItemById } from '../../../Redux Toolkit/Customer/OrderSlice';
import { useNavigate, useParams } from 'react-router-dom';
const OrderDetails = () => {
    const dispatch = useAppDispatch();
    const { auth, orders } = useAppSelector(store => store);
    const { orderItemId, orderId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchOrderItemById({
            orderItemId: orderItemId || "",
            jwt: localStorage.getItem("jwt") || ""
        }));
        dispatch(fetchOrderById({
            orderId: orderId || "",
            jwt: localStorage.getItem("jwt") || ""
        }));
    }, [auth.jwt]);
    console.log("-------", orderId, "order ----- ", orders.currentOrder);
    if (!orders.orders || !orders.orderItem) {
        return _jsx("div", { className: 'h-[80vh] flex justify-center items-center', children: "No order found" });
    }
    const handleCancelOrder = () => {
        dispatch(cancelOrder(orderId));
    };
    return (_jsxs(Box, { className: 'space-y-5 ', children: [_jsxs("section", { className: 'flex flex-col gap-5 justify-center items-center', children: [_jsx("img", { className: 'w-[100px]', src: orders.orderItem?.product.images[0], alt: "" }), _jsxs("div", { className: 'text-sm space-y-1 text-center', children: [_jsx("h1", { className: 'font-bold', children: orders.orderItem?.product.seller?.businessDetails.businessName }), _jsx("p", { children: orders.orderItem?.product.title }), _jsxs("p", { children: [_jsx("strong", { children: "Size:" }), "M"] })] }), _jsx("div", { children: _jsx(Button, { onClick: () => navigate(`/reviews/${orders.orderItem?.product._id}/create`), children: "Write Review" }) })] }), _jsx("section", { className: 'border p-5', children: _jsx(OrderStepper, { orderStatus: orders.currentOrder?.orderStatus }) }), _jsxs("div", { className: 'border p-5', children: [_jsx("h1", { className: 'font-bold pb-3', children: "Delivery Address" }), _jsxs("div", { className: 'text-sm space-y-2', children: [_jsxs("div", { className: 'flex gap-5 font-medium', children: [_jsxs("p", { children: [" ", orders.currentOrder?.shippingAddress.name] }), _jsx(Divider, { flexItem: true, orientation: 'vertical' }), _jsx("p", { children: orders.currentOrder?.shippingAddress.mobile })] }), _jsxs("p", { children: [orders.currentOrder?.shippingAddress.address, ", ", orders.currentOrder?.shippingAddress.city, ", ", orders.currentOrder?.shippingAddress.state, " - ", orders.currentOrder?.shippingAddress.pinCode] })] })] }), _jsxs("div", { className: 'border  space-y-4', children: [_jsxs("div", { className: 'flex justify-between text-sm pt-5 px-5', children: [_jsxs("div", { className: 'space-y-1', children: [_jsx("p", { className: 'font-bold', children: "Total Item Price" }), _jsxs("p", { children: ["You saved ", _jsxs("span", { className: 'text-green-500 font-medium text-xs', children: ["\u20B9", orders.orderItem?.mrpPrice - orders.orderItem?.sellingPrice, ".00"] }), " on this item"] })] }), _jsxs("p", { className: 'font-medium', children: ["\u20B9 ", orders.orderItem?.sellingPrice, ".00"] })] }), _jsx("div", { className: 'px-5 ', children: _jsxs("div", { className: 'bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3 ', children: [_jsx(PaymentsIcon, {}), _jsx("p", { children: "Pay On Delivery" })] }) }), _jsx(Divider, {}), _jsx("div", { className: 'px-5 pb-5', children: _jsxs("p", { className: 'text-xs', children: [_jsx("strong", { children: "Sold by : " }), orders.orderItem.product.seller?.businessDetails.businessName] }) }), _jsx("div", { className: 'p-10', children: _jsx(Button, { disabled: orders.currentOrder?.orderStatus === "CANCELLED", onClick: handleCancelOrder, color: 'error', sx: { py: "0.7rem" }, className: '', variant: 'outlined', fullWidth: true, children: orders.currentOrder?.orderStatus === "CANCELLED" ? "order canceled" : "Cancel Order" }) })] })] }));
};
export default OrderDetails;
