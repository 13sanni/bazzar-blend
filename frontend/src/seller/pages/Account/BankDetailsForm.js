import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import {} from "./BussinessDetailsForm";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { updateSeller } from "../../../Redux Toolkit/Seller/sellerSlice";
const BankDetailsForm = ({ onClose }) => {
    const { sellers } = useAppSelector((store) => store);
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            accountHolderName: "",
            accountNumber: "",
            ifscCode: "",
        },
        validationSchema: Yup.object({
            accountHolderName: Yup.string().required("Account Holder Name is required"),
            accountNumber: Yup.string().required("Account Number is required"),
            ifscCode: Yup.string().required("IFSC Code is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(updateSeller({
                bankDetails: values,
            }));
            onClose();
        },
    });
    useEffect(() => {
        if (sellers.profile) {
            formik.setValues({
                accountHolderName: sellers.profile.bankDetails?.accountHolderName || "",
                accountNumber: sellers.profile.bankDetails?.accountNumber || "",
                ifscCode: sellers.profile.bankDetails?.ifscCode || "",
            });
        }
    }, [sellers.profile]);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-xl pb-5 text-center font-bold text-gray-600", children: "Bank Details" }), _jsxs("form", { className: "space-y-5", onSubmit: formik.handleSubmit, children: [_jsx(TextField, { fullWidth: true, id: "accountHolderName", name: "accountHolderName", label: "Account Holder Name", value: formik.values.accountHolderName, onChange: formik.handleChange, error: formik.touched.accountHolderName &&
                            Boolean(formik.errors.accountHolderName), helperText: formik.touched.accountHolderName && formik.errors.accountHolderName }), _jsx(TextField, { fullWidth: true, id: "accountNumber", name: "accountNumber", label: "Account Number", value: formik.values.accountNumber, onChange: formik.handleChange, error: formik.touched.accountNumber && Boolean(formik.errors.accountNumber), helperText: formik.touched.accountNumber && formik.errors.accountNumber }), _jsx(TextField, { fullWidth: true, id: "ifscCode", name: "ifscCode", label: "IFSC Code", value: formik.values.ifscCode, onChange: formik.handleChange, error: formik.touched.ifscCode && Boolean(formik.errors.ifscCode), helperText: formik.touched.ifscCode && formik.errors.ifscCode }), _jsx(Button, { sx: { py: ".9rem" }, color: "primary", variant: "contained", fullWidth: true, type: "submit", children: "Save" })] })] }));
};
export default BankDetailsForm;
