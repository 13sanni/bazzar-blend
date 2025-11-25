import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider, } from "@mui/material";
import ProfileFildCard from "../../../seller/pages/Account/ProfileFildCard";
import { useAppSelector } from "../../../Redux Toolkit/Store";
const UserDetails = () => {
    const { user } = useAppSelector((store) => store);
    return (_jsx("div", { className: "flex justify-center py-10", children: _jsxs("div", { className: "w-full lg:w-[70%]  ", children: [_jsx("div", { className: "flex items-center pb-3 justify-between", children: _jsx("h1", { className: "text-2xl font-bold text-gray-600 ", children: "Persional Details" }) }), _jsx("div", { className: "space-y-5", children: _jsxs("div", { children: [_jsx(ProfileFildCard, { keys: "Name", value: user.user?.fullName }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "Email", value: user.user?.email }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "Mobile", value: user.user?.mobile })] }) })] }) }));
};
export default UserDetails;
