import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../Redux Toolkit/Customer/ProductSlice';
import ReviewForm from './ReviewForm';
const WriteReviews = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(store => store);
    const { productId } = useParams();
    useEffect(() => {
        if (productId) {
            dispatch(fetchProductById(productId));
        }
    }, [productId]);
    return (_jsxs("div", { className: 'p-5 lg:p-20 flex flex-col lg:flex-row gap-10', children: [_jsxs("div", { className: 'w-full md:w-1/2 lg:w-[30%] space-y-2', children: [_jsx("img", { className: 'w-full', src: products.product?.images[0], alt: "" }), _jsxs("div", { children: [_jsxs("div", { children: [_jsxs("p", { className: 'font-bold text-xl', children: [" ", products.product?.seller?.businessDetails.businessName] }), _jsx("p", { className: 'text-lg text-gray-600', children: products.product?.title })] }), _jsxs("div", { className: 'price flex items-center gap-3 mt-5 text-lg', children: [_jsxs("span", { className: 'font-semibold text-gray-800', children: [" \u20B9", products.product?.sellingPrice] }), _jsxs("span", { className: 'text thin-line-through text-gray-400 ', children: ["\u20B9", products.product?.mrpPrice] }), _jsxs("span", { className: 'text-[#00927c] font-semibold', children: [products.product?.discountPercent, "% off"] })] })] })] }), _jsxs("section", { className: "w-full md:w-1/2 lg:w-[70%]", children: [_jsx("h1", { className: "font-semibold text-2xl pb-4 text-gray-700", children: "Write Your Review & Give Ratings" }), _jsx(ReviewForm, {})] })] }));
};
export default WriteReviews;
