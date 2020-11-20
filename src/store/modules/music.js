import {fetchQqMusic} from '@/utils/api'


export default{
    namespaced:true,
    state:{
        musicList:[]
    },
    getters:{},
    mutations:{
        updateMusicList(state,payload){
            state.musicList=payload
        }
    },
    actions:{
        getMusic(store,payload){
            fetchQqMusic(payload).then(res=>{
                store.commit('updateMusicList',res.song.list)
            })
        }
    }
}