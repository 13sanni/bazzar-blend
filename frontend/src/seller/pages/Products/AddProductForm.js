import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from "formik";
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormHelperText, Grid, CircularProgress, IconButton, Snackbar, Alert, } from "@mui/material";
import "tailwindcss/tailwind.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { mainCategory } from "../../../data/category/mainCategory";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo";
import { menLevelThree } from "../../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
import { colors } from "../../../data/Filter/color";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { createProduct } from "../../../Redux Toolkit/Seller/sellerProductSlice";
import { uploadToCloudinary } from "../../../util/uploadToCloudnary";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree";
import { electronicsLevelTwo } from "../../../data/category/level two/electronicsLavelTwo";
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevleTwo";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree";
import React, { useState, useEffect } from "react";
const categoryTwo = {
    men: menLevelTwo,
    women: womenLevelTwo,
    kids: [],
    home_furniture: furnitureLevelTwo,
    beauty: [],
    electronics: electronicsLevelTwo,
};
const categoryThree = {
    men: menLevelThree,
    women: womenLevelThree,
    kids: [],
    home_furniture: furnitureLevelThree,
    beauty: [],
    electronics: electronicsLevelThree,
};
const defaultInitialValues = {
    title: "",
    description: "",
    mrpPrice: "",
    sellingPrice: "",
    quantity: "",
    color: "",
    images: [],
    category: "",
    category2: "",
    category3: "",
    sizes: "",
};
const AddProductForm = ({ initialValues = defaultInitialValues, mode = "add", onSubmit, onClose, }) => {
    const [uploadImage, setUploadingImage] = useState(false);
    const dispatch = useAppDispatch();
    const { sellerProduct } = useAppSelector((store) => store);
    const [snackbarOpen, setOpenSnackbar] = useState(false);
    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        onSubmit: (values) => {
            if (onSubmit) {
                onSubmit(values);
            }
            else {
                dispatch(createProduct({ request: values, jwt: localStorage.getItem("jwt") }));
            }
            console.log(values);
        },
    });
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        setUploadingImage(true);
        const image = await uploadToCloudinary(file);
        // const image = URL.createObjectURL(file);
        formik.setFieldValue("images", [...formik.values.images, image]);
        setUploadingImage(false);
    };
    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images];
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages);
    };
    const childCategory = (category, parentCategoryId) => {
        return category.filter((child) => {
            // console.log("Category", parentCategoryId, child)
            return child.parentCategoryId == parentCategoryId;
        });
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    useEffect(() => {
        if (sellerProduct.productCreated || sellerProduct.error) {
            setOpenSnackbar(true);
        }
    }, [sellerProduct.productCreated, sellerProduct.error]);
    return (_jsxs("div", { children: [_jsx("form", { onSubmit: formik.handleSubmit, className: "space-y-4 p-4", children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsxs(Grid, { className: "flex flex-wrap gap-5", size: { xs: 12 }, children: [_jsx("input", { type: "file", accept: "image/*", id: "fileInput", style: { display: "none" }, onChange: handleImageChange }), _jsxs("label", { className: "relative", htmlFor: "fileInput", children: [_jsx("span", { className: "w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400", children: _jsx(AddPhotoAlternateIcon, { className: "text-gray-700" }) }), uploadImage && (_jsx("div", { className: "absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center", children: _jsx(CircularProgress, {}) }))] }), _jsx("div", { className: "flex flex-wrap gap-2", children: formik.values.images.map((image, index) => (_jsxs("div", { className: "relative", children: [_jsx("img", { className: "w-24 h-24 object-cover", src: image, alt: `ProductImage ${index + 1}` }, index), _jsx(IconButton, { onClick: () => handleRemoveImage(index), className: "", size: "small", color: "error", sx: {
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 0,
                                                    outline: "none",
                                                }, children: _jsx(CloseIcon, { sx: { fontSize: "1rem" } }) })] }))) })] }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { fullWidth: true, id: "title", name: "title", label: "Title", value: formik.values.title, onChange: formik.handleChange, error: formik.touched.title && Boolean(formik.errors.title), required: true }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { multiline: true, rows: 4, fullWidth: true, id: "description", name: "description", label: "Description", value: formik.values.description, onChange: formik.handleChange, error: formik.touched.description && Boolean(formik.errors.description), 
                                // helperText={formik.touched.description && formik.errors.description}
                                required: true }) }), _jsx(Grid, { size: { xs: 12, sm: 6, lg: 3 }, children: _jsx(TextField, { fullWidth: true, id: "mrp_price", name: "mrpPrice", label: "MRP Price", type: "number", value: formik.values.mrpPrice, onChange: formik.handleChange, error: formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice), 
                                // helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
                                required: true }) }), _jsx(Grid, { size: { xs: 12, sm: 6, lg: 3 }, children: _jsx(TextField, { fullWidth: true, id: "sellingPrice", name: "sellingPrice", label: "Selling Price", type: "number", value: formik.values.sellingPrice, onChange: formik.handleChange, error: formik.touched.sellingPrice &&
                                    Boolean(formik.errors.sellingPrice), 
                                // helperText={
                                //   formik.touched.sellingPrice && formik.errors.sellingPrice
                                // }
                                required: true }) }), _jsx(Grid, { size: { xs: 12, sm: 6, lg: 3 }, children: _jsxs(FormControl, { fullWidth: true, error: formik.touched.color && Boolean(formik.errors.color), required: true, children: [_jsx(InputLabel, { id: "color-label", children: "Color" }), _jsxs(Select, { labelId: "color-label", id: "color", name: "color", value: formik.values.color, onChange: formik.handleChange, label: "Color", children: [_jsx(MenuItem, { value: "", children: _jsx("em", { children: "None" }) }), colors.map((color) => (_jsx(MenuItem, { value: color.name, children: _jsxs("div", { className: "flex gap-3", children: [_jsx("span", { style: { backgroundColor: color.hex }, className: `h-5 w-5 rounded-full ${color.name === "White" ? "border" : ""}` }), _jsx("p", { children: color.name })] }) })))] }), formik.touched.color && formik.errors.color && (_jsx(FormHelperText, { children: typeof formik.errors.color === "string"
                                            ? formik.errors.color
                                            : undefined }))] }) }), _jsx(Grid, { size: { xs: 12, sm: 6, lg: 3 }, children: _jsxs(FormControl, { fullWidth: true, error: formik.touched.sizes && Boolean(formik.errors.sizes), required: true, children: [_jsx(InputLabel, { id: "sizes-label", children: "Sizes" }), _jsxs(Select, { labelId: "sizes-label", id: "sizes", name: "sizes", value: formik.values.sizes, onChange: formik.handleChange, label: "Sizes", children: [_jsx(MenuItem, { value: "", children: _jsx("em", { children: "None" }) }), _jsx(MenuItem, { value: "FREE", children: "FREE" }), _jsx(MenuItem, { value: "S", children: "S" }), _jsx(MenuItem, { value: "M", children: "M" }), _jsx(MenuItem, { value: "L", children: "L" }), _jsx(MenuItem, { value: "XL", children: "XL" })] })] }) }), mode == "add" && (_jsx(Grid, { size: { xs: 12, sm: 6, lg: 4 }, children: _jsxs(FormControl, { fullWidth: true, error: formik.touched.category && Boolean(formik.errors.category), required: true, children: [_jsx(InputLabel, { id: "category-label", children: "Category" }), _jsx(Select, { labelId: "category-label", id: "category", name: "category", value: formik.values.category, onChange: formik.handleChange, label: "Category", children: mainCategory.map((item) => (_jsx(MenuItem, { value: item.categoryId, children: item.name }))) })] }) })), mode == "add" && (_jsx(Grid, { size: { xs: 12, sm: 6, lg: 4 }, children: _jsxs(FormControl, { fullWidth: true, error: formik.touched.category && Boolean(formik.errors.category), required: true, children: [_jsx(InputLabel, { id: "category2-label", children: "Second Category" }), _jsx(Select, { labelId: "category2-label", id: "category2", name: "category2", value: formik.values.category2, onChange: formik.handleChange, label: "Second Category", children: formik.values.category &&
                                            categoryTwo[formik.values.category]?.map((item) => (_jsx(MenuItem, { value: item.categoryId, children: item.name }))) })] }) })), mode == "add" && (_jsx(Grid, { size: { xs: 12, sm: 6, lg: 4 }, children: _jsxs(FormControl, { fullWidth: true, error: formik.touched.category && Boolean(formik.errors.category), required: true, children: [_jsx(InputLabel, { id: "category-label", children: "Third Category" }), _jsxs(Select, { labelId: "category-label", id: "category", name: "category3", value: formik.values.category3, onChange: formik.handleChange, label: "Third Category", children: [_jsx(MenuItem, { value: "", children: _jsx("em", { children: "None" }) }), formik.values.category2 &&
                                                childCategory(categoryThree[formik.values.category], formik.values.category2)?.map((item) => (_jsx(MenuItem, { value: item.categoryId, children: item.name })))] })] }) })), _jsx(Grid, { size: 12, children: _jsx(Button, { sx: { p: "14px" }, color: "primary", variant: "contained", fullWidth: true, type: "submit", disabled: sellerProduct.loading, children: sellerProduct.loading ? (_jsx(CircularProgress, { size: "small", sx: { width: "27px", height: "27px" } })) : mode === "edit" ? ("Update Product") : ("Add Product") }) }), onClose && (_jsx(Grid, { size: 12, children: _jsx(Button, { onClick: onClose, color: "secondary", fullWidth: true, children: "Cancel" }) }))] }) }), _jsx(Snackbar, { anchorOrigin: { vertical: "top", horizontal: "right" }, open: snackbarOpen, autoHideDuration: 6000, onClose: handleCloseSnackbar, children: _jsx(Alert, { onClose: handleCloseSnackbar, severity: sellerProduct.error ? "error" : "success", variant: "filled", sx: { width: "100%" }, children: sellerProduct.error
                        ? sellerProduct.error
                        : "Product created successfully" }) })] }));
};
export default AddProductForm;
