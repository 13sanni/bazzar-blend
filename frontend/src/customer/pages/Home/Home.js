import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import HomeCategory from './HomeCategory/HomeCategory';
import TopBrand from './TopBrands/Grid';
import ElectronicCategory from './Electronic Category/ElectronicCategory';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Backdrop, Button, CircularProgress } from '@mui/material';
import ChatBot from '../ChatBot/ChatBot';
import { useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useAppSelector } from '../../../Redux Toolkit/Store';
import DealSlider from './Deals/DealSlider';
const Home = () => {
    const [showChatBot, setShowChatBot] = useState(false);
    const { homePage } = useAppSelector(store => store);
    const navigate = useNavigate();
    const handleShowChatBot = () => {
        setShowChatBot(!showChatBot);
    };
    const handleCloseChatBot = () => {
        setShowChatBot(false);
    };
    const becomeSellerClick = () => {
        navigate("/become-seller");
    };
    return (_jsx(_Fragment, { children: (!homePage.loading) ? _jsxs("div", { className: 'space-y-5 lg:space-y-10 relative', children: [homePage.homePageData?.electricCategories && _jsx(ElectronicCategory, {}), homePage.homePageData?.grid && _jsx("section", { children: _jsx(TopBrand, {}) }), homePage.homePageData?.deals && _jsxs("section", { className: 'pt-10', children: [_jsx("h1", { className: 'text-center text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-10', children: "Today's Deals" }), _jsx(DealSlider, {})] }), homePage.homePageData?.shopByCategories && _jsxs("section", { className: 'flex flex-col justify-center items-center py-20 px-5 lg:px-20', children: [_jsx("h1", { className: 'text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-20', children: "SHOP BY CATEGORY" }), _jsx(HomeCategory, {})] }), _jsxs("section", { className: 'lg:px-20 relative h-[200px] lg:h-[450px] object-cover', children: [_jsx("img", { className: 'w-full h-full', src: "/seller_banner_image.jpg", alt: "" }), _jsxs("div", { className: 'absolute top-1/2 left-4 lg:left-[15rem] transform  -translate-y-1/2 font-semibold lg:text-4xl space-y-3 ', children: [_jsx("h1", { className: '', children: "Sell Your Product" }), _jsxs("p", { className: 'text-lg md:text-2xl', children: ["With ", _jsx("strong", { className: 'logo text-3xl md:text-5xl pl-2', children: "bazzar blend" })] }), _jsx("div", { className: 'pt-6 flex justify-center', children: _jsx(Button, { onClick: becomeSellerClick, startIcon: _jsx(StorefrontIcon, {}), variant: "contained", children: "Become Seller" }) })] })] }), _jsx("section", { className: 'fixed bottom-10 right-10', children: showChatBot ? _jsx(ChatBot, { handleClose: handleCloseChatBot }) : _jsx(Button, { onClick: handleShowChatBot, sx: { borderRadius: "2rem" }, variant: 'contained', className: 'h-16 w-16  flex justify-center items-center rounded-full', children: _jsx(ChatBubbleIcon, { sx: { color: "white", fontSize: "2rem" } }) }) })] }) : _jsx(Backdrop, { open: true, children: _jsx(CircularProgress, { color: "inherit" }) }) }));
};
export default Home;
