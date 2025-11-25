import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from '../../../Redux Toolkit/Store';
import WishlistProductCard from './WishlistProductCard';
const Wishlist = () => {
    const { wishlist } = useAppSelector(store => store);
    console.log("wishlist", wishlist);
    return (_jsx("div", { className: 'h-[85vh] p-5 lg:p-20', children: wishlist.wishlist?.products.length ?
            _jsxs("section", { children: [_jsxs("h1", { children: [_jsx("strong", { children: "My Wishlist" }), " ", wishlist.wishlist.products.length, " items"] }), _jsx("div", { className: 'pt-10 flex flex-wrap gap-5', children: wishlist.wishlist?.products?.map((item) => _jsx(WishlistProductCard, { item: item })) })] }) :
            _jsx("div", { className: "h-full flex justify-center items-center flex-col", children: _jsxs("div", { className: "text-center py-5", children: [_jsx("h1", { className: "text-lg font-medium", children: "hay its feels so light!" }), _jsx("p", { className: "text-gray-500 text-sm", children: "there is nothing in your wishlist, lets add some items" })] }) }) }));
};
export default Wishlist;
