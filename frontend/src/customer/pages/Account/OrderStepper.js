import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const steps = [
    { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
    { name: "Packed", description: "Item Packed in Dispatch Warehouse", value: "CONFIRMED" },
    { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPED" },
    { name: "Arriving", description: "by 16 Jul - 18 Jul", value: "ARRIVING" },
    { name: "Arrived", description: "by 16 Jul - 18 Jul", value: "DELIVERED" },
    // { name: "Canceled", description: "by 16 Jul - 18 Jul", value: "CANCELLED" },
];
const canceledStep = [
    { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
    { name: "Order Canceled", description: "on Thu, 11 Jul", value: "CANCELLED" },
];
const currentStep = 2; // Change this value based on the current step
const OrderStepper = ({ orderStatus }) => {
    const [statusStep, setStatusStep] = useState(steps);
    useEffect(() => {
        if (orderStatus === 'CANCELLED') {
            setStatusStep(canceledStep);
        }
        else {
            setStatusStep(steps);
        }
        // setCurrentStep(orderStatus==='Canceled'? canceledStep : steps)
        // .slice(0,orderStatus==="CANCELLED"?steps.length:steps.length-1)
    }, [orderStatus]);
    return (_jsx(Box, { className: " mx-auto my-10", children: statusStep.map((step, index) => (_jsx(_Fragment, { children: _jsxs("div", { className: ` flex   px-4 `, children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx(Box, { sx: { zIndex: -1 }, className: ` w-8 h-8 rounded-full flex items-center justify-center z-10 ${index <= currentStep
                                    ? " bg-gray-200 text-teal-500"
                                    : "bg-gray-300 text-gray-600"}  `, children: step.value === orderStatus ? (_jsx(CheckCircleIcon, {})) : (_jsx(FiberManualRecordIcon, { sx: { zIndex: -1 } })) }), index < statusStep.length - 1 && (_jsx("div", { className: `border h-20 w-[2px] ${index < currentStep
                                    ? " bg-teal-500"
                                    : "bg-gray-300 text-gray-600"}` }))] }), _jsx("div", { className: `ml-2 w-full`, children: _jsxs("div", { className: ` ${step.value === orderStatus
                                ? " bg-primary-color p-2 text-white font-medium rounded-md -translate-y-3"
                                : ""} ${(orderStatus === "CANCELLED" && step.value === orderStatus) ? "bg-red-500" : ""} w-full`, children: [_jsx("p", { className: `
                           
                            `, children: step.name }), _jsx("p", { className: ` ${step.value === orderStatus
                                        ? " text-gray-200"
                                        : "text-gray-500"} text-xs `, children: step.description })] }) })] }, index) }))) }));
};
export default OrderStepper;
