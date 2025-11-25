import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../Redux Toolkit/Store";
import { Alert, Avatar, Box, Button, Divider, Modal, Snackbar, } from "@mui/material";
import ProfileFildCard from "./ProfileFildCard";
import EditIcon from "@mui/icons-material/Edit";
import PersonalDetailsForm from "./PersionalDetailsForm";
import BusinessDetailsForm from "./BussinessDetailsForm";
import PickupAddressForm from "./PickupAddressForm";
import BankDetailsForm from "./BankDetailsForm";
export const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};
const Profile = () => {
    const { sellers } = useAppSelector((store) => store);
    const [open, setOpen] = React.useState(false);
    const [selectedForm, setSelectedForm] = useState("persionalDetails");
    const handleClose = () => setOpen(false);
    const [snackbarOpen, setOpenSnackbar] = useState(false);
    const handleOpen = (formName) => {
        setOpen(true);
        setSelectedForm(formName);
    };
    const renderSelectedForm = () => {
        switch (selectedForm) {
            case "personalDetails":
                return _jsx(PersonalDetailsForm, { onClose: handleClose });
            case "businessDetails":
                return _jsx(BusinessDetailsForm, { onClose: handleClose });
            case "pickupAddress":
                return _jsx(PickupAddressForm, { onClose: handleClose });
            case "bankDetails":
                return _jsx(BankDetailsForm, { onClose: handleClose });
            default:
                return null;
        }
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    useEffect(() => {
        if (sellers.profileUpdated || sellers.error) {
            setOpenSnackbar(true);
        }
    }, [sellers.profileUpdated]);
    return (_jsxs("div", { className: "lg:px-20 pt-5 pb-20 space-y-20", children: [_jsxs("div", { className: "w-full lg:w-[70%]  ", children: [_jsxs("div", { className: "flex items-center pb-3 justify-between", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-600 ", children: "Salon Owner" }), _jsx("div", { children: _jsx(Button, { onClick: () => handleOpen("personalDetails"), size: "small", sx: { borderRadius: "2.9rem" }, variant: "contained", className: "w-16 h-16", children: _jsx(EditIcon, {}) }) })] }), _jsxs("div", { className: "space-y-5", children: [_jsx(Avatar, { sx: { width: "10rem", height: "10rem" }, src: "https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804_640.jpg" }), _jsxs("div", { children: [_jsx(ProfileFildCard, { keys: "Seller Name", value: sellers.profile?.sellerName }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "Seller Email", value: sellers.profile?.email }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "Seller Mobile", value: sellers.profile?.mobile })] })] })] }), _jsxs("div", { className: "mt-10 lg:w-[70%]", children: [_jsxs("div", { className: "flex items-center pb-3 justify-between", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-600 ", children: "Bussiness Details" }), _jsx("div", { children: _jsx(Button, { onClick: () => handleOpen("businessDetails"), size: "small", sx: { borderRadius: "2.9rem" }, variant: "contained", className: "w-16 h-16", children: _jsx(EditIcon, {}) }) })] }), _jsxs("div", { className: " ", children: [_jsx(ProfileFildCard, { keys: "Business Name/Brand Name", value: sellers.profile?.businessDetails?.businessName }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "GSTIN", value: sellers.profile?.GSTIN || "not provided" }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "Account Status", value: sellers.profile?.accountStatus })] })] }), _jsxs("div", { className: "mt-10 lg:w-[70%]", children: [_jsxs("div", { className: "flex items-center pb-3 justify-between", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-600 ", children: "Pickup Address" }), _jsx("div", { children: _jsx(Button, { onClick: () => handleOpen("pickupAddress"), size: "small", sx: { borderRadius: "2.9rem" }, variant: "contained", className: "w-16 h-16", children: _jsx(EditIcon, {}) }) })] }), _jsx("div", { className: "space-y-5", children: _jsxs("div", { className: "", children: [_jsx(ProfileFildCard, { keys: "Adress", value: sellers.profile?.pickupAddress?.address }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "City", value: sellers.profile?.pickupAddress?.city || "not provided" }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "State", value: sellers.profile?.pickupAddress?.state }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "Mobile", value: sellers.profile?.pickupAddress?.mobile })] }) })] }), _jsxs("div", { className: "mt-10 lg:w-[70%]", children: [_jsxs("div", { className: "flex items-center pb-3 justify-between", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-600 ", children: "Bank Details" }), _jsx("div", { children: _jsx(Button, { onClick: () => handleOpen("bankDetails"), size: "small", sx: { borderRadius: "2.9rem" }, variant: "contained", className: "w-16 h-16", children: _jsx(EditIcon, {}) }) })] }), _jsx("div", { className: "space-y-5", children: _jsxs("div", { className: "", children: [_jsx(ProfileFildCard, { keys: "Account Holder Name", value: sellers.profile?.bankDetails?.accountHolderName }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "Account Number", value: sellers.profile?.bankDetails?.accountNumber || "not provided" }), _jsx(Divider, {}), _jsx(ProfileFildCard, { keys: "IFSC CODE", value: sellers.profile?.bankDetails?.ifscCode })] }) })] }), _jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsx(Box, { sx: style, children: renderSelectedForm() }) }), _jsx(Snackbar, { anchorOrigin: { vertical: "top", horizontal: "right" }, open: snackbarOpen, autoHideDuration: 6000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: sellers.error ? "error" : "success", variant: "filled", sx: { width: "100%" }, children: sellers.error ? sellers.error : "Profile Updated Successfully" }) })] }));
};
export default Profile;
