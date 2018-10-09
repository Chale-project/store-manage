import axios from 'axios'
import QS from 'qs'
import Util from './util'
import store from '../store/store'

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'https://a.whfhnd.cn';
// }else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'https://www.puqikeji.com';
// }

// http request 拦截器
axios.interceptors.request.use((config) => {
    if (store.state.token) {
        config.headers.Authorization = store.state.token
    }
    return config
}, (err) => {
    return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use((data) => {
    return data
}, (err) => {
    return Promise.reject(err)
})

const Axios = (params, data = {}) => {
    let promise = new Promise((resolve, reject) => {
        axios({
            method: params.method || 'post',
            url: params.url,
            timeout: 10000,
            data: QS.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                let d = res.data;
                console.log(d)
                if (d.code === '00000') {
                    resolve(d.result)
                } else if (d.code === '21818') {
                    Util.toast('登录状态已过期，请重新登录！')
                } else if (d.code === '21919') {
                    Util.toast('系统维护中…')
                } else if (d.code === '22222') {
                    Util.toast('授权失败')
                } else {
                    Util.toast(d.message)
                }
            } else {
                Util.toast('请求失败,错误状态码' + res.status)
            }
        }).catch((response) => {
            reject(response)
        })
    })
    return promise
}
export default Axios;
