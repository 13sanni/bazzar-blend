import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, IconButton } from "@mui/material";
import { Rating, Box, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { deleteReview } from "../../../Redux Toolkit/Customer/ReviewSlice";
const ProductReviewCard = ({ item }) => {
    const { user } = useAppSelector(store => store.user);
    const dispatch = useAppDispatch();
    const handleDeleteReview = () => {
        dispatch(deleteReview({ reviewId: item._id, jwt: localStorage.getItem("jwt") || "" }));
    };
    return (_jsxs("div", { className: "flex justify-between", children: [_jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { size: 3, children: _jsx(Box, { children: _jsx(Avatar, { className: "text-white", sx: { width: 56, height: 56, bgcolor: "#9155FD" }, alt: item.user?.fullName, src: "", children: item?.user && item.user?.fullName[0]?.toUpperCase() }) }) }), _jsx(Grid, { size: 9, children: _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "", children: [_jsx("p", { className: "font-semibold text-lg", children: item.user?.fullName }), _jsx("p", { className: "opacity-70", children: item.createdAt })] }), _jsx("div", { children: _jsx(Rating, { readOnly: true, value: item.rating, name: "half-rating", defaultValue: 2.5, precision: 0.5 }) }), _jsx("p", { children: item.reviewText }), _jsx("div", { children: item.productImages.map((image) => _jsx("img", { className: "w-24 h-24 object-cover", src: image, alt: "" }, image)) })] }) })] }), item.user?._id === user?._id && _jsx("div", { className: "", children: _jsx(IconButton, { onClick: handleDeleteReview, children: _jsx(DeleteIcon, { sx: { color: red[700] } }) }) })] }));
};
export default ProductReviewCard;
