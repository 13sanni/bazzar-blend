import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppSelector } from '../../../Redux Toolkit/Store';
import UserAddressCard from './UserAddressCard';
const Addresses = () => {
    const { user } = useAppSelector(store => store);
    return (_jsx(_Fragment, { children: _jsx("div", { className: 'space-y-3', children: user.user?.addresses?.map((item) => _jsx(UserAddressCard, { item: item }, item._id)) }) }));
};
export default Addresses;
