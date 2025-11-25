import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import DrawerList from "../../admin seller/components/drawerList/DrawerList";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Category } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
const menu = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: _jsx(DashboardIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(DashboardIcon, { className: "text-white" }),
    },
    {
        name: "Coupons",
        path: "/admin/coupon",
        icon: _jsx(IntegrationInstructionsIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(IntegrationInstructionsIcon, { className: "text-white" }),
    },
    {
        name: "Add New Coupon",
        path: "/admin/add-coupon",
        icon: _jsx(AddIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(AddIcon, { className: "text-white" }),
    },
    {
        name: "Home Page",
        path: "/admin/home-grid",
        icon: _jsx(HomeIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(HomeIcon, { className: "text-white" }),
    },
    {
        name: "Electronics Category",
        path: "/admin/electronics-category",
        icon: _jsx(ElectricBoltIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(ElectricBoltIcon, { className: "text-white" }),
    },
    {
        name: "Shop By Category",
        path: "/admin/shop-by-category",
        icon: _jsx(Category, { className: "text-primary-color" }),
        activeIcon: _jsx(Category, { className: "text-white" }),
    },
    {
        name: "Deals",
        path: "/admin/deals",
        icon: _jsx(LocalOfferIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(LocalOfferIcon, { className: "text-white" }),
    },
];
const menu2 = [
    {
        name: "Logout",
        path: "/",
        icon: _jsx(LogoutIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(LogoutIcon, { className: "text-white" }),
    },
];
const AdminDrawerList = ({ toggleDrawer }) => {
    return (_jsx(_Fragment, { children: _jsx(DrawerList, { toggleDrawer: toggleDrawer, menu: menu, menu2: menu2 }) }));
};
export default AdminDrawerList;
