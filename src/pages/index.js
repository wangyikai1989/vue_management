// 路由懒加载，使用webpack代码的分割功能和异步组件的特点来实现，目的是性能优化
const Home = ()=>import('./home/Home.vue')
const User =()=>import('./user/User.vue')
const Find = ()=>import('./home/Find.vue')
const MusicList = ()=>import('./music/MusicList.vue')
const MusicDetail = ()=>import('./music/MusicDetail.vue')
const Todo =()=>import('./home/Todo.vue')
const GoodList = ()=>import('./good/GoodList.vue')
const GoodAdd = ()=>import('./good/GoodAdd.vue')

import {FindPanelA,FindPanelB} from '../components'


const routes = [
    {
        id:10,
        icon:'el-icon-s-home',
        text:'首页概况',
        arr:[
            {
                id:1001,
                text:'首页概况',
                path:'/',
                component:Home,
                exact:true
            },
            {
                id:1002,
                path:'/find',
                component:Find,
                text:'公司新闻',
                exact:false,
                children:[
                    { path: '', component: FindPanelA },   
                    { path: 't2', component: FindPanelB }
                ]
            },
            {
                id:1003,
                text:'Todolist',
                path:'/todo',
                component:Todo,
                exact:true
            }
        ]
    },
    {
        id:11,
        text:'管理系统',
        icon:'el-icon-setting',
        arr:[
            {
                id:1101,
                path:'/user',
                alias:'/u',
                name:'me',
                component:User,
                text:'个人中心',
                exact:true
            }
        ]
    },
    {
        id:12,
        text:'音乐管理',
        icon:'el-icon-platform-eleme',
        arr:[
            {
                id:1201,
                path:'/music',
                component:MusicList,
                text:'音乐列表',
                exact:false
            },
            {
                id:1202,
                text:'音乐详情',
                path:'/music/detail/:id',
                component:MusicDetail,
                isNotNav:true
            }
        ]
    },
    {
        id:13,
        text:'商品管理',
        icon:'el-icon-goods',
        arr:[
            {
                id:1301,
                path:'/good/list',
                component:GoodList,
                text:'商品列表',
                exact:false
            },
            {
                id:1302,
                text:'新增商品',
                path:'/good/add/:id',
                component:GoodAdd,
                isNotNav:true
            }
        ]
    },
]

export default routes