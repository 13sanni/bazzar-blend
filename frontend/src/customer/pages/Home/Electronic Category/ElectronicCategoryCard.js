import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const ElectronicCategoryCard = ({ item }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { onClick: () => navigate(`/products/${item.categoryId}`), className: 'flex w-20 flex-col items-center gap-3 cursor-pointer', children: [_jsx("img", { className: 'object-contain h-10', src: item.image, alt: item.name }), _jsx("h2", { className: 'font-semibold text-sm', children: item.name })] }));
};
export default ElectronicCategoryCard;
