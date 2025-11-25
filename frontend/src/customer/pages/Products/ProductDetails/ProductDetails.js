import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StarIcon from '@mui/icons-material/Star';
import { teal } from '@mui/material/colors';
import { Box, Button, Divider, Modal } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Wallet } from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmilarProduct from '../SimilarProduct/SmilarProduct';
import ZoomableImage from './ZoomableImage';
import { useAppDispatch, useAppSelector } from '../../../../Redux Toolkit/Store';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductById, getAllProducts } from '../../../../Redux Toolkit/Customer/ProductSlice';
import { addItemToCart } from '../../../../Redux Toolkit/Customer/CartSlice';
import ProductReviewCard from '../../Review/ProductReviewCard';
import RatingCard from '../../Review/RatingCard';
import { fetchReviewsByProductId } from '../../../../Redux Toolkit/Customer/ReviewSlice';
import { useState, useEffect } from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    height: "100%",
    // bgcolor: 'background.paper',
    boxShadow: 24,
    outline: "none",
};
const ProductDetails = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useAppDispatch();
    const { products, review } = useAppSelector(store => store);
    const navigate = useNavigate();
    const { productId, categoryId } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if (productId) {
            dispatch(fetchProductById(productId));
            dispatch(fetchReviewsByProductId({ productId }));
        }
        dispatch(getAllProducts({ category: categoryId }));
    }, [productId]);
    const handleAddCart = () => {
        dispatch(addItemToCart({
            jwt: localStorage.getItem('jwt'),
            request: { productId, size: "FREE", quantity }
        }));
    };
    return (_jsxs("div", { className: 'px-5 lg:px-20 pt-10 ', children: [_jsxs("div", { className: 'grid grid-cols-1 lg:grid-cols-2 gap-10', children: [_jsxs("section", { className: 'flex flex-col lg:flex-row gap-5', children: [_jsx("div", { className: 'w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3', children: products.product?.images.map((item, index) => _jsx("img", { onClick: () => setSelectedImage(index), className: 'lg:w-full w-[50px] cursor-pointer rounded-md', src: item, alt: "" }, index)) }), _jsx("div", { className: 'w-full lg:w-[85%]', children: _jsx("img", { onClick: handleOpen, className: 'w-full rounded-md cursor-zoom-out', src: products.product?.images[selectedImage], alt: "" }) }), _jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsx(Box, { sx: style, children: _jsx(ZoomableImage, { src: products.product?.images[selectedImage], alt: "" }) }) })] }), _jsxs("section", { children: [_jsx("h1", { className: 'font-bold text-lg text-teal-950', children: products.product?.seller?.businessDetails?.businessName }), _jsx("p", { className: 'text-gray-500 font-semibold', children: products.product?.title }), _jsxs("div", { className: 'flex justify-between items-center py-2 border w-[180px] px-3 mt-5', children: [_jsxs("div", { className: 'flex gap-1 items-center', children: [_jsx("span", { children: "4" }), _jsx(StarIcon, { sx: { color: teal[600], fontSize: "17px" } })] }), _jsx(Divider, { orientation: "vertical", flexItem: true }), _jsx("span", { children: "358 Ratings" })] }), _jsxs("div", { className: 'space-y-2', children: [_jsxs("div", { className: 'price flex items-center gap-3 mt-5 text-lg', children: [_jsxs("span", { className: 'font-semibold text-gray-800', children: [" \u20B9", products.product?.sellingPrice] }), _jsxs("span", { className: 'text thin-line-through text-gray-400 ', children: ["\u20B9", products.product?.mrpPrice] }), _jsxs("span", { className: 'text-[#00927c] font-semibold', children: [products.product?.discountPercent, "% off"] })] }), _jsx("p", { className: 'text-sm', children: "Inclusive of all taxes. Free Shipping above \u20B91500." })] }), _jsxs("div", { className: 'mt-7 space-y-3', children: [_jsxs("div", { className: 'flex items-center gap-4', children: [_jsx(ShieldIcon, { sx: { color: teal[400] } }), _jsx("p", { children: "Authentic & Quality Assured" })] }), _jsxs("div", { className: 'flex items-center gap-4', children: [_jsx(WorkspacePremiumIcon, { sx: { color: teal[400] } }), _jsx("p", { children: "100% money back guarantee" })] }), _jsxs("div", { className: 'flex items-center gap-4', children: [_jsx(LocalShippingIcon, { sx: { color: teal[400] } }), _jsx("p", { children: "Free Shipping & Returns" })] }), _jsxs("div", { className: 'flex items-center gap-4', children: [_jsx(Wallet, { sx: { color: teal[400] } }), _jsx("p", { children: "Pay on delivery might be available" })] })] }), _jsxs("div", { className: 'mt-7 space-y-2', children: [_jsx("h1", { children: "QUANTITY:" }), _jsxs("div", { className: ' flex items-center gap-2  w-[140px] justify-between', children: [_jsx(Button, { disabled: quantity == 1, onClick: () => setQuantity(quantity - 1), variant: 'outlined', children: _jsx(RemoveIcon, {}) }), _jsx("span", { className: 'px-3 text-lg font-semibold', children: quantity }), _jsx(Button, { onClick: () => setQuantity(quantity + 1), variant: 'outlined', children: _jsx(AddIcon, {}) })] })] }), _jsxs("div", { className: "mt-12 flex items-center gap-5", children: [_jsx(Button, { onClick: handleAddCart, sx: { py: "1rem" }, variant: 'contained', fullWidth: true, startIcon: _jsx(AddShoppingCartIcon, {}), children: "Add To Bag" }), _jsx(Button, { sx: { py: "1rem" }, variant: 'outlined', fullWidth: true, startIcon: _jsx(FavoriteBorderIcon, {}), children: "Whishlist" })] }), _jsx("div", { className: 'mt-5', children: _jsx("p", { children: products.product?.description }) }), _jsxs("div", { className: "ratings w-full mt-10", children: [_jsx("h1", { className: "font-semibold text-lg pb-4", children: "Review & Ratings" }), _jsx(RatingCard, { totalReview: review.reviews.length }), _jsx("div", { className: 'mt-10', children: _jsxs("div", { className: "space-y-5", children: [review.reviews.map((item) => (_jsxs("div", { className: 'space-y-5', children: [_jsx(ProductReviewCard, { item: item }), _jsx(Divider, {})] }))), _jsxs(Button, { onClick: () => navigate(`/reviews/${productId}`), children: ["View All ", review.reviews.length, " Reviews"] })] }) })] })] })] }), _jsxs("section", { className: 'mt-20', children: [_jsx("h1", { className: 'text-lg font-bold', children: "Similar Product" }), _jsx("div", { className: 'pt-5', children: _jsx(SmilarProduct, {}) })] })] }));
};
export default ProductDetails;
