import { jsx as _jsx } from "react/jsx-runtime";
import SimilarProductCard from "./SimilarProductCard";
import { useAppDispatch, useAppSelector, } from "../../../../Redux Toolkit/Store";
import { useEffect } from "react";
import { getAllProducts } from "../../../../Redux Toolkit/Customer/ProductSlice";
import { useParams } from "react-router-dom";
const SmilarProduct = () => {
    const { products } = useAppSelector((store) => store);
    const dispatch = useAppDispatch();
    const { categoryId } = useParams();
    useEffect(() => {
        if (categoryId) {
            dispatch(getAllProducts({ category: categoryId }));
        }
    }, [categoryId, dispatch]);
    return (_jsx("div", { children: _jsx("div", { className: "grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-4 gap-y-8", children: products.products.map((item) => (_jsx("div", { className: "", children: _jsx(SimilarProductCard, { product: item }) }, item._id))) }) }));
};
export default SmilarProduct;
