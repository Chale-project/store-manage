import Vue from 'vue';
import Util from '../util/util';
import VueRouter from 'vue-router';
import { routers } from './router';

Vue.use(VueRouter);

export const router = new VueRouter({ routes: routers });

router.beforeEach((to, from, next) => {
    Util.title(to.meta.title);
    if (to.meta.auth) {
        if (!Util.getStorage('token') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
            next({
                name: 'login'
            });
        } else if (Util.getStorage('token') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
            next({
                name: 'home'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach((to) => {
    window.scrollTo(0, 0);
});
