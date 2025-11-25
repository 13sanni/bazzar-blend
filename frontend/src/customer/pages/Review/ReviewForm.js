import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Rating, InputLabel, Typography, IconButton, CircularProgress, } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { uploadToCloudinary } from '../../../util/uploadToCloudnary';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useAppDispatch } from '../../../Redux Toolkit/Store';
import { createReview } from '../../../Redux Toolkit/Customer/ReviewSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
const ReviewForm = () => {
    const [uploadImage, setUploadingImage] = useState(false);
    const dispatch = useAppDispatch();
    const { productId } = useParams();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            reviewText: '',
            rating: 0,
            productImages: [], // Initializing with an empty string array
        },
        validationSchema: Yup.object({
            reviewText: Yup.string()
                .required('Review text is required')
                .min(10, 'Review must be at least 10 characters long'),
            rating: Yup.number()
                .required('Rating is required')
                .min(0, 'Rating must be at least 0')
                .max(5, 'Rating cannot be more than 5'),
        }),
        onSubmit: (values) => {
            if (productId) {
                dispatch(createReview({
                    productId: productId,
                    review: values,
                    jwt: localStorage.getItem("jwt") || "",
                    navigate
                }));
                console.log('Form Submitted:', values);
            }
        },
    });
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        setUploadingImage(true);
        const image = await uploadToCloudinary(file);
        // const image = URL.createObjectURL(file);
        formik.setFieldValue("productImages", [...formik.values.productImages, image]);
        setUploadingImage(false);
    };
    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.productImages];
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages);
    };
    return (_jsxs(Box, { component: "form", onSubmit: formik.handleSubmit, noValidate: true, sx: { mt: 3 }, className: 'space-y-5', children: [_jsx(TextField, { fullWidth: true, id: "reviewText", name: "reviewText", label: "Review Text", variant: "outlined", multiline: true, rows: 4, value: formik.values.reviewText, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.reviewText && Boolean(formik.errors.reviewText), helperText: formik.touched.reviewText && formik.errors.reviewText }), _jsxs("div", { className: 'space-y-2', children: [_jsx(InputLabel, { children: "Rating" }), _jsx(Rating, { id: "rating", name: "rating", value: formik.values.rating, onChange: (event, newValue) => formik.setFieldValue('rating', newValue), onBlur: formik.handleBlur, precision: 0.5 })] }), formik.touched.rating && formik.errors.rating && (_jsx(Typography, { color: "error", variant: "body2", children: formik.errors.rating })), _jsxs("div", { className: "flex flex-wrap gap-5 py-3", children: [_jsx("input", { type: "file", accept: "image/*", id: "fileInput", style: { display: "none" }, onChange: handleImageChange }), _jsxs("label", { className: "relative", htmlFor: "fileInput", children: [_jsx("span", { className: "w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400", children: _jsx(AddPhotoAlternateIcon, { className: "text-gray-700" }) }), uploadImage && (_jsx("div", { className: "absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center", children: _jsx(CircularProgress, {}) }))] }), _jsx("div", { className: "flex flex-wrap gap-2", children: formik.values.productImages.map((image, index) => (_jsxs("div", { className: "relative", children: [_jsx("img", { className: "w-24 h-24 object-cover", src: image, alt: `ProductImage ${index + 1}` }, index), _jsx(IconButton, { onClick: () => handleRemoveImage(index), className: "", size: "small", color: "error", sx: {
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        outline: "none",
                                    }, children: _jsx(CloseIcon, { sx: { fontSize: "1rem" } }) })] }))) })] }), _jsx(Button, { color: "primary", variant: "contained", type: "submit", children: "Submit Review" })] }));
};
export default ReviewForm;
