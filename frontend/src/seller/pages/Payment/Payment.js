import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, Divider } from '@mui/material';
import { useState } from 'react';
import TransactionTable from './TransactionTable';
import Payouts from './PayoutsTable';
import { useAppSelector } from '../../../Redux Toolkit/Store';
const tab = [
    { name: "Transaction" },
    // { name: "Payouts" }
];
const Payment = () => {
    const [activeTab, setActiveTab] = useState(tab[0].name);
    const { sellers } = useAppSelector((store) => store);
    const handleActiveTab = (item) => {
        setActiveTab(item.name);
    };
    return (_jsxs("div", { children: [_jsx("div", { className: 'grid grid-cols-1 lg:grid-cols-2 gap-3', children: _jsxs(Card, { className: 'col-span-1 p-5 rounded-md space-y-4', children: [_jsx("h1", { className: 'text-gray-600 font-medium', children: "Total Earning" }), _jsxs("h1", { className: 'font-bold text-xl pb-1', children: ["\u20B9", sellers.report?.totalEarnings] }), _jsx(Divider, {}), _jsxs("p", { className: 'text-gray-600 font-medium pt-1', children: ["Last Payment : ", _jsx("strong", { children: "\u20B90" })] })] }) }), _jsxs("div", { className: 'mt-20', children: [_jsx("div", { className: 'flex gap-4', children: tab.map((item) => _jsx(Button, { onClick: () => handleActiveTab(item), variant: activeTab === item.name ? "contained" : "outlined", children: item.name })) }), _jsx("div", { className: 'mt-5', children: activeTab === "Transaction" ? _jsx(TransactionTable, {}) : _jsx(Payouts, {}) })] })] }));
};
export default Payment;
