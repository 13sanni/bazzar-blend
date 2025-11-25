import { jsx as _jsx } from "react/jsx-runtime";
import HomeCategoryCard from './HomeCategoryCard';
import { useAppSelector } from '../../../../Redux Toolkit/Store';
const HomeCategory = () => {
    const { homePage } = useAppSelector((store) => store);
    return (_jsx("div", { className: 'flex justify-center gap-7 flex-wrap ', children: homePage.homePageData?.shopByCategories.map((item) => _jsx(HomeCategoryCard, { item: item })) }));
};
export default HomeCategory;
