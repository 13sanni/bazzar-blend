import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Typography, MenuItem, InputLabel, FormControl, Select, Box, FormHelperText, } from "@mui/material";
import { mainCategory } from "../../../data/category/mainCategory";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo";
import { menLevelThree } from "../../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree";
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevleTwo";
import { electronicsLevelTwo } from "../../../data/category/level two/electronicsLavelTwo";
import { useAppDispatch } from "../../../Redux Toolkit/Store";
import { updateHomeCategory } from "../../../Redux Toolkit/Admin/AdminSlice";
// Define validation schema using Yup
const validationSchema = Yup.object({
    image: Yup.string().required("Image is required"),
    category: Yup.string().required("Category is required"),
});
const categoryTwo = {
    men: menLevelTwo,
    women: womenLevelTwo,
    home_furniture: furnitureLevelTwo,
    beauty: [],
    electronics: electronicsLevelTwo,
};
const categoryThree = {
    men: menLevelThree,
    women: womenLevelThree,
    home_furniture: furnitureLevelThree,
    beauty: [],
    electronics: electronicsLevelThree,
};
const UpdateHomeCategoryForm = ({ category, handleClose, }) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            image: "",
            category: "",
            category2: "",
            category3: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // const data =
            console.log("Form Data:", values, category);
            if (category?._id) {
                dispatch(updateHomeCategory({
                    id: category._id,
                    data: { image: values.image, categoryId: values.category3 },
                }));
            }
            handleClose();
        },
    });
    const childCategory = (category, parentCategoryId) => {
        return category.filter((child) => {
            // console.log("Category", parentCategoryId, child)
            return child.parentCategoryId == parentCategoryId;
        });
    };
    return (_jsxs(Box, { component: "form", onSubmit: formik.handleSubmit, sx: { maxWidth: 500, margin: "auto", padding: 3 }, className: "space-y-6", children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Update Category" }), _jsx(TextField, { fullWidth: true, id: "image", name: "image", label: "Image URL", value: formik.values.image, onChange: formik.handleChange, onBlur: formik.handleBlur, error: formik.touched.image && Boolean(formik.errors.image), helperText: formik.touched.image && formik.errors.image }), _jsxs(FormControl, { fullWidth: true, error: formik.touched.category && Boolean(formik.errors.category), required: true, children: [_jsx(InputLabel, { id: "category-label", children: "Category2" }), _jsx(Select, { labelId: "category-label", id: "category", name: "category", value: formik.values.category, onChange: formik.handleChange, label: "Category2", children: mainCategory.map((item) => (_jsx(MenuItem, { value: item.categoryId, children: item.name }))) }), formik.touched.category && formik.errors.category && (_jsx(FormHelperText, { children: formik.errors.category }))] }), _jsxs(FormControl, { fullWidth: true, error: formik.touched.category && Boolean(formik.errors.category), required: true, children: [_jsx(InputLabel, { id: "category2-label", children: "Second Category" }), _jsx(Select, { labelId: "category2-label", id: "category2", name: "category2", value: formik.values.category2, onChange: formik.handleChange, label: "Second Category", children: formik.values.category &&
                            categoryTwo[formik.values.category]?.map((item) => (_jsx(MenuItem, { value: item.categoryId, children: item.name }))) }), formik.touched.category && formik.errors.category && (_jsx(FormHelperText, { children: formik.errors.category }))] }), _jsxs(FormControl, { fullWidth: true, error: formik.touched.category && Boolean(formik.errors.category), required: true, children: [_jsx(InputLabel, { id: "category-label", children: "Third Category" }), _jsxs(Select, { labelId: "category-label", id: "category", name: "category3", value: formik.values.category3, onChange: formik.handleChange, label: "Third Category", children: [_jsx(MenuItem, { value: "", children: _jsx("em", { children: "None" }) }), formik.values.category2 &&
                                childCategory(categoryThree[formik.values.category], formik.values.category2)?.map((item) => (_jsx(MenuItem, { value: item.categoryId, children: item.name })))] }), formik.touched.category && formik.errors.category && (_jsx(FormHelperText, { children: formik.errors.category }))] }), _jsx(Button, { color: "primary", variant: "contained", fullWidth: true, type: "submit", sx: { py: ".9rem" }, children: "Submit" })] }));
};
export default UpdateHomeCategoryForm;
