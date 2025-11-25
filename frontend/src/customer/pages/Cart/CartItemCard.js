import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Divider, IconButton } from '@mui/material';
import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../../Redux Toolkit/Store';
import { deleteCartItem, updateCartItem } from '../../../Redux Toolkit/Customer/CartSlice';
const CartItemCard = ({ item }) => {
    const dispatch = useAppDispatch();
    const handleUpdateQuantity = (value) => {
        dispatch(updateCartItem({ jwt: localStorage.getItem("jwt"),
            cartItemId: item._id, cartItem: { quantity: item.quantity + value } }));
    };
    const handleRemoveCartItem = () => {
        dispatch(deleteCartItem({
            jwt: localStorage.getItem("jwt") || "",
            cartItemId: item._id
        }));
    };
    return (_jsxs("div", { className: ' border rounded-md relative', children: [_jsxs("div", { className: 'p-5 flex gap-3', children: [_jsx("div", { children: _jsx("img", { className: 'w-[90px] rounded-md', src: item.product.images[0], 
                            // src="https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-product-catalog/default/dw422bdf2e/images/Taneira/Catalog/BFW22CW0042_1.jpg?sw=1000&sh=1500"
                            alt: "" }) }), _jsxs("div", { className: 'space-y-2', children: [_jsx("h1", { className: 'font-semibold text-lg', children: item.product?.seller?.businessDetails?.businessName }), _jsx("p", { className: 'text-gray-600 font-medium text-sm', children: "Turquoise Blue Stonework Satin Designer Saree" }), _jsxs("p", { className: 'text-gray-400 text-xs', children: [_jsx("strong", { children: "Sold by:" }), " Natural Lifestyle Products Private Limited"] }), _jsxs("p", { className: 'text-xs', children: [_jsx("strong", { children: "7 days replacement" }), " available"] }), _jsxs("p", { className: 'text-sm text-gray-500', children: [_jsx("strong", { children: "quantity : " }), " ", item.quantity] })] })] }), _jsx(Divider, {}), _jsxs("div", { className: 'px-5 py-2 flex justify-between items-center', children: [_jsxs("div", { className: ' flex items-center gap-2  w-[140px] justify-between', children: [_jsx(Button, { size: 'small', disabled: item.quantity == 1, onClick: () => handleUpdateQuantity(-1), children: _jsx(RemoveIcon, {}) }), _jsx("span", { className: 'px-3  font-semibold', children: item.quantity }), _jsx(Button, { size: 'small', onClick: () => handleUpdateQuantity(1), children: _jsx(AddIcon, {}) })] }), _jsx("div", { children: _jsxs("p", { className: 'text-gray-700 font-medium', children: ["\u20B9", item.sellingPrice] }) })] }), _jsx("div", { className: 'absolute top-1 right-1', children: _jsx(IconButton, { onClick: handleRemoveCartItem, color: 'primary', children: _jsx(CloseIcon, {}) }) })] }));
};
export default CartItemCard;
