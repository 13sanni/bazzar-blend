import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import {type Deal } from '../../../../types/dealTypes'
import { useNavigate } from 'react-router-dom';
const DealCard = ({ deal }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { onClick: () => navigate(`/products/${deal.category.categoryId}`), className: 'w-full cursor-pointer', children: [_jsx("img", { className: 'border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top', src: deal.category.image, alt: "" }), _jsxs("div", { className: 'border-4 border-black bg-black text-white p-2 text-center', children: [_jsxs("p", { className: 'text-2xl font-bold', children: [deal.discount, "% OFF"] }), _jsx("p", { className: 'text-balance text-lg', children: "shop now" })] })] }));
};
export default DealCard;
