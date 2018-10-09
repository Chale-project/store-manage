import Axios from './axios';

//获取短信验证码
const getSmsVerify = (mobile) => Axios({ url: "/api/reg/creatcode" }, { mobile: mobile });

//获取授权
const getAuth = () => Axios({ url: "/api/regs/authUrl" });

//授权回调获取用户信息
const getUserUnionid = (code) => Axios({ url: "/api/regs/getUserUnionid" }, { code: code });


export {
    getSmsVerify,
    getAuth,
    getUserUnionid
};
