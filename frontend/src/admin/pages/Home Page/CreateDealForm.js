import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { createDeal } from '../../../Redux Toolkit/Admin/DealSlice';
const CreateDealForm = () => {
    const { homePage } = useAppSelector(store => store);
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            discount: 0,
            category: "",
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log("Form Data -- :", values);
            dispatch(createDeal({
                discount: values.discount,
                category: {
                    _id: values.category
                }
            }));
        },
    });
    console.log("------ ", homePage.homePageData?.dealCategories);
    return (_jsxs(Box, { component: "form", onSubmit: formik.handleSubmit, sx: { maxWidth: 500, margin: "auto", padding: 3 }, className: "space-y-6", children: [_jsx(Typography, { className: 'text-center', variant: "h4", gutterBottom: true, children: "Create Deal" }), _jsx(TextField, { fullWidth: true, id: "discount", name: "discount", label: "Discount", type: "number", value: formik.values.discount, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.discount && Boolean(formik.errors.discount), helperText: formik.touched.discount && formik.errors.discount }), _jsxs(FormControl, { fullWidth: true, error: formik.touched.category && Boolean(formik.errors.category), required: true, children: [_jsx(InputLabel, { id: "category-label", children: "Category" }), _jsx(Select, { labelId: "category-label", id: "category", name: "category", value: formik.values.category, onChange: formik.handleChange, label: "Category", children: homePage.homePageData?.dealCategories.map((item) => (_jsx(MenuItem, { value: item._id, children: item.categoryId }))) }), formik.touched.category && formik.errors.category && (_jsx(FormHelperText, { children: formik.errors.category }))] }), _jsx(Button, { color: "primary", variant: "contained", fullWidth: true, type: "submit", sx: { py: ".9rem" }, children: "Submit" })] }));
};
export default CreateDealForm;
