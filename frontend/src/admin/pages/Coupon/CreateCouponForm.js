import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Alert, Snackbar, CircularProgress, Grid, } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import store, { useAppDispatch, useAppSelector, } from "../../../Redux Toolkit/Store";
import { createCoupon } from "../../../Redux Toolkit/Admin/AdminCouponSlice";
const CouponForm = () => {
    const dispatch = useAppDispatch();
    const { coupone, adminCoupon } = useAppSelector((store) => store);
    const [snackbarOpen, setOpenSnackbar] = useState(false);
    const formik = useFormik({
        initialValues: {
            code: "",
            discountPercentage: 0,
            validityStartDate: null,
            validityEndDate: null,
            minimumOrderValue: 0,
        },
        validationSchema: Yup.object({
            code: Yup.string()
                .required("Coupon code is required")
                .min(3, "Code should be at least 3 characters")
                .max(20, "Code should be at most 20 characters"),
            discountPercentage: Yup.number()
                .required("Discount percentage is required")
                .min(1, "Discount should be at least 1%")
                .max(100, "Discount cannot exceed 100%"),
            validityStartDate: Yup.date()
                .nullable()
                .required("Start date is required")
                .typeError("Invalid date"),
            validityEndDate: Yup.date()
                .nullable()
                .required("End date is required")
                .typeError("Invalid date")
                .min(Yup.ref("validityStartDate"), "End date cannot be before start date"),
            minimumOrderValue: Yup.number()
                .required("Minimum order value is required")
                .min(1, "Minimum order value should be at least 1"),
        }),
        onSubmit: (values) => {
            const formattedValues = {
                ...values,
                validityStartDate: values.validityStartDate
                    ? values.validityStartDate.toISOString()
                    : null,
                validityEndDate: values.validityEndDate
                    ? values.validityEndDate.toISOString()
                    : null,
            };
            console.log("Form Values:", formattedValues);
            dispatch(createCoupon({
                coupon: formattedValues,
                jwt: localStorage.getItem("jwt") || "",
            }));
            // Submit form values to the backend
        },
    });
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    useEffect(() => {
        if (adminCoupon.couponCreated) {
            setOpenSnackbar(true);
        }
    }, [adminCoupon.couponCreated]);
    return (_jsxs("div", { className: "max-w-3xl", children: [_jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsx(Box, { component: "form", onSubmit: formik.handleSubmit, sx: { mt: 3 }, children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(TextField, { fullWidth: true, id: "code", name: "code", label: "Coupon Code", value: formik.values.code, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.code && Boolean(formik.errors.code), helperText: formik.touched.code && formik.errors.code, margin: "normal" }) }), _jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(TextField, { fullWidth: true, id: "discountPercentage", name: "discountPercentage", label: "Discount Percentage", type: "number", value: formik.values.discountPercentage, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.discountPercentage &&
                                        Boolean(formik.errors.discountPercentage), helperText: formik.touched.discountPercentage &&
                                        formik.errors.discountPercentage, margin: "normal" }) }), _jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(DatePicker, { sx: { width: "100%" }, label: "Validity Start Date", value: formik.values.validityStartDate, onChange: (date) => formik.setFieldValue("validityStartDate", date) }) }), _jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(DatePicker, { sx: { width: "100%" }, label: "Validity End Date", value: formik.values.validityEndDate, onChange: (date) => formik.setFieldValue("validityEndDate", date) }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { fullWidth: true, id: "minimumOrderValue", name: "minimumOrderValue", label: "Minimum Order Value", type: "number", value: formik.values.minimumOrderValue, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.minimumOrderValue &&
                                        Boolean(formik.errors.minimumOrderValue), helperText: formik.touched.minimumOrderValue &&
                                        formik.errors.minimumOrderValue, margin: "normal" }) }), _jsx(Grid, { size: 12, children: _jsx(Button, { color: "primary", variant: "contained", type: "submit", sx: { mt: 2 }, fullWidth: true, disabled: adminCoupon.loading, children: adminCoupon.loading ? (_jsx(CircularProgress, { size: "small", sx: { width: "27px", height: "27px" } })) : ("create coupon") }) })] }) }) }), _jsx(Snackbar, { anchorOrigin: { vertical: "top", horizontal: "right" }, open: snackbarOpen, autoHideDuration: 6000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: adminCoupon.error ? "error" : "success", variant: "filled", sx: { width: "100%" }, children: adminCoupon.error ? adminCoupon.error : "Coupon created successfully" }) })] }));
};
export default CouponForm;
