import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import todo from './modules/todo'
import music from './modules/music'


export default new Vuex.Store({
    // 状态
    state:{},
    getters: {},
    mutations:{},
    actions:{},
    modules:{
        todo,
        music
    }
})
