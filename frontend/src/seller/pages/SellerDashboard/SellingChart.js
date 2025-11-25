import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchRevenueChart } from '../../../Redux Toolkit/Seller/revenueChartSlice';
const SellingChart = ({ chartType }) => {
    const dispatch = useAppDispatch();
    const { revenueChart } = useAppSelector(store => store);
    useEffect(() => {
        if (chartType) {
            dispatch(fetchRevenueChart({ type: chartType }));
        }
    }, [chartType]);
    // console.log("daily revenue chart ****** ",revenueChart.dailyRevenue)
    return (_jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(AreaChart, { width: 500, height: 400, data: revenueChart.chart, margin: {
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "date", stroke: "#8884d8" }), _jsx(YAxis, { dataKey: "revenue", stroke: '#8884d8' }), _jsx(Tooltip, {}), _jsx(Area, { type: "monotone", dataKey: "revenue", stroke: "#94a3b8", fill: "#ffffff" })] }) }));
};
export default SellingChart;
