import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { menLevelThree } from "../../../data/category/level three/menLevelThree";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { electronicsLevelTwo } from "../../../data/category/level two/electronicsLavelTwo";
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevleTwo";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree";
const categoryTwo = {
    men: menLevelTwo,
    women: womenLevelTwo,
    electronics: electronicsLevelTwo,
    home_furniture: furnitureLevelTwo,
};
const categoryThree = {
    men: menLevelThree,
    women: womenLevelThree,
    electronics: electronicsLevelThree,
    home_furniture: furnitureLevelThree,
};
const CategorySheet = ({ selectedCategory, toggleDrawer, setShowSheet, }) => {
    const navigate = useNavigate();
    const childCategory = (category, parentCategoryId) => {
        return category.filter((child) => {
            // console.log("Category", parentCategoryId, child)
            return child.parentCategoryId == parentCategoryId;
        });
    };
    const handleCategoryClick = (category) => {
        if (toggleDrawer) {
            toggleDrawer(false)();
        }
        if (setShowSheet) {
            setShowSheet(false);
        }
        navigate("/products/" + category);
    };
    return (_jsx(Box, { className: "bg-white shadow-lg  lg:h-[500px] overflow-y-auto", children: _jsx("div", { className: " flex text-sm flex-wrap", children: categoryTwo[selectedCategory]?.map((item, index) => (_jsxs("div", { className: `p-8 lg:w-[20%] ${index % 2 == 0 ? "bg-slate-50" : "bg-white"}`, children: [_jsx("p", { className: "text-[#00927c] mb-5 font-semibold", children: item.name }), _jsx("ul", { className: "space-y-3", children: childCategory(categoryThree[selectedCategory], item.categoryId)?.map((item) => (_jsx("div", { children: _jsx("li", { onClick: () => handleCategoryClick(item.categoryId), className: "hover:text-[#00927c] cursor-pointer", children: item.name }) }, item.name))) })] }, item.name))) }) }));
};
export default CategorySheet;
