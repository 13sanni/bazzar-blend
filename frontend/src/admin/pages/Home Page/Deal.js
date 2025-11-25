import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@mui/material';
import React, { useState } from 'react';
import DealsTable from './DealsTable';
import { useAppSelector } from '../../../Redux Toolkit/Store';
import DealsCategoryTable from './DealsCategoryTable';
import CreateDealForm from './CreateDealForm';
const tab = [
    { name: "Deals" },
    { name: "Categories" },
    { name: "Create Deal" }
];
const Deal = () => {
    const [activeTab, setActiveTab] = useState(tab[0].name);
    const { sellers } = useAppSelector((store) => store);
    const handleActiveTab = (item) => {
        setActiveTab(item.name);
    };
    return (_jsx("div", { children: _jsxs("div", { className: '', children: [_jsx("div", { className: 'flex gap-4', children: tab.map((item) => _jsx(Button, { onClick: () => handleActiveTab(item), variant: activeTab === item.name ? "contained" : "outlined", children: item.name })) }), _jsx("div", { className: 'mt-5', children: activeTab === "Deals" ? _jsx(DealsTable, {}) : activeTab === "Categories" ? _jsx(DealsCategoryTable, {}) : _jsx("div", { className: 'mt-5 border-t flex flex-col justify-center items-center h-[70vh]', children: _jsx(CreateDealForm, {}) }) })] }) }));
};
export default Deal;
