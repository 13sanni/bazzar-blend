import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Grid, } from '@mui/material';
import { useAppDispatch } from '../../../Redux Toolkit/Store';
import { createOrder } from '../../../Redux Toolkit/Customer/OrderSlice';
// Validation schema
const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Invalid mobile number')
        .required('Required'),
    pinCode: Yup.string()
        .matches(/^\d{6}$/, 'Invalid pincode')
        .required('Required'),
    address: Yup.string().required('Required'),
    locality: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
});
const AddressForm = ({ handleClose, paymentGateway }) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            pinCode: '',
            address: '',
            locality: '',
            city: '',
            state: '',
        },
        validationSchema: ContactSchema,
        onSubmit: (values) => {
            console.log("form submited", values);
            handleCreateOrder(values);
            // handleClose();
        },
    });
    const handleCreateOrder = (address) => {
        dispatch(createOrder({ address, jwt: localStorage.getItem('jwt') || "", paymentGateway }));
    };
    return (_jsxs(Box, { sx: { maxWidth: 600, mx: 'auto' }, children: [_jsx("p", { className: 'text-xl font-bold text-center pb-5', children: "Contact Details" }), _jsx("form", { onSubmit: formik.handleSubmit, children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { size: 12, children: _jsx(TextField, { fullWidth: true, name: "name", label: "Name", value: formik.values.name, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.name && Boolean(formik.errors.name), helperText: formik.touched.name && formik.errors.name }) }), _jsx(Grid, { size: 6, children: _jsx(TextField, { fullWidth: true, name: "mobile", label: "Mobile", value: formik.values.mobile, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.mobile && Boolean(formik.errors.mobile), helperText: formik.touched.mobile && formik.errors.mobile }) }), _jsx(Grid, { size: 6, children: _jsx(TextField, { fullWidth: true, name: "pinCode", label: "Pin Code", value: formik.values.pinCode, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.pinCode && Boolean(formik.errors.pinCode), helperText: formik.touched.pinCode && formik.errors.pinCode }) }), _jsx(Grid, { size: 12, children: _jsx(TextField, { fullWidth: true, name: "address", label: "Address (House No, Building, Street)", value: formik.values.address, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.address && Boolean(formik.errors.address), helperText: formik.touched.address && formik.errors.address }) }), _jsx(Grid, { size: 12, children: _jsx(TextField, { fullWidth: true, name: "locality", label: "Locality/Town", value: formik.values.locality, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.locality && Boolean(formik.errors.locality), helperText: formik.touched.locality && formik.errors.locality }) }), _jsx(Grid, { size: 6, children: _jsx(TextField, { fullWidth: true, name: "city", label: "City", value: formik.values.city, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.city && Boolean(formik.errors.city), helperText: formik.touched.city && formik.errors.city }) }), _jsx(Grid, { size: 6, children: _jsx(TextField, { fullWidth: true, name: "state", label: "State", value: formik.values.state, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.state && Boolean(formik.errors.state), helperText: formik.touched.state && formik.errors.state }) }), _jsx(Grid, { size: 12, children: _jsx(Button, { sx: { py: "14px" }, type: "submit", variant: "contained", color: "primary", fullWidth: true, children: "Add Address" }) })] }) })] }));
};
export default AddressForm;
