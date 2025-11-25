import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, TextField } from "@mui/material";
const BecomeSellerFormStep1 = ({ formik }) => {
    return (_jsxs(Box, { children: [_jsx("p", { className: "text-xl font-bold text-center pb-9", children: "Contact Details" }), _jsxs("div", { className: "space-y-9", children: [_jsx(TextField, { fullWidth: true, name: "mobile", label: "Mobile", value: formik.values.mobile, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.mobile && Boolean(formik.errors.mobile), helperText: formik.touched.mobile && formik.errors.mobile }), _jsx(TextField, { fullWidth: true, name: "GSTIN", label: "GSTIN Number", value: formik.values.GSTIN, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.GSTIN && Boolean(formik.errors.GSTIN), helperText: formik.touched.GSTIN && formik.errors.GSTIN })] })] }));
};
export default BecomeSellerFormStep1;
