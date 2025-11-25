import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import SellingChart from "./SellingChart";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchSellerReport } from "../../../Redux Toolkit/Seller/sellerSlice";
import ReportCard from "./Report/ReportCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { FormControl, InputLabel, MenuItem, Select, } from "@mui/material";
const Chart = [
    { name: "Today", value: "today" },
    { name: "Last 7 days", value: "daily" },
    { name: "Last 12 Month", value: "monthly" },
];
const HomePage = () => {
    const { sellers } = useAppSelector((store) => store);
    const dispatch = useAppDispatch();
    const [chartType, setChartType] = React.useState(Chart[0].value);
    useEffect(() => {
        dispatch(fetchSellerReport(localStorage.getItem("jwt") || ""));
    }, []);
    const handleChange = (event) => {
        setChartType(event.target.value);
    };
    return (_jsxs("div", { className: "space-y-5", children: [_jsxs("section", { className: "grid grid-cols-4 gap-5", children: [_jsx("div", { className: "col-span-4 md:col-span-2 lg:col-span-1", children: _jsx(ReportCard, { icon: _jsx(AccountBalanceIcon, {}), value: "$" + "" + sellers.report?.totalEarnings, title: "Total Earnings" }) }), _jsx("div", { className: "col-span-4 md:col-span-2 lg:col-span-1", children: _jsx(ReportCard, { icon: _jsx(AccountBalanceIcon, {}), value: sellers.report?.totalSales, title: "Total Sales" }) }), _jsx("div", { className: "col-span-4 md:col-span-2 lg:col-span-1", children: _jsx(ReportCard, { icon: _jsx(AccountBalanceIcon, {}), value: sellers.report?.totalRefunds, title: "Total Refund" }) }), _jsx("div", { className: "col-span-4 md:col-span-2 lg:col-span-1", children: _jsx(ReportCard, { icon: _jsx(AccountBalanceIcon, {}), value: sellers.report?.canceledOrders, title: "Cancel Orders" }) })] }), _jsxs("div", { className: "h-[500px] space-y-10 p-5 lg:p-10 bg-slate-800 rounded-md", children: [_jsx("div", { className: "w-40", children: _jsxs(FormControl, { sx: { color: 'white' }, fullWidth: true, children: [_jsx(InputLabel, { sx: { color: 'white' }, id: "demo-simple-select-label", children: "Chart Type" }), _jsx(Select, { sx: {
                                        color: 'white',
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'white',
                                        },
                                        '.MuiSvgIcon-root': {
                                            color: 'white',
                                        },
                                    }, labelId: "demo-simple-select-label", id: "demo-simple-select", value: chartType, label: "Chart Type", onChange: handleChange, children: Chart.map((item) => (_jsx(MenuItem, { value: item.value, children: item.name }))) })] }) }), _jsx("div", { className: "h-[350px]", children: _jsx(SellingChart, { chartType: chartType }) })] })] }));
};
export default HomePage;
