import { jsx as _jsx } from "react/jsx-runtime";
import DrawerList from "../../../admin seller/components/drawerList/DrawerList";
import { AccountBox } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const menu = [
    {
        name: "Dashboard",
        path: "/seller",
        icon: _jsx(DashboardIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(DashboardIcon, { className: "text-white" }),
    },
    {
        name: "Orders",
        path: "/seller/orders",
        icon: _jsx(ShoppingBagIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(ShoppingBagIcon, { className: "text-white" }),
    },
    {
        name: "Products",
        path: "/seller/products",
        icon: _jsx(InventoryIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(InventoryIcon, { className: "text-white" }),
    },
    {
        name: "Add Product",
        path: "/seller/add-product",
        icon: _jsx(AddIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(AddIcon, { className: "text-white" }),
    },
    {
        name: "Payment",
        path: "/seller/payment",
        icon: _jsx(AccountBalanceWalletIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(AccountBalanceWalletIcon, { className: "text-white" }),
    },
    {
        name: "Transaction",
        path: "/seller/transaction",
        icon: _jsx(ReceiptIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(ReceiptIcon, { className: "text-white" }),
    },
    // {
    //   name: "Inventory",
    //   path: "/seller/inventory",
    //   icon: <MailIcon className="text-primary-color" />,
    //   activeIcon: <MailIcon className="text-white" />,
    // },
];
const menu2 = [
    {
        name: "Account",
        path: "/seller/account",
        icon: _jsx(AccountBox, { className: "text-primary-color" }),
        activeIcon: _jsx(AccountBox, { className: "text-white" }),
    },
    {
        name: "Logout",
        path: "/",
        icon: _jsx(LogoutIcon, { className: "text-primary-color" }),
        activeIcon: _jsx(LogoutIcon, { className: "text-white" }),
    },
];
const SellerDrawerList = ({ toggleDrawer }) => {
    return _jsx(DrawerList, { menu: menu, menu2: menu2, toggleDrawer: toggleDrawer });
};
export default SellerDrawerList;
