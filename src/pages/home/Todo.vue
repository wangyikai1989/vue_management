<template>
  <div>
      <h1>Todolist</h1>
      <h1 v-text="msg"></h1>
      <div>
          <input type="text" v-model="task" @keyup.enter="confirm">
      </div>
      <div>总共有<span v-text="total"></span>条记录</div>
      <div v-for="item in list" :key="item.id">
          <span v-text="item.id"></span>
          <span>--------</span>
          <span v-text="item.task"></span>
          <span>------</span>
          <span @click="remove(item)">删除</span>
      </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    data:function(){
        return {
            task:'',
        }
    },
    computed:{
        ...mapState('todo',['msg','list']),
        ...mapGetters('todo',['total'])
    },
    mounted(){
        console.log('store',this.$store)
    },
    methods:{
        ...mapMutations('todo',['addTask','delTask']),
        // 向状态管理添加一条任务
        confirm(){
            this.addTask(this.task)
            this.task=''
        },
        remove(item){
            this.delTask(item.id)
        }
    }
}
</script>

<style>

</style>