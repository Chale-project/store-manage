import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        userInfo: null,
        token:null
    },
    mutations: {
        setUserInfo(state, obj) {
            state.userInfo = obj;
        },
    },
    actions: {

    },
    modules: {

    }
});

export default store;
