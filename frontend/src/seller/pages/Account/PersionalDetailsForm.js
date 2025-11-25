import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import {} from "./BussinessDetailsForm";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { updateSeller } from "../../../Redux Toolkit/Seller/sellerSlice";
const PersonalDetailsForm = ({ onClose }) => {
    const { sellers } = useAppSelector(store => store);
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            sellerName: '',
            email: '',
            mobile: '',
        },
        validationSchema: Yup.object({
            sellerName: Yup.string().required("Seller Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            mobile: Yup.string().required("Mobile number is required"),
        }),
        onSubmit: (values) => {
            console.log("data ----- ", values);
            dispatch(updateSeller(values));
            onClose();
        },
    });
    useEffect(() => {
        if (sellers.profile) {
            formik.setValues({
                sellerName: sellers.profile?.sellerName,
                email: sellers.profile?.email,
                mobile: sellers.profile?.mobile,
            });
        }
    }, [sellers.profile]);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-xl pb-5 text-center font-bold text-gray-600", children: "Personal Details" }), _jsxs("form", { className: "space-y-5", onSubmit: formik.handleSubmit, children: [_jsx(TextField, { fullWidth: true, id: "sellerName", name: "sellerName", label: "Seller Name", value: formik.values.sellerName, onChange: formik.handleChange, error: formik.touched.sellerName && Boolean(formik.errors.sellerName), helperText: formik.touched.sellerName && formik.errors.sellerName }), _jsx(TextField, { fullWidth: true, id: "email", name: "email", label: "Seller Email", value: formik.values.email, onChange: formik.handleChange, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email }), _jsx(TextField, { fullWidth: true, id: "mobile", name: "mobile", label: "Seller Mobile", value: formik.values.mobile, onChange: formik.handleChange, error: formik.touched.mobile && Boolean(formik.errors.mobile), helperText: formik.touched.mobile && formik.errors.mobile }), _jsx(Button, { sx: { py: ".9rem" }, color: "primary", variant: "contained", fullWidth: true, type: "submit", children: "Save" })] })] }));
};
export default PersonalDetailsForm;
