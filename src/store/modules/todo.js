export default{
    namespaced:true,
    state:{
        msg:'hello world',
        list:[],
    },
    getters:{
        total(state) {
            return state.list.length
          }
    },
    mutations:{
        addTask(state,payload){
            console.log('addTask',state,payload)
            state.list.push({task:payload,id:Date.now()})
        },
        delTask(state,payload){
            state.list=state.list.filter(ele=>ele.id!==payload)
        },
    },
    actions:{}
}