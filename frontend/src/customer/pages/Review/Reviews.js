import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../Redux Toolkit/Customer/ProductSlice';
import { Divider } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import { fetchReviewsByProductId } from '../../../Redux Toolkit/Customer/ReviewSlice';
import RatingCard from './RatingCard';
import { useEffect } from 'react';
const Reviews = () => {
    const dispatch = useAppDispatch();
    const { products, review } = useAppSelector(store => store);
    const { productId } = useParams();
    useEffect(() => {
        if (productId) {
            dispatch(fetchProductById(productId));
            dispatch(fetchReviewsByProductId({ productId }));
        }
    }, [productId]);
    return (_jsxs("div", { className: 'p-5 lg:p-20 flex flex-col lg:flex-row gap-20', children: [_jsxs("section", { className: 'w-full md:w-1/2 lg:w-[30%] space-y-2', children: [_jsx("img", { className: 'w-full', src: products.product?.images[0], alt: "" }), _jsxs("div", { children: [_jsxs("div", { children: [_jsxs("p", { className: 'font-bold text-xl', children: [" ", products.product?.seller?.businessDetails.businessName] }), _jsx("p", { className: 'text-lg text-gray-600', children: products.product?.title })] }), _jsxs("div", { className: 'price flex items-center gap-3 mt-5 text-lg', children: [_jsxs("span", { className: 'font-semibold text-gray-800', children: [" \u20B9", products.product?.sellingPrice] }), _jsxs("span", { className: 'text thin-line-through text-gray-400 ', children: ["\u20B9", products.product?.mrpPrice] }), _jsxs("span", { className: 'text-[#00927c] font-semibold', children: [products.product?.discountPercent, "% off"] })] })] })] }), _jsxs("section", { className: "w-full md:w-1/2 lg:w-[70%]", children: [_jsx("h1", { className: "font-semibold text-lg pb-4", children: "Review & Ratings" }), _jsx(RatingCard, {}), _jsx("div", { className: 'mt-10', children: _jsx("div", { className: "space-y-5", children: review.reviews.map((item, i) => (_jsxs("div", { className: 'space-y-5', children: [_jsx(ProductReviewCard, { item: item }), review.reviews.length - 1 !== i && _jsx(Divider, {})] }))) }) })] })] }));
};
export default Reviews;
