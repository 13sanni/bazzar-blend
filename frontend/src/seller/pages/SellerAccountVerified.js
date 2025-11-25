import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const SellerAccountVerified = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: 'h-[80vh] flex flex-col justify-center items-center space-y-3', children: [_jsx(Alert, { variant: "filled", severity: "success", children: "Your Email Get Verified Successfully" }), _jsx("div", { children: _jsx(Button, { variant: 'contained', onClick: () => navigate("/become-seller"), children: "Login As Seller" }) })] }));
};
export default SellerAccountVerified;
