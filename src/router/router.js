// 定义所有页面路由
import home from '@/pages/home/home';
import login from '@/pages/login/login';
import page404 from '@/pages/error-page/404';

//地址为空时跳转home页面
const _index = {
    path: '/',
    name: 'index',
    redirect: '/home'
};

const _home = {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
        title: 'home - 首页',
        auth: true
    }
};

//404错误页面
const _page404 = {
    path: '/*',
    name: 'page404',
    component: page404,
    meta: {
        title: '404-页面不存在',
    }
};

const _login = {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
        title: 'Login - 登录注册',
        auth: true

    }
};

// 导出路由
export const routers = [
    _home,
    _index,
    _login,
    _page404
];
