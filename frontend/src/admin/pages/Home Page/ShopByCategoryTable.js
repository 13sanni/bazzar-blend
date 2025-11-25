import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import HomeCategoryCard from '../../../customer/pages/Home/HomeCategory/HomeCategoryCard';
import HomeCategoryTable from './HomeCategoryTable';
import { useAppSelector } from '../../../Redux Toolkit/Store';
const ShopByCategoryTable = () => {
    const { homePage } = useAppSelector((store) => store);
    return (_jsx(HomeCategoryTable, { categories: homePage.homePageData?.shopByCategories }));
};
export default ShopByCategoryTable;
