import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, } from "@mui/material";
import { teal } from "@mui/material/colors";
import { colors } from "../../../data/Filter/color";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
const FilterSection = () => {
    const [expendColor, setExpendColor] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const handleExpendColor = () => {
        setExpendColor(!expendColor);
    };
    const updateFilterParams = (e) => {
        const { value, name } = e.target;
        if (value) {
            searchParams.set(name, value);
        }
        else {
            searchParams.delete(name);
        }
        setSearchParams(searchParams);
    };
    const clearAllFilters = () => {
        console.log("clearAllFilters", searchParams);
        searchParams.forEach((value, key) => {
            searchParams.delete(key);
        });
        setSearchParams(searchParams);
    };
    return (_jsxs("div", { className: "-z-50 space-y-5 bg-white", children: [_jsxs("div", { className: "flex items-center justify-between h-[40px] px-9 lg:border-r", children: [_jsx("p", { className: "text-lg font-semibold", children: "Filters" }), _jsx(Button, { onClick: clearAllFilters, size: "small", className: "text-teal-600 cursor-pointer font-semibold", children: "clear all" })] }), _jsx(Divider, {}), _jsxs("div", { className: "px-9 space-y-6", children: [_jsxs("section", { children: [_jsxs(FormControl, { sx: { zIndex: 0 }, children: [_jsx(FormLabel, { sx: {
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            pb: "14px",
                                            color: teal[600],
                                        }, className: "text-2xl font-semibold", id: "color", children: "Color" }), _jsx(RadioGroup, { onChange: updateFilterParams, "aria-labelledby": "color", defaultValue: "", name: "color", children: colors
                                            .slice(0, expendColor ? colors.length : 5)
                                            .map((item) => (_jsx(FormControlLabel, { sx: { fontSize: "12px" }, value: item.name, control: _jsx(Radio, { size: "small" }), label: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("p", { children: item.name }), _jsx("span", { style: { backgroundColor: item.hex }, className: ` h-5 w-5 rounded-full ${item.name === "White" ? "border" : "border"}` })] }) }, item.name))) })] }), _jsx("div", { children: _jsx("button", { onClick: handleExpendColor, className: "text-teal-600 cursor-pointer hover:text-teal-900 flex items-center", children: expendColor ? "hide" : `+ ${colors.length - 5} more` }) })] }), _jsx(Divider, {}), _jsx("section", { children: _jsxs(FormControl, { children: [_jsx(FormLabel, { sx: {
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        pb: "14px",
                                        color: teal[600],
                                    }, className: "text-2xl font-semibold", id: "price", children: "Price" }), _jsx(RadioGroup, { name: "price", onChange: updateFilterParams, "aria-labelledby": "price", defaultValue: "", children: price.map((item) => (_jsx(FormControlLabel, { value: item.value, control: _jsx(Radio, { size: "small" }), label: item.name }, item.name))) })] }) }), _jsx(Divider, {}), _jsx("section", { children: _jsxs(FormControl, { children: [_jsx(FormLabel, { sx: {
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        pb: "14px",
                                        color: teal[600],
                                    }, className: "text-2xl font-semibold", id: "brand", children: "Discount" }), _jsx(RadioGroup, { name: "discount", onChange: updateFilterParams, "aria-labelledby": "brand", defaultValue: "", children: discount.map((item) => (_jsx(FormControlLabel, { value: item.value, control: _jsx(Radio, { size: "small" }), label: item.name }, item.name))) })] }) })] })] }));
};
export default FilterSection;
