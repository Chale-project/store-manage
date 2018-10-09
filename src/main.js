import Vue from 'vue';
import FastClick from 'fastclick'
import {router} from './router/index';
import store from './store/store';
import App from './App.vue';

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
