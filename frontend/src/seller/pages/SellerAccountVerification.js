import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../Redux Toolkit/Store';
import { verifySellerEmail } from '../../Redux Toolkit/Seller/sellerSlice';
const SellerAccountVerification = () => {
    const { otp } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(verifySellerEmail({ otp: Number(otp), navigate }));
    }, [otp]);
    return (_jsx("div", { children: "SellerAccountVerification" }));
};
export default SellerAccountVerification;
