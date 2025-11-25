import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppSelector } from "../../../Redux Toolkit/Store";
import HomeCategoryTable from "./HomeCategoryTable";
export default function GridTable() {
    const { homePage } = useAppSelector((store) => store);
    return (_jsx(_Fragment, { children: _jsx(HomeCategoryTable, { categories: homePage.homePageData?.grid }) }));
}
