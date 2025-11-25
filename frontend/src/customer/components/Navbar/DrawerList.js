import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import { mainCategory } from '../../../data/category/mainCategory';
import CategorySheet from './CategorySheet';
const DrawerList = ({ toggleDrawer }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    return (_jsxs(Box, { sx: { width: 250 }, role: "presentation", children: [_jsxs(List, { children: [_jsx(ListItem, { children: _jsx(ListItemButton, { children: _jsx(ListItemText, { primary: _jsx("h1", { className: 'logo text-2xl text-[#00927c]', children: "Bazzar Blend" }) }) }) }), _jsx(Divider, {}), mainCategory.map((item) => _jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { onClick: () => setSelectedCategory(item.categoryId), children: _jsx(ListItemText, { primary: item.name }) }) }, item.name))] }), selectedCategory && _jsx("div", { 
                // onMouseLeave={() => setShowSheet(false)}
                // onMouseEnter={() => setShowSheet(true)} 
                className: 'categorySheet absolute top-[4.41rem] left-0 right-0 h-[400px]', children: _jsx(CategorySheet, { toggleDrawer: toggleDrawer, selectedCategory: selectedCategory }) })] }));
};
export default DrawerList;
