/*
    ajax请求函数模块
    返回值是promise对象(通过两层promise完成异步返回的数据是：response.data, 而不是response)
*/

import axios from 'axios'
import { lastIndexOf } from 'core-js/core/array'
import { reject, resolve } from 'core-js/fn/promise'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        // 执行ajax请求
        let promise
        if (type == 'GET') {
            // 准备url query参数数据
            // 数据拼接字符串
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        }
        else {
            // 发送post请求
            promise = axios.post(data)
        }
        promise.then(function (response) {
            // 成功调用resolve()
            resolve(response.data)
        }).catch(function (error) {
            // 失败调用reject()
            reject(error)
        })
    })
}

