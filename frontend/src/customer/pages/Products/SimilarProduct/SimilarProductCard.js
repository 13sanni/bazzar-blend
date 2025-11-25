import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const SimilarProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { onClick: () => navigate(`/product-details/${product.category?.categoryId}/${product.title}/${product.id}`), className: 'group ', children: [_jsx("div", { className: "relative h-[300px]", children: _jsx("img", { className: "h-full w-full object-cover", src: product.images[0], alt: `product-similar` }) }), _jsxs("div", { className: 'details pt-3 space-y-1 group-hover-effect  rounded-md ', children: [_jsxs("div", { className: 'name space-y ', children: [_jsx("h1", { className: 'font-semibold text-lg', children: product.seller?.businessDetails?.businessName }), _jsx("p", { className: '', children: product.title })] }), _jsxs("div", { className: 'price flex items-center gap-3 ', children: [_jsxs("span", { className: 'font-semibold text-gray-800', children: [" \u20B9", product.sellingPrice] }), _jsxs("span", { className: 'text thin-line-through text-gray-400 ', children: ["\u20B9", product.mrpPrice] }), _jsxs("span", { className: 'text-[#00927c] font-semibold', children: [product.discountPercent, "% off"] })] })] })] }));
};
export default SimilarProductCard;
