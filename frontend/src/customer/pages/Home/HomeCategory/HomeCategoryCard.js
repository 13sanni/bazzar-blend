import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./HomeCategoryCard.css";
import { useNavigate } from 'react-router-dom';
const HomeCategoryCard = ({ item }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { onClick: () => navigate(`/products/${item.categoryId}`), className: 'flex gap-3 flex-col justify-center items-center group cursor-pointer', children: [_jsx("div", { className: 'custom-border w-[150px] lg:w-[249px] h-[150px] lg:h-[249px] rounded-full bg-teal-400', children: _jsx("img", { className: 'group-hover:scale-95 transition-transform transform duration-700  object-cover object-top h-full w-full', src: item.image, alt: "" }) }), _jsx("h1", { className: 'font-medium', children: item.name })] }));
};
export default HomeCategoryCard;
