import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import {} from "./BussinessDetailsForm";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { updateSeller } from "../../../Redux Toolkit/Seller/sellerSlice";
const PickupAddressForm = ({ onClose }) => {
    const { sellers } = useAppSelector((store) => store);
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            address: "",
            city: "",
            state: "",
            mobile: "",
        },
        validationSchema: Yup.object({
            address: Yup.string().required("Address is required"),
            city: Yup.string().required("City is required"),
            state: Yup.string().required("State is required"),
            mobile: Yup.string().required("Mobile number is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(updateSeller({
                pickupAddress: values,
            }));
            onClose();
        },
    });
    useEffect(() => {
        if (sellers.profile) {
            formik.setValues({
                address: sellers.profile.pickupAddress.address,
                city: sellers.profile.pickupAddress.city,
                state: sellers.profile.pickupAddress.state,
                mobile: sellers.profile.pickupAddress.mobile,
            });
        }
    }, [sellers.profile]);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-xl pb-5 text-center font-bold text-gray-600", children: "Pickup Address" }), _jsxs("form", { className: "space-y-5", onSubmit: formik.handleSubmit, children: [_jsx(TextField, { fullWidth: true, id: "address", name: "address", label: "Address", value: formik.values.address, onChange: formik.handleChange, error: formik.touched.address && Boolean(formik.errors.address), helperText: formik.touched.address && formik.errors.address }), _jsx(TextField, { fullWidth: true, id: "city", name: "city", label: "City", value: formik.values.city, onChange: formik.handleChange, error: formik.touched.city && Boolean(formik.errors.city), helperText: formik.touched.city && formik.errors.city }), _jsx(TextField, { fullWidth: true, id: "state", name: "state", label: "State", value: formik.values.state, onChange: formik.handleChange, error: formik.touched.state && Boolean(formik.errors.state), helperText: formik.touched.state && formik.errors.state }), _jsx(TextField, { fullWidth: true, id: "mobile", name: "mobile", label: "Mobile", value: formik.values.mobile, onChange: formik.handleChange, error: formik.touched.mobile && Boolean(formik.errors.mobile), helperText: formik.touched.mobile && formik.errors.mobile }), _jsx(Button, { sx: { py: ".9rem" }, color: "primary", variant: "contained", fullWidth: true, type: "submit", children: "Save" })] })] }));
};
export default PickupAddressForm;
