import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// UpdateDealForm.tsx
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchHomeCategories } from "../../../Redux Toolkit/Admin/AdminSlice";
import { updateDeal } from "../../../Redux Toolkit/Admin/DealSlice";
// Validation schema using Yup
const validationSchema = Yup.object({
    discount: Yup.number()
        .required("Discount is required")
        .min(0, "Discount must be a positive number")
        .max(100, "Discount cannot exceed 100"),
    //   category: Yup.string()
    //     .oneOf(Object.values(HomeCategory), 'Invalid category')
    //     .required('Category is required'),
});
// Initial form values
const initialValues = {
    discount: 0,
    category: "",
};
const UpdateDealForm = ({ id }) => {
    const { admin } = useAppSelector((store) => store);
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log("Deal submit", values);
            dispatch(updateDeal({
                id,
                deal: {
                    discount: values.discount,
                    category: { id: Number(values.category) },
                }
            }));
        },
    });
    useEffect(() => {
        dispatch(fetchHomeCategories());
    }, []);
    return (_jsxs("form", { className: "space-y-4", onSubmit: formik.handleSubmit, children: [_jsx(Typography, { align: "center", variant: "h4", gutterBottom: true, children: "Update Deal" }), _jsx(TextField, { fullWidth: true, id: "discount", name: "discount", label: "Discount", type: "number", value: formik.values.discount, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.discount && Boolean(formik.errors.discount), helperText: formik.touched.discount && formik.errors.discount }), _jsx(Button, { sx: { py: ".8rem" }, color: "primary", variant: "contained", fullWidth: true, type: "submit", children: "Update Deal" })] }));
};
export default UpdateDealForm;
