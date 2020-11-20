<template>
<div>
  <h1>音乐列表</h1>

  <div>
    <input type="text" v-model='star' @keyup.enter='search'>
  </div>

  <div>
    <div v-for='item in musicList' :key='item.id' @click='skipToDetail(item)'>
      <span v-text='item.id'></span>
      <span>------</span>
      <span v-text='item.name'></span>
    </div>
  </div>
  
</div>
  
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  data: function() {
    return {
      star:'',
    }
  },
  computed:{
    ...mapState('music',['musicList'])
  },
  methods:{
    ...mapActions('music',['getMusic']),
    skipToDetail(item){
      this.$router.history.push('/music/detail/'+item.id)
    },
    search(){
      let str= 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=56836560703442015&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E7%8E%8B%E8%8F%B2&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

      let params = {}
      str.split('&').map(ele=>{
        let arr = ele.split('=')
        params[arr[0]]=arr[1]
      })

      params.w = this.star
      this.getMusic(params)
    }
  }
}
</script>

<style>

</style>