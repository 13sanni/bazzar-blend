import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppSelector } from "../../../Redux Toolkit/Store";
import HomeCategoryTable from "./HomeCategoryTable";
function ElectronicsTable() {
    const { homePage } = useAppSelector((store) => store);
    return (_jsx(_Fragment, { children: _jsx(HomeCategoryTable, { categories: homePage.homePageData?.electricCategories }) }));
}
export default ElectronicsTable;
