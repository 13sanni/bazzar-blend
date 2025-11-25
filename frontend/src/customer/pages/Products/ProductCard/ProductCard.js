import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./ProductCard.css";
import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { teal } from "@mui/material/colors";
import { Box, Button, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector, } from "../../../../Redux Toolkit/Store";
import { addProductToWishlist } from "../../../../Redux Toolkit/Customer/WishlistSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { isWishlisted } from "../../../../util/isWishlisted";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ChatBot from "../../ChatBot/ChatBot";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    borderRadius: ".5rem",
    boxShadow: 24,
};
const ProductCard = ({ item, categoryId }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const { wishlist } = useAppSelector((store) => store);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [showChatBot, setShowChatBot] = useState(false);
    const handleAddWishlist = (event) => {
        event.stopPropagation();
        if (item._id)
            dispatch(addProductToWishlist({ productId: item._id }));
    };
    const handleShowChatBot = (event) => {
        event.stopPropagation();
        setShowChatBot(true);
    };
    const handleCloseChatBot = (event) => {
        event.stopPropagation();
        setShowChatBot(false);
    };
    useEffect(() => {
        let interval;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
            }, 1000);
        }
        else if (interval) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isHovered, item.images.length]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { onClick: () => navigate(`/product-details/${categoryId}/${item.title}/${item._id}`), className: "group px-4 relative", children: [_jsxs("div", { className: "card", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [item.images.map((image, index) => (_jsx("img", { className: "card-media object-top", src: image, alt: `product-${index}`, style: {
                                    transform: `translateX(${(index - currentImage) * 100}%)`,
                                } }, index))), isHovered && (_jsxs("div", { className: "indicator flex flex-col items-center space-y-2", children: [_jsx("div", { className: "flex gap-4", children: item.images.map((_, index) => (_jsx("button", { className: `indicator-button ${index === currentImage ? "active" : ""}`, onClick: () => setCurrentImage(index) }, index))) }), _jsxs("div", { className: "flex gap-3", children: [wishlist.wishlist && (_jsx(Button, { variant: "contained", color: "secondary", sx: { zIndex: 10 }, className: "z-50", onClick: handleAddWishlist, children: isWishlisted(wishlist.wishlist, item) ? (_jsx(FavoriteIcon, { sx: { color: teal[500] } })) : (_jsx(FavoriteBorderIcon, { sx: { color: "gray" } })) })), _jsx(Button, { onClick: handleShowChatBot, color: "secondary", variant: "contained", children: _jsx(ModeCommentIcon, { sx: { color: teal[500] } }) })] })] }))] }), _jsxs("div", { className: "details pt-3 space-y-1 group-hover-effect rounded-md", children: [_jsxs("div", { className: "name space-y", children: [_jsx("h1", { className: "font-semibold text-lg", children: item.seller?.businessDetails?.businessName }), _jsx("p", { children: item.title })] }), _jsxs("div", { className: "price flex items-center gap-3", children: [_jsxs("span", { className: "font-semibold text-gray-800", children: ["\u20B9", item.sellingPrice] }), _jsxs("span", { className: "text thin-line-through text-gray-400", children: ["\u20B9", item.mrpPrice] }), _jsxs("span", { className: "text-[#00927c] font-semibold", children: [item.discountPercent, "% off"] })] })] })] }), showChatBot && (_jsx("section", { className: "absolute left-16 top-0", children: _jsx(Modal, { open: true, onClose: handleCloseChatBot, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsx(Box, { sx: style, children: _jsx(ChatBot, { handleClose: handleCloseChatBot, productId: item._id }) }) }) }))] }));
};
export default ProductCard;
