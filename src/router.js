import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 路由注册

// import Home from './pages/Home.vue'
// import User from './pages/User.vue'
// import Find from './pages/Find.vue'
// import MusicList from './pages/MusicList.vue'
// import routes from './pages';
import arr from './pages'
import {Login} from './components/'
// import routes from './pages'
let routes=[]
arr.map(ele=>{
    routes=[...routes,...ele.arr]
})

export default new VueRouter({
    routes:[
        ...routes,
        {path:'/login',components:{login:Login}},
        {path:'/*',redirect:'/'}
    ]
})

// export default router