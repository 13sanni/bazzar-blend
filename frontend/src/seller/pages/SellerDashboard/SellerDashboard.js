import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SellerRoutes from "../../../routes/SellerRoutes";
import Navbar from "../../../admin seller/components/navbar/Navbar";
import SellerDrawerList from "../../components/SideBar/DrawerList";
const SellerDashboard = () => {
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Navbar, { DrawerList: SellerDrawerList }), _jsxs("section", { className: "lg:flex lg:h-[90vh]", children: [_jsx("div", { className: "hidden lg:block h-full", children: _jsx(SellerDrawerList, {}) }), _jsx("div", { className: "p-10 w-full lg:w-[80%]  overflow-y-auto", children: _jsx(SellerRoutes, {}) })] })] }));
};
export default SellerDashboard;
