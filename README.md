## 环境
npm -v
node -v

## 脚手架
npm install @vue/cli -g

// 创建项目
vue create Name

// 进入/运行项目
cd Name
npm run serve

## 路由
+ 多页面路由
+ 单页面路由
  + 安装路由
    + npm install vue-router -S
    + 在src根目录下新建一个router.js文件
    ```
    import Vue from 'vue';
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)  // 路由注册

    export default new VueRouter({
    
    })
    ```
  + 在main.js入口文件中，把路由系统挂载到Vue系统
  ```
  import router from './router'

  new Vue({
  router,
  })
  ```

  + 如何定义路由
  ```
    const routes = [
        { path: '/home', component: Home },
        { path: '/user', component: User },
        { path: '/find', component: Find }
    ]
  ```

  + 视图显示
    + <router-view></router-view>
    + 在适当的地方，比如 App组件中，来显示url匹配成功的组件。


  + 如何改变url
    + <router-link>来实现。
    + 声明式路由导航：建议使用vue-router内置
    + 编程式路由导航：使用路由api来实现页面跳转。  

  + 动态路由
    + 路由匹配规则的写法：{path: '/detail/:id', component: '', props: true }
    + 两种路由参数传参的方式：$route / props

  + 三个命名
    + 试图命名：当<router-view></router-view>加了name属性时，在路由匹配规则定义时要使用 components 字段。
    + 路由别名：使用alias给路由取小名。
    + 路由命名:给路由匹配规则取一个名字。

  + exact-active-class
    + <router-link></router-link>有两个 exact* 属性可使用，实现路由完全（精准）匹配。

  + 路由懒加载
    + 路由懒加载，使用webpack代码的分割功能和异步组件的特点来实现，目的是性能优化
    ```
    const Home = ()=>import('./home/Home')
    ```
    + 原理：webpack代码分割功能+异步组件

  + 嵌套视图
    + 被 <router-view> 承载的组件中还可以再使用 <router-view>，形成嵌套关系。在路由匹配规则中，使用 children 属性来实现。
  ```
  {
    path: '/find',
    component: Find,
    // 嵌套视图
    children: [
      { path: '', component: FindPanelA },
      { path: 't2', component: FindPanelB }
    ]
  }
  ```

## 状态管理
+ 在应用程序中，状态就是数据。
+ Vuex，它是Vue全家桶中最流利使用的状态工具。
+ 解决的问题
  + 组件之间数据共享
  + 实现数据共享
+ Devtools安装
  + 下载地址：https://github.com/arcliang/Vue-Devtools-
+ Vuex的概念
  + state
  + getters
  + mutations
  + actions
  + mudules
+ Vuex安装
  ```
  cnpm install vuex -S
  ```

  在src根目录，创建 /store/index.js 文件，代码如下：
  ```
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)

  export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  })
  ```
+ 在 main.js 中挂载：
  ```
  import store from './store/index.js'
  new Vue({
    store
  }).$mount('#app')
  ```

  在组件中如何使用Vuex中的数据呢？
  ```
  this.$store.state.msg
  ```
  在组件中如何更新Vuex中的数据呢？
  ```
  this.$store.commit('mutationFn', payload)
  ```
+ 优雅地使用Vuex来管理应用程序中的外部数据
  + 把外部数据定义在Vuex的state中，页面中就可以通过$store.state来使用
  + 封装api接口
  + 在Vuex导入api方法，在actions中定义与后端交互的逻辑，把处理完成的数据通过mutations方法提交到state
  + 在mutataions中定义，更新state的方法。当state变化时，页面自动更新
  + 在页面逻辑中触发它。

## axios
+ HTTP工具，用于与后端进行数据交互
  + 基于Promise封装的库
  + 在客户端、Node端都可以使用
+ 使用
  + npm install axios -S
  + 一定要封装请求拦截器和响应拦截器
  + 所有api统一封装可以复用的方法
+ 浏览器同源策略阻止了ajax的解决方法
  + 在项目根目录新建vue.config.js文件
```
module.exports = {
  devServer: {
    // 用代理的方式来解决浏览器同源策略对ajax的限制
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',  // 目标远程服务器
        ws: true,
        changeOrigin: true   // 允许改变“域”
      }
    }
  }
}
```