import request from '../request/index.js'

export function getArticles(page) {
    return request({
        method:'post',
        url:'',
        data: page
    })
}