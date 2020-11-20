import fetch from './axios'

// 获取QQ音乐
export function fetchQqMusic(params){
    return fetch({
        url:'/soso/fcgi-bin/client_search_cp',
        method:'GET',
        params
    })
}

// 登录{username,passord}
export function fetchLogin(data){
    return fetch({
        url:'/api/v1/user/login',
        method:'POST',
        data
    })
}

// 商品编辑与新增
export function fetchGoodAddOrEdit(data){
    return fetch({
        url:'api/v1/good/addOrEdit',
        method:'POST',
        data
    })
}


// 获取品类列表
export function fetchAllCates(params){
    return fetch({
        url:'/api/v1/good/cates',
        method:'GET',
        params
    })
}


// 获取商品列表
export function fetchGoodList(params){
    return fetch({
        url:'/api/v1/good/list',
        method:'GET',
        params
    })
}

// 商品详情
export function fetchGoodInfo(params) {
    return fetch({
      url: '/api/v1/good/detail',
      method: 'GET',
      params
    })
  }


// 商品删除
export function fetchGoodDel(params){
    return fetch({
        url:'/api/v1/good/delete',
        method:'GET',
        params
    })
}

// 广告新增
// img, title, desc
export function fetchAdAdd(data) {
    return fetch({
      url: '/api/v1/ad/add',
      method: 'POST',
      data
    })
  }


// 删除广告
// { id }
export function fetchAdDel(params) {
    return fetch({
      url: '/api/v1/ad/del',
      method: 'GET',
      params
    })
  }
  
  // 获取广告列表
  // /list
  export function fetchAdList(params) {
    return fetch({
      url: '/api/v1/ad/list',
      method: 'GET',
      params
    })
  }

// 商品详情
// /api/v1/good/detail

// 品类列表
// /api/v1/good/cates

// 商品列表
// /api/v1/good/list

// 商品详情
// /api/v1/good/detail

// 商品删除
// /api/v1/good/delete

// 商品编辑与新增
// /api/v1/good/addOrEdit

export default{
    fetchQqMusic,
    fetchLogin,
    fetchGoodAddOrEdit,
    fetchAllCates,
    fetchGoodList,
    fetchGoodDel,
    fetchGoodInfo,
    fetchAdDel,
    fetchAdList,
    fetchAdAdd,
}