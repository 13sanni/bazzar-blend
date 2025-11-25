import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { teal } from "@mui/material/colors";
import { useAppDispatch } from "../../../Redux Toolkit/Store";
import CloseIcon from "@mui/icons-material/Close";
import { addProductToWishlist } from "../../../Redux Toolkit/Customer/WishlistSlice";
import { Button } from "@mui/material";
const WishlistProductCard = ({ item }) => {
    const dispatch = useAppDispatch();
    const handleIconClick = () => {
        if (item._id)
            dispatch(addProductToWishlist({ productId: item._id }));
    };
    return (_jsxs("div", { className: "w-60 relative ", children: [_jsx("div", { className: "w-full", children: _jsx("img", { className: " object-top w-full", src: item.images[0], alt: `product-${item.title}` }) }), _jsxs("div", { className: "pt-3 space-y-1  rounded-md ", children: [_jsx("div", { className: " space-y ", children: _jsx("p", { className: "", children: item.title }) }), _jsxs("div", { className: " flex items-center gap-3 ", children: [_jsxs("span", { className: "font-semibold text-gray-800", children: [" ", "\u20B9", item.sellingPrice] }), _jsxs("span", { className: "text thin-line-through text-gray-400 ", children: ["\u20B9", item.mrpPrice] }), _jsxs("span", { className: "text-[#00927c] font-semibold", children: [item.discountPercent, "% off"] })] })] }), _jsx("div", { className: "absolute top-1 right-1", children: _jsx(Button, { onClick: handleIconClick, children: _jsx(CloseIcon, { className: "cursor-pointer bg-white rounded-full p-1", sx: { color: teal[500], fontSize: "2rem" } }) }) })] }));
};
export default WishlistProductCard;
